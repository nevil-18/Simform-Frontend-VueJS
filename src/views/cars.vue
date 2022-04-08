<template>
  <div class="home">
      <br />
    <a class="btn btn-primary" @click="goToAddCarPage()"
      ><span style="color: white">Add Car</span></a
    >

    <div class="col-md-6 centeralign">
      <div
        class="card centeralign addmargin"
        style="width: 40rem"
        v-for="car in carlist"
        :key="car.id"
      > <div class="card-body">
          <h5 class="card-title" id="cname">{{ car.name }}</h5>
          <div id="carprice" @click="setSelectedcar(car.price)">
          <b-img
            :src="car.image"
            width="500px"
            height="350px"
            class="rounded"
          >
          </b-img>
          <p class="card-text">Year: {{ car.year }}</p>
          <p class="card-text">origin: {{ car.origin }}</p>
        </div> 
          <a class="btn btn-primary" @click="goToEditPage(car.id)"
            ><span style="color: white">Edit</span></a
          > &nbsp;
          <a class="btn btn-primary" @click="goToDeletePage(car.id)"
            ><span style="color: white">Delete</span></a
          > &nbsp;
          <a class="btn btn-primary" @click="goToDetailsPage(car.id)"
            ><span style="color: white">Info</span></a
          ></div>
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
      alert((this.selectedcar = name));
    },
    goToDetailsPage: function (id) {
      this.$router.push("/cardetails/" + id);
    },
    goToAddCarPage: function () {
      this.$router.push("/addcar/");      
    },
    goToDeletePage: function(id) {
      axios.delete("http://localhost:3000/carlist/" + id);
      this.$router.go();
    },
    goToEditPage: function (id){
      this.$router.push("/edit/" + id);
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
