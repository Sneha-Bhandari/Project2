import React from "react";


import RecipeBanner from "../Component/PageComponent/Recipes/RecipeBanner";
import Menu from "../Component/PageComponent/Home/Menu";


const Recipes = () => {
  return (
    <div className="h-full w-full">
  <div className="h-full"><RecipeBanner/></div> 
   <div className="h-full">
 <Menu/>

   </div>
    </div>

  );
};

export default Recipes;
