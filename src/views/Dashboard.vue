<template>
  <div>
    <div class="grid grid-cols-12 gap-6">
      <div class="col-span-12 xxl:col-span-9 grid grid-cols-12 gap-6">
        <!-- BEGIN: General Report -->
        <div class="col-span-12 mt-8">
          <div class="intro-y flex items-center h-10">
            <h2 class="text-lg font-medium truncate mr-5">
              General Report
            </h2>
            <a href="" class="ml-auto flex text-theme-1 dark:text-theme-10">
              <RefreshCcwIcon class="w-4 h-4 mr-3" /> Reload Data
            </a>
          </div>
          <div class="grid grid-cols-12 gap-6 mt-5">
            <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
              <div class="report-box zoom-in">
                <div class="box p-5">
                  <div class="flex">
                    <ShoppingCartIcon class="report-box__icon text-theme-10" />
                    <div class="ml-auto">
                      <Tippy
                        tag="div"
                        class="report-box__indicator bg-theme-9 cursor-pointer"
                        content="33% Higher than last month"
                      >
                        33% <ChevronUpIcon class="w-4 h-4" />
                      </Tippy>
                    </div>
                  </div>
                  <div class="text-3xl font-bold leading-8 mt-6">
                    4.510
                  </div>
                  <div class="text-base text-gray-600 mt-1">
                    Current Month's Payments
                  </div>
                </div>
              </div>
            </div>
            <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
              <div class="report-box zoom-in">
                <div class="box p-5">
                  <div class="flex">
                    <CreditCardIcon class="report-box__icon text-theme-11" />
                    <div class="ml-auto">
                      <Tippy
                        tag="div"
                        class="report-box__indicator bg-theme-6 cursor-pointer"
                        content="2% Lower than last month"
                      >
                        2% <ChevronDownIcon class="w-4 h-4" />
                      </Tippy>
                    </div>
                  </div>
                  <div class="text-3xl font-bold leading-8 mt-6">
                    3.521
                  </div>
                  <div class="text-base text-gray-600 mt-1">
                    Total Payments
                  </div>
                </div>
              </div>
            </div>
            <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
              <div class="report-box zoom-in">
                <div class="box p-5">
                  <div class="flex">
                    <MonitorIcon class="report-box__icon text-theme-12" />
                    <div class="ml-auto">
                      <Tippy
                        tag="div"
                        class="report-box__indicator bg-theme-9 cursor-pointer"
                        content="12% Higher than last month"
                      >
                        12% <ChevronUpIcon class="w-4 h-4" />
                      </Tippy>
                    </div>
                  </div>
                  <div class="text-3xl font-bold leading-8 mt-6">
                    2.145
                  </div>
                  <div class="text-base text-gray-600 mt-1">
                    Total Claims
                  </div>
                </div>
              </div>
            </div>
            <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
              <div class="report-box zoom-in">
                <div class="box p-5">
                  <div class="flex">
                    <UserIcon class="report-box__icon text-theme-9" />
                    <div class="ml-auto">
                      <Tippy
                        tag="div"
                        class="report-box__indicator bg-theme-9 cursor-pointer"
                        content="22% Higher than last month"
                      >
                        22% <ChevronUpIcon class="w-4 h-4" />
                      </Tippy>
                    </div>
                  </div>
                  <div class="text-3xl font-bold leading-8 mt-6">
                    152.000
                  </div>
                  <div class="text-base text-gray-600 mt-1">
                    Total Clients
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- END: General Report -->
      </div>
    </div>
    <div class="grid grid-cols-12 gap-6">
      <!-- BEGIN: Sales Report -->
      <div class="col-span-12 lg:col-span-6 mt-8">
        <div class="intro-y block sm:flex items-center h-10">
          <h2 class="text-lg font-medium truncate mr-5">
            Payments Report
          </h2>
          <div
            class="sm:ml-auto mt-3 sm:mt-0 relative text-gray-700 dark:text-gray-300"
          >
            <CalendarIcon
              class="w-4 h-4 z-10 absolute my-auto inset-y-0 ml-3 left-0"
            />
            <LitePicker
              v-model="salesReportFilter"
              :options="{
                autoApply: false,
                singleMode: false,
                numberOfColumns: 2,
                numberOfMonths: 2,
                showWeekNumbers: true,
                dropdowns: {
                  minYear: 2000,
                  maxYear: null,
                  months: true,
                  years: true,
                },
              }"
              class="input w-full sm:w-56 box pl-10"
            />
          </div>
        </div>
        <div class="intro-y box p-5 mt-12 sm:mt-5">
          <div class="flex flex-col xl:flex-row xl:items-center">
            <div class="flex">
              <div>
                <div
                  class="text-theme-20 dark:text-gray-300 text-lg xl:text-xl font-bold"
                >
                  $15,000
                </div>
                <div class="text-gray-600 dark:text-gray-600">This Month</div>
              </div>
              <div
                class="w-px h-12 border border-r border-dashed border-gray-300 dark:border-dark-5 mx-4 xl:mx-6"
              ></div>
              <div>
                <div
                  class="text-gray-600 dark:text-gray-600 text-lg xl:text-xl font-medium"
                >
                  $10,000
                </div>
                <div class="text-gray-600 dark:text-gray-600">Last Month</div>
              </div>
            </div>
            <div class="dropdown xl:ml-auto mt-5 xl:mt-0">
              <button
                class="dropdown-toggle button font-normal border dark:border-dark-5 text-white dark:text-gray-300 relative flex items-center text-gray-700"
              >
                Filter by Category
                <ChevronDownIcon class="w-4 h-4 ml-2" />
              </button>
              <div class="dropdown-box w-40">
                <div
                  class="dropdown-box__content box dark:bg-dark-1 p-2 overflow-y-auto h-32"
                >
                  <a
                    href=""
                    class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                    >General</a
                  >
                  <a
                    href=""
                    class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                    >Flexi Gold</a
                  >
                  <a
                    href=""
                    class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                    >Electronic</a
                  >
                  <a
                    href=""
                    class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                    >Photography</a
                  >
                  <a
                    href=""
                    class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                    >Sport</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="report-chart">
            <ReportLineChart :height="273" class="mt-6" />
          </div>
        </div>
      </div>
      <!-- END: Payments Report -->
      <!-- BEGIN: Weekly Best Sellers -->
      <div class="col-span-12 xl:col-span-6 mt-6">
        <div class="intro-y flex items-center h-10">
          <h2 class="text-lg font-medium truncate mr-5">Weekly Best Brand Ambassadors</h2>
        </div>
        <div class="mt-5">
          <div
            v-for="(faker, fakerKey) in $_.take($f(), 4)"
            :key="fakerKey"
            class="intro-y"
          >
            <div class="box px-4 py-4 mb-3 flex items-center zoom-in">
              <div
                class="w-10 h-10 flex-none image-fit rounded-md overflow-hidden"
              >
                <img
                  alt="Midone Tailwind HTML Admin Template"
                  :src="require(`@/assets/images/${faker.photos[0]}`)"
                />
              </div>
              <div class="ml-4 mr-auto">
                <div class="font-medium">{{ faker.users[0].name }}</div>
                <div class="text-gray-600 text-xs">
                  {{ faker.dates[0] }}
                </div>
              </div>
              <div
                class="py-1 px-2 rounded-full text-xs bg-theme-9 text-white cursor-pointer font-medium"
              >
                137 Clients Registered
              </div>
            </div>
          </div>
          <a
            href=""
            class="intro-y w-full block text-center rounded-md py-4 border border-dotted border-theme-15 dark:border-dark-5 text-theme-16 dark:text-gray-600"
            >View More</a
          >
        </div>
      </div>
      <!-- END: Weekly Best Sellers -->
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions, mapMutations } from "vuex";
import ReportLineChart from "@/components/PaymentsReportLineChart";
export default {
  components: {
    ReportLineChart,
  },
  data() {
    return {
      salesReportFilter: "",
    };
  },
   computed: {
    //Start: Get all required states
    ...mapState({
      clients: (state) => state.client.clients,
      plans: (state) => state.plan.plans,
      groups: (state) => state.group.groups,
    }),
    //End: Get all required states

    ...mapGetters(["getClients"]), // Get all getters
   },
     mounted() {
    this.fetchAllClients();
    this.fetchAllGroups();
    this.fetchAllPlans();
    this.fetchAllPayments();
    this.fetchAllBanks();
    this.fetchAllCurrencies();
    this.fetchAllEmployees();
    this.fetchAllBranches();
    this.fetchAllLimits();
     },
  methods: {
    ...mapActions([
      "fetchAllClients",
      "fetchAllPlans",
      "fetchAllGroups",
      "fetchAllPayments",
      "fetchAllBanks",
      "fetchAllCurrencies",
      "fetchAllEmployees",
      "fetchAllBranches",
      "fetchAllLimits",
    ]),


    prevImportantNotes() {
      this.$refs["important-notes"].prev();
    },
    nextImportantNotes() {
      this.$refs["important-notes"].next();
    },
  },
};
</script>
