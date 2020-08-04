import { getPlayers, usePlayers } from "../player/PlayerProvider.js";
import { getTeams, useTeams } from "../teams/TeamProvider.js";
import { getScores, useScores } from "../score/ScoreProvider.js";
let leaderboardData = [
    // {
    // teamName: "",
    // playerCount: 0,
    // teamScore: 0
    // }
]

export const listLeaderboard = () => {  
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
            // console.log("test", scores, teams, players)
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
        })  
}

console.log("test", leaderboardData)