<template>
  <div class="home">
    <div class="col-md-6 centeralign">
      <div class="card  bg-light centeralign addmargin" style="width: 20rem">
        <h2 class="card-title">Register</h2>

        <form
          @submit.prevent="submitForm"
          method="POST"
          class="card-body"
          name="Register"
        >
          <input
            id="uname"
            type="name"
            v-model="form.name"
            placeholder="Enter Name"
            title="09 to 20 Characters"
            minlength="09"
            maxlength="20"
            class="form-control"
            required
          />
          <!-- <div
            class="invalid-feedback left"
            v-for="(error, index) of v$.form.name.$errors"
            :key="index"
          >
            {{ error.$message }}
          </div> -->
          &nbsp;
          <input
            id="uemail"
            type="email"
            v-model="form.email"
            placeholder="zenitsu.ds@gmail.com"
            title="09 to 20 Characters"
            minlength="09"
            maxlength="20"
            class="form-control"
            required
          />
          &nbsp;
          <input
            type="password"
            id="upass"
            v-model="form.pass"
            placeholder="Enter Password"
            minlength="08"
            maxlength="12"
            class="form-control"
            required
          />
          <br />
          <input
            id="cpass"
            type="password"
            v-model="form.cpass"
            placeholder="Confirm Password"
            required
            minlength="08"
            maxlength="12"
            class="form-control"
          />
          <br />
          <select
            id="urole"
            class="form-control"
            v-model="form.role"
          >
            <option value="Admin">Admin</option>
            <option value="Employee">Employee</option>
            <option value="User">User</option>
          </select>
          <br />
          <input
            type="radio"
            v-model="form.gender"
            name="gender"
            value="Male"
          />
          Male
          <input
            type="radio"
            v-model="form.gender"
            name="gender"
            value="Female"
          />
          Female <br />
          <br />
          <input
            type="text"
            minlength="2"
            maxlength="3"
            v-model="form.age"
            placeholder="Age"
            id="uage"
            class="form-control"
          />
          <br />
          <input
            type="date"
            placeholder="DOB"
            id="udob"
            v-model="form.dob"
            class="form-control"
          />
          <br />
          <a
            @click="
              submitForm();
              goToMainPage();
            "
            class="btn btn-primary"
            id="btn"
            :disabled="isDisabled"
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
// import { required, email, minLength, sameAs } from "@vuelidate/validators";
// import { useVuelidate } from "@vuelidate/core";
import cars from "../views/cars.vue";
import axios from "axios";

export default {
  name: "useRegistration",

  mounted() {},

  data() {
    return {
      form: {
        name: null,
        email: null,
        pass: null,
        role: null,
        gender: null,
        age: null,
        dob: null,
        cpass: null,
      },
      submitted: false,
    };
  },
  // setup: () => ({ v$: useVuelidate() }),
  // validations: {
  //   form: {
  //     name: { required },
  //     email: { required, email },
  //     pass: { required, minLength: minLength(6) },
  //     cpass: { required, sameAsPassword: sameAs("pass") },
  //   },
  // },
  // created() {
  //   this.submitted = true;
  //   return this.$v.$touch();
  // },
  components: {
    cars,
  },

  methods: {
    submitForm() {
      // this.submitted = true;
      // this.$v.$touch();
      // if (this.$v.$invalid) {
      //   return false; // stop here if form is invalid
      // } else {
      //   alert("Form Valid");
      // }
      axios
        .post("http://localhost:3000/userlist", this.form)
        .then((response) => {
          if (response.status == 201) {
            this.$router.push("/cars");
          }
        })
        .catch((error) => alert(error));
    },
    goToMainPage: function () {
      this.$router.push("/cars");
    },
    isDisabled() {
      return alert(this.$v.$invalid);
    },
  },
};
</script>


<style>
select:invalid {
  color: gray;
}
option {
  color: gray;
}
option[disabled] {
  display: none;
}
.addmargin {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
