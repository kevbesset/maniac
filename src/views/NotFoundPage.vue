<script setup lang="ts">
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()
</script>

<template>
  <div class="error">{{ t('title') }}</div>
</template>

<i18n lang="json">
{
  "fr": {
    "title": "404 page introuvable"
  },
  "en": {
    "title": "404 page not found"
  }
}
</i18n>
