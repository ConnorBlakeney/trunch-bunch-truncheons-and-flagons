import {useTeams, getTeams} from "./TeamProvider.js"

const contentTarget = document.querySelector(".teamSelectContainer")
const eventHub = document.querySelector(".container")

// eventHub.addEventListener("change", (changeEvent) => {
//   if (changeEvent.target.id === "teamSelect") {
//     console.log("TeamSelect: User chose a team option")

//     const teamSelectedEvent = new CustomEvent("teamSelected", {
//       detail: {
//         teamName: changeEvent.target.value, // "Suzie Police"
//       },
//     })

//     console.log("Dispatch custom teamSelected event")
//     eventHub.dispatchEvent(teamSelectedEvent)
//   }
// })

eventHub.addEventListener("teamStateChanged", () => {
  const allTeams = useTeams()
  render(allTeams)
})

const render = (teams) => {
  console.log("TeamSelect: Team select rendered to DOM")
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
  console.log("TeamSelect: Initial render of team select")
  getTeams().then(() => {
    const allTeams = useTeams()
    render(allTeams)
  })
}
