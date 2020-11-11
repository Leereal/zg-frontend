<template>
  <div>
    <div
      class="flex flex-col sm:flex-row items-center mt-8"
      :class="{ 'intro-y': !isFormOpen }"
    >
      <h2 class="text-lg font-medium mr-auto">
        Banks
      </h2>
      <div class="w-full sm:w-auto flex mt-4 sm:mt-0">
        <button
          @click="isFormOpen = true"
          class="button text-white bg-theme-1 shadow-md mr-2"
        >
          Add New Bank
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
                <i data-feather="archive" class="w-4 h-4 mr-2" /> New Bank
              </a>
              <a
                class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
              >
                <i data-feather="server" class="w-4 h-4 mr-2" /> New Account
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
              <option value="name">
                BANK
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
      <div class="p-5 grid grid-cols-12 gap-4 row-gap-3">
        <div class="col-span-12 sm:col-span-6">
          <div
            class="w-16 h-16 image-fit"
            :class="{ 'border-theme-6': $v.form.avatar.$error }"
          >
            <label>Avatar</label>
            <img :src="imagePreview" alt="icon" @click="openUpload" />
          </div>
          <input
            type="file"
            name="image"
            id="file-field"
            @change="updatePreview"
            style="display:none;"
            accept="image/*"
            ref="formImage"
          />
          <template v-if="$v.form.avatar.$error">
            <div v-if="!$v.form.avatar.required" class="text-theme-6 mt-2">
              Field is required
            </div>
          </template>
        </div>
        <!-- Start: Bank Name Field -->
        <div class="col-span-12 sm:col-span-6">
          <label class="flex flex-col sm:flex-row">
            Bank Name
            <span class="sm:ml-auto mt-1 sm:mt-0 text-xs text-gray-600"
              >(Required)</span
            >
          </label>
          <input
            v-model.trim="$v.form.name.$model"
            type="text"
            class="input w-full border mt-2"
            :class="{ 'border-theme-6': $v.form.name.$error }"
            placeholder="Bank Name"
          />
          <template v-if="$v.form.name.$error">
            <div v-if="!$v.form.name.required" class="text-theme-6 mt-2">
              Field is required
            </div>
            <div v-if="!$v.form.name.minLength" class="text-theme-6 mt-2">
              Name must be atleast
              {{ $v.form.name.$params.minLength.min }} letters.
            </div>
            <div v-if="!$v.form.name.maxLength" class="text-theme-6 mt-2">
              Name must not be more than
              {{ $v.form.name.$params.maxLength.max }} letters.
            </div>
          </template>
        </div>
        <!-- End: Bank Name Field -->
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

//Start: Validation imports
import Toastify from "toastify-js";
import { validationMixin } from "vuelidate";
import { required, minLength, maxLength } from "vuelidate/lib/validators";
//End: Validation imports

export default {
  mixins: [validationMixin],
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(2),
        maxLength: maxLength(50),
      },
      avatar: {
        required,
      },
    },
  },
  components: {
    modal: Modal,
  },
  data() {
    return {
      table: null,
      filter: {
        field: "name",
        type: "like",
        value: "",
      },
      modalTitle: "Add Bank",
      form: {
        id: "",
        name: "",
        avatar: "",
      },
      isFormOpen: false,
      imagePreview: require(`@/assets/images/profile-13.jpg`),
      edit: false,
    };
  },
  computed: {
    ...mapState({
      banks: (state) => state.bank.banks,
    }),
    ...mapGetters(["isBankLoading"]),
  },
  mounted() {
    this.fetchAllBanks().then(() => this.getTable());

    // Redraw table onresize
    window.addEventListener("resize", () => {
      this.table.redraw();
      feather.replace({
        "stroke-width": 1.5,
      });
    });
  },
  methods: {
    ...mapActions(["fetchAllBanks", "addBank", "updateBank", "deleteBank"]),

    openUpload() {
      document.querySelector("#file-field").click();
    },

    updatePreview(e) {
      var pattern = /image-*/;
      const image = e.target.files[0];
      this.form.avatar = image;
      const reader = new FileReader();
      
      if (image.type.match(pattern)) {
        reader.readAsDataURL(image);
        reader.onload = (e) => {
          this.imagePreview = e.target.result;          
        };
      } else {
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
      }
    },

    //Start: Add and Update Function
    async addValue() {
      let formData = new FormData();
    formData.append('name', this.form.name);
    formData.append('avatar', this.form.avatar);
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
        this.$store.commit("BANK");

        //Capitalize first letter of some words
        this.form.name = this.$h.capitalizeFirstLetter(this.form.name);

        if (this.edit == false) {
          try {
            const response = await this.addBank(formData);
            if (response) {
              Swal.fire(
                "New Branch Saved!",
                "You now have a branch called " + this.form.name,
                "success"
              );
              this.getTable();
              this.close(); //Clear form fields
            }
          } catch (err) {
            this.$store.commit("BANK_CREATE_FAILED", err.response.data.errors);
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
            const response = await this.updateBank(this.form);
            if (response) {
              Swal.fire(
                "Bank Updated",
                "You updated " + this.form.name + " successfully",
                "success"
              );
              this.getTable();
              this.close(); //Clear form fields
            }
          } catch (err) {
            this.$store.commit("BANK_CREATE_FAILED", err.response.data.errors);
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
          this.deleteBank(cell.getData().id)
            .then(() => {
              this.getTable();
              Swal.fire("Deleted!", "Bank has been deleted.", "success");
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

    //Start: Fill the table data
    getTable() {
      this.fetchAllBanks().then(() => {
        let tableData = this.banks;
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
              title: "AVATAR",
              field: "avatar",
              hozAlign: "center",
              vertAlign: "middle",
              print: false,
              download: false,
            },
            {
              title: "BANK NAME",
              field: "name",
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
              title: "BANK NAME",
              field: "name",
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

    //Start: Preparing to update function
    editValue(e, cell) {
      this.edit = true;
      this.form.id = cell.getData().id;
      this.form.name = cell.getData().name;
      this.form.avatar = cell.getData().avatar;
      this.modalTitle = "Edit Bank";
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
      this.imagePreview = require(`@/assets/images/profile-13.jpg`)
    },
  },
};
</script>
