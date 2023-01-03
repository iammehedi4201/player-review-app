import React from "react";
import CustomarReviews from "../CustomarReview/CustomarReviews";
import PlayerDetails from "../PlayerDetails/PlayerDetails";
import "./Home.css";

const Home = () => {

   let Value = true;


  return (
        <div className="home-section">
           
            <PlayerDetails></PlayerDetails>
            <CustomarReviews Value={Value}></CustomarReviews>
             
 
       </div>
  );
};

export default Home;
