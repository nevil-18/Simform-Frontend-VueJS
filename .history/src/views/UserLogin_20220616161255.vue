<template>
  <div class="container" style="background-color: lightblue">
    <div>
      <AlertBox
        v-if="this.isLoading == false && this.successmsg !== ''"
        variant="success"
        show="true"
        :content="this.successmsg"
      />
      <AlertBox
        v-else-if="this.isLoading == false && this.errmsg !== ''"
        variant="danger"
        show="true"
        :content="this.errmsg"
      />
    </div>
    <ValidationObserver ref="observer">
      <b-form @submit="onSubmit">
        <center>
          <h1 class="mt-3">LogIn</h1>
          <ValidationProvider
            rules="required|email"
            name="uEmail"
            v-slot="{ errors }"
          >
            <b-form-group label="E-mail" class="mb-2">
              <b-form-input
                style="background-color: lightcyan"
                v-model="form.uEmail"
                type="email"
                :state="errors[0] ? false : valid ? true : null"
                placeholder="Enter email"
                required
                class="w-50"
              ></b-form-input>
              <b-form-invalid-feedback>
                {{ errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>
          <ValidationProvider
            :rules="{
              required,
              regex: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,12}$/,
            }"
            name="uPassword"
            v-slot="{ errors }"
          >
            <b-form-group label="Password" class="mb-2">
              <b-form-input
                style="background-color: lightcyan"
                v-model="form.uPassword"
                type="password"
                :state="errors[0] ? false : valid ? true : null"
                placeholder="Enter password"
                required
                class="w-50"
              ></b-form-input>
              <b-form-invalid-feedback>
                {{ errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>

          <b-button style="background-color: lightcoral" type="submit"
            >Login</b-button
          >
        </center>
      </b-form>
    </ValidationObserver>
  </div>
</template>

<script>
import AlertBox from "../components/AlertBox.vue";
export default {
  components: { AlertBox },
  data() {
    return {
      form: {
        uEmail: "",
        uPassword: "",
      },
      isLoading: false,
      errmsg: "",
      successmsg: "",
    };
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault();
      let res = await this.$store.dispatch("auth/loginUser", this.form);
      if (res === "success") {
        this.$router.push({ name: "home" });
      } else {
        this.errmsg = res;
      }
    },
  },
};
</script>
