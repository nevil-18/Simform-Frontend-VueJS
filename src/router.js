import Vue from "vue";
import Router from "vue-router";
import cars from "./views/cars.vue";
import carDetails from "./views/carDetails.vue";
import addCar from "./views/addCar.vue";

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
  ],
});
export default router;
