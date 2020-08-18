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

// export const patchScores = (score) => {
//     const jsonScore = JSON.stringify(score)

//     return fetch('http://localhost:8088/teamScores/1', {
//         method: "PATCH",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: jsonScore({
//         gameScore: 3
//     }) 
//     })
//     .then(getScores)
//     .then(dispatchStateChangeEvent)
// }

// fetch('https://jsonplaceholder.typicode.com/todos/1', {
// method: 'PATCH',
// body: JSON.stringify({
// completed: true
// }),
// headers: {
// "Content-type": "application/json; charset=UTF-8"
// }
// })
// .then(response => response.json())
// .then(json => console.log(json))
// /* will return
// {
// "userId": 1,
// "id": 1,
// "title": "delectus aut autem",
// "completed": true
// }