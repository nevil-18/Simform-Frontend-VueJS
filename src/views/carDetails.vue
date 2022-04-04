<template>
  <div class="home">
    <div class="card" v-if="carDetails.id">
      <div class="card-header">Car Details</div>
      <div class="card-body">
        <h1 class="card-title">{{ carDetails.name }}</h1>
        <b-img
          :src="carDetails.image"
          width="600px"
          height="380px"
          class="rounded"
          :alt="Pic"
        >
        </b-img>
        <p class="card-text">Year : {{ carDetails.year }}</p>
        <p class="card-text">Price : {{ carDetails.price }}</p>
        <p class="card-text">Type : {{ carDetails.type }}</p>
        <p class="card-text">Origin : {{ carDetails.origin }}</p>
        <a @click="goToMainPage()" class="btn btn-primary"
          ><span style="color: white">Home</span></a
        >
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "carDetails",
  mounted() {
    axios({
      method: "GET",
      url: "http://localhost:3000/carlist/"  + this.$route.params.id,
    }).then(
      (response) => {
        this.carDetails = response.data;
      },
      (error) => {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    );
  },
  data() {
    return {
      carDetails: {},
    };
  },
  methods: {
    goToMainPage: function () {
      this.$router.push("/cars");
    },
  },
};
</script>
<style scoped>
.addmargin {
  margin-top: 10px;
  margin-bottom: 10px;
}

</style>