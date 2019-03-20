<template>
  <div class="UsefulLinksSection">
    <div class="UsefulLinksSection__title">
      {{ title }}
    </div>
    <div class="UsefulLinksSection__content">
      <slot/>
    </div>
  </div>
</template>

<script>
/**
 * @module UsefulLinksSection
 */
export default {
  name: 'UsefulLinksSection',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
@import "../theme-styling/utils";

.UsefulLinksSection {
  display: flex;
  flex-flow: column wrap;
  margin-bottom: $spacing;
  align-items: flex-start;

  &:last-of-type {
    margin-bottom: 0;
  }

  &__title {
    font-weight: bold;
    border-left: 4px solid $color-primary;
    padding-left: $spacing-tiny;
    margin-bottom: $spacing;
  }

  &__content {
    padding-left: $spacing-small;

    p {
      margin: 0;
      line-height: 1;

      & + p {
        margin-top: $spacing-small;
        padding-top: $spacing-small;
        border-top: 1px solid $color-white-bis;
      }
    }

    a .icon.outbound {
      margin-left: $spacing-tiny/2;
    }

    ul {
      line-height: 1;
      margin: 0;
      list-style-type: none;
      padding: 0;

      li {
        margin-bottom: $spacing-small;
        padding-bottom: $spacing-small;
        border-bottom: 1px solid $color-white-bis;

        &:last-of-type {
          border-bottom: none;
          margin-bottom: 0;
          padding-bottom: 0;
        }
      }
    }
  }

  @include tablet-landscape-and-up {
    flex-flow: row;
    /*margin-bottom: 0;*/
    &__title {
      flex: 1 1 30%;
      margin-bottom: 0;
    }

    &__content {
      flex: 1 1 70%;
    }
  }
}
</style>
