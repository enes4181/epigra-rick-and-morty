import { useQuery } from "@apollo/client";
import { GET_DATA } from "../graphql/query";
import { Link } from 'react-router-dom'


function Home() {

    const {loading, error, data } = useQuery(GET_DATA);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
 
    
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-5xl my-8 font-bold text-gray-1000">Rick and Morty Characters</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.characters.results.map((result, index) => (
          <Link to={`/character/${result.id}`} key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img src={result.image} alt={result.name} className="w-full h-64 object-cover" />
            <div className="p-4">
              <p className="text-lg font-bold">{result.name}</p>       
              <p className="text-sm font-semibold text-gray-1000">Status: <span className="font-medium">{result.status}</span> </p>  
              <p className="text-sm font-semibold text-gray-1000">Species: <span className="font-medium">{result.species}</span> </p>
              <p className="text-sm font-semibold text-gray-1000">Location: <span className="font-medium">{result.location.name}</span></p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home