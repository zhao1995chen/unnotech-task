<template>
<div class="w-8 md:w-12 h-8 md:h-12">
  <svg class="w-full h-full">
    <use :xlink:href="`#${name}`" />
  </svg>
</div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
