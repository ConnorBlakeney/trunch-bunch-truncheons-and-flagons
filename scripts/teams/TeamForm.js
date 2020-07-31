import { saveTeam } from "./TeamProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".create-team-form--container")

// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "teamButton") {

        const teamName = document.querySelector("#teamName")

        // Make a new object representation of a note
        const newTeam = {
            name: teamName.value,
            timestamp: Date.now()
        }

        // Change API state and application state
        saveTeam(newTeam)
    }
})

const render = () => {
    contentTarget.innerHTML = `
        <section class="teamForm">
            <input type="text" id="teamName" placeholder="Enter Team Name" />
            <button id="teamButton">Create Tream</button>
        </section>
    `
}

export const TeamForm = () => {
    render()
}