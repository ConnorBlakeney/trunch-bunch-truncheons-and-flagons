import{useTeams} from "../teams/TeamProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".main--game-play")
let gameState = {
  scores: {
      currentTeamOneScore: 0,
      currentTeamTwoScore: 0,
      currentTeamThreeScore: 0
  },
  teams: {
      teamOneName: "",
      teamTwoName: "",
      teamThreeName: "",
  }
}



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
  render(team1Obj.name, team2Obj.name, team3Obj.name)
})


const render = (team1Name, team2Name, team3Name) => {
    
    contentTarget.innerHTML = `
    <div class="score--input--form">
        <fieldset class="input--container">
            <label for="score1">${team1Name}</label>
            <input name="score1" class="score--input1" type="text" placeholder="Enter score..."></input>
        </fieldset>
        <fieldset class="input--container">
            <label for="score2">${team2Name}</label>
            <input name="score2" class="score--input2" type="text" placeholder="Enter score..."></input>
        </fieldset>
        <fieldset class="input--container">
            <label for="score3">${team3Name}</label>
            <input name="score3" class="score--input3" type="text" placeholder="Enter score..."></input>
        </fieldset>
        <button class="button button--save" id="saveRoundScores">Save Round Scores</button>
    </div>
`
}

export const findWinner = () => {
    const sortedArray = gameScoresArray.sort((a, b) => {
        return b.score - a.score
    })
    console.log(sortedArray[0].name)
    return sortedArray[0].name
}

let round = 0

let gameScoresArray = []

const addToGameScoresArray = (teamName, teamScore) => {
    gameScoresArray.push({
        name: teamName,
        score: teamScore
    })
}

eventHub.addEventListener("click", clickEvent => {

  if(clickEvent.target.id === "saveRoundScores") {
    const teamOneScore = parseInt(document.querySelector(".score--input1").value)
    const teamTwoScore = parseInt(document.querySelector(".score--input2").value)
    const teamThreeScore = parseInt(document.querySelector(".score--input3").value)

    if(teamOneScore <= 3 && teamTwoScore <= 3 && teamThreeScore <= 3){

        gameState.scores.currentTeamOneScore += teamOneScore
        gameState.scores.currentTeamTwoScore += teamTwoScore
        gameState.scores.currentTeamThreeScore += teamThreeScore
    
        const roundScoresRecorded = new CustomEvent("roundScoresHaveBeenRecorded", {
          detail: {
              gameState: gameState
          }
        })
        eventHub.dispatchEvent(roundScoresRecorded)
        document.querySelector(".score--input1").value = '';
        document.querySelector(".score--input2").value = '';
        document.querySelector(".score--input3").value = '';  
    
        round++
        if (round >= 3) {
            addToGameScoresArray(gameState.teams.teamOneName, gameState.scores.currentTeamOneScore)
            addToGameScoresArray(gameState.teams.teamTwoName, gameState.scores.currentTeamTwoScore)
            addToGameScoresArray(gameState.teams.teamThreeName, gameState.scores.currentTeamThreeScore)
            findWinner(gameScoresArray)
            
            
            
    
    
        }
    }
    else {
        window.alert("Scores have to be below 3 points per team! Please follow these rules!")
    }
    }
  }
)


