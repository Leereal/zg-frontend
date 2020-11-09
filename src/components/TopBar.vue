<template>
  <!-- BEGIN: Top Bar -->
  <div class="top-bar z-10">
    <!-- BEGIN: Breadcrumb -->
    <div class="-intro-x breadcrumb mr-auto hidden sm:flex">
      <a href class>Application</a>
      <ChevronRightIcon class="breadcrumb__icon" />
      <a href class="breadcrumb--active">Dashboard</a>
    </div>
    <!-- END: Breadcrumb -->
    <!-- BEGIN: Search -->
    <div class="intro-x relative mr-3 sm:mr-6">
      <div class="search hidden sm:block">
        <input
          type="text"
          class="search__input input placeholder-theme-13"
          placeholder="Search..."
          @focus="showSearchDropdown"
          @blur="hideSearchDropdown"
        />
        <SearchIcon class="search__icon dark:text-gray-300" />
      </div>
      <a class="notification sm:hidden" href>
        <SearchIcon class="notification__icon dark:text-gray-300" />
      </a>
      <div class="search-result" :class="{ show: searchDropdown }">
        <div class="search-result__content">
          <div v-for="client in clients" :key="client.id">
            <div class="search-result__content__title">
              {{client.firstname + " " + client.surname}}
            </div>
            <div class="mb-5">
              <a               
                class="flex items-center mt-2"
              >
                <div class="w-8 h-8 image-fit">
                  <img                   
                    class="rounded-full"
                    :src="require(`@/assets/images/user.svg`)"
                  />
                </div>
                <div class="ml-3">{{client.surname}}</div>
                <div
                  class="ml-auto w-48 truncate text-gray-600 text-xs text-right"
                >
                  {{ client.cellphone }}
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- END: Search -->
    <!-- BEGIN: Notifications -->
    <div class="intro-x dropdown relative mr-auto sm:mr-6">
      <div
        class="dropdown-toggle notification notification--bullet cursor-pointer"
      >
        <BellIcon class="notification__icon dark:text-gray-300" />
      </div>
      <div class="notification-content pt-2 dropdown-box">
        <div
          class="notification-content__box dropdown-box__content box dark:bg-dark-6"
        >
          <div class="notification-content__title">
            Notifications
          </div>
          <div
            v-for="(faker, fakerKey) in $_.take($f(), 5)"
            :key="fakerKey"
            class="cursor-pointer relative flex items-center"
            :class="{ 'mt-5': fakerKey }"
          >
            <div class="w-12 h-12 flex-none image-fit mr-1">
              <img
                alt="Midone Tailwind HTML Admin Template"
                class="rounded-full"
                :src="require(`@/assets/images/${faker.photos[0]}`)"
              />
              <div
                class="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white"
              />
            </div>
            <div class="ml-2 overflow-hidden">
              <div class="flex items-center">
                <a href="javascript:;" class="font-medium truncate mr-5">
                  {{ faker.users[0].name }}
                </a>
                <div class="text-xs text-gray-500 ml-auto whitespace-no-wrap">
                  {{ faker.times[0] }}
                </div>
              </div>
              <div class="w-full truncate text-gray-600">
                {{ faker.news[0].short_content }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- END: Notifications -->
    <!-- BEGIN: Account Menu -->
    <div class="intro-x dropdown w-8 h-8 relative">
      <div
        class="dropdown-toggle w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in"
      >
        <img alt="ZG Medical" :src="require(`@/assets/images/user.svg`)" />
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
