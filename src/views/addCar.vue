<template>
  <div class="home">
    <div class="col-md-6 centeralign">
      <div class="card centeralign addmargin" style="width: 20rem">
        <h2 class="card-title">Add Car</h2>

        <form
          @submit.prevent="submitForm"
          method="POST"
          class="card-body"
          name="addCar"
        >
          <input
            id="cname"
            type="text"
            v-model="form.name"
            placeholder="Enter Car-Name"
            title="09 to 20 Characters"
            minlength="09"
            maxlength="20"
            class="form-control"
            required
          />
          &nbsp;
          <input
            type="text"
            id="cyear"
            v-model="form.year"
            placeholder="Introduced in YYYY "
            title="Introduced in Year"
            maxlength="4"
            class="form-control"
            required
          />
          <br />
          <input
            id="cimg"
            type="url"
            v-model="form.image"
            pattern="/([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif))/i"
            placeholder="www.abc.com..."
            title="Car-Image"
            required
            class="form-control"
          />
          <br />
          <input
            id="cprice"
            type="text"
            v-model="form.price"
            placeholder="Price"
            title="Car Price in INR Lakhs"
            maxlength="04"
            class="form-control"
            required
          />
          <br />
          <input
            id="ctype"
            type="text"
            v-model="form.type"
            placeholder="Car-Type"
            title="Car-Type"
            required
            class="form-control"
            maxlength="25"
          />
          <br />
          <textarea
            id="corigin"
            v-model="form.origin"
            rows="5"
            cols="21"
            class="form-control"
            minlength="20"
            maxlength="130"
            placeholder="Car-Information"
            title="Car-Information"
            required
          ></textarea>
          <br />
          <a
            @click="
              submitForm();
              goToMainPage();
            "
            class="btn btn-primary"
            id="btn"
          >
            <span style="color: white">Submit</span>
          </a>
        </form>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import cars from "./cars.vue";
import axios from "axios";

export default {
  name: "addcar",

  mounted() {},

  data() {
    return {
      form: {
        name: null,
        year: null,
        image: null,
        price: null,
        type: null,
        origin: null,
      },
    };
  },

  components: {
    cars,
  },

  methods: {
    submitForm() {

      var x = document.addCar.cname.value;
      var y = document.addCar.cyear.value;
      var z = document.addCar.ctype.value;
      var a = document.addCar.corigin.value;
      alert(
        "Created Data - " +
          " Car-Name:" +
          x +
          " Year:" +
          y +
          " Type:" +
          z +
          " Origin:" +
          a
      );
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
