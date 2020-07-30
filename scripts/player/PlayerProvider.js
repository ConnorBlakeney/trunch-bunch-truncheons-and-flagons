    const players = [
    {
        id: "",
        nameFirst: "",
        nameLast: "",
        countryOrigin: "",
        team: ""
    }
]
    
    export const usePlayers = () => {
        return players.slice()
    }

    export const getPlayers = () => {
        return fetch("")
        .then(response => response.json())
        .then(
            playersArray => {
                players = playersArray
            }
        )
    }