<script setup lang="ts">
import useTracer from '@/libs/uses/useTracer'
import { computed, onMounted, ref, useSlots, watch } from 'vue'
import Card from '@/components/ui/Card.vue'

const tabs = computed(() => slots.default?.().map(({ props }) => props?.tab))

const listRef = ref()
const currentTab = ref()
const transitionName = ref('transition-next')

const slots = useSlots()
const { styles, refresh } = useTracer(listRef, '.tabs__item--active')

const bodyComponent = computed(() =>
  slots.default?.().find(({ props }) => props?.tab === currentTab.value)
)
const currentTabIndex = computed(
  () => tabs.value?.findIndex((tab) => tab === currentTab.value) || 0
)

function handleTabChange(nextTab: string) {
  const tabIndex = tabs.value?.findIndex((tab) => tab === nextTab) || 0
  transitionName.value = tabIndex < currentTabIndex.value ? 'transition-prev' : 'transition-next'
  currentTab.value = nextTab
}

onMounted(() => {
  if (tabs.value && (!currentTab.value || !tabs.value.includes(currentTab.value))) {
    currentTab.value = tabs.value[0]
  }
})

watch(currentTab, () => {
  refresh()
})
</script>

<template>
  <div class="tabs">
    <div class="tabs__header">
      <div class="tabs__tracer" :style="styles"></div>
      <div ref="listRef" class="tabs__list">
        <button
          v-for="tab in tabs"
          :key="tab"
          type="button"
          class="tabs__item"
          :class="{
            'tabs__item--active': currentTab === tab
          }"
          @click="handleTabChange(tab)"
        >
          {{ tab }}
        </button>
      </div>
    </div>
    <Card class="tabs__body">
      <Transition :name="transitionName" mode="default">
        <div :key="currentTab" class="tabs__inner">
          <Component :is="bodyComponent" />
        </div>
      </Transition>
    </Card>
  </div>
</template>

<style scoped lang="scss">
.tabs {
  width: 100%;

  &__header {
    position: relative;
    background-color: hsl(var(--colorMuted));
    border-radius: var(--borderRadius);
    padding: 0.25em;
    margin-bottom: 0.5em;
  }

  &__list {
    position: relative;
    display: flex;
  }

  &__item {
    flex: 1;
    font-weight: 500;
    font-size: 0.875em;
    padding: 0.375rem 0.75rem;
    background: none;
    border: none;
    box-shadow: none;
    border-radius: var(--borderRadius);
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }

    &--active {
      pointer-events: none;
    }
  }

  &__tracer {
    position: absolute;
    bottom: 0.25em;
    left: 0.25em;
    height: calc(100% - 0.5em);
    background-color: hsl(var(--colorBackground));
    border-radius: var(--borderRadius);
    transition: all var(--transition);
    box-shadow: var(--shadow);
  }

  &__body {
    overflow: hidden;
    width: 100%;
  }
}

.transition-next,
.transition-prev {
  &-enter-active,
  &-leave-active {
    transition: transform var(--transition);
  }
}

.transition-next {
  &-enter-from {
    transform: translate3d(100%, 0, 0);
  }

  &-leave-to {
    transform: translate3d(-100%, 0, 0);
  }
}

.transition-prev {
  &-enter-from {
    transform: translate3d(-100%, 0, 0);
  }

  &-leave-to {
    transform: translate3d(100%, 0, 0);
  }
}
</style>
