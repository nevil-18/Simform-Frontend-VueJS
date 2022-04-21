<template>
  <div class="home">
    <div class="text-right">
      <a class="btn btn-primary button" @click="goToAddCarPage()"
        ><span style="color: white">Add Car</span></a
      >
    </div>

    <div class="col-md-6 centeralign">
      <div
        class="card centeralign addmargin"
        style="width: 40rem"
        v-for="car in carData"
        :key="car.id"
      >
        <div id="del" @click="gotToDeletePage(car.name)"></div>

        <div class="card-body">
          <div id="carprice" @click="setSelectedcar(car.price)">
            <h5 class="card-title" id="cname">{{ car.name }}</h5>

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
          > 
          &nbsp;
          <a class="btn btn-primary" @click="goToDeletePage(car.name)"
            ><span style="color: white">Delete</span></a
          >
          &nbsp;
          <a class="btn btn-primary" @click="goToDetailsPage(car.id)"
            ><span style="color: white">Info</span></a
          >
          &nbsp;  
            <a class="btn btn-secondary no-click" id="soon"
              ><span style="color: white">Available Soon</span></a
            >
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
  props: {
    carData: {
      type: Object,
      required: true,
      default: () => {}
    },
  },
  mounted() {
    axios({
      method: "GET",
      url: "http://localhost:3000/carlist",
    }).then(
      (response) => {
        this.carData = response.data;
      },
      (error) => {
        // eslint-disable-next-line
        console.error(error);
      }
    );
  },
  data() {
    return {
      selectedcar: "",
    };
  },
  components: {
    galleryCard,
  },
  methods: {
    setSelectedcar: function (price) {
      alert((this.selectedcar = price));
    },
    goToDetailsPage: function (id) {
      this.$router.push("/cardetails/" + id);
    },
    goToAddCarPage: function () {
      this.$router.push("/addcar/");
    },
    goToDeletePage: function (name) {
      alert((this.selectedcar = name + " Deleted"));
    },
    goToEditPage: function (id) {
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

.no-click {
  pointer-events: none;
}
</style>
