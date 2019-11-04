<template>
  <div class="spinner">
    <img :src="require('./../assets/nba-logo-transparent.png')" class="spinner__img" />
  </div>
</template>

<script>
export default {
  name: "Spinner"
};
</script>


<style lang="scss">
.spinner {
  position: fixed;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  background: whitesmoke;
  z-index: 10;

  &__img {
    width: 80px;
    height: auto;
    animation-name: spin;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
}

@keyframes spin {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
}
</style>