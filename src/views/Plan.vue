<template>
  <div>
    <div class="intro-y flex flex-col sm:flex-row items-center mt-8">
      <h2 class="text-lg font-medium mr-auto">
        Plans
      </h2>
      <div class="w-full sm:w-auto flex mt-4 sm:mt-0">
        <button class="button text-white bg-theme-1 shadow-md mr-2">
          Add New Plan
        </button>
        <div class="dropdown ml-auto sm:ml-0">
          <button
            class="dropdown-toggle button px-2 box text-gray-700 dark:text-gray-300"
          >
            <span class="w-5 h-5 flex items-center justify-center">
              <i
                class="w-4 h-4"
                data-feather="plus"
              />
            </span>
          </button>
          <div class="dropdown-box w-40">
            <div class="dropdown-box__content box dark:bg-dark-1 p-2">
              <a
                class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
              >
                <i
                  data-feather="disc"
                  class="w-4 h-4 mr-2"
                /> New Plan
              </a>
              <a
                class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
              >
                <i
                  data-feather="box"
                  class="w-4 h-4 mr-2"
                /> New Limit
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- BEGIN: HTML Table Data -->
    <div class="intro-y box p-5 mt-5">
      <div class="flex flex-col sm:flex-row sm:items-end xl:items-start">
        <form
          class="xl:flex sm:mr-auto"
          @submit.prevent="onFilter"
        >
          <div class="sm:flex items-center sm:mr-4">
            <label
              class="w-12 flex-none xl:w-auto xl:flex-initial mr-2"
            >Field</label>
            <select
              v-model="filter.field"
              class="input w-full sm:w-32 xxl:w-full mt-2 sm:mt-0 sm:w-auto border"
            >            
              <option value="name">
                PLAN
              </option>              
            </select>
          </div>
          <div class="sm:flex items-center sm:mr-4 mt-2 xl:mt-0">
            <label
              class="w-12 flex-none xl:w-auto xl:flex-initial mr-2"
            >Type</label>
            <select
              v-model="filter.type"
              class="input w-full mt-2 sm:mt-0 sm:w-auto border"
            >
              <option
                value="like"
                selected
              >
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
            <label
              class="w-12 flex-none xl:w-auto xl:flex-initial mr-2"
            >Value</label>
            <input
              v-model="filter.value"
              type="text"
              class="input w-full sm:w-40 xxl:w-full mt-2 sm:mt-0 border"
              placeholder="Search..."
            >
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
            <i
              data-feather="printer"
              class="w-4 h-4 mr-2"
            /> Print
          </button>
          <div class="dropdown w-1/2 sm:w-auto">
            <button
              class="dropdown-toggle button w-full sm:w-auto flex items-center border text-gray-700 dark:bg-dark-5 dark:text-gray-300"
            >
              <i
                data-feather="file-text"
                class="w-4 h-4 mr-2"
              /> Export
              <i
                data-feather="chevron-down"
                class="w-4 h-4 ml-auto sm:ml-2"
              />
            </button>
            <div class="dropdown-box w-40">
              <div class="dropdown-box__content box dark:bg-dark-1 p-2">
                <a
                  href="javascript:;"
                  class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                  @click="onExportCsv"
                >
                  <i
                    data-feather="file-text"
                    class="w-4 h-4 mr-2"
                  /> Export CSV
                </a>
                <a
                  href="javascript:;"
                  class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                  @click="onExportJson"
                >
                  <i
                    data-feather="file-text"
                    class="w-4 h-4 mr-2"
                  /> Export
                  JSON
                </a>
                <a
                  href="javascript:;"
                  class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                  @click="onExportXlsx"
                >
                  <i
                    data-feather="file-text"
                    class="w-4 h-4 mr-2"
                  /> Export
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
        field: "name",
        type: "like",
        value: "",
      },
    };
  },
  computed: {
    ...mapState({
      plans: (state) => state.plan.plans,
    }),
    ...mapGetters(["getPlans"]),
  },
  mounted() {
   
    this.fetchAllPlans().then(() => {
      let tableData = this.plans;
      this.table = new Tabulator(this.$refs.table, { 
        layout: "fitColumns",
        cellHozAlign: "center",
        data: tableData,
        printAsHtml: true,
        printStyled: true,
        pagination: "local",
        paginationSize: 10,
        paginationSizeSelector: [5, 10, 20, 40, 50, 100], 
        headerSort: true,
        columnHeaderSortMulti: true,
        placeholder: "No matching records found",
        columns: [
          // For HTML table
          {
            title: "PLAN NAME",
            field: "name",
            hozAlign: "center",
            vertAlign: "middle",
            print: false,
            download: false,
          },
          {
            title: "PRE CODE",
            field: "pre",
            hozAlign: "center",
            vertAlign: "middle",
            print: false,
            download: false,
          },    
          {
            title: "PRINCIPAL LAST NUMBER",
            field: "last_number",
            hozAlign: "center",
            vertAlign: "middle",
            print: false,
            download: false,
          },  
          {
            title: "DEPENDENTS LAST NUMBER",
            field: "dependent_last_number",
            hozAlign: "center",
            vertAlign: "middle",
            print: false,
            download: false,
          },  
          {
            title: "ACTIONS",
            field: "actions",
            hozAlign: "center",
            vertAlign: "middle",
            print: false,
            download: false,
            formatter() {
              return `<div class="flex lg:justify-center items-center">
              <a class="flex items-center mr-3" @click="editValue()">
                <i data-feather="check-square" class="w-4 h-4 mr-1"></i> Edit
              </a>
              <a
                    class="flex items-center text-theme-6"
                    href="javascript:;"
                    @click.prevent="deleteValue(1)"
                  >
                    <Trash2Icon class="w-4 h-4 mr-1" /> Delete
                  </a>
            </div>`;
            },
          },

          // For print format
            {
            title: "PLAN NAME",
            field: "name",
           visible: false,
            print: true,
            download: true,
          },
          {
            title: "PRE CODE",
            field: "pre",
            visible: false,
            print: true,
            download: true,
          },    
          {
            title: "PRINCIPAL LAST NUMBER",
            field: "last_number",
            visible: false,
            print: true,
            download: true,
          },  
          {
            title: "DEPENDENTS LAST NUMBER",
            field: "dependent_last_number",
           visible: false,
            print: true,
            download: true,
          }                     
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
    ...mapActions(["fetchAllPlans", "addBranch", "deleteBank", "updateBranch"]),
    save() {
      if (this.edit == false) {
        this.addBranch(this.form).then((response) => {
          if (response) {
            Swal.fire(
              "New Branch Saved!",
              "You now have a branch called " + this.form.name,
              "success"
            );
            this.getBranches(); //Get All branches list
            this.form.reset(); //Clear form fields
            this.showModal = "modal"; //Close Modal
          } else {
            
          }
        }); //Submit to Store Actions
      } else {
        this.updateBranch(this.form);
        this.getBranches();
        this.showModal = false;
        Swal.fire(
          "Branch Updated",
          "You updated information of branch " + this.form.name,
          "success"
        );
      }
    },
    deleteValue(id) {
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
          this.deleteBank(id).then(() => {
            Swal.fire("Deleted!", "Bank has been deleted.", "success");
          }).catch(err =>{
          
          });
        }
      });
    },
    editValue(form) {
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
  },
};
</script>
