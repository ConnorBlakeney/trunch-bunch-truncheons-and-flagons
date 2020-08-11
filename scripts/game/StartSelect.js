import {useTeams, getTeams} from "../teams/TeamProvider.js"

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
              <option value="0">Please select a team</option>
              ${teams
                .map((team) => {
                  return `<option value="${team.id}">${team.name}</option>`
                })
                .join("")} 
          </select>

          <select class="dropdown" id="teamSelect2">
          <option value="0">Please select a team</option>
          ${teams
            .map((team) => {
              return `<option value="${team.id}">${team.name}</option>`
            })
            .join("")}
      </select>

      <select class="dropdown" id="teamSelect3">
      <option value="0">Please select a team</option>
      ${teams
        .map((team) => {
          return `<option value="${team.id}">${team.name}</option>`
        })
        .join("")}
  </select>
      `
  }
  
  export const TeamSelect = () => {
    // console.log("TeamSelect: Initial render of team select")
    getTeams().then(() => {
      const allTeams = useTeams()
      render(allTeams)
    })
  }