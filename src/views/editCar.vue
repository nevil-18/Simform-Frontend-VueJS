<template>
  <div class="home">
    <div class="col-md-6 centeralign">
      <div class="card centeralign addmargin" style="width: 20rem">
        <div class="card">
          <h2 class="card-title">Edit</h2>
          <form
            @submit.prevent="submitForm"
            class="card-body"
            name="details"
            method="PATCH"
          >
            <input
              id="cname"
              type="text"
              v-model="form.name"
              class="form-control"
              placeholder="Enter Car-Name"
              required
              
            />
            &nbsp;
            <input
              type="text"
              id="cyear"
              v-model="form.year"
              class="form-control"
              placeholder="Introduced in YYYY "
              required
            />
            <br />
            <input
              id="cimg"
              type="url"
              pattern="/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/"
              class="form-control"
              v-model="form.image"
              placeholder="www.abc.com..."
              required
            />
            <br />
            <input
              id="cprice"
              type="text"
              class="form-control"
              v-model="form.price"
              placeholder="Price"
              required
            />
            <br />
            <input
              id="ctype"
              type="text"
              class="form-control"
              v-model="form.type"
              placeholder="Car-Type"
              required
            />
            <br />
            <input
              id="corigin"
              type="text"
              class="form-control"
              v-model="form.origin"
              placeholder="Origin"
              required
            />
            <br />
            <a
              @click="
                submitForm();
                goToMainPage();
              "
              class="btn btn-primary"
              ><span style="color: white">Submit</span></a
            >
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cars from "./cars.vue";
import axios from "axios";
export default {
  name: "editcar",

  data() {
    return {
      form: {
        name: "",
        year: "",
        image: "",
        price: "",
        type: "",
        origin: "",
      },
      editCar: {},
    };
  },
  mounted() {
    
  },
  components: {
    cars,
  },

  methods: {
    submitForm() {
      var p = document.details.cname.value;
      var q = document.details.cyear.value;
      var r = document.details.ctype.value;
      var s = document.details.corigin.value;
      alert("Car-Name:" + p + "Year:" + q + "Type:" + r + "Origin:" + s);
      axios.patch("http://localhost:3000/carlist/" + this.$route.params.id, this.form)
      .then(
      (response) => {
        this.editCar = response.data; 
      },
      (error) => {
        //eslint-disable-next-line no-console 
        console.error(error);
      }
      ); 
    },
    goToMainPage: function () {
      this.$router.push("/cars");
    },
  },
};
</script>


<style>
.addmargin {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
