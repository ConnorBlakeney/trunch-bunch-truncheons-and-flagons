import { useScores, getScores } from "./ScoreProvider.js";
import { scoreHTMLConverter } from "./Score.js"

const scoreListTarget = document.querySelector(".sidebar--leaderboard")

const render = (scores) => {

      let scoreListHTML = ""
      scores.forEach((scoreObject) => {
          scoreListHTML += scoreHTMLConverter(scoreObject)
      })

  console.log(scoreListHTML)

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
     console.log("SCORE LIST WAS INVOKED")   
      getScores()
            .then(() => {
                  const scores = useScores()
            console.log(scores, "TEST SCORES RENDER")
                  render(scores)
            })
  }
