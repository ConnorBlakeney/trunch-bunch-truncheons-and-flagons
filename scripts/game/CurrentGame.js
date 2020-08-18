import { useTeams } from "../teams/TeamProvider.js";

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".currentGameScore")

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
 

