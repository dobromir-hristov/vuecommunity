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
  padding: $spacing;
  padding-left: 0;
  border-radius: 2px;
  color: $color-gray;
  box-shadow: $box-shadow;
  margin: $spacing-xlarge 0;
}
</style>
