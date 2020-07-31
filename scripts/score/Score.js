// this is the HTML generator for the score Object

export const scoreHTMLConverter = (score) => {
      return `
            <ul class="score--object">
                  <li class="score--item score--gameID">
                        ${score.id}
                  </li>
                  <li class="score--item score--teamID">
                        ${score.teamId}
                  </li>
                  <li class="score--item score--teamScore">
                        ${score.gameScore}
                  </li>
                  <li class="score--item score--gameTimeStamp>
                  ${ new Date(score.gameTimeStamp).toLocaleDateString("en-US")}
                  </li>
            </ul>
      `
}