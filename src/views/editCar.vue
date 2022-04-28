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
              pattern=".{9,20}"
              required
              title="09 to 20 Characters"
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
              title="Introduced in Year"
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
              title="Car-Image"
            />
            <br />
            <input
              id="cprice"
              type="text"
              class="form-control"
              v-model="form.price"
              placeholder="Price"
              required
              title="Car Price in INR Lakhs"
            />
            <br />
            <input
              id="ctype"
              type="text"
              class="form-control"
              v-model="form.type"
              placeholder="SUV, HATCHBACK, SEADEN"
              required
              title="Car-Type"
            />
            <br />
            <textarea
              id="corigin"
              row="5"
              cols="5"
              minlength="30"
              maxlength="120"
              class="form-control"
              v-model="form.origin"
              placeholder="Origin"
              required
            > </textarea>
            <br />
            <a
              @click="
                submitForm()
                goToMainPage()
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
  name: "editCar",
  mounted() {
    axios({
      url: "http://localhost:3000/carlist/" + this.$route.params.id,
    }).then((response) => {
      this.form = response.data;
    });
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
      var p = document.details.cname.value;
      var q = document.details.cyear.value;
      var r = document.details.ctype.value;
      var s = document.details.corigin.value;
      alert(
        "Edited Data - " +
          "Car-Name: " +
          p +
          " Year: " +
          q +
          " Type: " +
          r +
          " Origin: " +
          s
      );
      axios
        .patch(
          "http://localhost:3000/carlist/" + this.$route.params.id,
          this.form
        )
        .then((response) => {
          this.editCar = response.data;
        });
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
