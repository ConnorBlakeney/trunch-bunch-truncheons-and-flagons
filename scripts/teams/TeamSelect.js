import {useTeams, getTeams} from "./TeamProvider.js"

const contentTarget = document.querySelector(".teamSelectContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("teamStateChanged", () => {
  const allTeams = useTeams()
  render(allTeams)
})

const render = (teams) => {
  contentTarget.innerHTML = `
        <select class="dropdown" id="teamSelect">
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
  getTeams().then(() => {
    const allTeams = useTeams()
    render(allTeams)
  })
}
