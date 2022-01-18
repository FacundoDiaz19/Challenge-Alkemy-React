import React, { useState, useEffect } from "react";
import axios from "axios";
import Auth from "../Auth/Auth";
import NavBar from "../NavBar";
import Team from "../Team";

function Home() {
  const [Resultado, setResultado] = useState([]);
  //api de alkemy

  useEffect(() => {
    const AccessToken = "4515526481799293";
    const Url = `https://superheroapi.com/api.php/${AccessToken}/70`;

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
     
    </div>
    </Auth>
  );
}

export default Home;
