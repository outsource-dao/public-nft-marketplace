<script>	
	export let error, status;
	const className = 'single page-404';
	let dev = process.env.NODE_ENV === "development";
</script>

<svelte:head>
	<title>{status}</title>
</svelte:head>
<svelte:body />