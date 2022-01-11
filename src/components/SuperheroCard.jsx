import React from 'react';

//component deconstructs props, renders superhero card
const SuperheroCard = ({ hero }) => {

    return (
        <>
            <div id="card">
                <div id="detailContainer">
                    <div id="cardDetails">
                        <h2>{hero.name}</h2>
                        <h5>{hero.biography.publisher}</h5>
                        <p><b>First Appearance:</b> {hero.biography.firstAppearance}</p>
                        <p><b>Affiliations: </b>{hero.connections.groupAffiliation}</p>
                    </div>
                    <div id="cardAttributes">
                        <h3>Attributes</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <td><b>Real Name:</b> {hero.biography.fullName}</td>
                                    <td><b>Gender:</b> {hero.appearance.gender}</td>
                                </tr>
                                <tr>
                                    <td><b>Race:</b> {hero.appearance.race}</td>
                                    <td><b>Alignment:</b> {hero.biography.alignment}</td>
                                </tr>
                                <tr>
                                    <td><b>Height:</b> {hero.appearance.height[0]}</td>
                                    <td><b>Weight:</b> {hero.appearance.weight[0]}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div id="cardStats">
                        <h3>Power Stats</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <td>🧠{hero.powerstats.intelligence}</td>
                                    <td>💪{hero.powerstats.strength}</td>
                                    <td>🏃{hero.powerstats.speed}</td>
                                </tr>
                                <tr>
                                    <td>📈{hero.powerstats.power}</td>
                                    <td>🤺{hero.powerstats.combat}</td>
                                    <td>🛡️{hero.powerstats.durability}</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div>
                    <img id="cardImage" src={hero.images.lg}></img>
                </div>
            </div>
        </>
    )
};

export default SuperheroCard;