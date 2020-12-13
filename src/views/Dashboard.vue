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
                    <CreditCardIcon class="report-box__icon text-theme-11" />
                    <div class="ml-auto">
                      <Tippy
                        tag="div"
                        class="report-box__indicator bg-theme-9 cursor-pointer"
                        content="33% Higher than last month"
                      >
                        {{ percentageIncreasePayments }}%
                        <ChevronUpIcon class="w-4 h-4" />
                      </Tippy>
                    </div>
                  </div>
                  <div class="text-3xl font-bold leading-8 mt-6">
                    {{ $h.totalPayments(currentMonthPayments) + 0 }}
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
                        {{ percentageTotalIncreasePayments }}%
                        <ChevronDownIcon class="w-4 h-4" />
                      </Tippy>
                    </div>
                  </div>
                  <div class="text-3xl font-bold leading-8 mt-6">
                    {{ $h.totalPayments(payments) }}
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
                    {{ $h.totalPayments(previousMonthPayments) }}
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
                        {{ percentageIncreaseClients }}%
                        <ChevronUpIcon class="w-4 h-4" />
                      </Tippy>
                    </div>
                  </div>
                  <div class="text-3xl font-bold leading-8 mt-6">
                    {{ clientsCount }}
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
                  ${{ $h.totalPayments(this.currentMonthPayments) }}
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
                  ${{ $h.totalPayments(this.previousMonthPayments) }}
                </div>
                <div class="text-gray-600 dark:text-gray-600">Last Month</div>
              </div>
            </div>
            <div class="dropdown xl:ml-auto mt-5 xl:mt-0">
              <model-list-select                
                :list="plans"
                option-value="id"
                :option-text="'name'"
                placeholder="Filter By Plan"
                class="input w-full border mt-2"               
              />
            </div>
          </div>
          <div class="report-chart">
            <ReportLineChart :height="273" class="mt-6" />
          </div>
        </div>
      </div>
      <!-- END: Payments Report -->
      <!-- BEGIN: Weekly Best Sellers -->
      <WeeklyBestReferrer/>
      <!-- END: Weekly Best Sellers -->
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions, mapMutations } from "vuex";
import ReportLineChart from "@/components/PaymentsReportLineChart";
import { ModelListSelect } from "vue-search-select"; //Import for dropdown search
import WeeklyBestReferrer from "../components/WeeklyBestReferrer";
export default {
  components: {
    ReportLineChart,
    WeeklyBestReferrer,
    "model-list-select": ModelListSelect,
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
      payments: (state) => state.payment.payments,
    }),
    //End: Get all required states

    ...mapGetters([
      "getClients",
      "currentMonthPayments",
      "previousMonthPayments",
      "clientsCount",
      "currentMonthClients",
      "previousMonthClients",
    ]), // Get all getters

    //Calculate percentage increase from last month
    percentageIncreaseClients() {
      return (
        Math.round(
          (this.currentMonthClients.length / this.clients.length) * 100
        ) + 0
      );
    },

    //Calculate percentage increase from last month
    percentageIncreasePayments() {
      return (
        Math.round(
          (this.$h.totalPayments(this.currentMonthPayments) /
            this.$h.totalPayments(this.previousMonthPayments)) *
            100
        ) + 0
      );
    },
    //Calculate percentage increase for total
    percentageTotalIncreasePayments() {
      return (
        Math.round(
          (this.$h.totalPayments(this.currentMonthPayments) /
            this.$h.totalPayments(this.payments)) *
            100
        ) + 0
      );
    },
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
    this.fetchAllClientBankDetails();
    this.fetchAllCompanyBankDetails();
    this.fetchAllSPBankDetails();
    this.fetchAllLimitPlans();
    this.fetchAllPaymentMethods();
    this.fetchAllRoles();
    this.fetchAllServiceProviders();
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
      "fetchAllClientBankDetails",
      "fetchAllCompanyBankDetails",
      "fetchAllSPBankDetails",
      "fetchAllLimitPlans",
      "fetchAllPaymentMethods",
      "fetchAllRoles",
      "fetchAllServiceProviders",
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
