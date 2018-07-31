<template>
  <div class="out-container color-out-container">
    <div class="in-container color-in-container">
      <div class="buttons" :v-show="playScene">
        <p class="player">player1: {{ p1ScoreChange }}</p>
        <p class="player">player2: {{ p2ScoreChange }}</p>
        <p class="reset" v-on:click="resetFunc()">reset</p>
      </div>
      <h1 class="game-title color-choice" :v-show="!playScene">Go Bang!</h1>
      <div class="scene" :v-show="sceneOne">
        <p class="scene1-choice color-choice" v-on:click="onePlayerClicked()">One Player</p>
        <p class="scene1-choice color-choice" v-on:click="twoPlayerClicked()">Two Player</p>
      </div>
      <div class="scene" :v-show="sceneTwo">
        <p class="scene2-title color-choice">Would you like to play Black or White?</p>
        <p class="scene2-choice color-choice" v-on:click="blackClicked()">Black</p>
        <p class="scene2-choice color-choice" v-on:click="whiteClicked()">White</p>
      </div>
      <div :v-if="boardShow">
        <gameboard />
      </div>
      <div class="result-display" :v-show="resultShow">
        <h2 class="result-message">{{ winMessage }}</h2>
      </div>
    </div>
    <a class="footer" href="https://codepen.io/shadow727/" target="_blank">Contact Author </a>
  </div>
</template>
<script>
export default {
  computed: {
    p1ScoreChange: {
      get () {
        return this.$store.state.goBang.p1ScoreChange
      },
      set (val) {
        this.$store.dispatch('goBang/p1ScoreChange', val)
      } 
    },
    p2ScoreChange: {
      get () {
        return this.$store.state.goBang.p2ScoreChange
      },
      set (val) {
        this.$store.dispatch('goBang/p1ScoreChange', val)
      }
    },
    sceneOne: {
      get () {
        return this.$store.state.goBang.sceneOne
      }
    },
    sceneTwo: {
      get () {
        return this.$store.state.goBang.sceneTwo
      }
    },
    boardShow: {
      get () {
        return this.$store.state.goBang.boardShow
      }
    },
    resultShow: {
      get () {
        return this.$store.state.goBang.resultShow
      }
    },
    winMessage: {
      get () {
        return this.$store.state.goBang.winMessage
      }
    }
  },
  methods: {
    resetFunc() {
      this.$store.dispatch('goBang/resetFunc')
    },
    onePlayerClicked() {
      this.$store.dispatch('goBang/setPlayerNum', 1)
      this.scene1Clicked()
    },
    twoPlayerClicked() {
      this.$store.dispatch('goBang/setPlayerNum', 2)
      this.scene1Clicked()
    },
    blackClicked() {
      this.$store.dispatch('goBang/setColor', 1)
      this.scene2Clicked()
    },
    whiteClicked() {
      this.$store.dispatch('goBang/setColor', 2)
      this.scene2Clicked()
    },
    scene1Clicked() {
      this.$store.dispatch('goBang/scene1Clicked')
    },
    scene2Clicked() {
      this.$store.dispatch('goBang/scene2Clicked')
    }
  }
}
</script>
<style>

</style>
