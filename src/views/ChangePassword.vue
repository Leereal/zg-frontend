<template>
  <div>
    <div class="intro-y flex items-center mt-8">
      <h2 class="text-lg font-medium mr-auto">
        Change Password
      </h2>
    </div>
    <div class="grid grid-cols-12 gap-6">
      <!-- BEGIN: Profile Menu -->
      <MiniProfile/>
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
                type="password"
                class="input w-full border mt-2"
                placeholder="Input text"
              >
            </div>
            <div class="mt-3">
              <label>New Password</label>
              <input
                type="password"
                class="input w-full border mt-2"
                placeholder="Input text"
              >
            </div>
            <div class="mt-3">
              <label>Confirm New Password</label>
              <input
                type="password"
                class="input w-full border mt-2"
                placeholder="Input text"
              >
            </div>
            <button
              type="button"
              class="button bg-theme-1 text-white mt-4"
            >
              Change Password
            </button>
          </div>
        </div>
        <!-- END: Change Password -->
      </div>
    </div>
  </div>
</template>
<script>
import MiniProfile from "@/components/MiniProfile";
export default {
  components: {
    MiniProfile
  }, 
};
</script>