export const ScoreHTMLConverter = (score) => {
    return `
    <ul class="list--scores">
        <li class="score--item score--gameID>${score.gameID}</li>
        <li class="score--item score--teamID>${score.teamID}</li>
        <li class="score--item score--teamScore>${score.teamScore}</li>
        <li class="score--item score--gameData>${score.gameDate}</li>
    </ul>
    `
}