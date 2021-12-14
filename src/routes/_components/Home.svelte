<script>
	import Nav from "./Nav.svelte";
	import Footer from "./Footer.svelte";
	import { ethers } from 'ethers'
	import axios from 'axios'
	import Web3Modal from "web3modal"
	import { nftaddress, nftmarketaddress } from './../../../config'
	import NFT from './../../../artifacts/contracts/NFT.sol/NFT.json'
	import Market from './../../../artifacts/contracts/Market.sol/NFTMarket.json'

	let rpcEndpoint = null

	if (process.env.NEXT_PUBLIC_WORKSPACE_URL) {
		rpcEndpoint = process.env.NEXT_PUBLIC_WORKSPACE_URL
	}

	let nfts = [];
	async function loadNFTs() {    
		const provider = new ethers.providers.JsonRpcProvider(rpcEndpoint)
		const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider)
		const marketContract = new ethers.Contract(nftmarketaddress, Market.abi, provider)
		const data = await marketContract.fetchMarketItems()
		
		const items = await Promise.all(data.map(async i => {
		const tokenUri = await tokenContract.tokenURI(i.tokenId)
		const meta = await axios.get(tokenUri)
		let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
		let item = {
			price,
			itemId: i.itemId.toNumber(),
			seller: i.seller,
			owner: i.owner,
			image: meta.data.image,
			name: meta.data.name,
			description: meta.data.description,
		}

		nfts.add(item)
		}))
  }

  async function buyNft(nft) {
    const web3Modal = new Web3Modal()
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()
    const contract = new ethers.Contract(nftmarketaddress, Market.abi, signer)

    const price = ethers.utils.parseUnits(nft.price.toString(), 'ether')
    const transaction = await contract.createMarketSale(nftaddress, nft.itemId, {
      value: price
    })
    await transaction.wait()
    loadNFTs()
  }
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<Nav />
<Footer />

<a
	href="#"
	id="back-to-top"
	data-toggle="tooltip"
	data-placement="left"
	title="Back To Top"
	class="btn btn-default btn-md bg-white"><i class="fa fa-chevron-up" /></a>