import React, { useState } from 'react'
import Search from './Search';

const People = props => {
    const [people, setPeople] = useState(null);
    const setData = data=>{
        setPeople(data);
    }
    return(
        <div>
            <Search setData={setData}/>
            <h1>People Page </h1>
            {
                people ? <ul>
                    <li>{people.name}</li>
                    <li>{people.height}</li>
                    <li>{people.mass}</li>
                    <li>{people.gender}</li>
                </ul> : ''
            }
        </div>
    );
}

export default People;