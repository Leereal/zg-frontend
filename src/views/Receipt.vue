<template>
  <div>
    <div class="intro-y flex flex-col sm:flex-row items-center mt-8">
      <h2 class="text-lg font-medium mr-auto">Receipt</h2>
      <div class="w-full sm:w-auto flex mt-4 sm:mt-0">
        <button class="button text-white bg-theme-1 shadow-md mr-2">
          Print
        </button>
        <div class="dropdown ml-auto sm:ml-0">
          <button
            class="dropdown-toggle button px-2 box text-gray-700 dark:text-gray-300"
          >
            <span class="w-5 h-5 flex items-center justify-center">
              <PlusIcon class="w-4 h-4" />
            </span>
          </button>
          <div class="dropdown-box w-40">
            <div class="dropdown-box__content box dark:bg-dark-1 p-2">
              <a
                href=""
                class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Export Word
              </a>
              <a
                href=""
                class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Export PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- BEGIN: Invoice -->
    <div class="intro-y box overflow-hidden mt-5">
      <div
        class="flex flex-col lg:flex-row pt-10 px-5 sm:px-20 sm:pt-20 lg:pb-20 text-center sm:text-left"
      >
        <div class="font-semibold text-theme-1 dark:text-theme-10 text-3xl">
          RECEIPT
        </div>
        <div class="mt-20 lg:mt-0 lg:ml-auto lg:text-right">
          <div class="text-xl text-theme-1 dark:text-theme-10 font-medium">
            ZG Medical Aid Fund
          </div>
          <div class="mt-1">enquiries@zimgeneral.co.zw</div>
          <div class="mt-1">Moonlight Building, 5th Street, Gweru, Zimbabwe</div>
          <div class="mt-1">+263 77 945 0922</div>
        </div>
      </div>
      <div
        class="flex flex-col lg:flex-row border-b px-5 sm:px-20 pt-10 pb-10 sm:pb-20 text-center sm:text-left"
      >
        <div>
          <div class="text-base text-gray-600">Client Details</div>
          <div class="text-lg font-medium text-theme-1 dark:text-theme-10 mt-2">
           {{payment.client}}
          </div>
          <div class="mt-1">Medical Aid Number: {{payment.medical_aid_number}}</div>
          <div class="mt-1">{{payment.cellphone}}</div>          
        </div>
        <div class="mt-10 lg:mt-0 lg:ml-auto lg:text-right">
          <div class="text-base text-gray-600">Receipt</div>
          <div class="text-lg text-theme-1 dark:text-theme-10 font-medium mt-2">
            #{{payment.receipt_number}}
          </div>
          <div class="mt-1">{{payment.date_paid}}</div>
        </div>
      </div>
      <div class="px-5 sm:px-16 py-10 sm:py-20">
        <div class="overflow-x-auto">
          <table class="table">
            <thead>
              <tr>
                <th class="border-b-2 dark:border-dark-5 whitespace-no-wrap">
                  DESCRIPTION
                </th>
                <th
                  class="border-b-2 dark:border-dark-5 text-right whitespace-no-wrap"
                >
                  MEMBERS
                </th>
                <th
                  class="border-b-2 dark:border-dark-5 text-right whitespace-no-wrap"
                >
                  PREMIUM
                </th>
                <th
                  class="border-b-2 dark:border-dark-5 text-right whitespace-no-wrap"
                >
                  SUBTOTAL
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border-b dark:border-dark-5">
                  <div class="font-medium whitespace-no-wrap">
                    Medical Aid Premium Payment
                  </div>
                  <div class="text-gray-600 text-xs whitespace-no-wrap">
                    {{payment.plan}}
                  </div>
                </td>
                <td class="text-right border-b dark:border-dark-5 w-32">{{payment.members}}</td>
                <td class="text-right border-b dark:border-dark-5 w-32">{{payment.premium}}</td>
                <td
                  class="text-right border-b dark:border-dark-5 w-32 font-medium"
                >
                  {{payment.amount}}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div
        class="px-5 sm:px-20 pb-10 sm:pb-20 flex flex-col-reverse sm:flex-row"
      >
        <div class="text-center sm:text-left mt-10 sm:mt-0">
          <div class="text-base text-gray-600">{{payment.payment_method}}</div>
          <div class="text-lg text-theme-1 dark:text-theme-10 font-medium mt-2">
            Done By {{payment.employee}}
          </div>      
          <div class="mt-1">Ref Number : {{payment.ref_number}}</div>
        </div>
        <div class="text-center sm:text-right sm:ml-auto">
          <div class="text-base text-gray-600">Total Amount</div>
          <div class="text-xl text-theme-1 dark:text-theme-10 font-medium mt-2">
            {{payment.amount}}
          </div>
          <div class="mt-1 tetx-xs">Taxes included</div>
        </div>
      </div>
    </div>
    <!-- END: Invoice -->
  </div>
</template>
<script>
export default {
  computed: {
    payment(){
      return this.$store.state.payment.receipt;
    }
  }  
}
</script>