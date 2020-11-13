<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import { mapGetters, mapState, mapActions, mapMutations } from "vuex";
export default {

    mounted() {
    this.fetchAllClients();
    this.fetchAllGroups();
    this.fetchAllPlans();
    this.fetchAllPayments();
    this.fetchAllBanks();
    this.fetchAllCurrencies();
    this.fetchAllEmployees();
    this.fetchAllBranches();
    this.fetchAllLimits();
     },
  methods: {
    ...mapActions([
      "fetchAllClients",
      "fetchAllPlans",
      "fetchAllGroups",
      "fetchAllPayments",
      "fetchAllBanks",
      "fetchAllCurrencies",
      "fetchAllEmployees",
      "fetchAllBranches",
      "fetchAllLimits",
    ]),
  }
}
</script>
