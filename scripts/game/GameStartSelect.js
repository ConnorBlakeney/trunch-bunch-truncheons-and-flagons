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

    const allTeamsSelectedDispatched = new CustomEvent("allTeamsSelected", {
      detail: {
        team1Id: team1Id,
        team2Id: team2Id,
        team3Id: team3Id
      }
    })

    eventHub.dispatchEvent(allTeamsSelectedDispatched)
  }
})

eventHub.addEventListener("change", (changeEvent) => {
  if(changeEvent.target.id === "teamSelect1" || changeEvent.target.id === "teamSelect2" ||changeEvent.target.id === "teamSelect3" ) {

    const isTeam1Selected = document.querySelector("#teamSelect1").value !== "0"
    const isTeam2Selected = document.querySelector("#teamSelect2").value !== "0"
    const isTeam3Selected = document.querySelector("#teamSelect3").value !== "0"

    if(isTeam1Selected && isTeam2Selected && isTeam3Selected) {

      return renderButton()
    }
  }
})

const renderButton = () => {
  const buttonTarget = document.querySelector(".buttonContainer")

  buttonTarget.innerHTML = `
  <button id="allTeamsChosenButton">START THE GAME</button>
  `
}

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

    <div class="buttonContainer"></div>
    `
}