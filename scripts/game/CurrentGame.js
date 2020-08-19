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
            <div class="leaderboard-row">
                <div class="leaderboard-team-name">Name</div>
                <div class="leaderboard-score">Score</div>
            </div>
            <div class="leaderboard-row">
                <div class="leaderboard-team-name">
                    ${gameState.teams.teamOneName}
                </div>
                <div class="leaderboard-score">
                    ${gameState.scores.currentTeamOneScore}
                </div>
            </div>
            <div class="leaderboard-row">
                <div class="leaderboard-team-name">
                    ${gameState.teams.teamTwoName}
                </div>
                <div class="leaderboard-score">
                    ${gameState.scores.currentTeamTwoScore}
                </div>
            </div>
            <div class="leaderboard-row">
                <div class="leaderboard-team-name">
                    ${gameState.teams.teamThreeName}
                </div>
                <div class="leaderboard-score">
                    ${gameState.scores.currentTeamThreeScore}
                </div>
            </div>
        </div>
`
}
 

