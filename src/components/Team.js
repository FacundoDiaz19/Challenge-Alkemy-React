import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Team({ HeroTeam }) {
  const [TeamHeros, setTeamHeros] = useState([]);
  const [PowerHero, setPowerHero] = useState([]);
  const [ShowAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (TeamHeros.length === 0) {
      setShowAlert(true);
    }
    const Team = localStorage.getItem("team");
    if (Team) {
      let TeamJson = JSON.parse(Team);
      setTeamHeros([...TeamJson]);
      setShowAlert(false);
    }
  }, []);

  const DeleteHero = (id) => {
    const NewArrayTeam = TeamHeros.filter((hero) => hero.id !== id);
    localStorage.setItem("team", JSON.stringify(NewArrayTeam));
    setTeamHeros([...NewArrayTeam]);
  };

  return (
    <div className="container shadow-lg p-3 mb-5 bg-login rounded">
      {ShowAlert ? (
        <div class="alert alert-warning" role="alert">
          You don't have any character in the team{" "}
          <Link to={"/MakeTeam"} className="alert-link">
            Create a new Team
          </Link>
          .
        </div>
      ) : null}
      <div className="row row-cols-1 row-cols-sm-2 g-3">
        {TeamHeros
          ? TeamHeros.map((hero) => (
              <div className="col">
                <div key={hero.id} className="card">
                  <img
                    src={hero.image.url}
                    className="card-img-top"
                    alt="card-grid-image"
                  />
                  <div className="card-body">
                    <h5 className="card-title font-h2 fs-3 text-center ">
                      {hero.name}
                      <span className="mx-4 badge bg-info fs-5">
                        {hero.biography.alignment}
                      </span>
                    </h5>
                    <div className="text-center font-h2 fs-5">
                      <p>
                        <strong>Combat</strong>: {hero.powerstats.combat}
                      </p>
                      <p>
                        <strong>Durability</strong>:{" "}
                        {hero.powerstats.durability}
                      </p>
                      <p>
                        <strong>Intelligence</strong>:{" "}
                        {hero.powerstats.intelligence}
                      </p>
                      <p>
                        <strong>Power</strong>: {hero.powerstats.power}
                      </p>
                      <p>
                        <strong>Speed</strong>: {hero.powerstats.speed}
                      </p>
                      <p>
                        <strong>Strength</strong>: {hero.powerstats.strength}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-7 gx-2 text-center w-100 px-4 mb-2 btn-group">
                    <Link
                      to={`/ViewHero/${hero.id}`}
                      className="btn btn-outline-primary"
                    >
                      View Hero
                    </Link>
                    <button
                      className="btn btn-dark"
                      onClick={() => DeleteHero(hero.id)}
                    >
                      Remove from the Team
                    </button>
                  </div>
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default Team;
