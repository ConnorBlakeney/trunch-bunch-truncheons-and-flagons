// this is the HTML generator for the score Object

export const scoreHTMLConverter = (score) => {
      return `
            <ul class="score--object">
                  <li class="score--item score--gameID">
                        ${score.gameID}
                  </li>
                  <li class="score--item score--teamID">
                        ${score.teamID}
                  </li>
                  <li class="score--item score--teamName">
                        ${score.teamName}
                  </li>
                  <li class="score--item score--teamScore">
                        ${score.teamScore}
                  </li>
                  <li class="score--item score--gameTimestamp>
                  ${ new Date(score.gameTimestamp).toLocaleDateString("en-US")}
                  </li>
            </ul>
      `
}