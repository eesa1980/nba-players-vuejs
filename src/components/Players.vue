<template>
  <div>
    <ul class="players">
      <Player v-for="(player, i) in players" :player="player" :key="i" :onClick="onClick" />
      <div class="bg-img-wrapper">
        <img :src="require(`./../assets/teams/${abbrev}_logo.svg`)" class="bg-img" />
      </div>
    </ul>
  </div>
</template>

<script>
import Player from "./Player";

export default {
  props: ["players", "onClick", "abbrev"],
  components: { Player }
};
</script>

<style scoped lang="scss">
.bg-img-wrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}
.bg-img {
  width: 100%;
  opacity: 0.2;
}
.players {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
</style>