import { useScores } from "./ScoreProvider.js";
import { scoreHTMLConverter } from "./Score.js"

const scoreListTarget = document.querySelector(".sidebar--leaderboard")

const scoreArray = useScores() 

const render = (scoreArray) => {

      let scoreListHTML = ""
      scoreArray.forEach((scoreObject) => {
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
        
      render(scoreArray)

      // getScores()
      //       .then(() => {
      //             const scores = useScores()
      //             render(scores)
      //       })
  }