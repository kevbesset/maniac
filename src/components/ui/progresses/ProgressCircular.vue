<template>
  <span class="progress">
    <span class="progress__progress"></span>
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
    cursor: wait;

    &__progress {
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
      }

      &::after {
        border-top-color: currentColor;
        animation: spin 3s linear infinite;
        opacity: 1;
      }
    }

    @keyframes spin {
      100% {
        transform: translate(-50%, -50%) rotate(360deg);
      }
    }
  }
</style>
