<template>
  <div>
    <div class="flex flex-col sm:flex-row items-center mt-8" :class="{ 'intro-y': !isFormOpen }">
      <h2 class="text-lg font-medium mr-auto">
        Clients Bank Details
      </h2>
      <div class="w-full sm:w-auto flex mt-4 sm:mt-0">
        <button class="button text-white bg-theme-1 shadow-md mr-2" @click="isFormOpen = true">
          Add New Client Bank Details
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
              @click="isFormOpen = true"
              >
                <i
                  data-feather="plus-circle"
                  class="w-4 h-4 mr-2"
                /> New Client Bank Details
              </a>
              <router-link to="/clients">
              <a
                class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
              >
                <i
                  data-feather="user-plus"
                  class="w-4 h-4 mr-2"
                /> New Client
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
              <option value="client">
                CLIENT
              </option>
              <option value="bank">
                BANK
              </option>
              <option value="medical_aid_number">
                MEDICAL AID NUMBER
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
        <!-- Start: First Name Field -->
        <div class="col-span-12 sm:col-span-6">
          <label class="flex flex-col sm:flex-row">
            First Name
            <span
              class="sm:ml-auto mt-1 sm:mt-0 text-xs text-gray-600"
            >(Required)</span>
          </label>
          <input
            v-model="$v.form.firstname.$model"
            type="text"
            class="input w-full border mt-2"
            :class="{ 'border-theme-6': $v.form.firstname.$error }"
            placeholder="First Name"
          >
          <template v-if="$v.form.firstname.$error">
            <div
              v-if="!$v.form.firstname.required"
              class="text-theme-6 mt-2"
            >
              Field is required
            </div>
            <div
              v-if="!$v.form.firstname.minLength"
              class="text-theme-6 mt-2"
            >
              Name must be atleast
              {{ $v.form.firstname.$params.minLength.min }} letters.
            </div>
            <div
              v-if="!$v.form.firstname.maxLength"
              class="text-theme-6 mt-2"
            >
              Name must not be more than
              {{ $v.form.firstname.$params.maxLength.max }} letters.
            </div>
          </template>
        </div>
        <!-- End: First Name Field -->

        <!-- Start: Surname Field -->
        <div class="col-span-12 sm:col-span-6">
          <label class="flex flex-col sm:flex-row">
            Surname
            <span
              class="sm:ml-auto mt-1 sm:mt-0 text-xs text-gray-600"
            >(Required)</span>
          </label>
          <input
            v-model="$v.form.surname.$model"
            type="text"
            class="input w-full border mt-2"
            :class="{ 'border-theme-6': $v.form.surname.$error }"
            placeholder="Surname"
          >
          <template v-if="$v.form.surname.$error">
            <div
              v-if="!$v.form.surname.required"
              class="text-theme-6 mt-2"
            >
              Field is required
            </div>
            <div
              v-if="!$v.form.surname.minLength"
              class="text-theme-6 mt-2"
            >
              Surname must be atleast
              {{ $v.form.surname.$params.minLength.min }} letters.
            </div>
            <div
              v-if="!$v.form.surname.maxLength"
              class="text-theme-6 mt-2"
            >
              Surname must not be more than
              {{ $v.form.surname.$params.maxLength.max }} letters.
            </div>
          </template>
        </div>
        <!-- End: Surname Field -->
      </div>
      <div
        class="p-5 grid grid-cols-12 gap-4 row-gap-3  border-b border-blue-300 "
      >
        <!-- Start: Cellphone Field -->
        <div class="col-span-12 sm:col-span-6">
          <label class="flex flex-col sm:flex-row">
            Cellphone
            <span
              class="sm:ml-auto mt-1 sm:mt-0 text-xs text-gray-600"
            >(Required)</span>
          </label>
          <input
            v-model.trim="$v.form.cellphone.$model"
            type="text"
            class="input w-full border mt-2"
            :class="{ 'border-theme-6': $v.form.cellphone.$error }"
            placeholder="0771234567"
          >
          <template v-if="$v.form.cellphone.$error">
            <div
              v-if="!$v.form.cellphone.number"
              class="text-theme-6 mt-2"
            >
              Cellphone must be a Number
            </div>
            <div
              v-if="!$v.form.cellphone.minLength"
              class="text-theme-6 mt-2"
            >
              Cellphone must be atleast
              {{ $v.form.cellphone.$params.minLength.min }} numbers.
            </div>
            <div
              v-if="!$v.form.cellphone.maxLength"
              class="text-theme-6 mt-2"
            >
              Cellphone must not be more than
              {{ $v.form.cellphone.$params.maxLength.max }} numbers.
            </div>
          </template>
        </div>
        <!-- End: Cellphone Field -->
        <!-- Start: Branch Field -->
        <div class="col-span-12 sm:col-span-3">
          <label class="flex flex-col sm:flex-row">
            Branch
            <span
              class="sm:ml-auto mt-1 sm:mt-0 text-xs text-gray-600"
            >(Required)</span>
          </label>
          <model-list-select
            v-model="$v.form.branch.$model"
            :list="branches"
            option-value="id"
            :option-text="'name'"
            placeholder="Select Branch"
            class="input w-full border mt-2"
            :class="{ 'border-theme-6': $v.form.branch.$error }"
          />
        </div>
        <!-- End: Branch Field -->
      </div>
      <div
        class="p-5 grid grid-cols-12 gap-4 row-gap-3  border-b border-blue-300 "
      >
        <!-- Start: Job Title Field -->
        <div class="col-span-12 sm:col-span-12">
          <label class="flex flex-col sm:flex-row">
            Job Title
            <span
              class="sm:ml-auto mt-1 sm:mt-0 text-xs text-gray-600"
            >(Required)</span>
          </label>
          <select
            v-model="$v.form.job_title.$model"
            class="input w-full border mt-2"
            :class="{ 'border-theme-6': $v.form.job_title.$error }"
          >
            <option
              disabled
              value=""
            >
              Select Job Title
            </option>
            <option>Administrator</option>
            <option>Claims Officer</option>
            <option>Team Leader</option>
            <option>Marketing Officer</option>
            <option>Chairperson</option>
            <option>Principal Officer</option>
            <option>Accountant</option>
            <option>Brand Ambassador</option>
          </select>
          <template v-if="$v.form.job_title.$error">
            <div
              v-if="!$v.form.job_title.required"
              class="text-theme-6 mt-2"
            >
              Field is required
            </div>
          </template>
        </div>
        <!-- End: Job Title Field -->
        <!-- Start: Roles Field -->
        <!-- <div class="col-span-12 sm:col-span-6">
          <label class="flex flex-col sm:flex-row">
            Roles
            <span class="sm:ml-auto mt-1 sm:mt-0 text-xs text-gray-600"
              >(Required)</span
            >
          </label>
          <div class="mt-2">
            <TailSelect          
              v-model="form.roles"
              :options="{
                  search: true,
                  descriptions: true,
                  hideSelected: true,
                  hideDisabled: true,           
                  multiShowCount: false,
                  multiContainer: true,
                  classNames: 'w-full'
                }"
              multiple                          
            >
            <option value="rol.name">{{rol.name}}</option> 
            <option value="1">System Admin</option>
            <option value="2">Chairperson</option>
            <option value="3">Principal Officer</option> 
            <option value="4">Team Leader</option>
            <option value="5">Claims Officer</option>
            <option value="6">Administrator</option>
            <option value="7">Marketing Consultant</option>
            <option value="8">Marketing Officer</option>
            <option value="9">Brand Ambassador</option> 
            <option value="10">Client</option>
            <option value="11">Service Provider</option>                    
            </TailSelect>
          </div>
          <template v-if="$v.form.roles.$error">
            <div v-if="!$v.form.roles.required" class="text-theme-6 mt-2">
              Field is required
            </div>
          </template>
        </div>-->
        <!-- End: Job Title Field -->
      </div>
    </modal>
    <!--END: Modal -->
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
      name: "Client Bank Details",
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
      client_bank_details: (state) => state.client_bank_detail.client_bank_details,
    }),
    ...mapGetters(["getClientBankDetails"]),
  },
  mounted() {
    this.fetchAllClientBankDetails().then(() => {
      let tableData = this.client_bank_details;  
      this.table = new Tabulator(this.$refs.table, {
        cellHozAlign: "center",
        data: tableData,
        printAsHtml: true,
        printStyled: true,
        pagination: "local",
        paginationSize: 10,
        paginationSizeSelector: [30, 50, 100, 200, 1000, 5000,20000],
        headerSort: true,
        columnHeaderSortMulti: true,
        placeholder: "No matching records found",
        columns: [
          // For HTML table
           {
            title: "MEDICAL AID NUMBER",
            field: "medical_aid_number",
            hozAlign: "center",
            vertAlign: "middle",
            print: false,
            download: false,
          },
          {
            title: "CLIENT",
            field: "client",
            hozAlign: "center",
            vertAlign: "middle",
            print: false,
            download: false,
          },         
          {
            title: "BANK",
            field: "bank",
            hozAlign: "center",
            vertAlign: "middle",
            print: false,
            download: false,
          },
          {
            title: "ACCOUNT NUMBER",
            field: "account_number",
            hozAlign: "center",
            vertAlign: "middle",
            print: false,
            download: false,
          },
          {
            title: "BRANCH CODE",
            field: "branch_code",
            hozAlign: "center",
            vertAlign: "middle",
            print: false,
            download: false,
          },
          {
            title: "ACCOUNT HOLDER NAME",
            field: "account_holder_name",
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
            title: "MEDICAL AID NUMBER",
            field: "medical_aid_number",
            visible: false,
            print: true,
            download: true,
          },
          {
            title: "CLIENT",
            field: "client",
            visible: false,
            print: true,
            download: true,
          },         
          {
            title: "BANK",
            field: "bank",
           visible: false,
            print: true,
            download: true,
          },
          {
            title: "ACCOUNT NUMBER",
            field: "account_number",
            visible: false,
            print: true,
            download: true,
          },
          {
            title: "BRANCH CODE",
            field: "branch_code",
            visible: false,
            print: true,
            download: true,
          },
          {
            title: "ACCOUNT HOLDER NAME",
            field: "account_holder_name",
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
    ...mapActions([
      "fetchAllClientBankDetails",
      "addBranch",
      "deleteBank",
      "updateBranch",
    ]),
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
          this.deleteBank(id)
            .then(() => {
              Swal.fire("Deleted!", "Bank has been deleted.", "success");
            })
            .catch((err) => {
              
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
