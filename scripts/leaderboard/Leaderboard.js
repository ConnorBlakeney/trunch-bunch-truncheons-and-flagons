export const LeaderboardHTML = (leaderboardObj) => {
    return `
    <div class="leaderboard-row">
        <div class="leaderboard-team-name">
            ${leaderboardObj.teamName}
        </div>
        <div class="leaderboard-player-count">
            ${leaderboardObj.playerCount}
        </div>
        <div class="leaderboard-score">
            ${leaderboardObj.teamScore}
        </div>
    </div>
    `
}
