<template>
  <select @change.prevent="onChange">
    <slot></slot>
  </select>
</template>

<script>
export default {
  name: "Select",
  props: ["onChange", "refer"]
};
</script>

<style scoped lang="scss">
</style>