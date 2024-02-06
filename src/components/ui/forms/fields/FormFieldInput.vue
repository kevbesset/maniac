<script setup lang="ts">
  import { FieldMeta } from 'vee-validate'

  defineProps<{
    name: string
    id?: string
    type?: string
    meta?: FieldMeta<unknown>
  }>()
  const value = defineModel<unknown>()
</script>

<template>
  <input
    :id="id"
    v-model="value"
    :type="type"
    :name="name"
    class="input"
    :class="{
      'input--error': !meta?.valid
    }"
  />
</template>

<style scoped lang="scss">
  @import '@/assets/sass/placeholders/form';

  .input {
    @extend %form__input;
  }
</style>
