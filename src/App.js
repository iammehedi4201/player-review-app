import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Reviews from "./Components/Reviews/Reviews";

function App() {

 

  return (
    <div className="App">

      <Header></Header>
      

      {/*React Router  */}
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Reviews" element={<Reviews></Reviews>}></Route>
        <Route path="" element=''></Route>
        <Route path="" element=''></Route>
      </Routes>
      


    </div>
  );
}

export default App;
