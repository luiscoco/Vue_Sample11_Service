<template>
  <div>
    <p>Counter: {{ counter }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CounterService from "./CounterService";

export default defineComponent({
  data() {
    return {
      counter: CounterService.counter,
    };
  },
  methods: {
    increment() {
      CounterService.increment();
    },
  },
});
</script>
