export const LeaderboardHTML = (leaderboardObj) => {
    return `
    <div class="scoreboard-row">
        <div class="scoreboard-team-name">
            ${leaderboardObj.teamName}
        </div>
        <div class="scoreboard-player-count">
            ${leaderboardObj.playerCount}
        </div>
        <div class="scoreboard-score">
            ${leaderboardObj.teamScore}
        </div>
    </div>
    `
}
