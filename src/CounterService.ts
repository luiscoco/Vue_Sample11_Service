import { ref } from "vue";

// Creating a service
const counter = ref(0);

function increment() {
  counter.value++;
}

export default {
  counter,
  increment,
};
