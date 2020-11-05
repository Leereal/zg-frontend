<template>
  <div>
    <h2 class="intro-y text-lg font-medium mt-10">
      Branches
    </h2>
    <div class="grid grid-cols-12 gap-6 mt-5">
      <div
        class="intro-y col-span-12 flex flex-wrap sm:flex-no-wrap items-center mt-2"
      >
        <div class="text-center mr-2">
          <a
            href="javascript:;"
            data-toggle="modal"
            data-target="#add-modal-preview"
            @click="showModal = true"
            class="button inline-block bg-theme-1 text-white"
            >Add New Branch</a
          >
        </div>
        <div class="dropdown">
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
                <PrinterIcon class="w-4 h-4 mr-2" /> Print
              </a>
              <a
                href=""
                class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
              >
                <FileTextIcon class="w-4 h-4 mr-2" /> Export to Excel
              </a>
              <a
                href=""
                class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
              >
                <FileTextIcon class="w-4 h-4 mr-2" /> Export to PDF
              </a>
            </div>
          </div>
        </div>
        <div class="hidden md:block mx-auto text-gray-600">
          Showing 1 to 10 of {{ branchCount }} entries
        </div>
        <div class="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">
          <div class="w-56 relative text-gray-700 dark:text-gray-300">
            <input
              type="text"
              class="input w-56 box pr-10 placeholder-theme-13"
              placeholder="Search..."
            />
            <SearchIcon
              class="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0"
            />
          </div>
        </div>
      </div>
      <!-- BEGIN: Data List -->
      <div class="intro-y col-span-12 overflow-auto lg:overflow-visible">
        <table class="table table-report -mt-2">
          <thead>
            <tr>
              <th class="whitespace-no-wrap">
                NAME
              </th>
              <th class="whitespace-no-wrap">
                EMAIL
              </th>
              <th class="text-center whitespace-no-wrap">
                PHONE
              </th>
              <th class="text-center whitespace-no-wrap">
                ADDRESS
              </th>
              <th class="text-center whitespace-no-wrap">
                ACTIONS
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="branch in branches"
              v-bind:key="branch.id"
              class="intro-x"
            >
              <td>{{ branch.name }}</td>
              <td>{{ branch.email }}</td>
              <td>{{ branch.phone }}</td>
              <td>{{ branch.address }}</td>
              <td class="table-report__action w-56">
                <div class="flex justify-center items-center">
                  <a
                    class="flex items-center mr-3"
                    href="javascript:;"
                    data-toggle="modal"
                    data-target="#add-modal-preview"
                    @click="editValue(branch)"
                  >
                    <CheckSquareIcon class="w-4 h-4 mr-1" />
                    Edit
                  </a>
                  <a
                    class="flex items-center text-theme-6"
                    href="javascript:;"
                    @click.prevent="deleteValue(branch)"
                  >
                    <Trash2Icon class="w-4 h-4 mr-1" /> Delete
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- END: Data List -->
      <!-- BEGIN: Pagination -->
      <div
        class="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-no-wrap items-center"
      >
        <ul class="pagination">
          <li>
            <a class="pagination__link" href="">
              <ChevronsLeftIcon class="w-4 h-4" />
            </a>
          </li>
          <li>
            <a class="pagination__link" href="">
              <ChevronLeftIcon class="w-4 h-4" />
            </a>
          </li>
          <li>
            <a class="pagination__link" href="">...</a>
          </li>
          <li>
            <a class="pagination__link" href="">1</a>
          </li>
          <li>
            <a class="pagination__link pagination__link--active" href="">2</a>
          </li>
          <li>
            <a class="pagination__link" href="">3</a>
          </li>
          <li>
            <a class="pagination__link" href="">...</a>
          </li>
          <li>
            <a class="pagination__link" href="">
              <ChevronRightIcon class="w-4 h-4" />
            </a>
          </li>
          <li>
            <a class="pagination__link" href="">
              <ChevronsRightIcon class="w-4 h-4" />
            </a>
          </li>
        </ul>
        <select class="w-20 input box mt-3 sm:mt-0">
          <option>10</option>
          <option>25</option>
          <option>35</option>
          <option>50</option>
        </select>
      </div>
      <!-- END: Pagination -->
    </div>
    <!-- BEGIN: Add and Edit Modal -->
    <form id="addForm">
      <div id="add-modal" class="p-5">
        <div class="preview">
          <div id="add-modal-preview" class="modal">
            <div class="modal__content">
              <div
                class="flex items-center px-5 py-5 sm:py-3 border-b border-gray-200 dark:border-dark-5"
              >
                <h2 class="font-medium text-base mr-auto">
                  {{ modalTitle }}
                </h2>
              </div>
              <div class="p-5 grid grid-cols-12 gap-4 row-gap-3">
                <div class="col-span-12 sm:col-span-6">
                  <label>Name</label>
                  <input
                    type="text"
                    class="input w-full border mt-2 flex-1"
                    placeholder="Name of the Branch"
                    v-model="form.name"
                  />
                </div>
                <div class="col-span-12 sm:col-span-6">
                  <label>Email</label>
                  <input
                    type="text"
                    class="input w-full border mt-2 flex-1"
                    placeholder="example@gmail.com"
                    v-model="form.email"
                  />
                </div>
                <div class="col-span-12 sm:col-span-6">
                  <label>Phone</label>
                  <input
                    type="text"
                    class="input w-full border mt-2 flex-1"
                    placeholder="Landline or Cellphone"
                    v-model="form.phone"
                  />
                </div>
                <div class="col-span-12 sm:col-span-6">
                  <label>Address</label>
                  <input
                    type="text"
                    class="input w-full border mt-2 flex-1"
                    placeholder="Location of Branch"
                    v-model="form.address"
                  />
                </div>
              </div>
              <div
                class="px-5 py-3 text-right border-t border-gray-200 dark:border-dark-5"
              >
                <button
                  type="button"
                  data-dismiss="modal"
                  @click="form.reset()"
                  class="button w-20 border text-gray-700 dark:border-dark-5 dark:text-gray-300 mr-1"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  @click.prevent="addValue"
                  :data-dismiss="showModal"
                  class="button w-20 bg-theme-1 text-white"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    <!-- END: Add and Edit Modal -->
  </div>
</template>
<script>
import { mapGetters, mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      form: new Form({
        id: "",
        name: "",
        phone: "",
        email: "",
        address: "",
      }),
      edit: false,
      modalTitle: "Add New Branch",
      showModal: "",
    };
  },
  methods: {
    ...mapActions(["getBranches", "addBranch", "deleteBranch", "updateBranch"]),
    addValue() {
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
            console.log('There was an error')
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
    deleteValue(branch) {
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
          this.deleteBranch(branch);
          Swal.fire("Deleted!", "Branch has been deleted.", "success");
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
  },
  computed: {
    ...mapState({
      branches: (state) => state.branch.branches,
    }),
    ...mapGetters(["branchCount"]),
  },
  mounted() {
    this.getBranches();
  },
};
</script>

<style></style>
