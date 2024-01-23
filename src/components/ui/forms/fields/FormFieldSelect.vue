<script setup lang="ts">
  import { FormFieldInputModelValue, FormOption } from '@/types/Form.type'
  import { FormTheme } from '@/vars/FormAttr'
  import { FieldMeta } from 'vee-validate'
  import { computed } from 'vue'

  const BLOCK_CLASS = 'input'

  const props = defineProps<{
    name: string
    id?: string
    meta?: FieldMeta<FormFieldInputModelValue>
    options?: FormOption[]
    theme: FormTheme
  }>()

  const emit = defineEmits<{
    (e: 'input', event: Event): void
    (e: 'blur', event: Event): void
  }>()

  const classList = computed(() => [
    BLOCK_CLASS,
    `${BLOCK_CLASS}--${props.theme}`,
    {
      [`${BLOCK_CLASS}--error`]: !props.meta?.valid
    }
  ])
</script>

<template>
  <select
    :id="id"
    :name="name"
    :class="classList"
    @input="emit('input', $event)"
    @blur="emit('blur', $event)"
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
