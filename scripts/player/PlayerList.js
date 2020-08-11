import{usePlayers, getPlayers} from "./PlayerProvider.js"
import{ PlayerHTML } from "./Player.js"
 
const contentElement = document.querySelector(".lb--container")

 export const PlayerList = () => {
    getPlayers()
        .then( () => {
            const players = usePlayers()
    
            let playerHTMLRepresentations = ""
        
            for(const currentPlayerObj of players){
                playerHTMLRepresentations += PlayerHTML(currentPlayerObj)
            }
            render(playerHTMLRepresentations)
        })
    
}


const render = (playerHTMLRepresentations) => {
    contentElement.innerHTML += `
    <article class="player">
    ${playerHTMLRepresentations}
    </article>
    `
}