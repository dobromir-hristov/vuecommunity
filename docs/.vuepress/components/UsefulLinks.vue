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

<style>
.UsefulLinks {
  border: 1px solid #f0f0f0;
  padding: 1rem;
  padding-left: 0;
  border-radius: 4px;
  background: linear-gradient(#fff 40%, #f3f3f3);
  color: #6c6c6c;
  box-shadow: 0 4px 11px 0 hsla(233, 45%, 26%, 0.15), 0 1px 3px 0 hsla(232, 23%, 47%, 0.2)
}
</style>
