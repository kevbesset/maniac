<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'

const modules = import.meta.glob('@/assets/**/*')

interface Module {
  default?: string
}

const props = defineProps<{
  src: string
  alt: string
}>()

const imageSource = ref()

async function handleImage() {
  if (props.src.startsWith('http')) {
    imageSource.value = props.src
    return
  }
  const imageModule = modules[props.src.replace('@', '/src')]

  const { default: module } = (await imageModule()) as Module
  imageSource.value = module
}

watch(
  () => props.src,
  () => {
    handleImage()
  }
)

onMounted(() => {
  handleImage()
})
</script>

<template>
  <img class="image" :src="imageSource" :alt="alt" loading="lazy" />
</template>

<style scoped lang="scss">
.image {
  display: block;
  height: auto;
  max-width: 100%;
}
</style>
