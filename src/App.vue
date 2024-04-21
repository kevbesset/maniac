<script setup lang="ts">
import Accordion from './components/ui/Accordion.vue'
import AccordionGroup from './components/ui/AccordionGroup.vue'
import Alert from './components/ui/Alert.vue'
import Avatar from './components/ui/Avatar.vue'
import Badge from './components/ui/Badge.vue'
import Button from './components/ui/Button.vue'
import Card from './components/ui/Card.vue'
import Icon from './components/ui/Icon.vue'
import Image from './components/ui/Image.vue'
import Tabs from './components/ui/Tabs.vue'
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
    <h3>Alert</h3>
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
    <h3>Avatar</h3>
    <section>
      <Avatar src="@/assets/logo.png" alt="M" />
      <Avatar alt="M" />
    </section>
    <h3>Badge</h3>
    <section>
      <Badge>Default</Badge>
      <Badge reverse>Reverse</Badge>
      <Badge outlined>Outlined</Badge>
      <Badge tiled>Tiled</Badge>
    </section>
    <h3>Breadcrumb</h3>
    <section></section>
    <h3>Button</h3>
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
    <h3>Calendar</h3>
    <section></section>
    <h3>Card</h3>
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
    <h3>Checkbox</h3>
    <section></section>
    <h3>Combobox</h3>
    <section></section>
    <h3>Context menu</h3>
    <section></section>
    <h3>Data table</h3>
    <section></section>
    <h3>Date picker</h3>
    <section></section>
    <h3>Dialog</h3>
    <section></section>
    <h3>Drawer</h3>
    <section></section>
    <h3>Dropdown menu</h3>
    <section></section>
    <h3>Form</h3>
    <section></section>
    <h3>Hover card</h3>
    <section></section>
    <h3>Icon</h3>
    <section>
      <Icon name="app_badging" />
      <Icon name="app_badging" fill />
    </section>
    <h3>Image</h3>
    <section>
      <Image src="@/assets/logo.png" alt="Maniac logo" />
    </section>
    <h3>Input</h3>
    <section></section>
    <h3>Input OTP</h3>
    <section></section>
    <h3>Label</h3>
    <section></section>
    <h3>Menubar</h3>
    <section></section>
    <h3>Navigation menu</h3>
    <section></section>
    <h3>Pagination</h3>
    <section></section>
    <h3>Popover</h3>
    <section></section>
    <h3>Progress</h3>
    <section></section>
    <h3>RadioGroup</h3>
    <section></section>
    <h3>Resizable</h3>
    <section></section>
    <h3>Scroll area</h3>
    <section></section>
    <h3>Select</h3>
    <section></section>
    <h3>Separator</h3>
    <section></section>
    <h3>Sheet</h3>
    <section></section>
    <h3>Skeleton</h3>
    <section></section>
    <h3>Slider</h3>
    <section></section>
    <h3>Sonner</h3>
    <section></section>
    <h3>Switch</h3>
    <section></section>
    <h3>Table</h3>
    <section></section>
    <h3>Tabs</h3>
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
    <h3>Textarea</h3>
    <section></section>
    <h3>Toast</h3>
    <section></section>
    <h3>Toggle</h3>
    <section></section>
    <h3>Toggle group</h3>
    <section></section>
    <h3>Tooltip</h3>
    <section></section>
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
  justify-content: space-between;
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
