<template>
  <v-card  
    class="shadow-sm br-8 " 
    max-width="100%" 
    :class="cardHoverShadow ? 'card-hover-shadow' : '' "
  >
    <slot />
  </v-card>
</template>

<script>
export default {
 name: "Card",
 props: {
    cardHoverShadow: {
      type: Boolean,
      default: false
    }
  },
}
</script>

<style lang="scss" scoped>
.card-hover-shadow {
    cursor: pointer;
    transition: all 250ms ease-in-out 0s;
    &:hover {
        box-shadow:rgb(3 0 71 / 9%) 0px 8px 45px  !important;
        transition: all 250ms ease-in-out 0s;
    }
  }
</style>