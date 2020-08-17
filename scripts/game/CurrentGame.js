import { useTeams } from "../teams/TeamProvider.js";
import { saveScores } from "../score/ScoreProvider.js";

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".currentGameScore")

// let new = 


//     {
//       gameScore: 0,
//       teamId: 1,
//       gameTimeStamp: 1596134759006
//     } 
//     // {
//     //   gameScore: 0,
//     //   teamId: 1,
//     //   gameTimeStamp: 1596134759006
//     // }, 
//     // {
//     //   gameScore: 0,
//     //   teamId: 1,
//     //   gameTimeStamp: 1596134759006
//     // } 
// }


eventHub.addEventListener("roundScoresHaveBeenRecorded", customEvent => {
    const gameState = customEvent.detail.gameState

    
    render(gameState)
})



const render = gameState => {

    contentTarget.innerHTML = `
    <h3>Current Game</h3>
        <div className="teams">
            <div class="team team__header">
                <div class="team__columnHeader team__name">Name</div>
                <div class="team__columnHeader team__score">Score</div>
            </div>
        <div class="leaderboard-row">
        <div class="leaderboard-team-name">
            ${gameState.teams.teamOneName}
            ${gameState.scores.currentTeamOneScore}
        </div>
        <div class="leaderboard-player-count">
            ${gameState.teams.teamTwoName}
            ${gameState.scores.currentTeamTwoScore}
        </div>
        <div class="leaderboard-score">
            ${gameState.teams.teamThreeName}
            ${gameState.scores.currentTeamThreeScore}
        </div>
        </div>
        </div>
`
}
 

