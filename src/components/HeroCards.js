import React, { useState } from 'react';
import Team from './Team';

function HeroCards( {Heros} ) {
    const [heros, setHeros]= useState([])

    const addToteam = (hero) => {
        setHeros([hero, ...heros])
        localStorage.setItem('team', JSON.stringify(heros))
    }
   /*  console.log(heros) */
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
            <div className='mt-4'>
                <Team HeroTeam={heros} />
            </div>
        </div>
    );
}

export default HeroCards;