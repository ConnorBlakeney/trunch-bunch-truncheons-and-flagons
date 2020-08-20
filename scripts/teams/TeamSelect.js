import {useTeams, getTeams} from "./TeamProvider.js"
import {getPlayers, usePlayers} from "../player/PlayerProvider.js";

const contentTarget = document.querySelector(".teamSelectContainer")
const eventHub = document.querySelector(".container")

let players = []
let teams = []
const teamSizeLimit = 3

eventHub.addEventListener("teamStateChanged", () => {
  prepareData()
  render()
})

eventHub.addEventListener("playerStateChanged", () => {
  prepareData()
  render()
})

export const TeamSelect = () => {
  getTeams()
    .then(getPlayers)
    .then(() => {
      prepareData()
      render()
  })
}

const prepareData = () => {
  players = usePlayers()
  teams = useTeams()
  teams = teams.filter( team => {
    let playerCount = 0
    players.forEach( player => {
      if( player.teamId === team.id) {
        playerCount++
      }
    })
    return playerCount < teamSizeLimit
  })
}

const render = () => {
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