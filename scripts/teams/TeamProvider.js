let teams = []

/* 
const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const teamStateChangedEvent = new CustomEvent("teamStateChanged")

    eventHub.dispatchEvent(teamStateChangedEvent)
}
*/

export const useTeams = () => teams.slice()

export const getTeams = () => {
  return fetch("http://localhost:8088/database")
    .then((response) => response.json())
    .then((parsedTeams) => {
      teams = parsedTeams
    })
}
