<template>
  <div class="turnDisplayer">
    <p class="player-rotate color-p1" v-show="!gameTurn">player1 turn!</p>
    <p class="player-rotate color-p2" v-show="gameTurn">player2 turn!</p>
  </div>
</template>

<script>
export default {
  computed: {
    gameTurn: {
      get () {
        return this.$store.state.goBang.gameTurn
      }
    }
  }
}
</script>

<style>

</style>
