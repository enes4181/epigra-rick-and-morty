import { Route, Routes } from "react-router-dom";
import CharacterPage from "./pages/Detail";
import Home from "./pages/Home";

function App() {

  return (
  
    
    <Routes>
      <Route index element={ <Home/>}/>
      <Route path="character/:id" element={<CharacterPage/>}/>
    </Routes>

  );
}

export default App;