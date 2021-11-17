import React from "react";
import PlayerScore from "./PlayerScores";

const HighScoreTable = (prop) => (
    <div className="box">
        <h1>High Scores per Country</h1>
        {prop.countries.map((country) => (
            <div>
        <table className="table-container">
            <caption>HIGH SCORES: {country.name}</caption>
            <PlayerScore scores = {country.scores} />
        </table>
        </div>
        ))}
    </div>
);

export default HighScoreTable;