<template>
  <div>
    <div class="intro-y flex flex-col sm:flex-row items-center mt-8">
      <h2 class="text-lg font-medium mr-auto">
        Payments
      </h2>
      <div class="w-full sm:w-auto flex mt-4 sm:mt-0">
        <router-link to="/make-payment">
          <button class="button text-white bg-theme-1 shadow-md mr-2">
            Add New Payment
          </button>
        </router-link>
        <div class="dropdown ml-auto sm:ml-0">
          <button
            class="dropdown-toggle button px-2 box text-gray-700 dark:text-gray-300"
          >
            <span class="w-5 h-5 flex items-center justify-center">
              <i class="w-4 h-4" data-feather="plus" />
            </span>
          </button>
          <div class="dropdown-box w-40">
            <div class="dropdown-box__content box dark:bg-dark-1 p-2">
              <router-link to="/make-payment">
              <a
                class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
              >
                <i data-feather="dollar-sign" class="w-4 h-4 mr-2" /> New
                Payment
              </a>
              </router-link>
              <router-link to="/clients">
                <a
                  class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                >
                  <i data-feather="user" class="w-4 h-4 mr-2" /> New Client
                </a>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- BEGIN: HTML Table Data -->
    <div class="intro-y box p-5 mt-5">
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
              <option value="client">
                CLIENT NAME
              </option>
              <option value="amount">
                AMOUNT
              </option>
              <option value="date_paid">
                DATE PAID
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
              <option value="<">
                &lt;
              </option>
              <option value="<=">
                &lt;=
              </option>
              <option value=">">
                >
              </option>
              <option value=">=">
                >=
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
  </div>
</template>

<script>
import xlsx from "xlsx";
import feather from "feather-icons";
import Tabulator from "tabulator-tables";
import { mapGetters, mapState, mapActions, mapMutations } from "vuex";

export default {
  data() {
    return {
      table: null,
      filter: {
        field: "client",
        type: "like",
        value: "",
      },
    };
  },
  computed: {
    ...mapState({
      payments: (state) => state.payment.payments,
    }),
    ...mapGetters(["getPayments"]),
  },
  beforeMount() {},
  mounted() {
    this.fetchAllPayments().then(() => {
      let tableData = this.payments;
      this.table = new Tabulator(this.$refs.table, {
        data: tableData,
        printAsHtml: true,
        printStyled: true,
        pagination: "local",
        paginationSize: 10,
        paginationSizeSelector: [10, 50, 100, 200, 500, 1000],
        resizable: true,
        headerSort: true,
        columnHeaderSortMulti: true,
        placeholder: "No matching records found",
        columns: [
          // For HTML table
          {
            title: "DATE PAID",
            field: "date_paid",
            hozAlign: "center",
            vertAlign: "middle",
            print: false,
            download: false,
          },
          {
            title: "CLIENT NAME",
            field: "client",
            hozAlign: "center",
            vertAlign: "middle",
            print: false,
            download: false,
          },
          {
            title: "RECEIPT NUMBER",
            field: "receipt_number",
            hozAlign: "center",
            vertAlign: "middle",
            print: false,
            download: false,
          },
          {
            title: "AMOUNT",
            field: "amount",
            hozAlign: "center",
            vertAlign: "middle",
            print: false,
            download: false,
            formatter: "money",
            formatterParams: {
              decimal: ".",
              thousand: ",",
              symbol: "$",
              precision: "2",
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
          {
            title: "MONTH PAID FOR",
            field: "month_paid_for",
            hozAlign: "center",
            vertAlign: "middle",
            print: false,
            download: false,
          },
          {
            title: "PAYMENT METHOD",
            field: "payment_method",
            hozAlign: "center",
            vertAlign: "middle",
            print: false,
            download: false,
          },
          {
            title: "REF NUMBER",
            field: "ref_number",
            hozAlign: "center",
            vertAlign: "middle",
            print: false,
            download: false,
          },
          {
            title: "EDIT",
            field: "edit",
            hozAlign: "center",
            vertAlign: "middle",
            print: false,
            download: false,
            formatter() {
              return `<div class="flex lg:justify-center items-center">              
              <a class="flex items-center mr-3" href="">
                <i data-feather="check-square" class="w-4 h-4 mr-1"></i> Edit
              </a>
            </div>`;
            },
            cellClick: this.editValue,
          },
          {
            title: "DELETE",
            field: "delete",
            hozAlign: "center",
            vertAlign: "middle",
            print: false,
            download: false,
            formatter() {
              return `<div class="flex lg:justify-center items-center">              
              <a class="flex items-center text-theme-6" href="javascript:;">
                <i data-feather="trash-2" class="w-4 h-4 mr-1"></i> Delete
              </a>
            </div>`;
            },
            cellClick: this.deleteValue,
          },

          // For print format
          {
            title: "DATE PAID",
            field: "date_paid",
            visible: false,
            print: true,
            download: true,
          },
          {
            title: "CLIENT NAME",
            field: "client",
            visible: false,
            print: true,
            download: true,
          },
          {
            title: "RECEIPT NUMBER",
            field: "receipt_number",
            visible: false,
            print: true,
            download: true,
          },
          {
            title: "AMOUNT",
            field: "amount",
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
            title: "MONTH PAID FOR",
            field: "month_paid_for",
            visible: false,
            print: true,
            download: true,
          },
          {
            title: "PAYMENT METHOD",
            field: "payment_method",
            visible: false,
            print: true,
            download: true,
          },
          {
            title: "REF NUMBER",
            field: "ref_number",
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

    // Redraw table onresize
    window.addEventListener("resize", () => {
      this.table.redraw();
      feather.replace({
        "stroke-width": 1.5,
      });
    });
  },
  methods: {
    ...mapActions(["fetchAllPayments", "deletePayment"]),

    //Start: Delete function
    deleteValue(e, cell) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.deletePayment(cell.getData().id)
            .then(() => {
              Swal.fire("Deleted!", "Payment has been deleted.", "success");
            })
            .catch((err) => {});
        }
      });
    },
    //End: Delete function

    //Start: Edit function
    editValue(e, cell) {
      let form = cell.getData();
      this.form.reset();
      this.edit = true;
      this.form.id = form.id;
      this.form.name = form.name;
      this.form.phone = form.phone;
      this.form.email = form.email;
      this.form.address = form.address;
      this.modalTitle = "Edit Branch";
      this.showModal = true;
    },
    //End: Edit function

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
      this.filter.field = "client";
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
  },
};
</script>
