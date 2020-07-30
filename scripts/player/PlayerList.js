import{usePlayers, getPlayers} from "./PlayerProvider.js"
 import{playerHTML} from "./Player.js"
 
 export const PlayerList = () => {
     const contentElement = document.querySelector(".players")
     const players = usePlayers()
     
     let playerHTMLRepresentations = ""
 
     for(const currentPlayerObj of players){
         playerHTMLRepresentations += playerHTML(currentPlayerObj)
     }
 
     contentElement.innerHTML += `
    
     <article class="player">
     ${playerHTMLRepresentations}
     </article>
     `
     }