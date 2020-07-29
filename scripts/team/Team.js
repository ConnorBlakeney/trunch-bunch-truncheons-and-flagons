export const teamHTMLConverter = (teamObj) => {
  return `
  <p>Team Name: ${teamObj.teamName} </p>
  <p>Date Created: ${ new Date(teamObj.dateCreated).toLocaleDateString('en-US')  }</p>
  `
}