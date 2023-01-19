import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom'
import { GET_CHARACTER } from '../graphql/query';

function Detail() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_CHARACTER, { variables: { characterId: id }, });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const {
    name,
    status,
    species,
    gender,
    image,
    location,
    origin} = data.character;


return (
<div className="flex justify-center items-center h-screen">
    <div className="max-w-md text-center">
    <img src={image} alt={name} className="w-full h-full object-cover rounded-lg shadow-lg m-4" />
    <h1 className="text-3xl font-bold text-gray-1000">{name}</h1>
   
        <p className="text-lg font-semibold text-gray-1000">Status: <span className="font-medium">{status}</span> </p>
        <p className="text-lg font-semibold text-gray-1000">Gender: <span className="font-medium">{gender}</span> </p>
        <p className="text-lg font-semibold text-gray-1000">Location: <span className="font-medium">{location.name}</span></p>
        <p className="text-lg font-semibold text-gray-1000">Origin: <span className="font-medium">{origin.name}</span></p>
        <p className="text-lg font-semibold text-gray-1000">Species: <span className="font-medium">{species}</span></p>
    
    </div>
  </div>
);
}
export default Detail;