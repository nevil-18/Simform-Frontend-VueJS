<template>
  <div class="home" >
    <a class="btn btn-primary" @click="goToAddCarPage()"
      ><span style="color: white">Add Car</span></a
    >

    <div class="col-md-6 centeralign">
      <div
        class="card centeralign addmargin"
        style="width: 40rem"
        v-for="car in carlist"
        :key="car.id"
        
      >
        <div id = "carprice" class="card-body" @click="setSelectedcar(car.price)">
        <div id = "del" class="card-center" @click="gotToDeletePage(car.name)">
        
          <h5 class="card-title" id = "cname">{{ car.name }}</h5>
          <b-img
            :src="car.image"
            width="500px"
            height="350px"
            class="rounded"
            :alt="Pic"
          >
          </b-img>
          <p class="card-text">Year: {{ car.year }}</p>
          <p class="card-text">origin: {{ car.origin }}</p>
          <a class="btn btn-primary" @click="goToEditPage()" 
            ><span style="color: white">Edit</span></a
          >
          <a class="btn btn-primary" @click="goToDeletePage(car.name)" 
            ><span style="color: white">Delete</span></a
          >
          <a class="btn btn-primary" @click="goToDetailsPage(car.id)" 
            ><span style="color: white">Info</span></a
          >
        </div>
        </div>
      </div>
    </div>
    <galleryCard v-if="selectedcar != ''" :selectedcar="selectedcar" />
  </div>
</template>

<script>
import galleryCard from "../components/galleryCard.vue";
import axios from "axios";

export default {
  name: "cars",
  mounted() {
    axios({
      method: "GET",
      url: "http://localhost:3000/carlist",
    }).then(
      (response) => {
        this.carlist = response.data;
      },
      (error) => {
        // eslint-disable-next-line
        console.error(error);
      }
    );
  },
  data() {
    return {
      carlist: [],
      selectedcar: "",
    };
  },
  components: {
    galleryCard,
  },
  methods: {
    setSelectedcar: function (name) {
      this.selectedcar = name;
    },
    goToDetailsPage: function (id) {
      this.$router.push("/cardetails/" + id);
    },
    goToAddCarPage: function () {
      this.$router.push("/addcar/");
    },
    goToDeletePage() {
      var x = document.cname.value;
      alert("Deleted"+x);
    },
  },
};
</script>

<style scoped>
.addmargin {
  margin-top: 10px;
  margin-bottom: 10px;
}

.vue-logo-back {
  background-color: black;
}
</style>
