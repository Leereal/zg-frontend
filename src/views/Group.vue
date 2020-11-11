<template>
  <div>
    <div
      :class="{ 'intro-y': !isFormOpen }"
      class="intro-y flex flex-col sm:flex-row items-center mt-8"
    >
      <h2 class="text-lg font-medium mr-auto">
        Corporates
      </h2>
      <div class="w-full sm:w-auto flex mt-4 sm:mt-0">
        <button
          @click="isFormOpen = true"
          class="button text-white bg-theme-1 shadow-md mr-2"
        >
          Add New Corporate
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
                <i data-feather="users" class="w-4 h-4 mr-2" /> New Corporate
              </a>
              <a
                class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
              >
                <i data-feather="user" class="w-4 h-4 mr-2" /> New Client
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- BEGIN: HTML Table Data -->
    <div class="intro-y box p-5 mt-5" :class="{ 'intro-y': !isFormOpen }">
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
              <option value="name">
                Currency
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
        <!-- Start: Name Field -->
        <div class="col-span-12 sm:col-span-6">
          <label class="flex flex-col sm:flex-row">
            Corporate Name
            <span class="sm:ml-auto mt-1 sm:mt-0 text-xs text-gray-600"
              >(Required)</span
            >
          </label>
          <input
            v-model="$v.form.name.$model"
            type="text"
            class="input w-full border mt-2"
            :class="{ 'border-theme-6': $v.form.name.$error }"
            placeholder="Name"
          />
          <template v-if="$v.form.name.$error">
            <div v-if="!$v.form.name.required" class="text-theme-6 mt-2">
              Field is required
            </div>
            <div v-if="!$v.form.name.minLength" class="text-theme-6 mt-2">
              Name must be atleast
              {{ $v.form.firstname.$params.minLength.min }} letters.
            </div>
            <div v-if="!$v.form.name.maxLength" class="text-theme-6 mt-2">
              Name must not be more than
              {{ $v.form.name.$params.maxLength.max }} letters.
            </div>
          </template>
        </div>
        <!-- End: Name Field -->

        <!-- Start: Contact Person Field -->
        <div class="col-span-12 sm:col-span-6">
          <label class="flex flex-col sm:flex-row">
            Contact Person
          </label>
          <input
            v-model="$v.form.contact_person.$model"
            type="text"
            class="input w-full border mt-2"
            :class="{ 'border-theme-6': $v.form.contact_person.$error }"
            placeholder="Contact Person"
          />
          <template v-if="$v.form.contact_person.$error">
            <div
              v-if="!$v.form.contact_person.required"
              class="text-theme-6 mt-2"
            >
              Field is required
            </div>
            <div
              v-if="!$v.form.contact_person.minLength"
              class="text-theme-6 mt-2"
            >
              Contact Person must be atleast
              {{ $v.form.contact_person.$params.minLength.min }} letters.
            </div>
            <div
              v-if="!$v.form.contact_person.maxLength"
              class="text-theme-6 mt-2"
            >
              Contact Person must not be more than
              {{ $v.form.contact_person.$params.maxLength.max }} letters.
            </div>
          </template>
        </div>
        <!-- End: Contact Person Field -->
      </div>
      <div
        class="p-5 grid grid-cols-12 gap-4 row-gap-3  border-b border-blue-300 "
      >
        <!-- Start: Email Field -->
        <div class="col-span-12 sm:col-span-6">
          <label class="flex flex-col sm:flex-row">
            Email
            <span class="sm:ml-auto mt-1 sm:mt-0 text-xs text-gray-600"
              >(Email address format)</span
            >
          </label>
          <input
            v-model.trim="$v.form.email.$model"
            type="email"
            class="input w-full border mt-2"
            :class="{ 'border-theme-6': $v.form.email.$error }"
            placeholder="example@gmail.com"
          />
          <template v-if="$v.form.email.$error">
            <div v-if="!$v.form.email.email" class="text-theme-6 mt-2">
              Please enter a valid email address.
            </div>
          </template>
        </div>
        <!-- End: Email Field -->
        <!-- Start:  Phone Field -->
        <div class="col-span-12 sm:col-span-6">
          <label class="flex flex-col sm:flex-row">
            Phone
            <span class="sm:ml-auto mt-1 sm:mt-0 text-xs text-gray-600"
              >(Cellphone / Telephone)</span
            >
          </label>
          <input
            v-model="$v.form.phone.$model"
            type="text"
            class="input w-full border mt-2"
            :class="{ 'border-theme-6': $v.form.phone.$error }"
            placeholder="054 123456"
          />
          <template v-if="$v.form.phone.$error">
            <div v-if="!$v.form.phone.minLength" class="text-theme-6 mt-2">
              Phone must be atleast
              {{ $v.form.phone.$params.minLength.min }} numbers.
            </div>
            <div v-if="!$v.form.phone.maxLength" class="text-theme-6 mt-2">
              Phone must not be more than
              {{ $v.form.home_telephone.$params.maxLength.max }} numbers.
            </div>
          </template>
        </div>
        <!-- End: Phone Field -->
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

