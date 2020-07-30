const scores = [
      {
            "gameID": 1,
            "teamID": 1,
            "teamScore": 10,
            "gameTimestamp": 1596118889999
      },
      {
            "gameID": 28,
            "teamID": 2,
            "teamScore": 27,
            "gameTimestamp": 1596118899999
      },
      {
            "gameID": 28463,
            "teamID": 3,
            "teamScore": 38,
            "gameTimestamp": 1596118889696
      }
]

export const useScores = () => {
      return scores.slice()
}

export const getScores = () => {
      return fetch("http://localhost:8088/database")
        .then((response) => response.json())
        .then((parsedScores) => {
          scores = parsedScores
        })
    }