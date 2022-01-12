import React, { useState, useEffect } from "react";
import axios from "axios";
import Auth from "../Auth/Auth";
import NavBar from "../NavBar";

function Home() {
  const [Resultado, setResultado] = useState([]);
  //api de alkemy

  useEffect(() => {
    const AccessToken = "4515526481799293";
    const Url = `https://superheroapi.com/api.php/4515526481799293/70`;

    axios.get(Url).then((res) => {
      const respuesta2 = res.data;
      console.log(respuesta2);
      setResultado([respuesta2]);
    });

    /* axios
    .get("https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=6da83076eb9a1ff375d6a8028ff4c981&hash=fbd14a4d5362e768583c77e38aebccc0")
       .then((res)=>{
         const respuesta = res.data.data.results;
         setResultado(respuesta);
         console.log(respuesta)
     })
     .catch(err => console.log(err))
 */
  }, []);

  return (
    <Auth>
    <NavBar />  
    <div className="container">
      <div className="d-md-flex justify-content-center mt-1">
        <div class="alert alert-warning" role="alert">
        You don't have any character in the team <a href="#" class="alert-link">Create a new Team</a>.
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {Resultado.map((per) => (
          <div className="col" key={per.id}>
            <div className="card">
              <img src={per.image.url} className="card-img-top img-thumbnail" />
              <div className="card-body">
                  <div className="card-text d-md-flex justify-content-center">
                    <p >{per.name}</p>
                  </div>
                <div>
                    <p><strong>Combat</strong>: {per.powerstats.combat}</p>
                    <p><strong>Durability</strong>: {per.powerstats.durability}</p>
                    <p><strong>Intelligence</strong>: {per.powerstats.intelligence}</p>
                    <p><strong>Power</strong>: {per.powerstats.power}</p>
                    <p><strong>Speed</strong>: {per.powerstats.speed}</p>
                    <p><strong>Strength</strong>: {per.powerstats.strength}</p>
                </div>
              </div>
              <div className="col-md-7 gx-1">
                  <button>View Hero</button>
                  <button>Delete the Team</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </Auth>
  );
}

export default Home;
