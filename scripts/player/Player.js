export const PlayerHTML = (playerObj) => {
    return `
    <ul class="list--players>
        <div class="criminalCard"> 
            <li class="player--item player--nameFirst>${playerObj.id}</li>
            <li class="player--item player--nameFirst>${playerObj.nameFirst}</li>
            <li class="player--item player--nameLast>${playerObj.nameLast}</li>
            <li class="player--item player--originCountry> ${playerObj.countryOrigin}</li>
            <li class="player--item player--team>${playerObj.teamId}</li>
        </div>
    </ul>
        `
}