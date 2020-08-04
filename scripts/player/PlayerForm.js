import {savePlayer} from "./PlayerProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".create-player-form--container")

// Handle browser-generated click event in component
eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "playerButton") {
    const playerNameFirst = document.querySelector("#playerNameFirst")
    const playerNameLast = document.querySelector("#playerNameLast")
    const countryOrigin = document.querySelector("#countryOrigin")
    const playerTeam = document.querySelector("#teamSelect")

    // Make a new object representation of a note
    const newPlayer = {
      nameFirst: playerNameFirst.value,
      nameLast: playerNameLast.value,
      countryOrigin: countryOrigin.value,
      teamId: parseInt(playerTeam.value),
    }

    // Change API state and application state
    savePlayer(newPlayer)
    render()
  }
})

const render = () => {
  contentTarget.innerHTML = `
        <section class="playerForm">
            <input type="text" id="playerNameFirst" placeholder="Enter Player First Name" />
            <input type="text" id="playerNameLast" placeholder="Enter Player Last Name" />
            <input type="text" id="countryOrigin" placeholder="Enter Player Country of Origin" />
            <button id="playerButton">Create Player</button>
        </section>
    `
}

export const PlayerForm = () => {
  render()
}
