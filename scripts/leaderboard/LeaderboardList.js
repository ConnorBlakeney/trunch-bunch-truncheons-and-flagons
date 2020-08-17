import { getPlayers, usePlayers } from "../player/PlayerProvider.js";
import { getTeams, useTeams } from "../teams/TeamProvider.js";
import { getScores, useScores } from "../score/ScoreProvider.js";
import { LeaderboardHTML } from "./Leaderboard.js"

const leaderboardTarget =  document.querySelector(".scoreboard--container")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("playerStateChanged", () => {
    listLeaderboard()
})

eventHub.addEventListener("teamStateChanged", () => {
    listLeaderboard()
})


export const listLeaderboard = () => {  
    let leaderboardData = []
    let teams = []
    let players = []
    let scores = []
  
    getTeams()
        .then( () => {
            teams = useTeams()
        })
        .then(getPlayers)
        .then(() => {
            players = usePlayers()
        })
        .then(getScores)
        .then(() => {
            scores = useScores()
        })

        .then(() => {
            for(const team of teams) {
            leaderboardData.push( 
                {teamName: team.name,
                teamId: team.id,
                playerCount: 0,
                teamScore: 0}
                )
            }   

            for(const player of players) {
                for (const team of leaderboardData) {
                    if(player.teamId === team.teamId) {
                        team.playerCount++
                    }   
                }
            }

            for(const score of scores) {
                for (const team of leaderboardData) {
                    if(score.teamId === team.teamId) {
                        team.teamScore += score.gameScore
                    }   
                }

            }

            render(leaderboardData.reverse())  
                   
        })  
      
}

const render = (leaderboardData) => {

      let digitalLeaderboard = ""
      
      leaderboardData.forEach((thisData) => {
            digitalLeaderboard += LeaderboardHTML(thisData)
      })
     
      leaderboardTarget.innerHTML = `
        <div class="leaderboard-row">
            <div class="leaderboard-team-name">
                Team Name
            </div>
            <div class="leaderboard-player-count">
                Player Count
            </div>
            <div class="leaderboard-score">
                Team Score
            </div>
        </div>
            ${digitalLeaderboard}
      `
}


