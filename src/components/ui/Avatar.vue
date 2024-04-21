<script setup lang="ts">
import Image from '@/components/ui/Image.vue'

defineProps<{
  src?: string
  alt: string
}>()
</script>

<template>
  <Image v-if="src" :src="src" :alt="alt" class="avatar" />
  <div v-else class="avatar">{{ alt }}</div>
</template>

<style scoped lang="scss">
.avatar {
  width: 2.5em;
  height: 2.5em;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: hsl(var(--colorBorder));
}
</style>
