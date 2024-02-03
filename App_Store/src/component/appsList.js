
import React from "react";
import appLogo from '../images/logo.png'
import { useState } from "react";
import { useEffect } from "react";
function ApplicationsList({search}) {
  const [apps, setApps] = useState([]);
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("https://abdelouahed06.github.io/apiapps/apps.json")
      .then(response => response.json())
      .then(data => {
        const filteredApps = data.apps.filter(app => app.type === "app");
        const filteredGames = data.apps.filter(app => app.type === "game");
        setApps(filteredApps);
        setGames(filteredGames);
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);
    return (
        <div className="mainCat">
            {/* apps */}
            <div className="appCat">
                <p>Our Top apps</p>
                <div className="appsDiv">
                {apps && apps.filter((app) => app.name.toUpperCase().includes(search.toUpperCase())).map(app => (
                    <div className="childApp" key={app.id}>
                        <img src={app.app_icon} alt="" />
                        <p>{app.name}</p>
                    </div>
                ))}
                </div>
                <hr></hr>
            </div>
            {/* games */}
            <div className="gameCat">
                <p>Our Top games</p>
                <div className="gamesDiv">
                {games && games.filter((app) => app.name.toUpperCase().includes(search.toUpperCase())).map(app => (
                    <div className="childApp">
                        <img src={app.app_icon} alt="" />
                        <p>{app.name}</p>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
}

export default ApplicationsList;