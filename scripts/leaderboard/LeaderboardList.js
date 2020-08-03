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
    getTeams()
        .then( () => {
            const teams = useTeams()
    getPlayers()
        .then( () => {
            const players = usePlayers()
    getScores()
        .then(() => {
            const scores = useScores()

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
                        team.teamScore += parseInt(scores.gameScore)
                        console.log("test-scores", scores.gameScore)
                    }   
                }
            }
            
            console.log("test", scores)



        })
        })
    })
}
