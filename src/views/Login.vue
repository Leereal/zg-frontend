<template>
  <div>
    <DarkModeSwitcher />
    <div class="container sm:px-10">
      <div class="block xl:grid grid-cols-2 gap-4">
        <!-- BEGIN: Login Info -->
        <div class="hidden xl:flex flex-col min-h-screen">
          <a
            href=""
            class="-intro-x flex items-center pt-5"
          >
            <img
              alt="ZG Medical Aid"
              class="w-6"
              :src="require(`@/assets/images/log.png`)"
            >
            <span class="text-white text-lg ml-3">
              {{ $appName }}
            </span>
          </a>
          <div class="my-auto">
            <img
              alt="ZG Medical Aid"
              class="-intro-x w-1/2 -mt-16"
              :src="require(`@/assets/images/nurse.svg`)"
            >
            <div
              class="-intro-x text-white font-medium text-4xl leading-tight mt-10"
            >
              Contact Support <br>
              to get your account registered
            </div>
            <div class="-intro-x mt-5 text-lg text-white dark:text-gray-500">
              A healthier you, a healthier community
            </div>
          </div>
        </div>
        <!-- END: Login Info -->
        <!-- BEGIN: Login Form -->
        <form
          id="LoginForm"
          @submit.prevent
        >
          <div class="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
            <div
              class="my-auto mx-auto xl:ml-20 bg-white xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto"
            >
              <h2
                class="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left"
              >
                Sign In
              </h2>
              <div class="intro-x mt-2 text-gray-500 xl:hidden text-center">
                A few more clicks to sign in to your account. Manage all your
                e-commerce accounts in one place
              </div>
              <div class="intro-x mt-8">
                <div class="mt-3">
                  <label class="flex flex-col sm:flex-row">
                    Email
                    <span
                      class="sm:ml-auto mt-1 sm:mt-0 text-xs text-gray-600"
                    >(Required, email address format)</span>
                  </label>
                  <input
                    v-model.trim="$v.email.$model"
                    type="email"
                    class="input w-full border mt-2"
                    :class="{ 'border-theme-6': $v.email.$error }"
                    placeholder="example@gmail.com"
                  >
                  <template v-if="$v.email.$error">
                    <div
                      v-if="!$v.email.required"
                      class="text-theme-6 mt-2"
                    >
                      Field is required
                    </div>
                    <div
                      v-if="!$v.email.email"
                      class="text-theme-6 mt-2"
                    >
                      Please enter a valid email address.
                    </div>
                  </template>
                </div>
                <div class="mt-3">
                  <label class="flex flex-col sm:flex-row">
                    Password
                    <span
                      class="sm:ml-auto mt-1 sm:mt-0 text-xs text-gray-600"
                    >(Required, at least 8 characters)</span>
                  </label>
                  <input
                    v-model.trim="$v.password.$model"
                    type="password"
                    class="input w-full border mt-2"
                    :class="{ 'border-theme-6': $v.password.$error }"
                    placeholder="secret"
                  >
                  <template v-if="$v.password.$error">
                    <div
                      v-if="!$v.password.required"
                      class="text-theme-6 mt-2"
                    >
                      Field is required
                    </div>
                    <div
                      v-if="!$v.password.minLength"
                      class="text-theme-6 mt-2"
                    >
                      Password must have at least
                      {{ $v.password.$params.minLength.min }} letters.
                    </div>
                  </template>
                </div>
              </div>
              <div
                class="intro-x flex text-gray-700 dark:text-gray-600 text-xs sm:text-sm mt-4"
              >
                <div class="flex items-center mr-auto">
                  <input
                    id="remember-me"
                    type="checkbox"
                    class="input border mr-2"
                  >
                  <label
                    class="cursor-pointer select-none"
                    for="remember-me"
                  >Remember me</label>
                </div>
                <a href="">Forgot Password?</a>
              </div>
              <div
                v-if="isLoading"
                class="col-span-6 sm:col-span-3 xl:col-span-2 flex flex-col justify-end items-center"
              >
                <LoadingIcon
                  icon="three-dots"
                  class="w-8 h-8"
                />
              </div>
              <div
                v-else
                class="intro-x mt-5 xl:mt-8 text-center xl:text-left"
              >
                <button
                  class="button button--lg w-full xl:w-32 text-white bg-theme-1 xl:mr-3 align-top"
                  @click="login"
                >
                  Login
                </button>
                <router-link to="/register">
                  <button
                    class="button button--lg w-full xl:w-32 text-gray-700 border border-gray-300 dark:border-dark-5 dark:text-gray-300 mt-3 xl:mt-0 align-top"
                  >
                    Sign up
                  </button>
                </router-link>
              </div>
              <div
                class="intro-x mt-10 xl:mt-24 text-gray-700 dark:text-gray-600 text-center xl:text-left"
              >
                Developed by<br>
                <a
                  class="text-theme-1 dark:text-theme-10"
                  href="http://leereal.me"
                >Leereal Inc</a>
              </div>
            </div>
          </div>
        </form>
        <!-- END: Login Form -->
      </div>
    </div>
  </div>
</template>

<script>
import DarkModeSwitcher from "@/components/DarkModeSwitcher";
import Toastify from "toastify-js";
import { validationMixin } from "vuelidate";
import {
  required,
  minLength,
  maxLength,
  email,
} from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(8),
      maxLength: maxLength(20),
    },
  },
  components: {
    DarkModeSwitcher,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: {
    isLoading() {
      return this.$store.getters.isLoading;
    },
  },
  mounted() {
    cash("body")
      .removeClass("app")
      .addClass("login");
  },
  methods: {  
    login() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        Toastify({
          text: "Login failed, invalid email or password",
          duration: 3000,
          newWindow: true,
          close: true,
          gravity: "bottom",
          position: "left",
          backgroundColor: "#D32929",
          stopOnFocus: true,
        }).showToast();
      } else {
        this.$store.commit("LOGIN");
        this.$store
          .dispatch("login", { email: this.email, password: this.password })
          .then((res) => {
            this.$router.push("/dashboard");
          })
          .catch((error) => {
            this.$store.commit("LOGIN_FAILED", error);
            Toastify({
              text: "Login failed, invalid email or password",
              duration: 3000,
              newWindow: true,
              close: true,
              gravity: "bottom",
              position: "left",
              backgroundColor: "#D32929",
              stopOnFocus: true,
            }).showToast();
          });
      }
    },
  },
};
</script>
