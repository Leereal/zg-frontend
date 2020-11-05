const state = () => {
  return {
    menu: [
      {
        icon: "HomeIcon",
        pageName: "side-menu-dashboard",
        title: "Dashboard"
      },
      {
        icon: "CreditCardIcon",
        pageName: "payment-methods",
        title: "Payment Methods"
      },
      {
        icon: "GitBranchIcon",
        pageName: "branch",
        title: "Branch"
      },
      {
        icon: "ArchiveIcon",
        pageName: "bank",
        title: "Bank"
      },
      {
        icon: "BriefcaseIcon",
        pageName: "payments",
        title: "Payments"
      },
      {
        icon: "UsersIcon",
        pageName: "employees",
        title: "Employees"
      },
      {
        icon: "UsersIcon",
        pageName: "clients",
        title: "Clients"
      },
      {
        icon: "ServerIcon",
        pageName: "client-bank-details",
        title: "Clients Bank Details"
      },
      {
        icon: "ServerIcon",
        pageName: "company-bank-details",
        title: "Company Bank Details"
      },
      {
        icon: "ServerIcon",
        pageName: "sp-bank-details",
        title: "SP Bank Details"
      },
      {
        icon: "UsersIcon",
        pageName: "groups",
        title: "Corporates"
      },
      {
        icon: "DollarSignIcon",
        pageName: "currencies",
        title: "Currencies"
      },
      {
        icon: "CircleIcon",
        pageName: "limit-plans",
        title: "Plans Limits"
      },
      {
        icon: "BoxIcon",
        pageName: "limits",
        title: "Limits"
      },
      {
        icon: "DiscIcon",
        pageName: "plans",
        title: "Plans"
      },
      {
        icon: "GitPullRequestIcon",
        pageName: "roles",
        title: "Roles"
      },
      {
        icon: "PackageIcon",
        pageName: "service-providers",
        title: "Service Providers"
      },
      {
        icon: "FramerIcon",
        pageName: "premiums",
        title: "Premiums"
      },
      
      "devider",
      {
        icon: "TrelloIcon", 
        title: "Profile",
        subMenu: [
          {
            icon: "",
            pageName: "profile",
            title: "Profile"
          },
          {
            icon: "",
            pageName: "update-profile",
            title: "Update profile"
          },
          {
            icon: "",
            pageName: "change-password",
            title: "Change Password"
          }         
        ]
      }
    ]    
  };
};
// getters
const getters = {
  menu: state => state.menu
};

// actions
const actions = {};

// mutations
const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
