import { useScores, getScores } from "./ScoreProvider.js";
import { scoreHTMLConverter } from "./Score.js"

const scoreListTarget = document.querySelector(".scoreboard--container")
const eventHub = document.querySelector(".container")

const render = (scores) => {

      let scoreListHTML = ""
      scores.forEach((scoreObject) => {
          scoreListHTML += scoreHTMLConverter(scoreObject)
      })


      scoreListTarget.innerHTML = `
            <h2 class="heading heading--scores">
            Leaderboard
            </h2>
            <article class="list list--scores">
                  ${ scoreListHTML }
            </article>
      `
  }

export const ScoreList = () => { 
      getScores()
            .then(() => {
                  const scores = useScores()
                  render(scores)
            })
  }


eventHub.addEventListener("roundScoresHaveBeenRecorded", customEvent => {
    let currentTeamOneScore = []
    let currentTeamTwoScore = []
    let currentTeamThreeScore = []

    currentTeamOneScore += customEvent.detail.teamOneScore
    currentTeamTwoScore += customEvent.detail.teamTwoScore
    currentTeamThreeScore += customEvent.detail.teamThreeScore

    console.log(currentTeamOneScore, "test1")
})




// detail: {
//         roundScores: {
//           teamOneScore: teamOneScore;
//           teamTwoScore: teamTwoScore;
//           teamThreeScore: teamThreeScore
//         }
//       }