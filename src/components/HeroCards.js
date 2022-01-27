import React, { useState, useEffect } from 'react';
import Team from './Team';

function HeroCards( {Heros} ) {
    const [Addheros, setAddHeros]= useState([])

    const addToteam = (hero) => {
        setAddHeros([hero, ...Addheros])
    }

    const DeleteHeroTeam = (id) => {
        const NewArrayTeam = Addheros.filter(hero => hero.id !== id)
        setAddHeros([...NewArrayTeam])
    }

    const saveTeam = ()=> {
        if (!localStorage.getItem('team')) {
            localStorage.setItem('team', JSON.stringify([]))
           }
            const TeamArray = JSON.parse( localStorage.getItem('team'))
            TeamArray.push(...Addheros)
            localStorage.setItem('team', JSON.stringify(TeamArray))    

    }
    console.log(Addheros)
    return (
        <div className='container'>
          <div className="row row-cols-1 row-cols-sm-2 g-3">
              {Heros ? Heros.map((hero) => (
                <div className="col mb-2">
                <div key={hero.id} className="card">
                <img src={hero.image.url} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{hero.name}<span className='mx-4 badge bg-info fs-5'>{hero.biography.alignment}</span></h5>
                    <p className="card-text"><strong>Full Name: </strong> {hero.biography['full-name']}</p>
                    <p className="card-text"><strong>First apparition: </strong> {hero.biography['first-appearance']}</p>
                </div>
                <div className='text-center'>
                    <button className='btn btn-primary' onClick={() => addToteam(hero)}>Add To Team</button>
                </div>
                </div>
            </div>

              ))
               : null}
            </div>
                <div className="row row-cols-1 row-cols-sm-2 g-3 mt-4">
                {Addheros.length > 0 ? <h2 className='font-h2 text-center fs-2'>Este es tu Equipo</h2> : null }
                {Addheros.length > 0 ? Addheros.map( (hero) => (
                    <div  className="col">
                        <div key={hero.id} className="card">
                        <img src={hero.image.url} className="card-img-top" alt="card-grid-image"/>
                        <div className="card-body">
                            <h5 className="card-title font-h2 fs-3 text-center">{hero.name}<span className='mx-4 badge bg-info fs-5'>{hero.biography.alignment}</span></h5>
                            <div className='text-center font-h2 fs-5'>
                                <p><strong>Combat</strong>: {hero.powerstats.combat}</p>
                                <p><strong>Durability</strong>: {hero.powerstats.durability}</p>
                                <p><strong>Intelligence</strong>: {hero.powerstats.intelligence}</p>
                                <p><strong>Power</strong>: {hero.powerstats.power}</p>
                                <p><strong>Speed</strong>: {hero.powerstats.speed}</p>
                                <p><strong>Strength</strong>: {hero.powerstats.strength}</p>
                            </div>
                        </div>
                        <div className="col-md-7 gx-1 text-center">
                            <button className='btn btn-secondary' onClick={() => DeleteHeroTeam(hero.id)}>Delete the Team</button>
                        </div>
                        </div>
                    </div>
            )) : null}
            </div>
            {Addheros.length > 0 ? <button className='btn btn-primary' onClick={saveTeam}>Save your Team</button> : null }
        </div>
        
    );
}

export default HeroCards;