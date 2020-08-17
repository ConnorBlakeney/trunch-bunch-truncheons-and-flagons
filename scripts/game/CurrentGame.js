import { useTeams } from "../teams/TeamProvider.js";

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".currentGameScore")
let gameState = {
        scores: {
            currentTeamOneScore: 0,
            currentTeamTwoScore: 0,
            currentTeamThreeScore: 0
        },
        teams: {
            teamOneName: "",
            teamTwoName: "",
            teamThreeName: ""
        }
}

eventHub.addEventListener("roundScoresHaveBeenRecorded", customEvent => {

    gameState.scores.currentTeamOneScore += customEvent.detail.teamOneScore
    gameState.scores.currentTeamTwoScore += customEvent.detail.teamTwoScore
    gameState.scores.currentTeamThreeScore += customEvent.detail.teamThreeScore
    render()
})

eventHub.addEventListener("allTeamsSelected", (customEvent) => {
   const team1ID = parseInt(customEvent.detail.team1Id)
   const team2ID = parseInt(customEvent.detail.team2Id)
   const team3ID = parseInt(customEvent.detail.team3Id)

    const allTeams = useTeams()
    const team1Obj = allTeams.find(team => team.id === team1ID)
    const team2Obj = allTeams.find(team => team.id === team2ID)
    const team3Obj = allTeams.find(team => team.id === team3ID)

    gameState.teams.teamOneName = team1Obj.name
    gameState.teams.teamTwoName = team2Obj.name
    gameState.teams.teamThreeName = team3Obj.name
    render()
})

const render = () => {

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
 

