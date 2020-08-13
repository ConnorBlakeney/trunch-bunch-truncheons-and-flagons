const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".main--game-play")

const render = (teamObj) => {
    return `
    <div class="score--input--form">
        <fieldset class="input--container">
            <label for="score1">${teamObj.name}</label>
            <input name="score1" class="score--input" type="text" placeholder="Enter score..."></input>
        </fieldset>
        <fieldset class="input--container">
            <label for="score2">${teamObj.name}</label>
            <input name="score2" class="score--input" type="text" placeholder="Enter score..."></input>
        </fieldset>
        <fieldset class="input--container">
            <label for="score3">${teamObj.name}</label>
            <input name="score3" class="score--input" type="text" placeholder="Enter score..."></input>
        </fieldset>
        <button class="button button--save">Save Round Scores</button>
    </div>
`
}


