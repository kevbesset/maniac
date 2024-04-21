# Maniac contributing guide

Hi! 👋<br/>
I am really excited that you're interested in contributing to Maniac!
Before submitting your contribution, please read through the following guide and the [project good practices](README.md#code-practices).
I also strongly recommend that you check for open issues and pull requests to see if someone else is working on something similar.

## Development

I use `npm` for development.

### Fork this repo

You can fork this repo by clicking the fork button in the top right corner of this page.

### Create a new Branch

```sh
git checkout -b my-new-branch
```

### Install dependencies

```sh
npm install
```

### Create magical stuff

You are up and running, suprise me with your amazing pull requests.

## Commit Convention

Before you create a Pull Request, please check whether your commits comply with
the commit conventions used in this repository.

When you create a commit we kindly ask you to follow the convention
`category(scope or module): message` in your commit message while using one of
the following categories:

- `feat / feature`: all changes that introduce completely new code or new
  features
- `fix`: changes that fix a bug (ideally you will additionally reference an
  issue if present)
- `refactor`: any code related change that is not a fix nor a feature
- `docs`: changing existing or creating new documentation (i.e. README, docs for
  usage of a lib or cli usage)
- `build`: all changes regarding the build of the software, changes to
  dependencies or the addition of new dependencies
- `test`: all changes regarding tests (adding new tests or changing existing
  ones)
- `ci`: all changes regarding the configuration of continuous integration (i.e.
  github actions, ci system)
- `chore`: all changes to the repository that do not fit into any of the above
  categories

  e.g. `feat(components): add new prop to the avatar component`

If you are interested in the detailed specification you can visit
https://www.conventionalcommits.org/ or check out the
[Angular Commit Message Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines).
