import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';

const Search = props => {
    const [id, setId] = useState(1);
    const [resetSearch, setResetSearch] = useState(false);
    const [type, setType] = useState('people');
    useEffect(() => {
        axios.get(`https://swapi.dev/api/${type}/${id}/`)
        .then(res => props.setData(res.data))
    }, [resetSearch])
    const onSubmitHandler = e => {
        e.preventDefault();
        setResetSearch(!resetSearch);
    }
    return(
        <>
            <Link to='/people'>People</Link>
            <Link to='/planets'>Planets</Link>
            <form onSubmit={onSubmitHandler}>
                <label htmlFor="type">Search For:</label>
                <select name='type' onChange={(e) => setType(e.target.value)}>
                    <option value="people">People</option>
                    <option value='planets'>Planets</option>
                </select>
                <label htmlFor="id">ID#</label>
                <input type="text" name='id' onChange={(e) => setId(e.target.value)}/>
                <input type="submit" value='Submit'/>
            </form>
        </>
    );
}

export default Search;