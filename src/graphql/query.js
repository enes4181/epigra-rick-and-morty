import { gql } from "@apollo/client"

export const GET_DATA = gql`{
   characters(page: 1) {
      
      results {
        id
        name
        status   
        image
        species
        location{name} 
      }
  }
  }`

export const GET_CHARACTER = gql`
query Character($characterId: ID!) {
  character(id: $characterId) {
    id
    name
    status
    species
    image
    location{name} 
    gender
    origin{name}
   
  }
}`