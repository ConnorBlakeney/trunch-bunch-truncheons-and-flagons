import {saveTeam} from "./TeamProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".create-team-form--container")

// Handle browser-generated click event in component
eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "teamButton") {
    const teamName = document.querySelector("#teamName")
    if (teamName.value.length === 0) {
        window.alert("Please enter a team name!")
    }
      else if (teamName.value.length >= 11){
        window.alert("Character limit for team name is 11. Please follow these rules! ")
      } else {
      const newTeam = {
        name: teamName.value,
        timestamp: Date.now(),
      }
  
      // Change API state and application state
      saveTeam(newTeam)
      render()
    }
    // Make a new object representation of a note
  }
})


const render = () => {
  contentTarget.innerHTML = `
        <section class="teamForm">
            <input type="text" id="teamName" placeholder="Enter Team Name" />
            <button id="teamButton">Create Team</button>
        </section>
    `
}

export const TeamForm = () => {
  render()
}
