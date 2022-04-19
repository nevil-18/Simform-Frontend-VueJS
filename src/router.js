import Vue from "vue";
import Router from "vue-router";
import cars from "./views/cars.vue";
import carDetails from "./views/carDetails.vue";
import addCar from "./views/addCar.vue";
import editCar from "./views/editCar.vue";

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
      name: "edit",
      component: editCar,
    },
  ],
});
export default router;
