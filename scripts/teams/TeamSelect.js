import {useTeams, getTeams} from "./TeamProvider.js"
import {getPlayers, usePlayers} from "../player/PlayerProvider.js";

const contentTarget = document.querySelector(".teamSelectContainer")
const eventHub = document.querySelector(".container")

let players = []
let teams = []
const teamSizeLimit = 3

eventHub.addEventListener("teamStateChanged", () => {
  TeamSelect()
})

eventHub.addEventListener("playerStateChanged", () => {
  TeamSelect()
})

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

export const TeamSelect = () => {
  getTeams()
    .then(getPlayers)
    .then(() => {
      players = usePlayers()
      teams = useTeams()
      filterOutFullTeams()
      render()
  })
}

const filterOutFullTeams = () => {
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