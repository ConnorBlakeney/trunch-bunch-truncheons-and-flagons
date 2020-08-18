const eventHub = document.querySelector(".container")

let scores = []
export const useScores = () => scores.slice()

export const getScores = () => {
      return fetch("http://localhost:8088/teamScores")
        .then((response) => response.json())
        .then((parsedScores) => {
          scores = parsedScores
        })
}

const dispatchStateChangeEvent = () => {
    const scoreStateChangedEvent = new CustomEvent("scoreStateChanged")

    eventHub.dispatchEvent(scoreStateChangedEvent)
}

export const saveScores = (score) => {
    const jsonScore = JSON.stringify(score)

    return fetch('http://localhost:8088/teamScores', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: jsonScore
    })
    .then(getScores)
    .then(dispatchStateChangeEvent)
}