const eventHub = document.querySelector(".container")
const startTarget = document.querySelector(".main--game-play")

eventHub.addEventListener("click", (clickEvent) => {
    if(clickEvent.target.id === "startButton") {
    const startButtonEvent = new CustomEvent("startButtonClicked")
    eventHub.dispatchEvent(startButtonEvent)
}
})

export const buttonRender = (team) => {
    startTarget.innerHTML = `
          <button id="startButton">Start Game</button>
      `
  }
