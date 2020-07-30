const scores = [
    {
        gameID: "",
        teamID: "",
        teamScore: "",
        gameDate: Date.new()

    }
]

export const useScores = () => {
    return useScores.slice()
}

export const getScores = () => {
    return fetch("")
    .then(response => response.json())
        .then(
            scoresArray => {
                scores = scoresArray
            }
        )
}