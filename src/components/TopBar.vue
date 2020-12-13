<template>
  <!-- BEGIN: Top Bar -->
  <div class="top-bar z-10">
    <!-- BEGIN: Breadcrumb -->
    <div class="-intro-x breadcrumb mr-auto hidden sm:flex">
      <a
        href
        class
      >Application</a>
      <ChevronRightIcon class="breadcrumb__icon" />
      <a
        href
        class="breadcrumb--active"
      >Dashboard</a>
    </div>
    <!-- END: Breadcrumb -->
    <!-- BEGIN: Account Menu -->
    <div class="intro-x dropdown w-8 h-8 relative">
      <div
        class="dropdown-toggle w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in"
      >
        <img
          alt="ZG Medical"
          :src="require(`@/assets/images/user.svg`)"
        >
      </div>
      <div class="dropdown-box w-56">
        <div
          class="dropdown-box__content box bg-theme-38 dark:bg-dark-6 text-white"
        >
          <div class="p-4 border-b border-theme-40 dark:border-dark-3">
            <div class="font-medium">
              {{ currentUser.firstname }} {{ currentUser.surname }}
            </div>
            <div class="text-xs text-theme-41 dark:text-gray-600">
              {{ currentUser.job_title }}
            </div>
          </div>
          <div class="p-2">
            <router-link to="/profile">
              <a
                class="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md"
              >
                <UserIcon class="w-4 h-4 mr-2" /> Profile
              </a>
            </router-link>
            <router-link to="/change-password">
              <a
                class="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md"
              >
                <LockIcon class="w-4 h-4 mr-2" /> Reset Password
              </a>
            </router-link>
            <router-link to="/help">
              <a
                class="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md"
              >
                <HelpCircleIcon class="w-4 h-4 mr-2" /> Help
              </a>
            </router-link>
          </div>
          <div class="p-2 border-t border-theme-40 dark:border-dark-3">
            <a
              href
              class="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md"
              @click.prevent="logout"
            >
              <ToggleRightIcon class="w-4 h-4 mr-2" />
              Logout
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- END: Account Menu -->
  </div>
  <!-- END: Top Bar -->
</template>

<script>
export default {
  data() {
    return {
      searchDropdown: false,
    };
  },
  computed: {
    currentUser() {
      return this.$store.getters.currentUser;
    },
    clients() {
      return this.$store.getters.getClients;
    },
  },
  mounted() {
    this.$store.dispatch("fetchAllClients");
  },
  methods: {
    logout() {
      this.$store.commit("LOGOUT");
      this.$router.push("/login");
    },
    showSearchDropdown() {
      this.searchDropdown = true;
    },
    hideSearchDropdown() {
      this.searchDropdown = false;
    },
  },
};
</script>
