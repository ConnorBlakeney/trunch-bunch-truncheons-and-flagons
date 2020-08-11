export const LeaderboardHTML = (leaderboardObj) => {
    return `
        <section class="leaderboard">
            <span class="team-column">
                ${leaderboardObj.teamName}
            </span>
            <span class="player-column">
                ${leaderboardObj.playerCount}
            </span>
            <span class="score-column">
                ${leaderboardObj.teamScore}
            </span>
        </section>
    `
}

