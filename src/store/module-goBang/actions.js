export const turnChange = ({ commit }) => {
  commit('turnChange')
}

export const p1ScoreChange = ({ commit }, val) => {
  commit('p1ScoreChange', val)
}

export const p2ScoreChange = ({ commit }, val) => {
  commit('p2ScoreChange', val)
}

export const resetFunc = ({ commit, dispatch }) => {

}

export const scene1Clicked = ({ commit }) => {
  commit('setSceneOne', false)
  commit('setSceneTwo', true)
}

export const scene2Clicked = ({ commit }) => {
  commit('setSceneTwo', false)
  commit('setBoardShow', true)
}

export const setPlayerNum = ({ commit }, val) => {
  commit('setPlayerNum', val)
}

export const setColor = ({ commit }, val) => {
  commit('setColor', val)
}
