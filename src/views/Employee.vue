<template>
  <div>
    <div
      class="flex flex-col sm:flex-row items-center mt-8"
      :class="{ 'intro-y': !isFormOpen }"
    >
      <h2 class="text-lg font-medium mr-auto">
        Employee
      </h2>
      <div class="w-full sm:w-auto flex mt-4 sm:mt-0">
        <button
          @click="isFormOpen = true"
          class="button text-white bg-theme-1 shadow-md mr-2"
        >
          Add New Employee
        </button>
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
              <a
                class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
              >
                <i data-feather="user-plus" class="w-4 h-4 mr-2" /> New Employee
              </a>
              <a
                class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
              >
                <i data-feather="git-branch" class="w-4 h-4 mr-2" /> New Branch
              </a>
            </div>
          </div>
        </div>
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
              <option value="job_title">
                JOB TITLE
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
      :title="modalTitle"
      v-if="isFormOpen"
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
            <span class="sm:ml-auto mt-1 sm:mt-0 text-xs text-gray-600"
              >(Required)</span
            >
          </label>
          <input
            v-model="$v.form.firstname.$model"
            type="text"
            class="input w-full border mt-2"
            :class="{ 'border-theme-6': $v.form.firstname.$error }"
            placeholder="First Name"
          />
          <template v-if="$v.form.firstname.$error">
            <div v-if="!$v.form.firstname.required" class="text-theme-6 mt-2">
              Field is required
            </div>
            <div v-if="!$v.form.firstname.minLength" class="text-theme-6 mt-2">
              Name must be atleast
              {{ $v.form.firstname.$params.minLength.min }} letters.
            </div>
            <div v-if="!$v.form.firstname.maxLength" class="text-theme-6 mt-2">
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
            <span class="sm:ml-auto mt-1 sm:mt-0 text-xs text-gray-600"
              >(Required)</span
            >
          </label>
          <input
            v-model="$v.form.surname.$model"
            type="text"
            class="input w-full border mt-2"
            :class="{ 'border-theme-6': $v.form.surname.$error }"
            placeholder="Surname"
          />
          <template v-if="$v.form.surname.$error">
            <div v-if="!$v.form.surname.required" class="text-theme-6 mt-2">
              Field is required
            </div>
            <div v-if="!$v.form.surname.minLength" class="text-theme-6 mt-2">
              Surname must be atleast
              {{ $v.form.surname.$params.minLength.min }} letters.
            </div>
            <div v-if="!$v.form.surname.maxLength" class="text-theme-6 mt-2">
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
            <span class="sm:ml-auto mt-1 sm:mt-0 text-xs text-gray-600"
              >(Required)</span
            >
          </label>
          <input
            v-model.trim="$v.form.cellphone.$model"
            type="text"
            class="input w-full border mt-2"
            :class="{ 'border-theme-6': $v.form.cellphone.$error }"
            placeholder="0771234567"
          />
          <template v-if="$v.form.cellphone.$error">
            <div v-if="!$v.form.cellphone.number" class="text-theme-6 mt-2">
              Cellphone must be a Number
            </div>
            <div v-if="!$v.form.cellphone.minLength" class="text-theme-6 mt-2">
              Cellphone must be atleast
              {{ $v.form.cellphone.$params.minLength.min }} numbers.
            </div>
            <div v-if="!$v.form.cellphone.maxLength" class="text-theme-6 mt-2">
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
            <span class="sm:ml-auto mt-1 sm:mt-0 text-xs text-gray-600"
              >(Required)</span
            >
          </label>
          <model-list-select
            :list="branches"
            v-model="$v.form.branch.$model"
            option-value="id"
            :option-text="'name'"
            placeholder="Select Branch"
            class="input w-full border mt-2"
            :class="{ 'border-theme-6': $v.form.branch.$error }"
          >
          </model-list-select>
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
            <span class="sm:ml-auto mt-1 sm:mt-0 text-xs text-gray-600"
              >(Required)</span
            >
          </label>
          <select
            v-model="$v.form.job_title.$model"
            class="input w-full border mt-2"
            :class="{ 'border-theme-6': $v.form.job_title.$error }"
          >
            <option disabled value="">Select Job Title</option>
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
            <div v-if="!$v.form.job_title.required" class="text-theme-6 mt-2">
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
import Modal from "../components/Modal";

import { ModelListSelect } from "vue-search-select"; //Import for dropdown search
//Start: Validation imports
import Toastify from "toastify-js";
import { validationMixin } from "vuelidate";
import { required, minLength, maxLength } from "vuelidate/lib/validators";
//End: Validation imports

