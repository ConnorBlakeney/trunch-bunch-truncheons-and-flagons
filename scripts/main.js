import {ScoreList} from "./score/ScoreList.js"
import {listTeams} from "./teams/TeamList.js"
import {PlayerList} from "./player/PlayerList.js"
import {TeamForm} from "./teams/TeamForm.js"
import {PlayerForm} from "./player/PlayerForm.js"
import {TeamSelect} from "./teams/TeamSelect.js"
import {listLeaderboard} from "./leaderboard/LeaderboardList.js"
import {buttonRender} from "./game/GameStartButton.js"
import "./game/GameStartSelect.js"
import "./game/GameScores.js"

ScoreList()
listTeams()
PlayerList()
TeamForm()
PlayerForm()
TeamSelect()
listLeaderboard()
buttonRender()