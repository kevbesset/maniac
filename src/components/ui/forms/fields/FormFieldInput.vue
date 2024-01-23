<script setup lang="ts">
  import { FormFieldInputModelValue } from '@/types/Form.type'
  import { FieldMeta } from 'vee-validate'

  defineProps<{
    name: string
    id?: string
    type?: string
    value?: FormFieldInputModelValue
    meta?: FieldMeta<FormFieldInputModelValue>
  }>()

  const emit = defineEmits<{
    (e: 'input', event: Event): void
    (e: 'blur', event: Event): void
  }>()
</script>

<template>
  <input
    :id="id"
    :value="value"
    :type="type"
    :name="name"
    class="input"
    :class="{
      'input--error': !meta?.valid
    }"
    @input="emit('input', $event)"
    @blur="emit('blur', $event)"
  />
</template>

<style scoped lang="scss">
  @import '@/assets/sass/placeholders/form';

  .input {
    @extend %form__input;
  }
</style>
