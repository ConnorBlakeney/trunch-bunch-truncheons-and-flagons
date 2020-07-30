const scores = [
      {
            "gameID": 1,
            "teamID": 1,
            "teamScore": 10,
            "gameTimestamp": "1/2/2020"
      },
      {
            "gameID": 28,
            "teamID": 2,
            "teamScore": 27,
            "gameTimestamp": "5/8/2021"
      },
      {
            "gameID": 28463,
            "teamID": 3,
            "teamScore": 38,
            "gameTimestamp": "7/9/2022"
      }
]

export const useScores = () => {
      return scores.slice()
}

// export const getScores = () => {

//       return fetch("WEBSITE GOES HERE")
//             .then(response => response.json())
//                   .then(
//                         scoresArray => {
//                               scores = scoresArray
//                         }
//                   )
// }