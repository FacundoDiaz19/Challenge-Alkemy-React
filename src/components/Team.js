import React, { useState, useEffect }  from 'react';



function Team({HeroTeam}) {
    const [TeamHeros, setTeamHeros] = useState()
    useEffect(()=>{
        if (HeroTeam) {
            const Team = localStorage.getItem('team')
            if (Team) {
                let TeamJson = JSON.parse(Team)
                setTeamHeros([...TeamJson])

            }
        }
        
    },[])
    /* console.log(TeamHeros) */
    return (
        <div className='container shadow-lg p-3 mb-5 bg-login rounded'>
            <div className="row row-cols-1 row-cols-sm-2 g-3">
            {TeamHeros ? TeamHeros.map( (hero) => (
                    <div key={hero.id} className="col">
                        <div  className="card">
                        <img src={hero.image.url} className="card-img-top" alt="card-grid-image"/>
                        <div className="card-body">
                            <h5 className="card-title">{hero.name}<span className='mx-4 badge bg-info fs-5'>{hero.biography.alignment}</span></h5>
                            <div>
                                <p><strong>Combat</strong>: {hero.powerstats.combat}</p>
                                <p><strong>Durability</strong>: {hero.powerstats.durability}</p>
                                <p><strong>Intelligence</strong>: {hero.powerstats.intelligence}</p>
                                <p><strong>Power</strong>: {hero.powerstats.power}</p>
                                <p><strong>Speed</strong>: {hero.powerstats.speed}</p>
                                <p><strong>Strength</strong>: {hero.powerstats.strength}</p>
                            </div>
                        </div>
                        <div className="col-md-7 gx-1">
                            <button>View Hero</button>
                            <button>Delete the Team</button>
                        </div>
                        </div>
                    </div>
            )) : null}
            </div>
        </div>
    );
}

export default Team;