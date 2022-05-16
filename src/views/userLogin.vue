<template>
  <div class="login">
    <div class="col-md-6 centeralign">
      <div class="card bg-light centeralign addmargin" style="width: 20rem">
        <h2 class="card-title bg-light">LogIn</h2>
        <form
          @submit.prevent="submitForm"
          method="GET"
          class="card-body"
          name="logIn"
        >
          <input
            id="uemail"
            type="email"
            v-model="form.uemail"
            placeholder="Enter E-mail"
            minlength="09"
            maxlength="35 "
            class="form-control"
            required
          />
          &nbsp;
          <input
            type="password"
            id="upass"
            v-model="form.upass"
            placeholder="Enter Password"
            title="Enter Password"
            minlength="08"
            maxlength="12"
            class="form-control"
            required
          />
          <br />
          <a
            @click="
              submitForm();
              goToMainPage();
            "
            class="btn btn-primary"
            id="btn"
          >
            <span style="color: white">Login</span>
          </a>
          &nbsp;
          <a @click="goToRegisterPage()" class="btn btn-primary" id="btn">
            <span style="color: white">Register</span>
          </a>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import cars from "../views/cars.vue";
import axios from "axios";

export default {
  name: "addcar",

  mounted() {},

  data() {
    return {
      form: {
        uemail: null,
        upass: null,
      },
      auth: false,
    };
  },

  components: {
    cars,
  },

  methods: {
    submitForm() {
      alert("login");
      axios.get("http://localhost:3000/userlist/1").then((res) => {
        if (
          this.form.uemail === res.data.email &&
          this.form.upass === res.data.pass
        ) {
          this.auth = true;
        }
        alert(this.auth + this.form.uemail);
      })
      .catch((error) => alert(error));
    },
    goToMainPage: function () {
      this.$router.push("/cars");
    },
    goToRegisterPage: function () {
      this.$router.push("/register");
    },
  },
};
</script>
