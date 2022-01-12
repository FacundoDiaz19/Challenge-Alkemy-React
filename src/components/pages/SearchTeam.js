import React from 'react'
import HeroCards from '../HeroCards';
import NavBar from '../NavBar';
import Search from '../Search';

function SearchTeam() {
    return (
        
    <div>
         <NavBar />
         <div className='container mt-5'>
            <Search /> 
             <HeroCards />
         </div>
    </div>
    )
}

export default SearchTeam;
