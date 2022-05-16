import Vue from "vue";
import Router from "vue-router";
import cars from "./views/cars.vue";
import carDetails from "./views/carDetails.vue";
import addCar from "./views/addCar.vue";
import editCar from "./views/editCar.vue";
import regtest from "./views/regtest.vue"; 
import userLogin from "./views/userLogin.vue";
import userRegistartion from "./views/userRegistration.vue"

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      redirect: "/cars",
    },
    {
      path: "/cars",
      name: "cars",
      component: cars,
    },
    {
      path: "/cardetails/:id",
      name: "cardetails",
      component: carDetails,
    },
    {
      path: "/addcar/",
      name: "addcar",
      component: addCar,
    },
    {
      path: "/edit/:id",
      name: "editcar",
      component: editCar,
    },
    {
      path: "/regtest/",
      name: "regtest",
      component: regtest,
    },
    {
      path: "/login/",
      name: "userLogin",
      component: userLogin,
    },
    {
      path: "/register/",
      name: "userRegisteration",
      component: userRegistartion,
    },
  ],
});
export default router;
