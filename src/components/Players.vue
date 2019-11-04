<template>
  <div>
    <ul class="players">
      <li v-for="(player, i) in players" :key="i" class="players__player">
        <button @click.prevent="() => onClick(player)" class="players__player-btn">
          <ul class="players__stats-wrapper">
            <li class="players__photo">
              <img :src="player.HEAD_SHOT" class="players__photo-img" @error="onImageError" />
            </li>
            <li class="players__stats">
              <ul class="players__stat-lines">
                <li class="players__stat-line--name">{{player.PLAYER_NAME}}</li>
                <li class="players__stat-line--others">
                  <div>Age: {{player.AGE}}</div>
                  <div>Height: {{player.PLAYER_HEIGHT}}</div>
                  <div>PPG: {{player.PTS}}</div>
                  <div>APG: {{player.AST}}</div>
                  <div>RPG: {{player.REB}}</div>
                </li>
              </ul>
            </li>
          </ul>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["players", "onClick"],
  methods: {
    onImageError(e) {
      e.target.src = require("./../assets/303792.svg");
    }
  }
};
</script>

<style scoped lang="scss">
.players {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  &__player {
    width: 100vw;
    height: auto;
    padding: 0;
    margin: 0;
    overflow: hidden;
    display: block;
    position: relative;

    @media screen and (min-width: 400px) {
      width: 50vw;
      height: 50vw;
    }

    @media screen and (min-width: 600px) {
      width: 33.3333333vw;
      height: 33.3333333vw;
      max-width: 250px;
      max-height: 250px;
    }

    &:hover {
      .players__stat-line--name {
        opacity: 0;
      }
      .players__stat-line--others {
        opacity: 1;
      }
      .players__photo-img {
        transform: scale3d(1.1, 1.1, 1);
      }
    }
  }

  &__player-btn {
    border: none;
    background: none;
    padding: 0;
    margin: 0;
    overflow: hidden;
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  &__btn {
    background: none;
    border: none;
  }

  &__logo {
    width: 100%;
    height: 100%;
  }

  &__stats-wrapper {
    list-style: none;
    padding: 0;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
  }

  &__stats {
    position: absolute;
    padding: 0;
    width: inherit;
    height: inherit;
    width: inherit;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }

  &__stat-lines {
    list-style: none;
    padding: 0;
    margin: 0;
    font-weight: 700;
    width: inherit;
    height: inherit;
    position: relative;
  }

  &__stat-line {
    &--name {
      padding: 20px 0;
      color: #fff;
      background: #022f4fdd;
      width: inherit;
      transition: 0.2s all cubic-bezier(0.075, 0.82, 0.165, 1);
      position: absolute;
      bottom: 0;
    }

    &--others {
      height: inherit;
      padding: 20px 0;
      color: #fff;
      background: #022f4fdd;
      width: inherit;
      transition: 0.2s all cubic-bezier(0.075, 0.82, 0.165, 1);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      opacity: 0;
      line-height: 1.5;
      font-size: 0.9em;
    }
  }

  &__photo {
    width: inherit;
    height: inherit;
    display: block;
  }

  &__photo-img {
    width: inherit;
    height: inherit;
    display: block;
    object-position: center;
    object-fit: cover;
    transition: 0.5s all cubic-bezier(0.075, 0.82, 0.165, 1);
  }
}
</style>