<template>
  <div class="home">
    <div class="col-md-6 centeralign">
      <div class="card centeralign addmargin" style="width: 20rem">
        <h2 class="card-title">Add Car</h2>

        <form
          @submit.prevent="submitForm"
          method="POST"
          class="card-body"
          name="details"
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
            rows="5"
            placeholder="Introduced in YYYY "
            required
          />
          <br />
          <input
            id="cimg"
            type="url"
            v-model="form.image"
            pattern="/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/"
            class="form-control"
            placeholder="www.abc.com..."
            required
          />
          <br />
          <input
            id="cprice"
            type="text"
            v-model="form.price"
            class="form-control"
            placeholder="Price"
            required
          />
          <br />
          <input
            id="ctype"
            type="text"
            v-model="form.type"
            class="form-control"
            placeholder="Car-Type"
            required
          />
          <br />
          <input
            id="corigin"
            type="text"
            v-model="form.origin"
            class="form-control"
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
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import cardetails from "./carDetails.vue";
import cars from "./cars.vue";
import axios from "axios";

export default {
  name: "addcar",

  mounted() {},

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
    };
  },

  components: {
    cardetails,
    cars,
  },

  methods: {
    submitForm() {
      var x = document.details.cname.value;
      var y = document.details.cyear.value;
      var z = document.details.ctype.value;
      var a = document.details.corigin.value;
      alert("Car-Name:" + x + "Year:" + y + "Type:" + z + "Origin:" + a);
      axios.post("http://localhost:3000/carlist", this.form);
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