//Start: Validation imports
import Toastify from "toastify-js";
import { validationMixin } from "vuelidate";
import {
  required,
  minLength,
  maxLength,
  email,
} from "vuelidate/lib/validators";
//End: Validation imports

export default {
  components: {
    modal: Modal,
  },
  mixins: [validationMixin],
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(2),
        maxLength: maxLength(50),
      },
      contact_person: {
        required,
        minLength: minLength(2),
        maxLength: maxLength(50),
      },
      phone: {
        minLength: minLength(7),
        maxLength: maxLength(15),
      },
      email: {
        email,
      },
    },
  },
  data() {
    return {
      table: null,
      filter: {
        field: "name",
        type: "like",
        value: "",
      },
      modalTitle: "Add New Client",
      form: {
        id: "",
        name: "",
        contact_person: "",
        phone: "",
        email: "",
      },
      isFormOpen: false,
      edit: false,
    };
  },
  computed: {
    ...mapState({
      groups: (state) => state.group.groups,
    }),
    ...mapGetters(["getGroups"]),
  },
  mounted() {
    this.fetchAllGroups().then(() => {
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
    ...mapActions(["fetchAllGroups", "addGroup", "deleteGroup", "updateGroup"]),
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
        this.$store.commit("GROUP");

        //Capitalize first letter of some words
        this.form.name = this.$h.capitalizeFirstLetter(this.form.name);
        this.form.contact_person = this.$h.capitalizeFirstLetter(
          this.form.contact_person
        );

        if (this.edit == false) {
          try {
            const response = await this.addGroup(this.form);
            if (response) {
              Swal.fire(
                "New Corporate Saved!",
                "You now have an corporate with name  " + this.form.name,
                "success"
              );
              this.getTable();
              this.close(); //Clear form fields
            }
          } catch (err) {
            this.$store.commit("GROUP_CREATE_FAILED", err.response.data.errors);
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
            const response = await this.updateGroup(this.form);
            if (response) {
              Swal.fire(
                "Corporate Updated",
                "You updated " + this.form.name + " successfully",
                "success"
              );
              this.getTable();
              this.close(); //Clear form fields
            }
          } catch (err) {
            this.$store.commit("GROUP_CREATE_FAILED", err.response.data.errors);
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
          this.deleteGroup(cell.getData().id)
            .then(() => {
              this.getTable();
              Swal.fire("Deleted!", "Group has been deleted.", "success");
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
      this.form.name = cell.getData().name;
      this.form.contact_person = cell.getData().contact_person;
      this.form.phone = cell.getData().phone;
      this.form.email = cell.getData().email;
      this.modalTitle = "Edit Corporate";
      this.isFormOpen = true;
    },
    //End: Preparing to update function

    //Start: Fill the table data
    getTable() {
      this.fetchAllGroups().then(() => {
        let tableData = this.groups;
        this.table = new Tabulator(this.$refs.table, {
          layout: "fitColumns",
          cellHozAlign: "center",
          data: tableData,
          printAsHtml: true,
          printStyled: true,
          pagination: "local",
          paginationSize: 10,
          paginationSizeSelector: [5, 10, 20],
          headerSort: true,
          columnHeaderSortMulti: true,
          placeholder: "No matching records found",
          columns: [
            // For HTML table
            {
              title: "CORPORATE NAME",
              field: "name",
              hozAlign: "center",
              vertAlign: "middle",
              print: false,
              download: false,
            },
            {
              title: "PHONE",
              field: "phone",
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
              title: "CONTACT PERSON",
              field: "contact_person",
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
              title: "CORPORATE NAME",
              field: "name",
              visible: false,
              print: true,
              download: true,
            },
            {
              title: "PHONE",
              field: "phone",
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
              title: "CONTACT PERSON",
              field: "contact_person",
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
