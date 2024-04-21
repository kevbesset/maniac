<script setup lang="ts">
import { ref } from 'vue'
import Accordion from '@/components/ui/Accordion.vue'
import AccordionGroup from '@/components/ui/AccordionGroup.vue'
import Alert from '@/components/ui/Alert.vue'
import Avatar from '@/components/ui/Avatar.vue'
import Badge from '@/components/ui/Badge.vue'
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import Icon from '@/components/ui/Icon.vue'
import Image from '@/components/ui/Image.vue'
import Tabs from '@/components/ui/Tabs.vue'
import Dialog from '@/components/ui/Dialog.vue'

const dialogToggle = ref(false)
</script>

<template>
  <header>
    <h1>Maniac</h1>
    <h2>Styleguide</h2>
  </header>
  <main>
    <h3>Accordion <code>maniac add accordion</code></h3>
    <article>
      <AccordionGroup>
        <Accordion name="accordion-1">
          <template #trigger>Accordion 1</template>
          <template #default>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit inventore doloremque,
            amet neque at quia deleniti quisquam non, voluptas suscipit dolorem sint tempora
            provident fugiat. Illum veritatis enim suscipit voluptas.
          </template>
        </Accordion>
        <Accordion name="accordion-2">
          <template #trigger>Accordion 2</template>
          <template #default>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit inventore doloremque,
            amet neque at quia deleniti quisquam non, voluptas suscipit dolorem sint tempora
            provident fugiat. Illum veritatis enim suscipit voluptas.
          </template>
        </Accordion>
        <Accordion name="accordion-3">
          <template #trigger>Accordion 3</template>
          <template #default>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit inventore doloremque,
            amet neque at quia deleniti quisquam non, voluptas suscipit dolorem sint tempora
            provident fugiat. Illum veritatis enim suscipit voluptas.
          </template>
        </Accordion>
      </AccordionGroup>
      <Accordion name="accordion-4">
        <template #trigger>Standalone accordion</template>
        <template #default>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit inventore doloremque, amet
          neque at quia deleniti quisquam non, voluptas suscipit dolorem sint tempora provident
          fugiat. Illum veritatis enim suscipit voluptas.
        </template>
      </Accordion>
    </article>
    <h3>Alert <code>maniac add alert</code></h3>
    <section>
      <Alert> Lorem ipsum dolor sit amet consectetur adipisicing elit. </Alert>
      <Alert>
        <template #title>Alert!</template>
        <template #default> Lorem ipsum dolor sit amet consectetur adipisicing elit. </template>
      </Alert>
      <Alert icon="notifications">
        <template #title>Alert!</template>
        <template #default> Lorem ipsum dolor sit amet consectetur adipisicing elit. </template>
      </Alert>
    </section>
    <h3>Avatar <code>maniac add avatar</code></h3>
    <section>
      <Avatar src="@/assets/logo.png" alt="M" />
      <Avatar alt="M" />
    </section>
    <h3>Badge <code>maniac add badge</code></h3>
    <section>
      <Badge>Default</Badge>
      <Badge reverse>Reverse</Badge>
      <Badge outlined>Outlined</Badge>
      <Badge tiled>Tiled</Badge>
    </section>
    <h3>Button <code>maniac add button</code></h3>
    <section>
      <Button>Default</Button>
      <Button reverse>Reverse</Button>
      <Button rounded>Rounded</Button>
      <Button outlined>Outlined</Button>
      <Button tiled>Tile</Button>
      <Button icon>i</Button>
      <Button disabled>Disabled</Button>
      <Button discrete>Discrete</Button>
      <Button block>Block button</Button>
    </section>
    <h3>Card <code>maniac add card</code></h3>
    <section>
      <Card>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repellendus at fugiat
        odit temporibus earum eligendi accusantium ea eius similique recusandae eos nostrum,
        corrupti voluptate enim fugit cum laborum natus.
      </Card>
      <Card>
        <template #title>Default card</template>
        <template #subtitle>Lorem ipsum dolor sit amet consectetur adipisicing elit.</template>
        <template #default>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repellendus at fugiat
          odit temporibus earum eligendi accusantium ea eius similique recusandae eos nostrum,
          corrupti voluptate enim fugit cum laborum natus.
        </template>
        <template #footer>
          <Button block>Button</Button>
        </template>
      </Card>
    </section>
    <h3>Dialog <code>maniac add dialog</code></h3>
    <section
      :style="{
        overflow: 'hidden'
      }"
    >
      <Button block @click="dialogToggle = true"> Open dialog </Button>
      <Dialog v-model="dialogToggle">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, sint obcaecati. Nemo id
        repellat ex numquam perferendis modi qui, voluptate quisquam atque blanditiis necessitatibus
        provident eum cupiditate unde, incidunt ipsum.
        <Button block @click="dialogToggle = false">Close dialog</Button>
      </Dialog>
    </section>
    <h3>Icon <code>maniac add icon</code></h3>
    <section>
      <Icon name="app_badging" />
      <Icon name="app_badging" fill />
    </section>
    <h3>Image <code>maniac add image</code></h3>
    <section>
      <Image src="@/assets/logo.png" alt="Maniac logo" />
    </section>
    <h3>Tabs <code>maniac add tabs</code></h3>
    <section>
      <Tabs>
        <div tab="Tab 1">
          Tab 1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident odit doloribus
          asperiores rerum modi consectetur commodi quidem, perspiciatis perferendis iste adipisci
          magni praesentium suscipit nobis iure voluptatum? Adipisci, ex atque?
        </div>
        <div tab="Tab 2">
          Tab 2 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident odit doloribus
          asperiores rerum modi consectetur commodi quidem, perspiciatis perferendis iste adipisci
          magni praesentium suscipit nobis iure voluptatum? Adipisci, ex atque? Lorem ipsum, dolor
          sit amet consectetur adipisicing elit. Provident odit doloribus asperiores rerum modi
          consectetur commodi quidem, perspiciatis perferendis iste adipisci magni praesentium
          suscipit nobis iure voluptatum? Adipisci, ex atque? Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Provident odit doloribus asperiores rerum modi consectetur
          commodi quidem, perspiciatis perferendis iste adipisci magni praesentium suscipit nobis
          iure voluptatum? Adipisci, ex atque?
        </div>
      </Tabs>
    </section>
  </main>
</template>

<style scoped lang="scss">
header {
  margin-bottom: 2em;
  padding: 3em 0 5em;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

main {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  font-size: 3em;
}

h2 {
  text-transform: uppercase;
  font-weight: bold;
}

h3 {
  display: flex;
  width: 100%;
  gap: 1em;
  font-weight: bold;
  text-transform: uppercase;
}

h4 {
  font-weight: bold;
  text-transform: uppercase;
  font-size: 0.75em;
}

code {
  font-size: 0.75em;
  text-transform: none;
  background-color: hsl(var(--colorBorder));
  padding: 0.5em 1em;
  border-radius: 0.5em;
  font-family:
    ui-monospace,
    SFMono-Regular,
    Menlo,
    Monaco,
    Consolas,
    Liberation Mono,
    Courier New,
    monospace;

  &::before {
    content: '📦';
    margin-right: 1em;
  }
}

article,
section {
  margin-bottom: 2em;
  width: 100%;
  padding: 1em;

  &:empty::before {
    content: '🚧 Work in progress 🚧';
    border: 1px solid hsl(var(--colorBorder));
    border-radius: var(--borderRadius);
    padding: 1em;
    width: 100%;
    text-align: center;
  }
}

section {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 1em;
}
</style>
