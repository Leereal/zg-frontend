<template>
  <div>
    <div
      class="flex flex-col sm:flex-row items-center mt-8"
      :class="{ 'intro-y': !isFormOpen }"
    >
      <h2 class="text-lg font-medium mr-auto">
        Make Payment
      </h2>
      <div class="w-full sm:w-auto flex mt-4 sm:mt-0">
        <router-link to="/payments">
          <button class="button text-white bg-theme-1 shadow-md mr-2">
            View Payments
          </button>
        </router-link>
      </div>
    </div>
    <!-- BEGIN: HTML Table Data -->
    <div class="box p-5 mt-5" :class="{ 'intro-y': !isFormOpen }">
      <div class="flex flex-col sm:flex-row sm:items-end xl:items-start">
        <form class="xl:flex sm:mr-auto" @submit.prevent="onFilter">
          <div class="sm:flex items-center sm:mr-4">
            <label class="w-12 flex-none xl:w-auto xl:flex-initial mr-2"
              >Field</label
            >
            <select
              v-model="filter.field"
              class="input w-full sm:w-32 xxl:w-full mt-2 sm:mt-0 sm:w-auto border"
            >
              <option value="fullname">
                NAME
              </option>
              <option value="medical_aid_number">
                MEDICAL AID NUMBER
              </option>
              <option value="id_number">
                ID NUMBER
              </option>
              <option value="cellphone">
                CELLPHONE
              </option>
            </select>
          </div>
          <div class="sm:flex items-center sm:mr-4 mt-2 xl:mt-0">
            <label class="w-12 flex-none xl:w-auto xl:flex-initial mr-2"
              >Type</label
            >
            <select
              v-model="filter.type"
              class="input w-full mt-2 sm:mt-0 sm:w-auto border"
            >
              <option value="like" selected>
                like
              </option>
              <option value="=">
                =
              </option>
              <option value="!=">
                !=
              </option>
            </select>
          </div>
          <div class="sm:flex items-center sm:mr-4 mt-2 xl:mt-0">
            <label class="w-12 flex-none xl:w-auto xl:flex-initial mr-2"
              >Value</label
            >
            <input
              v-model="filter.value"
              type="text"
              class="input w-full sm:w-40 xxl:w-full mt-2 sm:mt-0 border"
              placeholder="Search..."
            />
          </div>
          <div class="mt-2 xl:mt-0">
            <button
              type="button"
              class="button w-full sm:w-16 bg-theme-1 text-white"
              @click="onFilter"
            >
              Go
            </button>
            <button
              type="button"
              class="button w-full sm:w-16 mt-2 sm:mt-0 sm:ml-1 bg-gray-200 text-gray-600 dark:bg-dark-5 dark:text-gray-300"
              @click="onResetFilter"
            >
              Reset
            </button>
          </div>
        </form>
        <div class="flex mt-5 sm:mt-0">
          <button
            class="button w-1/2 sm:w-auto flex items-center border text-gray-700 mr-2 dark:bg-dark-5 dark:text-gray-300"
            @click="onPrint"
          >
            <i data-feather="printer" class="w-4 h-4 mr-2" /> Print
          </button>
          <div class="dropdown w-1/2 sm:w-auto">
            <button
              class="dropdown-toggle button w-full sm:w-auto flex items-center border text-gray-700 dark:bg-dark-5 dark:text-gray-300"
            >
              <i data-feather="file-text" class="w-4 h-4 mr-2" /> Export
              <i data-feather="chevron-down" class="w-4 h-4 ml-auto sm:ml-2" />
            </button>
            <div class="dropdown-box w-40">
              <div class="dropdown-box__content box dark:bg-dark-1 p-2">
                <a
                  href="javascript:;"
                  class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                  @click="onExportCsv"
                >
                  <i data-feather="file-text" class="w-4 h-4 mr-2" /> Export CSV
                </a>
                <a
                  href="javascript:;"
                  class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                  @click="onExportJson"
                >
                  <i data-feather="file-text" class="w-4 h-4 mr-2" /> Export
                  JSON
                </a>
                <a
                  href="javascript:;"
                  class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                  @click="onExportXlsx"
                >
                  <i data-feather="file-text" class="w-4 h-4 mr-2" /> Export
                  XLSX
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="overflow-x-auto scrollbar-hidden">
        <div
          id="tabulator"
          ref="table"
          class="mt-5 table-report table-report--tabulator"
        />
      </div>
    </div>
    <!-- END: HTML Table Data -->

    <!-- START: Modal -->
    <modal
      v-if="isFormOpen"
      :title="modalTitle"
      @close="close"
      @submit-form="addValue"
    >
      <div
        class="p-5 grid grid-cols-12 gap-4 row-gap-3  border-b border-blue-300 "
      >
        <!-- Start: Full Name Field -->
        <div class="col-span-12 sm:col-span-6">
          <label class="flex flex-col sm:flex-row">
            Client Name
          </label>
          <input
            type="text"
            :value="fullname"
            class="input w-full border mt-2"
            disabled
          />
        </div>
        <!-- End: Full Name Field -->

        <!-- Start: Medical Aid Number Field -->
        <div class="col-span-12 sm:col-span-6">
          <label class="flex flex-col sm:flex-row">
            Medical Aid Number
          </label>
          <input
            :value="medical_aid_number"
            type="text"
            class="input w-full border mt-2"
            disabled
          />
        </div>
        <!-- End: Medical Aid Number Field -->
      </div>
      <div
        class="p-5 grid grid-cols-12 gap-4 row-gap-3  border-b border-blue-300 "
      >
        <!-- Start: Payment Date Field -->
        <div class="col-span-12 sm:col-span-6">
          <label class="flex flex-col sm:flex-row">
            Payment Date
            <span class="sm:ml-auto mt-1 sm:mt-0 text-xs text-gray-600"
              >(Required)</span
            >
          </label>
          <div class="relative w-full mx-auto mt-2">
            <div
              class="absolute rounded-l w-10 h-full flex items-center justify-center bg-gray-100 border text-gray-600 dark:bg-dark-1 dark:border-dark-4"
            >
              <CalendarIcon class="w-4 h-4" />
            </div>
            <LitePicker
              v-model="$v.form.date_paid.$model"
              :options="{
                autoApply: false,
                showWeekNumbers: true,
                format: 'DD MMM YYYY',
                dropdowns: {
                  minYear: 1900,
                  maxYear: null,
                  months: true,
                  years: true,
                },
              }"
              class="input pl-12 border"
              :class="{ 'border-theme-6': $v.form.date_paid.$error }"
            />
          </div>
          <template v-if="$v.form.date_paid.$error">
            <div v-if="!$v.form.date_paid.required" class="text-theme-6 mt-2">
              Field is required
            </div>
            <div v-if="!$v.form.date_paid.maxValue" class="text-theme-6 mt-2">
              Date of birth must be less than today .
            </div>
          </template>
        </div>
        <!-- End: Payment Date Field -->

        <!-- Start: Plan Field -->
        <div class="col-span-12 sm:col-span-6">
          <label class="flex flex-col sm:flex-row">
            Plan
          </label>
          <input
            :value="plan"
            type="text"
            class="input w-full border mt-2"
            disabled
          />
        </div>
        <!-- End: Plan Field -->
      </div>
      <div
        class="p-5 grid grid-cols-12 gap-4 row-gap-3  border-b border-blue-300 "
      >
        <!-- Start: Ref Number Field -->
        <div class="col-span-12 sm:col-span-6">
          <label class="flex flex-col sm:flex-row">
            Ref Number
          </label>
          <input
            v-model="$v.form.ref_number.$model"
            type="text"
            class="input w-full border mt-2"
            :class="{ 'border-theme-6': $v.form.ref_number.$error }"
            placeholder="Ref Number"
          />
          <template v-if="$v.form.ref_number.$error">
            <div v-if="!$v.form.ref_number.maxLength" class="text-theme-6 mt-2">
              Ref Number must not be more than
              {{ $v.form.ref_number.$params.maxLength.max }} letters.
            </div>
          </template>
        </div>
        <!-- End: Ref Number Field -->

        <!-- Start: Amount Field -->
        <div class="col-span-12 sm:col-span-6">
          <label class="flex flex-col sm:flex-row">
            Amount
            <span class="sm:ml-auto mt-1 sm:mt-0 text-xs text-gray-600"
              >(Required)</span
            >
          </label>
          <input
            v-model="$v.form.amount.$model"
            type="text"
            class="input w-full border mt-2"
            :class="{ 'border-theme-6': $v.form.amount.$error }"
            placeholder="Amount"
          />
          <template v-if="$v.form.amount.$error">
            <div v-if="!$v.form.amount.required" class="text-theme-6 mt-2">
              Field is required
            </div>
            <div v-if="!$v.form.amount.maxLength" class="text-theme-6 mt-2">
              Amount must not be more than
              {{ $v.form.amount.$params.maxLength.max }} letters.
            </div>
          </template>
        </div>
        <!-- End: Amount Field -->
      </div>

      <div
        class="p-5 grid grid-cols-12 gap-4 row-gap-3  border-b border-blue-300 "
      >
        <!-- Start: Month Paid For Field -->
        <div class="col-span-12 sm:col-span-6">
          <label class="flex flex-col sm:flex-row">
            Month Paid For
          </label>
          <div class="relative w-full mx-auto mt-2">
            <div
              class="absolute rounded-l w-10 h-full flex items-center justify-center bg-gray-100 border text-gray-600 dark:bg-dark-1 dark:border-dark-4"
            >
              <CalendarIcon class="w-4 h-4" />
            </div>
            <LitePicker
              v-model="$v.form.month_paid_for.$model"
              :options="{
                autoApply: false,
                singleMode: false,
                numberOfColumns: 2,
                numberOfMonths: 2,
                showWeekNumbers: true,
                format: 'MMM YYYY',
                dropdowns: {
                  minYear: 2000,
                  maxYear: null,
                  months: true,
                  years: true,
                },
              }"
              class="input pl-12 border"
              :class="{ 'border-theme-6': $v.form.month_paid_for.$error }"
            />
          </div>
          <template v-if="$v.form.month_paid_for.$error">
            <div
              v-if="!$v.form.month_paid_for.required"
              class="text-theme-6 mt-2"
            >
              Field is required
            </div>
          </template>
        </div>
        <!-- End: Month Paid For Field -->

        <!-- Start: Payment Method Field -->
        <div class="col-span-12 sm:col-span-6">
          <label class="flex flex-col sm:flex-row">
            Payment Method
            <span class="sm:ml-auto mt-1 sm:mt-0 text-xs text-gray-600"
              >(Required)</span
            >
          </label>
          <model-list-select
            v-model="$v.form.payment_method.$model"
            :list="payment_methods"
            option-value="id"
            :option-text="'name'"
            placeholder="Select Payment Method"
            class="input w-full border mt-2"
            :class="{ 'border-theme-6': $v.form.payment_method.$error }"
          />
          <template v-if="$v.form.payment_method.$error">
            <div
              v-if="!$v.form.payment_method.required"
              class="text-theme-6 mt-2"
            >
              Payment Method is required
            </div>
          </template>
        </div>
        <!-- End: Payment Method Field -->
      </div>
    </modal>
    <!-- END: Modal-->
  </div>
