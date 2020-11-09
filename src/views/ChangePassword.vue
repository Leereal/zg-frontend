<template>
  <div>
    <div class="intro-y flex items-center mt-8">
      <h2 class="text-lg font-medium mr-auto">
        Change Password
      </h2>
    </div>
    <div class="grid grid-cols-12 gap-6">
      <!-- BEGIN: Profile Menu -->
      <MiniProfile />
      <!-- END: Profile Menu -->
      <div class="col-span-12 lg:col-span-8 xxl:col-span-9">
        <!-- BEGIN: Change Password -->
        <div class="intro-y box lg:mt-5">
          <div
            class="flex items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">
              Change Password
            </h2>
          </div>
          <div class="p-5">
            <div>
              <label>Old Password</label>
              <input
                v-model.trim="form.old_password"
                type="password"
                class="input w-full border mt-2"
                placeholder="Input text"
              />
            </div>
            <div class="mt-3">
              <label>New Password</label>
              <input
                v-model.trim="$v.form.password.$model"
                type="password"
                class="input w-full border mt-2"
                :class="{ 'border-theme-6': $v.form.password.$error }"
                placeholder="Input text"
              />
              <template v-if="$v.form.password.$error">
                <div
                  v-if="!$v.form.password.required"
                  class="text-theme-6 mt-2"
                >
                  Field is required
                </div>
                <div
                  v-if="!$v.form.password.minLength"
                  class="text-theme-6 mt-2"
                >
                  Password must have at least
                  {{ $v.form.password.$params.minLength.min }} letters.
                </div>
              </template>
            </div>
            <div class="mt-3">
              <label>Confirm New Password</label>
              <input
                v-model.trim="$v.form.repeatPassword.$model"
                type="password"
                class="input w-full border mt-2"
                :class="{ 'border-theme-6': $v.form.repeatPassword.$error }"
                placeholder="Input text"
              />
              <template v-if="$v.form.repeatPassword.$error">
                <div
                  v-if="!$v.form.repeatPassword.sameAsPassword"
                  class="text-theme-6 mt-2"
                >
                  Passwords must be identical.
                </div>
              </template>
            </div>
            <div
              v-if="isChangePasswordLoading"
              class="col-span-6 sm:col-span-3 xl:col-span-2 flex flex-col justify-end items-center"
            >
              <LoadingIcon icon="three-dots" class="w-8 h-8" />
            </div>
            <div v-else>
              <button
                type="button"
                @click="changePassword"
                class="button bg-theme-1 text-white mt-4"
              >
                Change Password
              </button>
            </div>
            <template v-if="isChangePasswordError">
              <div
                v-for="(err, index) in isChangePasswordError"
                :key="index"
                class="text-theme-6 mt-2"
              >
                {{ err }}
              </div>
            </template>
          </div>
        </div>
        <!-- END: Change Password -->
      </div>
    </div>
  </div>
</template>
<script>
//Start: Validation imports
import Toastify from "toastify-js";
import { validationMixin } from "vuelidate";
import {
  required,
  minLength,
  maxLength,
  email,
  sameAs,
} from "vuelidate/lib/validators";
//End: Validation imports

import MiniProfile from "@/components/MiniProfile";
export default {
  components: {
    MiniProfile,
  },
  mixins: [validationMixin],
  validations: {
    form: {
      password: {
        required,
        minLength: minLength(8),
        maxLength: maxLength(20),
      },
      repeatPassword: {
        sameAsPassword: sameAs("password"),
      },
    },
  },
  data() {
    return {
      form: {
        password: "",
        repeatPassword: "",
        old_password: "",
      },
    };
  },
  computed: {
    isChangePasswordLoading() {
      return this.$store.getters.isChangePasswordLoading;
    },
    isChangePasswordError() {
      return this.$store.getters.changePasswordError;
    },
  },
  methods: {
    async changePassword() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        Toastify({
          text: "Failed to change password!",
          duration: 3000,
          newWindow: true,
          close: true,
          gravity: "bottom",
          position: "left",
          backgroundColor: "#D32929",
          stopOnFocus: true,
        }).showToast();
      } else {
        this.$store.commit("CHANGE_PASSWORD");
        this.$store
          .dispatch("changePassword", this.form)
          .then((res) => {
            Toastify({
              text: "Password changed successfully!",
              duration: 3000,
              newWindow: true,
              close: true,
              gravity: "bottom",
              position: "left",
              backgroundColor: "#91C714",
              stopOnFocus: true,
            }).showToast();
          })
          .catch((err) => {  
            this.$store.commit("CHANGE_PASSWORD_FAILED",err.response.data.errors);
            Toastify({
              text: "Failed to change password!",
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
