<template>
  <div>
    <div
      class="flex flex-col sm:flex-row items-center mt-8"
      :class="{ 'intro-y': !isFormOpen }"
    >
      <h2 class="text-lg font-medium mr-auto">
        Clients
      </h2>
      <div class="w-full sm:w-auto flex mt-4 sm:mt-0">
        <button
          @click="isFormOpen = true"
          class="button text-white bg-theme-1 shadow-md mr-2"
        >
          Add New Client
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
                @click="isFormOpen = true"
                class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
              >
                <i data-feather="user-plus" class="w-4 h-4 mr-2" /> New Client
              </a>
              <a
                class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
              >
                <i data-feather="dollar-sign" class="w-4 h-4 mr-2" /> New
                Payment
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
      :title="modalTitle"
      v-if="isFormOpen"
      @close="close"
      @submit-form="addValue"
    >
      <div>
        <!-- Start: Type Field -->
        <div class="col-span-12 sm:col-span-3">
          <label class="flex flex-col sm:flex-row">
            Type
            <span class="sm:ml-auto mt-1 sm:mt-0 text-xs text-gray-600"
              >(Required, Either Principal or Dependent)</span
            >
          </label>
          <select
            v-model="$v.form.type.$model"
            class="input w-full border mt-2"
            :class="{ 'border-theme-6': $v.form.type.$error }"
          >
            <option disabled value="">Select Type</option>
            <option>Principal</option>
            <option>Dependent</option>
          </select>
          <template v-if="$v.form.type.$error">
            <div v-if="!$v.form.type.required" class="text-theme-6 mt-2">
              Field is required
            </div>
          </template>
        </div>
        <!-- End: Type Field -->

        <!-- Start: Principal Member Field -->
        <div class="col-span-12 sm:col-span-3">
          <label class="flex flex-col sm:flex-row">
            Principal Member
            <span class="sm:ml-auto mt-1 sm:mt-0 text-xs text-gray-600"
              >(Required if Type is Dependent)</span
            >
          </label>
          <input
            v-model="$v.form.principal.$model"
            type="text"
            class="input w-full border mt-2"
            :class="{ 'border-theme-6': $v.form.principal.$error }"
            placeholder="First Name"
          />
        </div>
        <!-- End: Principal Member Field -->

        <!-- Start: Plan Field -->
        <div class="col-span-12 sm:col-span-3">
          <label class="flex flex-col sm:flex-row">
            Plan
            <span class="sm:ml-auto mt-1 sm:mt-0 text-xs text-gray-600"
              >(Required)</span
            >
          </label>
          <select
            v-model="$v.form.plan.$model"
            class="input w-full border mt-2"
            :class="{ 'border-theme-6': $v.form.plan.$error }"
          >
            <option disabled value="">Select Plan</option>
            <option>Gold</option>
            <option>Diamond</option>
          </select>
          <template v-if="$v.form.surname.$error">
            <div v-if="!$v.form.plan.required" class="text-theme-6 mt-2">
              Plan is required
            </div>
          </template>
        </div>
        <!-- End: Plan Field -->

        <!-- Start: Corporate Field -->
        <div class="col-span-12 sm:col-span-3">
          <label class="flex flex-col sm:flex-row">
            Corporate
            <span class="sm:ml-auto mt-1 sm:mt-0 text-xs text-gray-600"
              >(Optional)</span
            >
          </label>
          <select
            v-model="$v.form.corporate.$model"
            class="input w-full border mt-2"
            :class="{ 'border-theme-6': $v.form.corporate.$error }"
          >
            <option disabled value="">Select Plan</option>
            <option>Bata</option>
            <option>CABS</option>
          </select>
        </div>
        <!-- End: Corporate Field -->
      </div>

      <div
        class="flex items-center px-10 py-10 sm:py-3 border-b-2 border-gray-200 dark:border-dark-5"
      >
        <!-- Start: Title Field -->
        <div class="col-span-12 sm:col-span-3">
          <label class="flex flex-col sm:flex-row">
            Title
            <span class="sm:ml-auto mt-1 sm:mt-0 text-xs text-gray-600"
              >(Required)</span
            >
          </label>
          <select
            v-model="$v.form.title.$model"
            class="input w-full border mt-2"
            :class="{ 'border-theme-6': $v.form.title.$error }"
          >
            <option disabled value="">Select Title</option>
            <option>Mr</option>
            <option>Mrs</option>
            <option>Miss</option>
          </select>
          <template v-if="$v.form.title.$error">
            <div v-if="!$v.form.title.required" class="text-theme-6 mt-2">
              Field is required
            </div>
          </template>
        </div>
        <!-- End: Title Field -->

        <!-- Start: First Name Field -->
        <div class="col-span-12 sm:col-span-3">
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
        <div class="col-span-12 sm:col-span-3">
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

        <!-- Start: ID Number Field -->
        <div class="col-span-12 sm:col-span-3">
          <label class="flex flex-col sm:flex-row">
            ID Number
            <span class="sm:ml-auto mt-1 sm:mt-0 text-xs text-gray-600"
              >(Required, Format: 29-12345B66)</span
            >
          </label>
          <input
            v-model.trim="$v.form.id_number.$model"
            type="text"
            class="input w-full border mt-2"
            :class="{ 'border-theme-6': $v.form.id_number.$error }"
            placeholder="29-123456T99"
          />
          <template v-if="$v.form.id_number.$error">
            <div v-if="!$v.form.id_number.required" class="text-theme-6 mt-2">
              Field is required
            </div>
            <div v-if="!$v.form.id_number.minLength" class="text-theme-6 mt-2">
              ID Number must be atleast
              {{ $v.form.id_number.$params.minLength.min }} characters.
            </div>
            <div v-if="!$v.form.id_number.maxLength" class="text-theme-6 mt-2">
              ID Number must not be more than
              {{ $v.form.id_number.$params.maxLength.max }} character.
            </div>
          </template>
        </div>
        <!-- End: ID Number Field -->
      </div>

      <div
        class="flex items-center px-10 py-10 sm:py-3 border-b-2 border-gray-200 dark:border-dark-5"
      >
        <!-- Start: Cellphone Field -->
        <div class="col-span-12 sm:col-span-3">
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
            <div v-if="!$v.form.cellphone.required" class="text-theme-6 mt-2">
              Field is required
            </div>
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

        <!-- Start: Home Phone Field -->
        <div class="col-span-12 sm:col-span-3">
          <label class="flex flex-col sm:flex-row">
            Home Telephone
            <span class="sm:ml-auto mt-1 sm:mt-0 text-xs text-gray-600"
              >(Landline Include Code)</span
            >
          </label>
          <input
            v-model="$v.form.home_telephone.$model"
            type="text"
            class="input w-full border mt-2"
            :class="{ 'border-theme-6': $v.form.home_telephone.$error }"
            placeholder="054 123456"
          />
          <template v-if="$v.form.home_telephone.$error">
            <div
              v-if="!$v.form.home_telephone.minLength"
              class="text-theme-6 mt-2"
            >
              Telephone must be atleast
              {{ $v.form.home_telephone.$params.minLength.min }} numbers.
            </div>
            <div
              v-if="!$v.form.home_telephone.maxLength"
              class="text-theme-6 mt-2"
            >
              Telephone must not be more than
              {{ $v.form.home_telephone.$params.maxLength.max }} numbers.
            </div>
          </template>
        </div>
        <!-- End: Home Telephone Field -->

        <!-- Start: Business Telephone Field -->
        <div class="col-span-12 sm:col-span-3">
          <label class="flex flex-col sm:flex-row">
            Business Telephone
            <span class="sm:ml-auto mt-1 sm:mt-0 text-xs text-gray-600"
              >(Landline Include Code)</span
            >
          </label>
          <input
            v-model="$v.form.business_telephone.$model"
            type="text"
            class="input w-full border mt-2"
            :class="{ 'border-theme-6': $v.form.business_telephone.$error }"
            placeholder="054 123456"
          />
          <template v-if="$v.form.business_telephone.$error">
            <div
              v-if="!$v.form.business_telephone.minLength"
              class="text-theme-6 mt-2"
            >
              Telephone must be atleast
              {{ $v.form.business_telephone.$params.minLength.min }} numbers.
            </div>
            <div
              v-if="!$v.form.business_telephone.maxLength"
              class="text-theme-6 mt-2"
            >
              Telephone must not be more than
              {{ $v.form.business_telephone.$params.maxLength.max }} numbers.
            </div>
          </template>
        </div>
        <!-- End: Business Telephone Field -->

        <!-- Start: Email Field -->
        <div class="col-span-12 sm:col-span-3">
          <label class="flex flex-col sm:flex-row">
            Email
            <span class="sm:ml-auto mt-1 sm:mt-0 text-xs text-gray-600"
              >(Required, email address format)</span
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
            <div v-if="!$v.form.email.required" class="text-theme-6 mt-2">
              Field is required
            </div>
            <div v-if="!$v.form.email.email" class="text-theme-6 mt-2">
              Please enter a valid email address.
            </div>
          </template>
        </div>
        <!-- End: Email Field -->
      </div>

      <div>
        <!-- Start: Date Of Birth Field -->
        <div class="col-span-12 sm:col-span-4">
          <label class="flex flex-col sm:flex-row">
            Date Of Birth
            <span class="sm:ml-auto mt-1 sm:mt-0 text-xs text-gray-600"
              >(Required)</span
            >
          </label>
          <input
            v-model="$v.form.date_of_birth.$model"
            type="text"
            class="input w-full border mt-2"
            :class="{ 'border-theme-6': $v.form.date_of_birth.$error }"
            placeholder="Surname"
          />
          <template v-if="$v.form.date_of_birth.$error">
            <div
              v-if="!$v.form.date_of_birth.required"
              class="text-theme-6 mt-2"
            >
              Field is required
            </div>
          </template>
        </div>
        <!-- End: Date Of Birth Field -->

        <!-- Start: Gender Field -->
        <div class="col-span-12 sm:col-span-4">
          <label class="flex flex-col sm:flex-row">
            Gender
            <span class="sm:ml-auto mt-1 sm:mt-0 text-xs text-gray-600"
              >(Required)</span
            >
          </label>
          <select
            v-model="$v.form.gender.$model"
            class="input w-full border mt-2"
            :class="{ 'border-theme-6': $v.form.type.$error }"
          >
            <option disabled value="">Select Type</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
          <template v-if="$v.form.gender.$error">
            <div v-if="!$v.form.gender.required" class="text-theme-6 mt-2">
              Field is required
            </div>
          </template>
        </div>
        <!-- End: Gender Field -->

        <!-- Start: Referrer Field -->
        <div class="col-span-12 sm:col-span-4">
          <label class="flex flex-col sm:flex-row">
            Referral Code
            <span class="sm:ml-auto mt-1 sm:mt-0 text-xs text-gray-600"
              >(Required)</span
            >
          </label>
          <input
            v-model="$v.form.referrer.$model"
            type="text"
            class="input w-full border mt-2"
            :class="{ 'border-theme-6': $v.form.referrer.$error }"
            placeholder="Referral Code"
          />
          <template v-if="$v.form.referrer.$error">
            <div v-if="!$v.form.referrer.minLength" class="text-theme-6 mt-2">
              Referral Code must be atleast
              {{ $v.form.referrer.$params.minLength.min }} letters.
            </div>
            <div v-if="!$v.form.referrer.maxLength" class="text-theme-6 mt-2">
              Referral Code must not be more than
              {{ $v.form.referrer.$params.maxLength.max }} letters.
            </div>
          </template>
        </div>
        <!-- End: Plan Field -->
      </div>

      <div>
        <!-- Start: Avatar Field -->
        <div class="col-span-12 sm:col-span-6">
          <label class="flex flex-col sm:flex-row">
            Avatar
            <span class="sm:ml-auto mt-1 sm:mt-0 text-xs text-gray-600"
              >(Required)</span
            >
          </label>
          <input
            v-model="$v.form.avatar.$model"
            type="text"
            class="input w-full border mt-2"
            :class="{ 'border-theme-6': $v.form.avatar.$error }"
            placeholder="file"
          />
        </div>
        <!-- End: Avatar Field -->

        <!-- Start: Address Field -->
        <div class="col-span-12 sm:col-span-6">
          <label class="flex flex-col sm:flex-row">
            Address
            <span class="sm:ml-auto mt-1 sm:mt-0 text-xs text-gray-600"
              >(Physical Address)</span
            >
          </label>
          <textarea
            v-model="form.address"
            placeholder="Physical Address here"
          ></textarea>
          <template v-if="$v.form.address.$error">
            <div v-if="!$v.form.address.required" class="text-theme-6 mt-2">
              Field is required
            </div>
          </template>
        </div>
        <!-- End: Address Field -->
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
      title: {
        required,
      },
      id_number: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(20),
      },
      type: {
        required,
      },
      plan: {
        required,
      },
      principal: {
       
      },
      corporate: {
        
      },
      cellphone: {
        minLength: minLength(7),
        maxLength: maxLength(15),
      },
      home_telephone: {
        minLength: minLength(7),
        maxLength: maxLength(15),
      },
      business_telephone: {
        minLength: minLength(7),
        maxLength: maxLength(15),
      },
      email: {
        email,
      },
      date_of_birth: {
        
      },
      gender: {
        required,
      },
      referrer: {
        minLength: minLength(4),
        maxLength: maxLength(20),
      },
      avatar: {
        
      },
      address: {
        
      },
    },
  },
  data() {
    return {
      name: "Client",
      table: null,
      filter: {
        field: "fullname",
        type: "like",
        value: "",
      },
      modalTitle: "Add New Client",
      form: {
        id: "",       
        title: "",
        firstname: "",
        surname: "",
        id_number: "",
        principal: "",
        type: "",
        plan: "",
        corporate: "",
        cellphone: "",
        home_telephone: "",
        business_telephone: "",
        email: "",
        date_of_birth: "",
        gender: "",
        address: "",
        avatar: "",
        referrer: "",
      },
      isFormOpen: false,
      errors: [],
      edit: false,
    };
  },
  computed: {
    ...mapState({
      clients: (state) => state.client.clients,
    }),
    ...mapGetters(["getClients"]),
  },
  mounted() {
    this.fetchAllClients().then(() => this.getTable());
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
      "fetchAllClients",
      "addClient",
      "updateClient",
      "deleteClient",
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
        this.$store.commit("CLIENT");
        if (this.edit == false) {
          try {
            const response = await this.addClient(this.form);
            if (response) {
              Swal.fire(
                "New Client Saved!",
                "You now have a client with name  " + this.form.name,
                "success"
              );
              this.getTable();
              this.close(); //Clear form fields
            }
          } catch (err) {
            this.$store.commit(
              "CLIENT_CREATE_FAILED",
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
            const response = await this.updateClient(this.form);
            if (response) {
              Swal.fire(
                "Bank Client Updated",
                "You updated " + this.form.name + " successfully",
                "success"
              );
              this.getTable();
              this.close(); //Clear form fields
            }
          } catch (err) {
            this.$store.commit(
              "CLIENT_CREATE_FAILED",
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
          console.log(cell.getData().id);
          this.deleteClient(cell.getData().id)
            .then(() => {
              this.getTable();
              Swal.fire("Deleted!", "Client has been deleted.", "success");
            })
            .catch((err) => {
              console.log(err);
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
      this.fetchAllClients().then(() => {
        let tableData = this.clients;
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
              title: "DATE JOINED",
              field: "date_joined",
              hozAlign: "center",
              vertAlign: "middle",
              print: false,
              download: false,
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
              title: "DATE OF BIRTH",
              field: "date_of_birth",
              hozAlign: "center",
              vertAlign: "middle",
              print: false,
              download: false,
            },
            {
              title: "GENDER",
              field: "gender",
              hozAlign: "center",
              vertAlign: "middle",
              print: false,
              download: false,
            },
            {
              title: "TYPE",
              field: "type",
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
              title: "PRINCIPAL MEMBER",
              field: "principal",
              hozAlign: "center",
              vertAlign: "middle",
              print: false,
              download: false,
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
    editValue(e, cell) {
      this.edit = true;
      this.form.id = cell.getData().id;
      this.form.firstname = cell.getData().firstname;
      this.form.surname = cell.getData().surname;
      this.form.title = cell.getData().title;
      this.form.id_number = cell.getData().id_number;
      this.form.principal = cell.getData().principal;
      this.form.type = cell.getData().type;
      this.form.plan = cell.getData().plan;
      this.form.corporate = cell.getData().corporate;
      this.form.cellphone = cell.getData().cellphone;
      this.form.home_telephone = cell.getData().home_telephone;
      this.form.business_telephone = cell.getData().business_telephone;
      this.form.email = cell.getData().email;
      this.form.date_of_birth = cell.getData().date_of_birth;
      this.form.gender = cell.getData().gender;
      this.form.address = cell.getData().address;
      this.form.avatar = cell.getData().avatar;
      this.form.referrer = cell.getData().referrer;
      this.modalTitle = "Edit Client";
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
