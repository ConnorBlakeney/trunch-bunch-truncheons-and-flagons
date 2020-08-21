import {saveTeam} from "./TeamProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".create-team-form--container")
// Handle browser-generated click event in component
eventHub.addEventListener("teamFormHasRendered", () => {
  const inputTarget = document.querySelector("#teamName")
  const buttonCreateTeam = document.querySelector("#teamButton")
  inputTarget.addEventListener("keyup", e => {
    let x = e.which || e.keycode;
    let charCount = inputTarget.value.trim().length
    buttonCreateTeam.innerHTML = `Create Team`

    if (inputTarget.value.trim() !== "") {
      if ((x == 32 || x == 8 || x == 14 || x == 15 || x >= 65 && x <= 90) || (x >= 97 && x <= 122)) {
        buttonCreateTeam.disabled = false
        buttonCreateTeam.classList.remove("btn-dis-char-type")
      }
      else{
        buttonCreateTeam.disabled = true
        buttonCreateTeam.classList.add("btn-dis-char-type")
        buttonCreateTeam.innerHTML = `
        Only letters please!
        `
      }

      if(charCount > 0 && charCount <= 20 ) {
        buttonCreateTeam.disabled = false
      }
      else{
        buttonCreateTeam.disabled = true
        buttonCreateTeam.classList.add("btn-dis-char-type")
        buttonCreateTeam.innerHTML = `
        Team Name is too long!
        `
      }
    }
  })
})



eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "teamButton") {
    const teamName = document.querySelector("#teamName")

      const newTeam = {
        name: teamName.value,
        timestamp: Date.now(),
      }
// Change API state and application state
      saveTeam(newTeam)
      render()
    }
})


const dispatchTeamFormRendered = () => {
  const teamFormRendered = new CustomEvent("teamFormHasRendered")
  eventHub.dispatchEvent(teamFormRendered)
}

const render = () => {
  contentTarget.innerHTML = `
        <section class="teamForm">
            <input type="text" class="input-text" id="teamName" placeholder="Team Name" pattern="[A-Za-z]{11}" title="Team names cannot contain numbers or special characters." />
            <button class="btn btn-create-team" id="teamButton" disabled >Create Team</button>
        </section>
        <span class="team-form-overlay">
          <button class="btn btn-add-new-team" id="addNewTeamButton">New Team</button>
        </span>
    `
    dispatchTeamFormRendered()
}
export const TeamForm = () => {
  render()
}
