export const LeaderboardHTML = (leaderboardObj) => {
    return `
        <section class="leaderboard">
            <span class="team-column">
                ${leaderboardObj.teamName}
            </span>
            <span class="player-column">
                <h5 class="header--player-column">
                    Player Count
                </h5>
                ${leaderboardObj.playerCount}
            </span>
            <span class="score-column">
                <h5 class="header--score-column">
                    Team Score
                </h5>
                ${leaderboardObj.teamScore}
            </span>
        </section>
    `
}

