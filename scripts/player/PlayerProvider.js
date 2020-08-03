let players = []

const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
  const playerStateChangedEvent = new CustomEvent("playerStateChanged")

  eventHub.dispatchEvent(playerStateChangedEvent)
}

export const savePlayer = (player) => {
  const jsonPlayer = JSON.stringify(player)

  return fetch("http://localhost:8088/players", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: jsonPlayer,
  })
    .then(getPlayers)
    .then(dispatchStateChangeEvent)
}

export const usePlayers = () => {
  return players.slice()
}

export const getPlayers = () => {
  return fetch("http://localhost:8088/players")
    .then((response) => response.json())
    .then((playersArray) => {
      players = playersArray
    })
}
