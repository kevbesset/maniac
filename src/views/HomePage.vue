<script setup lang="ts">
  import BaseButton from '@/components/ui/basics/BaseButton.vue'
  import ModalOverlay from '@/components/ui/overlays/ModalOverlay.vue'
  import GutterGroup from '@/components/ui/groups/GutterGroup.vue'
  import { ButtonTheme, ButtonType } from '@/vars/ButtonAttr'
  import {  ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import FormRow from '@/components/ui/forms/FormRow.vue'
  import FormField from '@/components/ui/forms/FormField.vue'
import { useForm } from 'vee-validate'

  const { t } = useI18n()

  const buttonModal = ref(false)
  const formModal = ref(false)

  const { handleSubmit } = useForm()

  const onSubmit = handleSubmit(() => {
    //
  })
</script>

<template>
  <div class="home">
    <h1>{{ t('welcome') }}</h1>
    <GutterGroup direction="column">
      <BaseButton :theme="ButtonTheme.SECONDARY" @click="buttonModal = true">
        {{ t('test.button') }}
      </BaseButton>
      <BaseButton :theme="ButtonTheme.SECONDARY" @click="formModal = true">
        {{ t('test.form') }}
      </BaseButton>
    </GutterGroup>
    <ModalOverlay v-model="buttonModal">
      <template #header>
        <strong>{{ t('button') }}</strong>
      </template>
      <template #default>
        <GutterGroup wrap>
          <BaseButton
            v-for="selectedTheme in Object.values(ButtonTheme)"
            :key="selectedTheme"
            :theme="selectedTheme"
          >
            {{ selectedTheme }}
          </BaseButton>
        </GutterGroup>
      </template>
    </ModalOverlay>
    <ModalOverlay v-model="formModal">
      <template #header>
        <strong>{{ t('form') }}</strong>
      </template>
      <template #default>
        <form @submit.prevent="onSubmit">
          <FormRow>
            <FormRow>
              <FormField
                id="login_identifier"
                :placeholder="t('login.placeholder.email')"
                type="email"
                name="identifier"
                rules="email|required"
              >
                {{ t('login.labels.identifier') }}
              </FormField>
            </FormRow>
            <FormRow>
              <FormField
                id="login_password"
                :placeholder="t('login.placeholder.password')"
                type="password"
                name="password"
                rules="required"
              >
                {{ t('login.labels.password') }}
              </FormField>
            </FormRow>
            <BaseButton class="login__button" :type="ButtonType.SUBMIT" block>
              {{ t('login.submit') }}
            </BaseButton>
          </FormRow>
        </form>
      </template>
    </ModalOverlay>
  </div>
</template>

<style scoped lang="scss">
  .home {
    text-align: center;
    padding-top: 3.75em;
  }

  h1 {
    margin-bottom: 2em;
  }

  .toolbox {
    position: fixed;
    bottom: 1.25em;
    right: 1.25em;
  }
</style>

<i18n lang="json">
{
  "fr": {
    "welcome": "Bonjour, maniac",
    "test": {
      "button": "Découvrir les boutons",
      "form": "Découvrir les formulaires"
    },
    "button": "Boutons",
    "form": "Formulaires",
    "login": {
      "labels": {
        "identifier": "Identifiant",
        "password": "Mot de passe"
      },
      "placeholder": {
        "email": "Saisissez votre identifiant",
        "password": "********"
      },
      "submit": "Envoyer"
    }
  },
  "en": {
    "welcome": "Welcome, maniac",
    "test": {
      "button": "Click for buttons",
      "form": "Click for forms"
    },
    "button": "Buttons",
    "form": "Forms",
    "login": {
      "labels": {
        "identifier": "Identifier",
        "password": "Password"
      },
      "placeholder": {
        "email": "Write your identifier",
        "password": "********"
      },
      "submit": "Send"
    }
  }
}
</i18n>
