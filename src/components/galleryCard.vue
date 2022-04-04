<template>
  <div class="col-md-3 centeralign">
    <b-alert show> {{ selectedcar }} </b-alert>
    <b-alert show> {{ goToDeletePage }} </b-alert>
  </div>
</template>

<script>
export default {
  name: "galleryCard",
  props: {
    selectedcar: String,
  },
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
