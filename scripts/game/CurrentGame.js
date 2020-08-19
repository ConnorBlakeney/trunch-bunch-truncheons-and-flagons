const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".currentGame--container")

eventHub.addEventListener("roundScoresHaveBeenRecorded", customEvent => {
    const gameState = customEvent.detail.gameState

    
    render(gameState)
})



const render = gameState => {

    contentTarget.innerHTML = `
    <h3>Current Game</h3>
        <div className="teams">
            <div class="scoreboard-row">
                <div class="scoreboard-team-name">Name</div>
                <div class="scoreboard-score">Score</div>
            </div>
            <div class="scoreboard-row">
                <div class="scoreboard-team-name">
                    ${gameState.teams.teamOneName}
                </div>
                <div class="scoreboard-score">
                    ${gameState.scores.currentTeamOneScore}
                </div>
            </div>
            <div class="scoreboard-row">
                <div class="scoreboard-team-name">
                    ${gameState.teams.teamTwoName}
                </div>
                <div class="scoreboard-score">
                    ${gameState.scores.currentTeamTwoScore}
                </div>
            </div>
            <div class="scoreboard-row">
                <div class="scoreboard-team-name">
                    ${gameState.teams.teamThreeName}
                </div>
                <div class="scoreboard-score">
                    ${gameState.scores.currentTeamThreeScore}
                </div>
            </div>
        </div>
`
}
 

