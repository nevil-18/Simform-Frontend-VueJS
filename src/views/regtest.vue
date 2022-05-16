<template>
  <div id="app">
    <form @submit.prevent="submitRegistration" novalidate>
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          placeholder="First Name"
          value=""
          v-model="user.name"
        />
        <div
          class="invalid-feedback left"
          v-for="(error, index) of v$.user.name.$errors"
          :key="index"
        >
          {{ error.$message }}
        </div>
      </div>
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          placeholder="Enter your company email ID"
          value=""
          v-model="user.email"
          autocomplete="off"
        />
        <div
          class="invalid-feedback left"
          v-for="(error, index) of v$.user.email.$errors"
          :key="index"
        >
          {{ error.$message }}
        </div>
      </div>
      <div class="form-group">
        <input
          type="password"
          class="form-control"
          placeholder="Enter Password"
          value=""
          v-model="user.password"
          autocomplete="off"
        />
        <div
          class="invalid-feedback left"
          v-for="(error, index) of v$.user.password.$errors"
          :key="index"
        >
          {{ error.$message }}
        </div>
      </div>
      <div class="form-group">
        <input
          type="password"
          class="form-control"
          placeholder="Confirm Password"
          value=""
          v-model="user.confirmPassword"
          autocomplete="off"
        />
        <div
          class="invalid-feedback left"
          v-for="(error, index) of v$.user.confirmPassword.$errors"
          :key="index"
        >
          {{ error.$message }}
        </div>
      </div>
      <input
        type="submit"
        class="btnRegister"
        value="Register"
        :disabled="this.isDisabled"
      />
    </form>
  </div>
</template>

<script>
import { required, email, minLength, sameAs } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
export default {
  name: "Home",
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      submitted: false,
    };
  },
  setup: () => ({ v$: useVuelidate() }),
  validations: {
    user: {
      name: { required },
      email: { required, email },
      password: { required, minLength: minLength(6) },
      confirmPassword: { required, sameAsPassword: sameAs("password") },
    },
  },
  created() {
    this.submitted = true;
    return this.$v.$touch();
  },
    computed: {
      isDisabled() {
        return alert(this.$v.$invalid);
      },
    },
  methods: {
    submitRegistration() {
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return false; // stop here if form is invalid
      } else {
        alert("Form Valid");
      }
    },
  },
};
</script>

<style>
.invalid-feedback {
  color: red;
}
.form-group {
  margin: 10px;
}
</style>