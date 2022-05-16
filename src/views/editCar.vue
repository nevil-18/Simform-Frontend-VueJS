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
            <textarea
              id="corigin"
              type="text"
              class="form-control"
              v-model="form.origin"
              rows="3"
              cols="5"
              placeholder="Origin"
              required>
            </textarea>
            <br />
            <a
              @click="
                submitForm();
                goToMainPage();
                onButtonAnimate();
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
    axios({
      url: "http://localhost:3000/carlist/" + this.$route.params.id,
    }).then((response) => {
      this.form = response.data;
    }); 
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
          alert("Car data Updated Successfully");
        })  
        .catch(() => {
          alert("Oops! Somthing went wrong");
        });
    },
    goToMainPage: function () {
      this.$router.push("/cars");
    },
    onButtonAnimate() {
      this.disabledButton = true;
      alert("editCar Animation");
      setTimeout(() => {
        this.disabledButton = false;
      }, 1500);
    },
  },
};
</script>


<style>
.addmargin {
  margin-top: 10px;
  margin-bottom: 10px;    
}

.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
}
@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }
  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }
  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }
  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
