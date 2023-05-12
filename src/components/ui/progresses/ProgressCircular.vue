<template>
  <span class="progress">
    <span class="progress__inner"></span>
  </span>
</template>

<style scoped lang="scss">
  .progress {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    color: currentColor;
    animation: blink 0.8s linear infinite;
    cursor: wait;

    &__inner {
      position: relative;
      text-align: center;
      width: 1em;
      height: 1em;
      display: block;

      &::before,
      &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 1em;
        height: 1em;
        border: 0.125em solid transparent;
        border-radius: 50%;
      }

      &::before {
        border-color: currentColor;
        opacity: 0.3;
        border-width: 0.0625em;
      }

      &::after {
        border-top-color: currentColor;
        animation: spin 1s linear infinite;
        opacity: 1;
      }
    }

    @keyframes spin {
      100% {
        transform: translate(-50%, -50%) rotate(360deg);
      }
    }

    @keyframes blink {
      40% {
        opacity: 0;
      }
    }
  }
</style>
