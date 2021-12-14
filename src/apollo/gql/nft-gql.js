import { gql } from "apollo-boost";

export const NFTS = gql`
{
    getPaginatedNFT(
        limit: 2
    ) 
    {
        items {
            Id     
        }
    }
}`;