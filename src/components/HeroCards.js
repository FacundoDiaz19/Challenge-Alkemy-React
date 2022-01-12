import React from 'react';

function HeroCards( {Heros} ) {

    console.log(Heros)
    return (
        <div className='container'>
          <div className="row row-cols-1 row-cols-sm-2 g-3">
              {Heros ? Heros.map((hero) => (
                <div className="col">
                <div key={hero.id} className="card">
                <img src={hero.image.url} class="card-img-top" alt="card-grid-image"/>
                <div className="card-body">
                    <h5 className="card-title">{hero.name}<span className='mx-4 badge bg-info fs-5'>{hero.biography.alignment}</span></h5>
                    <p className="card-text"><strong>Full Name: </strong> {hero.biography['full-name']}</p>
                    <p className="card-text"><strong>First apparition: </strong> {hero.biography['first-appearance']}</p>
                </div>
                </div>
            </div>

              ))
               : null}
  
            </div>
        </div>
    );
}

export default HeroCards;