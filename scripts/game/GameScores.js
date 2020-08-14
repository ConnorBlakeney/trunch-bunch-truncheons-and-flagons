import{useTeams} from "../teams/TeamProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".main--game-play")

eventHub.addEventListener("allTeamsSelected", (customEvent) => {
   const team1ID = parseInt(customEvent.detail.team1Id)
   const team2ID = parseInt(customEvent.detail.team2Id)
   const team3ID = parseInt(customEvent.detail.team3Id)
render(team1ID, team2ID, team3ID)
})



const render = (team1ID, team2ID, team3ID) => {
    const allTeams = useTeams()
    const team1Obj = allTeams.find(team => team.id === team1ID)
    const team2Obj = allTeams.find(team => team.id === team2ID)
    const team3Obj = allTeams.find(team => team.id === team3ID)

    contentTarget.innerHTML = `
    <div class="score--input--form">
        <fieldset class="input--container">
            <label for="score1">${team1Obj.name}</label>
            <input name="score1" class="score--input1" type="text" placeholder="Enter score..."></input>
        </fieldset>
        <fieldset class="input--container">
            <label for="score2">${team2Obj.name}</label>
            <input name="score2" class="score--input2" type="text" placeholder="Enter score..."></input>
        </fieldset>
        <fieldset class="input--container">
            <label for="score3">${team3Obj.name}</label>
            <input name="score3" class="score--input3" type="text" placeholder="Enter score..."></input>
        </fieldset>
        <button class="button button--save" id="saveRoundScores">Save Round Scores</button>
    </div>
`
}

eventHub.addEventListener("click", clickEvent => {

  if(clickEvent.target.id === "saveRoundScores") {
    const teamOneScore = parseInt(document.querySelector(".score--input1").value)
    const teamTwoScore = parseInt(document.querySelector(".score--input2").value)
    const teamThreeScore = parseInt(document.querySelector(".score--input3").value)
    const roundScoresRecorded = new CustomEvent("roundScoresHaveBeenRecorded", {
      detail: {
          teamOneScore: teamOneScore,
          teamTwoScore: teamTwoScore,
          teamThreeScore: teamThreeScore
      }
    })
    eventHub.dispatchEvent(roundScoresRecorded)
    document.querySelector(".score--input1").value = '';
    document.querySelector(".score--input2").value = '';
    document.querySelector(".score--input3").value = '';  
  }
})
