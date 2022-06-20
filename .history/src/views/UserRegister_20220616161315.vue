<template>
  <div class="container">
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
          <h1 class="mt-3">Register</h1>
          <ValidationProvider
            rules="required|alpha_spaces"
            name="name"
            v-slot="{ errors }"
          >
            <b-form-group label="Name" class="mb-2">
              <b-form-input
                style="background-color: lightblue"
                v-model="form.name"
                type="text"
                :state="errors[0] ? false : valid ? true : null"
                placeholder="Enter Full-Name"
                required
                class="w-50"
              ></b-form-input>
              <b-form-invalid-feedback>
                {{ errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>
          <ValidationProvider
            rules="required|email"
            name="email"
            v-slot="{ errors }"
          >
            <b-form-group label="E-mail" class="mb-2">
              <b-form-input
                style="background-color: lightblue"
                v-model="form.email"
                type="email"
                :state="errors[0] ? false : valid ? true : null"
                placeholder="zenitsu.dm@demonslayer.com"
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
            name="password"
            v-slot="{ errors }"
          >
            <b-form-group label="Password" class="mb-2">
              <b-form-input
                style="background-color: lightblue"
                v-model="form.password"
                type="password"
                :state="errors[0] ? false : valid ? true : null"
                placeholder="Enter Password"
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
            name="ucPassword"
            v-slot="{ errors }"
          >
            <b-form-group label="Confirm Password" class="mb-2">
              <b-form-input
                style="background-color: lightblue"
                v-model="form.ucPassword"
                type="password"
                :state="errors[0] ? false : valid ? true : null"
                placeholder="Confirm password"
                required
                class="w-50"
              ></b-form-input>
              <b-form-invalid-feedback>
                {{ errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>
          <ValidationProvider rules="required" name="role" v-slot="{ errors }">
            <b-form-group label="Role" class="mb-2">
              <b-form-select
                v-model="form.selectedrole"
                :options="form.roleoptions"
              ></b-form-select>
              <b-form-invalid-feedback>
                {{ errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>
          <ValidationProvider
            rules="required"
            name="gender"
            v-slot="{ errors }"
          >
            <b-form-group label="gender" class="mb-2">
              <b-form-radio-group
                v-model="form.selectedgender"
                :options="form.genderOptions"
                :aria-describedby="ariaDescribedby"
                inline="true"
              ></b-form-radio-group>
              <b-form-invalid-feedback>
                {{ errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>
          <ValidationProvider
            rules="required|numeric"
            name="age"
            v-slot="{ errors }"
          >
            <b-form-group label="age" class="mb-2">
              <b-form-input
                type="text"
                v-model="form.age"
                :state="errors[0] ? false : valid ? true : null"
                placeholder="Enter age"
                class="w-50"
              >
              </b-form-input>
              <b-form-invalid-feedback>
                {{ errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>
          <ValidationProvider rules="required" name="dob" v-slot="{ errors }">
            <b-form-group label="Choose Date Of Birth" class="mb-2 w-50">
              <b-form-datepicker
                v-model="form.dob"
                class="mb-2"
              ></b-form-datepicker>
              <b-form-invalid-feedback>
                {{ errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </ValidationProvider>
          <b-button
            type="submit"
            pill
            style="background-color: #1f2a48"
            variant="outline-light"
            >Register</b-button
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
        name: "",
        email: "",
        password: "",
        ucPassword: "",
        age: "",
        dob: "",
        selectedrole: "null",
        roleoptions: [
          { value: null, text: "Select Role" },
          { value: "Customer", text: "Customer" },
          { value: "employee", text: "Employee" },
          { value: "admin", text: "Admin" },
        ],
        selectedgender: "male",
        genderOptions: [
          { value: "male", text: "Male" },
          { value: "female", text: "Female" },
        ],
      },
      isLoading: false,
      errmsg: "",
      successmsg: "",
    };
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault();
      this.userRegister(this.form);
    },
    async userRegister(form) {
      let res = await this.$store.dispatch("auth/registerUser", form);
      if (res === "success") {
        this.$router.push({ name: "home" });
      } else {
        this.errmsg = res;
      }
    },
  },
};
</script>
