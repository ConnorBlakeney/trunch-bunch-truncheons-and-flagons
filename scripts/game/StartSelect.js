import { useTeams, getTeams } from "../teams/TeamProvider.js"

const eventHub = document.querySelector(".container")
const startSelectTarget = document.querySelector(".main--game-play")

eventHub.addEventListener("startButtonClicked", () => {
  const allTeams = useTeams()
  startSelectRender(allTeams)
})

const startSelectRender = (teams) => {
  // console.log("TeamSelect: Team select rendered to DOM")
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
    `
}