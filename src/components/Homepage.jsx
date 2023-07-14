import React from 'react';
import { useState, useEffect } from 'react';
import SuperheroCard from './SuperheroCard';

const Homepage = () => {
    //setting states
    const [heroesList, setHeroesList] = useState([])
    const [search, setSearch] = useState({
        search: 1
    });
    const [hero, setHero] = useState([])

    //fetch method for all superheroes
    const fetchSuperheroes = async () => {
        const response = await fetch(
            `https://akabab.github.io/superhero-api/api/all.json`
        ).then(response => response.json());
        setHeroesList(response);
        return response;
    };

    //fetch method for superhero by id
    const fetchSuperheroById = async (id) => {
        const response = await fetch(
            `https://akabab.github.io/superhero-api/api/id/${id}.json`
        ).then(response => response.json());
        setHero(response)
        return response;
    }

    //fetch all superheroes on page load for dropdown
    useEffect(() => {
        fetchSuperheroes();
    }, [])

    //method for updating state to current dropdown menu selection
    const handleChange = (field, val) => {
        setSearch({
            [field]: val
        })
    }

    //method to handle dropdown menu submit, call to single superhero fetch
    const handleSearch = (event) => {
        event.preventDefault();
        fetchSuperheroById(search.search)
    }


    return (
        <div>
            {/* dropdown menu */}
            <form onSubmit={event => { handleSearch(event) }}>
                <select onChange={(event) => handleChange('search', event.target.value)}>
                    {heroesList.map(hero => {
                        return (
                            <option name={search} key={hero.id} value={hero.id}>{hero.name}</option>
                        )
                    })}
                </select>
                <input type="submit" value="Submit" />
            </form>
            <div id="content">
                {/* conditional to check if hero state is not empty, passing props to render component*/}
                {hero.length < 1  ? (
                    <div id="welcomeBackground">
                        <div id="welcome">
                        <h2>Welcome to the site!</h2>
                        <h5>Scroll through our menu to view details on your favorite superheroes</h5>
                        </div>
                    </div>
                ) : (
                    <SuperheroCard hero={hero} />
                )}
                <br></br>
            </div>
        </div>
    )
};

export default Homepage;