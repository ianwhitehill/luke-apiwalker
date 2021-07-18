import React, { useState } from 'react'
import Search from './Search';

const Planets = props => {
    const [planet, setPlanet] = useState(null);
    const setData = data=>{
        setPlanet(data);
    }
    return(
        <div>
            <Search setData={setData}/>
            <h1>Planet Page </h1>
            {
                planet ? <ul>
                <li>{planet.name}</li>
                <li>{planet.diameter}</li>
                <li>{planet.population}</li>
                <li>{planet.surface_water}</li>
            </ul> : ''
            }
        </div>
    );
}

export default Planets;