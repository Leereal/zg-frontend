<template>
  <div class="grid grid-cols-12 gap-6">
    <div class="col-span-12 xxl:col-span-9 grid grid-cols-12 gap-6">
      <!-- BEGIN: General Report -->
      <div class="col-span-12 mt-8">
        <div class="intro-y flex items-center h-10">
          <h2 class="text-lg font-medium truncate mr-5">
            General Report
          </h2>
          <a
            href=""
            class="ml-auto flex text-theme-1 dark:text-theme-10"
          >
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
                  Item Sales
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
                  New Orders
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
                  Total Products
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
                  Unique Visitor
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END: General Report -->      
    </div>  
  </div>
</template>

<script>
export default {
  components: { 
  },
  data() {
    return {
      salesReportFilter: ""
    };
  },
  methods: {
    prevImportantNotes() {
      this.$refs["important-notes"].prev();
    },
    nextImportantNotes() {
      this.$refs["important-notes"].next();
    }
  }
};
</script>
