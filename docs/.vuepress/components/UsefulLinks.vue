<template>
  <div class="UsefulLinks">
    <slot/>
  </div>
</template>

<script>
/**
 * @module UsefulLinks
 */
export default {
  name: 'UsefulLinks'
}
</script>

<style lang="scss">
@import "../theme-styling/utils";

.UsefulLinks {
  border: 1px solid $color-white-ter;
  padding: $spacing;
  padding-left: 0;
  border-radius: 4px;
  background: linear-gradient($color-white 40%, $color-white-bis);
  color: $color-gray;
  box-shadow: $box-shadow;
  margin: $spacing-xlarge 0;
}
</style>
