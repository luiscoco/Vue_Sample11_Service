# service

Services are typically used to encapsulate reusable functionality that can be shared across components. 

Here's an example of how you can organize the code into separate files for a Vue 3 service using the Composition API:

## Service 

```vue
CounterService.ts

import { ref } from 'vue';

// Creating a service
const counter = ref(0);

function increment() {
  counter.value++;
}

export default {
  counter,
  increment
};
```

## App.vue

```vue
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
```

We import the ref function from Vue, which allows us to create a reactive reference to the counter variable.
The counter variable is defined using the ref function and initialized with the value from CounterService.counter.
The increment function is defined, which calls the CounterService.increment method when invoked.
The <script lang="ts" setup> tag encapsulates the logic using the Composition API syntax. It automatically creates the necessary bindings and exposes them to the template.
Note that the translated code assumes that the CounterService module remains the same and exports the counter and increment functions as before.
  

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
