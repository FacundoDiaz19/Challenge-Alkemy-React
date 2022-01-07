import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [Resultado, setResultado] = useState([]);
  //api de alkemy

  useEffect(() => {
    const AccessToken = "4515526481799293";
    const Url = `https://superheroapi.com/api.php/4515526481799293/55`;

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

    <div className=" w-auto h-auto">
      <div className="d-md-flex justify-content-center mt-1">
        <nav className="navbar navbar-light bg-light">
          <form className="form-inline d-md-flex flex-row ">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </nav>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {Resultado.map((per) => (
          <div className="col" key={per.id}>
            <div className="card">
              <img src={per.image.url} className="card-img-top img-thumbnail" />
              <div className="card-body">
                <p className="card-text">{per.name}</p>
                <p>{per.powerstats.combat}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
