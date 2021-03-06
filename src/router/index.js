import Vue from "vue";
import VueRouter from "vue-router";
import SideMenu from "../layouts/SideMenu";
import Dashboard from "../views/Dashboard";
import Payment from "../views/Payment";
import Receipt from "../views/Receipt";
import MakePayment from "../views/MakePayment";
import Branch from "../views/Branch";
import Bank from "../views/Bank";
import Employee from "../views/Employee";
import Client from "../views/Client";
import ClientBankDetail from "../views/ClientBankDetail";
import CompanyBankDetail from "../views/CompanyBankDetail";
import SPBankDetail from "../views/SPBankDetail";
import Currency from "../views/Currency";
import Group from "../views/Group";
import LimitPlan from "../views/LimitPlan";
import Limit from "../views/Limit";
import PaymentMethod from "../views/PaymentMethod";
import Plan from "../views/Plan";
import Premium from "../views/Premium";
import Role from "../views/Role";
import SP from "../views/SP";
import Home from "../views/Home";
import Profile from "../views/Profile";
import Login from "../views/Login";
import Register from "../views/Register";
import ClientRegister from "../views/Clients/Register";
import SPRegister from "../views/ServiceProviders/Register";
import UpdateProfile from "../views/UpdateProfile";
import ChangePassword from "../views/ChangePassword";
import store from "../store/index";
import { isLoggedIn } from "../store/auth/getters";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login",
    // name: "home",
    // component: Home,
    // meta: { requiresAuth: true },
    meta: {title: 'Home'}
  },
  {
    path: "/",
    component: SideMenu,
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: Dashboard,
        meta: { requiresAuth: true },
      },
      {
        path: "profile",
        name: "profile",
        component: Profile,
        meta: { requiresAuth: true },
      },
      {
        path: "update-profile",
        name: "update-profile",
        component: UpdateProfile,
        meta: { requiresAuth: true },
      },
      {
        path: "change-password",
        name: "change-password",
        component: ChangePassword,
        meta: { requiresAuth: true },
      },
      {
        path: "branch",
        name: "branch",
        component: Branch,
        meta: { requiresAuth: true, roles: [4] },
      },
      {
        path: "bank",
        name: "bank",
        component: Bank,
        meta: { requiresAuth: true },
      },
      {
        path: "payments",
        name: "payments",
        component: Payment,
        meta: { requiresAuth: true },
      },
      {
        path: "make-payment",
        name: "make-payment",
        component: MakePayment,
        meta: { requiresAuth: true },
      },
      {
        path: "receipt",
        name: "receipt",
        component: Receipt,
        meta: { requiresAuth: true },
      },
      {
        path: "employees",
        name: "employees",
        component: Employee,
        meta: { requiresAuth: true },
      },
      {
        path: "clients",
        name: "clients",
        component: Client,
        meta: { requiresAuth: true },
      },
      {
        path: "client-bank-details",
        name: "client-bank-details",
        component: ClientBankDetail,
        meta: { requiresAuth: true },
      },
      {
        path: "company-bank-details",
        name: "company-bank-details",
        component: CompanyBankDetail,
        meta: { requiresAuth: true },
      },
      {
        path: "currencies",
        name: "currencies",
        component: Currency,
        meta: { requiresAuth: true },
      },
      {
        path: "groups",
        name: "groups",
        component: Group,
        meta: { requiresAuth: true },
      },
      {
        path: "limit-plans",
        name: "limit-plans",
        component: LimitPlan,
        meta: { requiresAuth: true },
      },
      {
        path: "limits",
        name: "limits",
        component: Limit,
        meta: { requiresAuth: true },
      },
      {
        path: "payment-methods",
        name: "payment-methods",
        component: PaymentMethod,
        meta: { requiresAuth: true },
      },
      {
        path: "plans",
        name: "plans",
        component: Plan,
        meta: { requiresAuth: true },
      },
      {
        path: "premiums",
        name: "premiums",
        component: Premium,
        meta: { requiresAuth: true },
      },
      {
        path: "roles",
        name: "roles",
        component: Role,
        meta: { requiresAuth: true },
      },
      {
        path: "sp-bank-details",
        name: "sp-bank-details",
        component: SPBankDetail,
        meta: { requiresAuth: true },
      },
      {
        path: "service-providers",
        name: "service-providers",
        component: SP,
        meta: { requiresAuth: true },
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/client-register",
    name: "client_register",
    component: ClientRegister,
  },
  {
    path: "/sp-register",
    name: "sp_register",
    component: SPRegister,
  },
  {
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    document.title = (to.meta.title || 'ZG Medical Aid');
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.state.auth.isLoggedIn) {
      next({
        path: "/login",
        query: { redirect: to.fullPath },
      });
    } else {
      //this route requires logged in user, check if user has required roles
      //if not, redirect to dashboard
      if (!to.meta.roles) {
        return next();
      } else {
        //this route requires user with roles similar with  meta array roles
        //if not, redirect to dashboard

        //Start: You can not check if logged in user roles are equal to meta allowed roles and and enter else redirect to dashboard
        //Function to compare roles
        function isAllowed(allowedRoles, roles) {
          return allowedRoles.some((item) => roles.includes(item)); //Checking if user has any role similar to allowed roles and return true else false
        }

        if (
          isAllowed(
            to.meta.roles, //Get meta roles array
            store.state.auth.currentUser.roles.map((rol) => rol.id) //Get Roles object from store and create an array of id
          )
        ) {
          next();
        } 
        else {
          next({
            path: "/dashboard",
            query: { redirect: to.fullPath },
          });
        }
        //Start: You can not check if logged in user roles are equal to meta allowed roles and and enter else redirect to dashboard
      }
    }
  } else if (
    store.state.auth.isLoggedIn &&
    ["/login", "/register", "/home", "/"].includes(to.path)
  ) {
    next({
      path: "/dashboard",
      query: { redirect: to.fullPath },
    });
  } else {
    document.title = (to.meta.title || 'ZG Medical Aid');
    next(); // make sure to always call next()!
  }
});

export default router;
