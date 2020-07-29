// let array = []??

const teams = [
    {
    "teamId":,
    "teamName":,
    "dateCreated": new Date().toLocaleString()
    }
]

export const useTeams = () => teams.slice()

export const getTeams = () => {
    return fetch(//???)
    .then(response => response.json())
    .then(//teamArray => teams = teamArray)
}