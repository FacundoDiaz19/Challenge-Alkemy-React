import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import NavBar from '../NavBar';
import { Link } from 'react-router-dom';

function ViewHeroPage() {
    const [Hero, setHero] = useState()
    const {id} = useParams()
    
    const AccessToken = "4515526481799293";
    const Url = `https://superheroapi.com/api.php/${AccessToken}/${id}`;

   useEffect(()=>{
       axios.get(Url).then((res)=>{
        const response = res.data;
        setHero([response])
       })
   },[])

   console.log(Hero)

    return (
        
        <div className=''>
            <NavBar />
            <div className='container my-3'>
            <h1 className='fs-1 text-center font-h1 mt-4 mb-2'>this is your hero</h1>
            {Hero ? Hero.map(hero => (
                <div key={hero.id} className="card">
                <div className="row g-0">
                    <div className="col-5 col-sm-4">
                    <img src={hero.image.url} className="img-fluid w-100" alt="card-horizontal-image"/>
                    </div>
                    <div className="col-7 col-sm-8">
                    <div className="card-body">
                        <h3 className="card-title font-h2 fs-2 text-center">{hero.name}</h3>
                        <p className="card-text "><strong>Full Name: </strong> {hero.biography['full-name']}</p>
                        <p className="card-text"><strong>Aliases: </strong> {hero.biography.aliases.join('/')}</p>
                        <div className='row text-center font-h2 fs-5 mb-2'>
                            <h5 className='text-start'>Powerstats</h5>
                            <div className='col-md-4'>
                                <p className="card-text"><strong>Combat: </strong> {hero.powerstats.combat}</p>
                                <p className="card-text"><strong>Durability: </strong> {hero.powerstats.durability}</p>
                                <p className="card-text"><strong>Intelligence: </strong> {hero.powerstats.intelligence}</p>
                            </div>
                            <div className='col-md-4'>
                                <p className="card-text"><strong>Power: </strong> {hero.powerstats.power}</p>
                                <p className="card-text"><strong>Speed: </strong> {hero.powerstats.speed}</p>
                                <p className="card-text"><strong>Strength: </strong> {hero.powerstats.strength}</p>
                            </div> 
                        </div>
                        <div className='row text-center font-h2 fs-5 mb-2'>
                            <h5 className='text-start'>Physical Appearance</h5>
                            <div className='col-md-4'>
                                <p className="card-text"><strong>Eye-Color: </strong> {hero.appearance['eye-color']}</p>
                                <p className="card-text"><strong>Hair-Color: </strong> {hero.appearance['hair-color']}</p>
                            </div>
                            <div className='col-md-4'>
                                <p className="card-text"><strong>Weigth: </strong> {hero.appearance.weight[1]}</p>
                                <p className="card-text"><strong>Height: </strong> {hero.appearance.height[1]}</p>
                            </div> 
                        </div>
                        <p className="card-text"><strong>First apparition: </strong> {hero.biography['first-appearance']}</p>
                        <p className="card-text"><strong>Work Place: </strong> {hero.work.base} </p>
                        <p className="card-text"><strong>Occupation: </strong> {hero.work.occupation} </p>
                    </div>
                    <Link to={'/'} className='btn btn-info col-md-4 my-2 mx-4'>Return</Link>
                    </div>
                </div>
                </div>
            )):null}
            </div>
        </div>

    );
}

export default ViewHeroPage;