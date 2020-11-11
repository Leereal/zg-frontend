<template>
  <div>
    <DarkModeSwitcher />
    <div class="container sm:px-10">
      <div class="block xl:grid grid-cols-2 gap-4">
        <!-- BEGIN: Register Info -->
        <div class="hidden xl:flex flex-col min-h-screen">
          <a
            href=""
            class="-intro-x flex items-center pt-5"
          >
            <img
              alt="ZG Medical"
              class="w-6"
              :src="require(`@/assets/images/log.png`)"
            >
            <span class="text-white text-lg ml-3">
              {{ $appName }}
            </span>
          </a>
          <div class="my-auto">
            <img
              alt="ZG Medical"
              class="-intro-x w-1/2 -mt-16"
              :src="require(`@/assets/images/nurse.svg`)"
            >
            <div
              class="-intro-x text-white font-medium text-4xl leading-tight mt-10"
            >
              A few more clicks to <br>
              sign up to your account.
            </div>
            <div class="-intro-x mt-5 text-lg text-white dark:text-gray-500">
              A healthier you, a healthier community
            </div>
          </div>
        </div>
        <!-- END: Register Info -->
        <!-- BEGIN: Register Form -->
        <div class="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
          <div
            class="my-auto mx-auto xl:ml-20 bg-white xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto"
          >
            <h2
              class="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left"
            >
              Sign Up
            </h2>
            <div
              class="intro-x mt-2 text-gray-500 dark:text-gray-500 xl:hidden text-center"
            >
              A few more clicks to sign in to your account.
            </div>
            <div class="intro-x mt-8">
              <div>
                <label class="flex flex-col sm:flex-row">
                  Employee Code
                  <span
                    class="sm:ml-auto mt-1 sm:mt-0 text-xs text-gray-600"
                  >(Get it from Admin)</span>
                </label>
                <input
                  v-model.trim="$v.employee_code.$model"
                  type="text"
                  class="input w-full border mt-2"
                  :class="{ 'border-theme-6': $v.employee_code.$error }"
                  placeholder="JOSH123"
                >
                <template v-if="$v.employee_code.$error">
                  <div
                    v-if="!$v.employee_code.required"
                    class="text-theme-6 mt-2"
                  >
                    Field is required
                  </div>
                </template>
              </div>
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
              <div class="mt-3">
                <label class="flex flex-col sm:flex-row">
                  Confirm Password
                  <span
                    class="sm:ml-auto mt-1 sm:mt-0 text-xs text-gray-600"
                  >(Must Match)</span>
                </label>
                <input
                  v-model.trim="$v.repeatPassword.$model"
                  type="password"
                  class="input w-full border mt-2"
                  :class="{ 'border-theme-6': $v.repeatPassword.$error }"
                  placeholder="secret"
                >
                <template v-if="$v.repeatPassword.$error">
                  <div
                    v-if="!$v.repeatPassword.sameAsPassword"
                    class="text-theme-6 mt-2"
                  >
                    Passwords must be identical.
                  </div>
                </template>
              </div>
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
                @click="save"
              >
                Register
              </button>
              <router-link to="/login">
                <button
                  class="button button--lg w-full xl:w-32 text-gray-700 border border-gray-300 dark:border-dark-5 dark:text-gray-300 mt-3 xl:mt-0 align-top"
                >
                  Sign in
                </button>
              </router-link>
            </div>
            <template v-if="isRegistrationError">
              <div
                v-for="(err, index) in isRegistrationError"
                :key="index"
                class="text-theme-6 mt-2"
              >
                {{ err }}
              </div>
            </template>
          </div>
        </div>
        <!-- END: Register Form -->
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
  sameAs,
} from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  validations: {
    employee_code: {
      required,
    },
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(8),
      maxLength: maxLength(20),
    },
    repeatPassword: {
      sameAsPassword: sameAs("password"),
    },
  },
  components: {
    DarkModeSwitcher,
  },
  data() {
    return {
      employee_code: "",
      email: "",
      password: "",
      repeatPassword: "",
    };
  },
  computed: {
    isLoading() {
      return this.$store.getters.isLoading;
    },
    isRegistrationError() {
      return this.$store.getters.registrationError;
    },
  },
  mounted() {
    cash("body")
      .removeClass("app")
      .addClass("login");
  },
  methods: {
    save() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        Toastify({
          text: "Registration failed. Please check your details and try again",
          duration: 3000,
          newWindow: true,
          close: true,
          gravity: "bottom",
          position: "left",
          backgroundColor: "#D32929",
          stopOnFocus: true,
        }).showToast();
      } else {
        this.$store.commit("LOADING");
        this.$store
          .dispatch("register", {
            email: this.email,
            password: this.password,
            confirm_password: this.repeatPassword,
            employee_code: this.employee_code,
          })
          .then((res) => {
            Toastify({
              text: "Registration success!",
              duration: 3000,
              newWindow: true,
              close: true,
              gravity: "bottom",
              position: "left",
              backgroundColor: "#91C714",
              stopOnFocus: true,
            }).showToast();
            this.$router.push("/login");
          })
          .catch((err) => {
            this.$store.commit("REGISTRATION_FAILED", err.response.data.errors);
            this.$store.commit("CREATE_FAILED");
            Toastify({
              text:
                "Registration failed. Please check your details and try again",
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
