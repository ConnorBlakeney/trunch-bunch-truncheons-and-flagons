import { useTeams } from "./TeamProvider.js";
import { teamHTMLConverter } from "./Team.js";

const contentTarget = document.querySelector('.container')

export const listTeams = () => {
  const allHTML = useTeams().map( (team) => {
    return teamHTMLConverter(team)
  }).join("")
  render(allHTML)
}

const render = (htmlString) => {
  contentTarget.innerHTML += `${htmlString}`
}