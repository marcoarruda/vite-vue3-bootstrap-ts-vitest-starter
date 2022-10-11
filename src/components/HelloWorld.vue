<template>
  <p>{{ message }} ({{ count }})</p>

  <BButton ref="btnIncrement" @click="increment()"> Increment </BButton>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  export interface Props {
    message?: string
  }

  withDefaults(defineProps<Props>(), {
    message: 'Hello world'
  })

  const count = ref(0)

  const increment = () => {
    count.value++
  }
</script>