</template>

<script>
import xlsx from "xlsx";
import feather from "feather-icons";
import Tabulator from "tabulator-tables";
import { mapGetters, mapState, mapActions, mapMutations } from "vuex";
import Modal from "../components/Modal";

import { ModelListSelect } from "vue-search-select"; //Import for dropdown search
//Start: Validation imports
import Toastify from "toastify-js";
import { validationMixin } from "vuelidate";
import { required, maxLength } from "vuelidate/lib/validators";
//End: Validation imports

export default {
  components: {
    modal: Modal,
    "model-list-select": ModelListSelect,
  },
  mixins: [validationMixin],
  validations: {
    form: {
      amount: {
        required,
        maxLength: maxLength(15),
      },
      ref_number: {
        maxLength: maxLength(50),
      },
      month_paid_for: {
        required,
      },
      date_paid: {
        required,
        maxValue: new Date(),
      },
      payment_method: {
        required,
      },
    },
  },
  data() {
    return {
      name: "Make Payment",
      table: null,
      filter: {
        field: "fullname",
        type: "like",
        value: "",
      },
      modalTitle: "Make Payment",
      form: {
        id: "",
        amount: "",
        ref_number: "",
        month_paid_for: "",
        date_paid: "",
        payment_method: "",
      },
      fullname: "",
      plan: "",
      medical_aid_number: "",
      isFormOpen: false,
      edit: false,
    };
  },
  computed: {
      //Start: Get only principals to filter in search Principal field
    principals() {
      const principals = this.clients.filter(function(client) {
        return client.type != "Dependent";
      });
      return principals;
    },
    //End: Get only principals to filter

    //Start: Get all required states
    ...mapState({
      clients: (state) => state.client.clients,
      payment_methods: (state) => state.payment_method.payment_methods,
    }),
    //End: Get all required states
  },
  mounted() {
    this.fetchAllPaymentMethods();
    this.fetchAllClients().then(() => {
      this.getTable();
    });
    // Redraw table onresize
    window.addEventListener("resize", () => {
      this.table.redraw();
      feather.replace({
        "stroke-width": 1.5,
      });
    });
  },
  methods: {
    ...mapActions(["fetchAllPaymentMethods", "fetchAllClients", "addPayment"]),

    //Start: Add and Update Function
    async addValue() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        Toastify({
          text: "Validation failed",
          duration: 3000,
          newWindow: true,
          close: true,
          gravity: "bottom",
          position: "left",
          backgroundColor: "#D32929",
          stopOnFocus: true,
        }).showToast();
      } else {
        this.$store.commit("PAYMENT");
        try {
          const response = await this.addPayment(this.form);
          if (response) {
            Swal.fire(
              "Payment Done",
              "Payment Received",
              "success"
            );
            this.getTable();
            this.close(); //Clear form fields
            this.$router.push("/receipt");
          }
        } catch (err) {
          this.$store.commit("PAYMENT_FAILED", err.response.data.errors);
          Toastify({
            text: "Failed to save",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "bottom",
            position: "left",
            backgroundColor: "#D32929",
            stopOnFocus: true,
          }).showToast();
        }
      }
    },
    //End: Add and Update Function

    //Start: Fill the table data
    getTable() {
      this.fetchAllClients().then(() => {
        let tableData = this.principals;
        this.table = new Tabulator(this.$refs.table, {
          cellHozAlign: "center",
          data: tableData,
          printAsHtml: true,
          printStyled: true,
          pagination: "local",
          paginationSize: 10,
          paginationSizeSelector: [30, 50, 100, 200, 1000, 5000, 20000],
          headerSort: true,
          columnHeaderSortMulti: true,
          placeholder: "No matching records found",
          columns: [
            // For HTML table
            {
              title: "EDIT",
              field: "edit",
              hozAlign: "center",
              vertAlign: "middle",
              print: false,
              download: false,
              formatter() {
                return `<div class="flex lg:justify-center items-center">              
                            <a class="flex border rounded bg-green-600 text-red-200 hover:bg-blue-900 hover:text-white p-1 items-center mr-3" href="javascript:;">
                                <i data-feather="dollar-sign" class="w-4 h-4 mr-1"></i> Make Payment 
                            </a>
                        </div>`;
              },
              cellClick: this.makePayment,
            },
            {
              title: "MEDICAL AID NUMBER",
              field: "medical_aid_number",
              hozAlign: "center",
              vertAlign: "middle",
              print: false,
              download: false,
            },
            {
              title: "NAME",
              field: "fullname",
              hozAlign: "center",
              vertAlign: "middle",
              print: false,
              download: false,
            },            
            {
              title: "MEMBERSHIP STATUS",
              field: "membership_status",
              hozAlign: "center",
              vertAlign: "middle",
              print: false,
              download: false,
              formatter(cell) {
                return `<div class="flex items-center lg:justify-center ${
                  cell.getData().membership_status == "Active"
                    ? "text-theme-9"
                    : "text-theme-6"
                }">
              <i data-feather="check-square" class="w-4 h-4 mr-2"></i> ${
                cell.getData().membership_status == "Active"
                  ? "Active"
                  : "Inactive"
              }
            </div>`;
              },
            },
            {
              title: "PLAN",
              field: "plan",
              hozAlign: "center",
              vertAlign: "middle",
              print: false,
              download: false,
            },
            // For print format
            {
              title: "DATE JOINED",
              field: "date_joined",
              visible: false,
              print: true,
              download: true,
            },
            {
              title: "MEDICAL AID NUMBER",
              field: "medical_aid_number",
              visible: false,
              print: true,
              download: true,
            },
            {
              title: "NAME",
              field: "fullname",
              visible: false,
              print: true,
              download: true,
            },
            {
              title: "CELLPHONE",
              field: "cellphone",
              visible: false,
              print: true,
              download: true,
            },
            {
              title: "EMAIL",
              field: "email",
              visible: false,
              print: true,
              download: true,
            },
            {
              title: "DATE OF BIRTH",
              field: "date_of_birth",
              visible: false,
              print: true,
              download: true,
            },
            {
              title: "GENDER",
              field: "gender",
              visible: false,
              print: true,
              download: true,
            },
            {
              title: "TYPE",
              field: "type",
              visible: false,
              print: true,
              download: true,
            },
            {
              title: "MEMBERSHIP STATUS",
              field: "membership_status",
              visible: false,
              print: true,
              download: true,
              formatterPrint(cell) {
                return cell.getValue() ? "Active" : "Inactive";
              },
            },
            {
              title: "PRINCIPAL MEMBER",
              field: "principal",
              visible: false,
              print: true,
              download: true,
            },
            {
              title: "PLAN",
              field: "plan",
              visible: false,
              print: true,
              download: true,
            },
            {
              title: "BRANCH",
              field: "branch",
              visible: false,
              print: true,
              download: true,
            },
          ],
          renderComplete() {
            feather.replace({
              "stroke-width": 1.5,
            });
          },
        });
      });
    },
    //End: Fill the table data

    //Start: Preparing to update function
    makePayment(e, cell) {
      this.form.id = cell.getData().id;
      this.fullname = cell.getData().fullname;
      this.plan = cell.getData().plan;
      this.medical_aid_number = cell.getData().medical_aid_number;
      this.isFormOpen = true;
    },
    //End: Preparing to update function
    // Filter function
    onFilter() {
      this.table.setFilter(
        this.filter.field,
        this.filter.type,
        this.filter.value
      );
    },

    // On reset filter
    onResetFilter() {
      this.filter.field = "name";
      this.filter.type = "like";
      this.filter.value = "";
      this.onFilter();
    },

    // Export
    onExportCsv() {
      this.table.download("csv", "data.csv");
    },
    onExportJson() {
      this.table.download("json", "data.json");
    },
    onExportXlsx() {
      window.XLSX = xlsx;
      this.table.download("xlsx", "data.xlsx", {
        sheetName: "Products",
      });
    },
    onExportHtml() {
      this.table.download("html", "data.html", {
        style: true,
      });
    },

    // Print
    onPrint() {
      this.table.print();
    },
    close() {
      this.isFormOpen = false;
      this.form.name = "";
      this.form.avatar = "";
    },
  },
};
</script>
