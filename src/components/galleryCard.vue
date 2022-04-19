<template>
  <div class="col-md-3 centeralign">
  </div>
</template>

<script>

import cars from "../views/cars.vue" 
import carDetails from "../views/carDetails.vue"
export default {
  name: "galleryCard",
  props: {
    selectedcar: String,
  },
  components: {
    cars,
    carDetails,
  }

};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
