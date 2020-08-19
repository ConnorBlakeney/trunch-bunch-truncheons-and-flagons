import { useTeams } from "../teams/TeamProvider.js"

const eventHub = document.querySelector(".container")
const startSelectTarget = document.querySelector(".main--game-play")

eventHub.addEventListener("startButtonClicked", () => {
  const allTeams = useTeams()
  startSelectRender(allTeams)
})

eventHub.addEventListener("click", clickEvent => {
  if(clickEvent.target.id === "allTeamsChosenButton") {
    const team1Id = document.querySelector("#teamSelect1").value
    const team2Id = document.querySelector("#teamSelect2").value
    const team3Id =  document.querySelector("#teamSelect3").value

    const isTeamOneZero = team1Id === "0"
    const isTeamTwoZero = team2Id === "0"
    const isTeamThreeZero = team3Id === "0"

    if( team1Id === team2Id || team1Id === team3Id || team2Id === team3Id ) {
      window.alert("Oops! Please select 3 unique teams.")
    }
    else if (isTeamOneZero || isTeamTwoZero || isTeamThreeZero){
      window.alert("Oops! Please make sure all teams are selected.")
    }
    else {
      const allTeamsSelectedDispatched = new CustomEvent("allTeamsSelected", {
        detail: {
          team1Id: team1Id,
          team2Id: team2Id,
          team3Id: team3Id
        }
      })
      eventHub.dispatchEvent(allTeamsSelectedDispatched)
    }
  }
})

const startSelectRender = (teams) => {
  startSelectTarget.innerHTML = `
    <select class="dropdown" id="teamSelect1">
      <option value="0">Please Select Team 1</option>
      ${teams.map((team) => {
        return `<option value="${team.id}">${team.name}</option>`
      })
      .join("")}
    </select>

    <select class="dropdown" id="teamSelect2">
      <option value="0">Please Select Team 2</option>
      ${teams.map((team) => {
        return `<option value="${team.id}">${team.name}</option>`
      })
      .join("")}
    </select>

    <select class="dropdown" id="teamSelect3">
      <option value="0">Please Select Team 3</option>
      ${teams.map((team) => {
        return `<option value="${team.id}">${team.name}</option>`
      })
      .join("")}
    </select>

    <button id="allTeamsChosenButton">START THE GAME</button>
    `
}

