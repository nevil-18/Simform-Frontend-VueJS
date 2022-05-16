<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">Car-Showroom</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-button
              size="sm"
              class="my-2 my-sm-0"
              @click="goToMainPage()"
              type="submit"
              >Home</b-button
            >
          </b-nav-form>
          <b-nav-item-dropdown text="User" right>
            <b-dropdown-item @click="goToRegisterPage()"
              >Register</b-dropdown-item
            >
            <b-dropdown-item @click="goToLoginPage()">LogIn</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="vue-logo-back">
      <img src="./assets/logo.png" width="100px" height="100px" />
    </div>
    <transition name="bounce">
      <router-view />
    </transition>
  </div>
</template>
<script>
import  "vue2-animate/dist/vue2-animate.min.css";
export default {
  methods: {
    goToMainPage() {
      this.$router.push("/cars");
    },

    goToLoginPage() {
      this.$router.push("/login");
    },

    goToRegisterPage() {
      this.$router.push("/register");
    },
  },
};
</script>
<style>


#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.addmargin {
  margin-top: 10px;
  margin-bottom: 10px;
}

.vue-logo-back {
  background-color: black;
}

.centeralign {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
