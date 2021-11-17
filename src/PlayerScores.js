import React from "react";

const PlayerScore = (prop) => {
    return prop.scores.map((player) => (
        <tr>
            <td>{player.n.toUpperCase()}</td>
            <td className="player-score">{player.s} </td>
        </tr>
    ));
};

export default PlayerScore;