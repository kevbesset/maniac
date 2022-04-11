<script setup lang="ts">
    import { computed, Transition, TransitionGroup, useAttrs } from 'vue'

    const props = withDefaults(
        defineProps<{
            name?: string
            mode?: 'in-out' | 'out-in' | 'default'
            group?: boolean
        }>(),
        {
            name: undefined,
            mode: 'out-in',
        }
    )

    const transitionName = computed(() =>
        props.name ? `${props.name}-` : props.name
    )

    const transitionComponent = computed(() =>
        props.group ? TransitionGroup : Transition
    )

    const boundings = computed(() => ({
        ...useAttrs(),
        name: transitionName.value,
        mode: props.mode,
    }))
</script>

<template>
    <Component :is="transitionComponent" v-bind="boundings">
        <slot></slot>
    </Component>
</template>
