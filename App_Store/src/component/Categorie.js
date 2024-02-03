import React from "react";
import appLogo from '../images/logo.png'
import { useState } from "react";
import { useEffect } from "react";
function Categories() {
  const [apps, setApps] = useState([]);
  const [category, setCategory] = useState('')
  useEffect(() => {
    fetch("https://abdelouahed06.github.io/apiapps/apps.json")
      .then(response => response.json())
      .then(data => {
        setApps(data.apps);
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);
  useEffect(()=>{console.log(category)},[category])

  return (
    <div className="mainCat">
      <div className="CategorieType">
        <button className="categories" onClick={() => setCategory('')}>All Apps</button>
      </div>
      <div className="CategorieType_ithems">
        {apps && apps.map((app) => 
          <button className="categories" onClick={()=> setCategory(app.category) }>{app.category}</button>
        )}
      </div>
      <br></br>
      <div className="appCat">
        <br></br>
        <p>CatName</p>
        <div className="appsDiv">
          {apps && apps.filter((app)=>app.category.includes(category))
          .map((app) => 
            <div className="childApp">
              <img src={app.app_icon} alt="" />
              <p> { app.name } </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Categories;
