<template>
  <div class="col-md-3 centeralign">
    <div> {{ selectedcar }} </div>
    <div> {{ goToDeletePage }} </div>
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
