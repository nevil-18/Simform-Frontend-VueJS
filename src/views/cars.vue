<template>
  <div class="home"> 
    <div class="text-right">
      <a class="btn btn-primary button" @click="goToAddCarPage()"
        ><span style="color: white">Add Car</span></a
      >
    </div>
    <div class="col-md-6 centeralign">
      <div
        class="card centeralign bg-info border-dark addmargin"
        style="width: 40rem"
        v-for="car in carlist"
        :key="car.id"
      ><h4 class="card-header text-light bg-dark" id="cname">{{ car.name }}</h4>
        <div class="card-body">
          
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
          <a class="btn btn-primary" @click="goToDetailsPage(car.id)"
            ><span style="color: white">Info</span></a
          >
          &nbsp;
          <a class="btn btn-dark" @click="goToEditPage(car.id)"
            ><span style="color: white">Edit</span></a
          >
          &nbsp;
          <a class="btn btn-danger" @click="goToDeletePage(car.name, car.id)"
            ><span style="color: white">Delete</span></a
          >
          &nbsp;
          
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
      alert((this.selectedcar = name));
    },
    goToDetailsPage: function (id) {
      this.$router.push("/cardetails/" + id);
    },
    goToAddCarPage: function () {
      this.$router.push("/addcar/");
    },

    goToDeletePage: function (name, id) {
      axios.delete("http://localhost:3000/carlist/" + id).catch(() => {
        alert("Oops! Somthing went wrong");
      });
      alert("200: " + name + " Deleted successfully");

      this.$router.go();
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

.a {
  transform: translateX(-50%);
}
</style>
