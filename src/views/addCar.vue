<template>
  <div class="col-md-6 centeralign">
    <div class="col-md-6 centeralign">
      <div class="card centeralign addmargin" style="width: 20rem">
        <h2 class="card-title">Add Car</h2>
        <div class="summary text-danger" v-if="v$.form.$error">
          Form has errors
        </div>
        <form
          @submit.prevent="submitForm"
          method="POST"
          class="card-body"
          name="addCar"
        >
          <div>
            <input
              id="cname"
              type="text"
              v-model="form.name"
              class="form-control"
              placeholder="Enter Car-Name"
              title="09 to 20 Characters"
            />
            <div v-if="v$.form.name.$error">Name field has an error.</div>
          </div>
          &nbsp;
          <div>
            <input
              type="text"
              id="cyear"
              v-model="form.year"
              class="form-control"
              placeholder="Introduced in YYYY "
              title="Introduced in Year"
            />
            <div v-if="v$.form.year.$error">Name field has an error.</div>
          </div>
          <br />
          <div>
            <input
              id="cimg"
              type="url"
              v-model="form.image"
              class="form-control"
              placeholder="www.abc.com..."
              title="Car-Image"
            />
            <div v-if="v$.form.image.$error">Name field has an error.</div>
          </div>
          <br />
          <div>
            <input
              id="cprice"
              type="text"
              v-model="form.price"
              class="form-control"
              placeholder="Price"
              title="Car Price in INR Lakhs"
            />
            <div v-if="v$.form.price.$error">Name field has an error.</div>
          </div>
          <br />
          <div>
            <input
              id="ctype"
              type="text"
              v-model="form.type"
              class="form-control"
              placeholder="Car-Type"
              title="Car-Type"
            />
            <div v-if="v$.form.type.$error">Name field has an error.</div>
          </div>
          <br />
          <div>
            <textarea
              id="corigin"
              v-model="form.origin"
              class="form-control"
              rows="5"
              cols="5"
              placeholder="Car-Information"
              title="Car-Information"
            ></textarea>
            <div v-if="v$.form.origin.$error">Name field has an error.</div>
          </div>
          <br />
          <a
            @click="
              submitForm();
              goToMainPage();
            "
            class="btn btn-primary"
            id="btn"
            disabled="disabled"
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
import useVuelidate from "@vuelidate/core";
import { required, maxLength, minLength, integer } from "@vuelidate/validators";

export default {
  name: "addcar",

  mounted() {},

  setup() {
    return {
      v$: useVuelidate(),
    };
  },

  validations: {
    form: {
      name: { required, max: maxLength(9, 20) },
      year: { required, integer },
      image: { required, URL },
      price: { required, integer },
      type: { required, String },
      origin: { required, min: minLength(30) ,max: maxLength(120) },
    },
  },

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
    cars,
  },

  methods: {
    submitForm() {
      const isFormCorrect = this.v$.$validate();
     // alert("Form has Errors!");

      if (!isFormCorrect) return;
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
