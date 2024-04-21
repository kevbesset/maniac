<script setup lang="ts">
import { computed, Transition, TransitionGroup } from 'vue'

const props = withDefaults(
  defineProps<{
    name: string
    mode?: 'in-out' | 'out-in' | 'default'
    group?: boolean
  }>(),
  {
    mode: 'out-in'
  }
)

const transitionName = computed(() => (props.name ? `${props.name}-` : props.name))

const transitionComponent = computed(() => (props.group ? TransitionGroup : Transition))
</script>

<template>
  <Component :is="transitionComponent" :name="transitionName" :mode>
    <slot></slot>
  </Component>
</template>
