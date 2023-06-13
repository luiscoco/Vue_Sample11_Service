<template>
  <div>
    <p>Counter: {{ counter }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import CounterService from "./CounterService";

const counter = ref(CounterService.counter);

function increment() {
  CounterService.increment();
}
</script>
