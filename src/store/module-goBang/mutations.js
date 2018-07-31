// import Vue from 'vue'

export const turnChange = (state) => {
  state.gameTurn = !state.gameTurn
}

export const p1ScoreChange = (state, val) => {
  state.p1Score = val
}

export const p2ScoreChange = (state, val) => {
  state.p2Score = val
}

export const setSceneOne = (state, val) => {
  state.sceneOne = val
}

export const setSceneTwo = (state, val) => {
  state.sceneTwo = val
}

export const setPlayerNum = (state, val) => {
  state.playerNumber = val
}

export const setColor = (state, val) => {
  state.p1Color = val
}

export const setBoardShow = (state, val) => {
  state.boardShow = val
}
