<template>
  <div class="card centeralign addmargin"
        style="width: 40rem">
    <div class="card" v-if="carData.id">
      <div class="card-header">Car Details</div>
      <div class="card-body">
        <h1 class="card-title">{{ carData.name }}</h1>
        <b-img
          :src="carData.image"
          width="600px"
          height="380px"
          class="rounded"
        >
        </b-img>
        <p class="card-text">Year : {{ carData.year }}</p>
        <p class="card-text">Price : {{ carData.price }}</p>
        <p class="card-text">Type : {{ carData.type }}</p>
        <div>
        <p class="card-text">Origin : {{ carData.origin }}</p> </div>
        <a @click="goToMainPage()" class="btn btn-primary"
          ><span style="color: white">Home</span></a
        >
      </div>
    </div>  
  </div>
</template>

<script>
import galleryCard from "../components/galleryCard.vue"
import axios from "axios";

export default {
  name: "carDetails",
  props: {
    carData: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  mounted() {
    axios({
      method: "GET",
      url: "http://localhost:3000/carlist/" + this.$route.params.id,
    }).then(    
      (response) => {
        this.carData = response.data;
      },
      (error) => {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    );
  },
  components: {
    galleryCard,
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