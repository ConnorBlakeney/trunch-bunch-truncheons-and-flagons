import {saveTeam} from "./TeamProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".create-team-form--container")
// Handle browser-generated click event in component

eventHub.addEventListener("teamFormHasRendered", () => {
  const inputTarget = document.querySelector("#teamName")
  const buttonCreateTeam = document.querySelector("#teamButton")

  buttonCreateTeam.innerHTML = `...we're waiting.`

  inputTarget.addEventListener("keyup", () => {
    let name = inputTarget.value
    let charCount = name.length

    if (charCount < 4 ) {
        buttonCreateTeam.disabled = true
        buttonCreateTeam.innerHTML = `
        Team Name is too short!
        `
      }
    else if (charCount > 20){
        buttonCreateTeam.disabled = true
        buttonCreateTeam.classList.add("btn-dis-char-type")
        buttonCreateTeam.innerHTML = `
        Team Name is too long!
        `
      }
    else {
      buttonCreateTeam.disabled = false
      buttonCreateTeam.innerHTML = `
      Create Team`
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
      renderAddTeamButton()
    }
})

eventHub.addEventListener("click", click => {
  const teamFormTarget = document.querySelector(".create-team-form--container")
  if (click.target.classList.contains("btn-add-new-team")) {
    renderTeamForm()
  }
})

const renderAddTeamButton = () => {
  contentTarget.innerHTML = `
        <div class="addTeam">
          <button class="btn btn-add-new-team" id="addNewTeamButton">Add New Team</button>
        </div>
    `
}

const renderTeamForm = () => {
  contentTarget.innerHTML = `
    <div class="teamForm">
            <label class="lbl-create-team" for="input-new-team">Enter Team Name</label>
            <input type="text" class="input-text" id="teamName" name="input-new-team" title="Team names cannot contain numbers or special characters." />
            <button class="btn btn-create-team" id="teamButton" disabled ></button>
    </div>
  `
  dispatchTeamFormRendered()
}

const dispatchTeamFormRendered = () => {
  const teamFormRendered = new CustomEvent("teamFormHasRendered")
  eventHub.dispatchEvent(teamFormRendered)
}
export const TeamForm = () => {
  renderAddTeamButton()
}
