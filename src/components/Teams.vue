<template>
  <div class="wrapper">
    <ul class="teams">
      <li
        class="teams__team"
        v-for="(team, i) in teams"
        :key="i"
        @click.prevent="() => onClick(team)"
      >
        <button class="teams__btn">
          <img :src="require(`./../assets/teams/${team.Abbrev}_logo.svg`)" class="teams__logo" />
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["teams", "onClick"]
};
</script>

<style scoped lang="scss">
.wrapper {
  width: 100%;
  max-width: 800px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 0 auto;
}
.teams {
  list-style: none;
  padding: 0;
  margin: auto;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  height: auto;

  &__team {
    display: block;
    width: 80px;
    height: 80px;
    padding: 5px;
    margin: 0;
    transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);

    &:hover {
      transform: scale3d(1.1, 1.1, 1);
    }

    @media screen and (min-width: 500px) {
      width: 16.6666666%;
      height: 16.6666666%;
    }
  }

  &__btn {
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
  }

  &__logo {
    width: 100%;
    height: 100%;
  }
}
</style>