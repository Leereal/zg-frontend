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