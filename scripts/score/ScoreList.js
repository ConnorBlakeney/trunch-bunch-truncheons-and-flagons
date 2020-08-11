import { useScores, getScores } from "./ScoreProvider.js";
import { scoreHTMLConverter } from "./Score.js"

const scoreListTarget = document.querySelector(".lb--container")

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