export default {
  components: {
    modal: Modal,
    "model-list-select": ModelListSelect,
  },
  mixins: [validationMixin],
  validations: {
    form: {
      firstname: {
        required,
        minLength: minLength(2),
        maxLength: maxLength(50),
      },
      surname: {
        required,
        minLength: minLength(2),
        maxLength: maxLength(50),
      },
      cellphone: {
        required,
        minLength: minLength(7),
        maxLength: maxLength(15),
      },
      branch: {
        required,
      },
      job_title: {
        required,
      },  
    },
  },
  data() {
    return {
      table: null,
      filter: {
        field: "fullname",
        type: "like",
        value: "",
      },
      modalTitle: "Add New Client",
      form: {
        id: "",
        firstname: "",
        surname: "",
        cellphone: "",
        job_title: "",
        branch: "",
      },
      isFormOpen: false,
      errors: [],
      edit: false,
    };
  },
  computed: {
    ...mapState({
      employees: (state) => state.employee.employees,
      branches: (state) => state.branch.branches,
      rols: (state) => state.role.roles,
    }),
    ...mapGetters(["getEmployees"]),
  },
  mounted() {
    // this.fetchAllBranches();
    // this.fetchAllRoles();
    // this.fetchAllEmployees().then(() => {
    //   this.getTable();
    // });

    this.getTable();
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
      "fetchAllEmployees",
      "fetchAllBranches",
      "fetchAllRoles",
      "addEmployee",
      "deleteEmployee",
      "updateEmployee",
    ]),
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
        this.$store.commit("EMPLOYEE");

        //Capitalize first letter of some words
        this.form.firstname = this.$h.capitalizeFirstLetter(
          this.form.firstname
        );
        this.form.surname = this.$h.capitalizeFirstLetter(this.form.surname);

        if (this.edit == false) {
          try {
            const response = await this.addEmployee(this.form);
            if (response) {
              Swal.fire(
                "New Employee Saved!",
                "You now have an employee with name  " + this.form.firstname,
                "success"
              );
              this.getTable();
              this.close(); //Clear form fields
            }
          } catch (err) {
            this.$store.commit(
              "EMPLOYEE_CREATE_FAILED",
              err.response.data.errors
            );
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
        } else {
          try {
            const response = await this.updateEmployee(this.form);
            if (response) {
              Swal.fire(
                "Employee Updated",
                "You updated " + this.form.firstname + " successfully",
                "success"
              );
              this.getTable();
              this.close(); //Clear form fields
            }
          } catch (err) {
            this.$store.commit(
              "EMPLOYEE_CREATE_FAILED",
              err.response.data.errors
            );
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
      }
    },
    //End: Add and Update Function

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
          this.deleteEmployee(cell.getData().id)
            .then(() => {
              this.getTable();
              Swal.fire("Deleted!", "Employee has been deleted.", "success");
            })
            .catch((err) => {
              Toastify({
                text: err,
                duration: 3000,
                newWindow: true,
                close: true,
                gravity: "bottom",
                position: "left",
                backgroundColor: "#D32929",
                stopOnFocus: true,
              }).showToast();
            });
        }
      });
    },
    //End: Delete function

    //Start: Preparing to update function
    editValue(e, cell) {
      this.edit = true;
      this.form.id = cell.getData().id;
      this.form.firstname = cell.getData().firstname;
      this.form.surname = cell.getData().surname;
      this.form.cellphone = cell.getData().cellphone;
      this.form.branch = cell.getData().branch;
      this.form.job_title = cell.getData().job_title;
      this.form.roles = cell.getData().roles;
      this.modalTitle = "Edit Employee";
      this.isFormOpen = true;
    },
    //End: Preparing to update function

    //Start: Fill the table data
    getTable() {
      this.fetchAllEmployees().then(() => {
        let tableData = this.employees;
        this.table = new Tabulator(this.$refs.table, {
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
              title: "EMPLOYEE CODE",
              field: "username",
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
              title: "CELLPHONE",
              field: "cellphone",
              hozAlign: "center",
              vertAlign: "middle",
              print: false,
              download: false,
            },
            {
              title: "EMAIL",
              field: "email",
              hozAlign: "center",
              vertAlign: "middle",
              print: false,
              download: false,
            },
            {
              title: "ROLES",
              field: "roles",
              hozAlign: "center",
              vertAlign: "middle",
              print: false,
              download: false,
            },
            {
              title: "JOB TITLE",
              field: "job_title",
              hozAlign: "center",
              vertAlign: "middle",
              print: false,
              download: false,
            },
            {
              title: "BRANCH",
              field: "branch",
              hozAlign: "center",
              vertAlign: "middle",
              print: false,
              download: false,
            },
            {
              title: "STATUS",
              field: "status",
              hozAlign: "center",
              vertAlign: "middle",
              print: false,
              download: false,
              formatter(cell) {
                return `<div class="flex items-center lg:justify-center ${
                  cell.getData().status == "Active"
                    ? "text-theme-9"
                    : "text-theme-6"
                }">
              <i data-feather="check-square" class="w-4 h-4 mr-2"></i> ${
                cell.getData().status == "Active" ? "Active" : "Inactive"
              }
            </div>`;
              },
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
              <a class="flex items-center mr-3" href="javascript:;">
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
              title: "EMPLOYEE CODE",
              field: "username",
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
              title: "JOB TITLE",
              field: "job_title",
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
            {
              title: "STATUS",
              field: "status",
              visible: false,
              print: true,
              download: true,
              formatterPrint(cell) {
                return cell.getValue() ? "Active" : "Inactive";
              },
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
