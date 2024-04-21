<p align="center" style="margin: 0"><img src="https://raw.githubusercontent.com/kevbesset/maniac/main/src/assets/logo.png" alt="maniac logo" width="100" /></p>
<p align="center">
  <a href="https://www.npmjs.com/package/maniac"><img src="https://img.shields.io/npm/dt/maniac.svg" alt="Downloads" /></a>
  <a href="https://www.npmjs.com/package/maniac"><img src="https://img.shields.io/npm/v/maniac.svg" alt="Version"></a>
</p>

# Maniac 🐶

> Enhance Vue.js projects effortlessly with maniac: a curated collection of components, CLI-powered simplicity, seamless integration, style autonomy and total ownership.
> Accessibility-ready, fully customizable and open source. 🤘
>
> Perfectly fits with Vue.js & create-vue 🥰❤️‍🔥

- [Maniac](#maniac-🐶)
- [Installation](#installation)
- [Getting started](#getting-started)
- [Usage](#usage)
  - [Add components to your project](#add-component-to-your-project)
  - [Select available components](#select-available-components)
- [Theming](#theming)
- [Motivation](#motivation)
  - [Comparison with traditional UI libraries](#comparison-with-traditional-ui-libraries)
  - [Comparison with same approach libraries](#comparison-with-same-approach-libraries)
- [Code practices](#code-practices)
- [Contributing](#contributing)
- [License](#license)

## Installation

Get maniac locally

```sh
npm i -g maniac
```

It will get you the `maniac` command. But you can also use `npx maniac@latest ...` in order to always get the latest version.

## Getting started

Getting started with Maniac is easy.
Start by creating a new Vue.js project using [create-vue](https://github.com/vuejs/create-vue) or use your existing project.
Then run

```sh
maniac install
```

![Maniac install example](https://raw.githubusercontent.com/kevbesset/maniac/main/docs/maniac-install.gif)

## Usage

### Add components to your project

```sh
maniac add <name>
```

![Maniac add example](https://raw.githubusercontent.com/kevbesset/maniac/main/docs/maniac-add.gif)

### Select available components

```sh
maniac list
```

![Maniac list example](https://raw.githubusercontent.com/kevbesset/maniac/main/docs/maniac-list.gif)

## Theming

By installing maniac into your project, it will adds a `src/sass` directory to your project with a minimal base for styling:

- `main.scss`: The entry point of this folder with default styles. **You should import this file in your `src/main.ts`**
- `_reset.scss`: Minimal reset styles to avoid clearing those styles in every components.
- `_theme.scss`: All CSS variables in order to customize the theme of the components. Feel free to update the variables to change the look of the components

## Motivation

With the help of my years of experience working with Vue and integrating web pages, I have come to a point where I usually start a project with the same list of components copied from another project.
And with new technology, and new experiences, I manage to improve these components.

I started to create a repo where I stored all my re-usable components and when I need it, I copy paste the code inside my new project, and tried to maintain this list when something new and interesting could me.

As you understood, maniac is **NOT** a traditional UI library.

The idea behind this is to give you ownership and control over the code, allowing you to decide how the components are built and styled.

### Comparison with traditional UI libraries

It already exists plenty of libraries for Vue like [Vuetify](https://vuetifyjs.com/), and if it suits you, I am not here to tell you that you should not use it.

While most traditional UI library are great for fast, effortless prototyping, I needed to have total control over my components in any project I created.
Most of UI libraries come with a full package of opinionated components with a various range of possibilities to customize it.
The more my project would scale and grow, the more I started to regret using any UI library because we are never owner of the code we are using in this case.
At some point, it starts to conflict with project's code practices, especially styling inheritance.

So for me, traditional UI libraries did not suit me because I wanted to have total control and ownership over my components, to make follow project's good practices to be able to scale properly.
Of course, having a bank of components will able me to go faster at the beginning.
Atleast I took this from the traditional UI libraries, so it is still fast and effortless to start with.

### Comparison with same approach libraries

Obviously, I was not the only one having this problem and some of you also share their bank of components with a different approach. It is the case with [shadcn/ui](https://ui.shadcn.com/) with a React component library ready-to-use with a CLI.

The idea is genious. I could share / improve my bank of components and access it with command lines. It is very opinionated so I guess we can have as much opinions as libraries now.
For me, I am sticking to shadcn concepts but improving it, and make them fit more with Vue practices.

Maniac comes with an easier and faster setup process, with only one command line to start with, and only one extra dependency for your project: `sass`.
The rest is dependency-free and perfectly fits default setup with [create-vue](https://github.com/vuejs/create-vue) with TypeScript enabled.
Of course, having no other dependencies to use maniac makes it even better to use for performances, but also easy to maintain!
Indeed, it gives you total ownership of the code, with direct access to fully customize the components to your project needs.

## Code practices

In order to guarantee quality components, I chose to strictly follow some guidelines.
The main objectives here is to create readable components, easy to maintain and scale.

**Keep language responsibilities**<br/>
I also tried to follow one main concept: to keep each languages their responsibilities. For me, each languages have their objectives and should affect the least other's.

_HTML_ is responsible for the DOM.<br/>
✅ It's goal is to make the DOM easy-to-read and simple to quickly understand where we are, and what do we display here.<br/>
❌ It is NOT its goal to handle the styling of the components, by class or anything. (This is why I don't use Tailwind in this project)

_SASS_ is responsible for the styles.<br/>
✅ It's goal is to apply styles to the DOM

_JS/TS_ is responsible for scripting.<br/>
✅ It's goal is to apply scripts to dynamically update the DOM.<br/>
❌ It is NOT its goal to apply styles unless it requires dynamic computations.

**Vue loves clean code**<br/>
For this, first of all, I chose to apply all base, essential, strongly recommended and recommended rules from [eslint-plugin-vue](https://eslint.vuejs.org/rules/).
Right now, only `vue/multi-word-component-names` is disabled because I wanted to make ease-to-find names. If this is blocking your project, feel free to contact me. In the mean time, you can either disable this rule too or update the component after adding it to make it compliant.

**BEM**<br/>
CSS is the hardest part in your code to maintain due to is extreme simple syntax. For me, what makes CSS so hard to maintain when it comes to larger, more complex projects, is the selectors priority and code inheritance.

For example, using a UI library that styles form inputs with `form input.form-control[type="text"]` is a nightmare to override.
This is why in maniac I only used classes for selector and nothing is nested.
Style priority is only the order you see.

Also, I used the power of Vue with scoped styles also to avoid any conflicts from one component to another, allowing to keep it extra simple with class names and code inside my components.

## Contributing

Maniac is open for contribution. Please read the [contributing guide](CONTRIBUTING.md)

## License

Licensed under the [MIT license](LICENSE.md)
