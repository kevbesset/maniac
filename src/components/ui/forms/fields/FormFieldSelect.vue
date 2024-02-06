<script setup lang="ts">
  import { FormOption } from '@/types/Form.type'
  import { FieldMeta } from 'vee-validate'

  defineProps<{
    name: string
    id?: string
    meta?: FieldMeta<unknown>
    options?: FormOption[]
  }>()
  
  const value = defineModel<unknown>()
</script>

<template>
  <select
    :id="id"
    v-model="value"
    :name="name"
    class="input"
    :class="{
      'input--error': !meta?.valid
    }"
  >
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.label }}
    </option>
  </select>
</template>

<style scoped lang="scss">
  @import '@/assets/sass/placeholders/form';

  .input {
    border: none;
    background: none;
    box-shadow: none;
    border-radius: 0;

    &:not(&--discret) {
      @extend %form__input;
    }
  }
</style>
