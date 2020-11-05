<template>
  <!-- BEGIN: Profile Menu -->
  <div
    class="col-span-12 lg:col-span-4 xxl:col-span-3 flex lg:block flex-col-reverse"
  >
    <div class="intro-y box mt-5">
      <div class="relative flex items-center p-5">
        <div class="w-12 h-12 image-fit">
          <img
            alt="Midone Tailwind HTML Admin Template"
            class="rounded-full"
            :src="require(`@/assets/images/user.svg`)"
          />
        </div>
        <div class="ml-4 mr-auto">
          <div class="font-medium text-base">
            {{currentUser.firstname}} {{currentUser.surname}}
          </div>
          <div class="text-gray-600">
            {{currentUser.job_title}}
          </div>
        </div>
        
      </div>
      <div class="p-5 border-t border-gray-200 dark:border-dark-5">
        <router-link to="/profile">
        <a
          class="flex items-center text-theme-1 dark:text-theme-10 font-medium"       
        >
          <ActivityIcon class="w-4 h-4 mr-2" /> Personal Information
        </a>
        </router-link>
        <router-link to="/update-profile">
        <a class="flex items-center mt-5" href="">
          <BoxIcon class="w-4 h-4 mr-2" /> Update Profile
        </a>
        </router-link>
        <router-link to="/change-password">
        <a class="flex items-center mt-5" href="">
          <LockIcon class="w-4 h-4 mr-2" /> Change Password
        </a>
        </router-link>       
      </div>   
      <div class="p-5 border-t flex">
        <button
          type="button"
          class="button button--sm block bg-theme-1 text-white"
        >
          Change Password
        </button>
        <button
          type="button"
          class="button button--sm border text-gray-700 dark:border-dark-5 dark:text-gray-300 ml-auto"
        >
          Lock Account
        </button>
      </div>
    </div>
  </div>
  <!-- END: Profile Menu -->
</template>

<script>
export default {
    computed:{  
    currentUser() {
      return this.$store.getters.currentUser;     
    },
  }
};
</script>
