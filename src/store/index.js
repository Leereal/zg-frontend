import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import main from "./main";
import sideMenu from "./side-menu";
import branch from "./modules/Branch";
import register from "./modules/Register";
import payment from "./modules/Payment";
import bank from "./modules/Bank";
import employee from "./modules/Employee";
import client from "./modules/Client";
import client_bank_detail from "./modules/ClientBankDetail";
import company_bank_detail from "./modules/CompanyBankDetail";
import sp_bank_detail from "./modules/SPBankDetail";
import currency from "./modules/Currency";
import group from "./modules/Group";
import limitplan from "./modules/LimitPlan";
import limit from "./modules/Limit";
import plan from "./modules/Plan";
import payment_method from "./modules/PaymentMethod";
import premium from "./modules/Premium";
import role from "./modules/Role";
import service_provider from "./modules/ServiceProvider";
import auth from "./auth"
export default new Vuex.Store({
  modules: {
    main: main,
    sideMenu: sideMenu,
    branch: branch,
    register: register,
    payment:payment,
    bank:bank,
    employee:employee,
    client:client,
    client_bank_detail:client_bank_detail,
    company_bank_detail:company_bank_detail,
    sp_bank_detail:sp_bank_detail,
    currency:currency,
    group:group,
    limitplan:limitplan,
    payment_method:payment_method,
    plan:plan,
    limit:limit,
    premium:premium,
    role:role,
    service_provider:service_provider,
    auth:auth
  },
});
