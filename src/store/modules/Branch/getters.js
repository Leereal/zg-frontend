import state from "./state";

export const branchCount = (state) => {
    return state.branches.length;
};

// export const branchTotal = () => {
//     let total = 0;
//     state.payments.forEach(item => {
//         total+=item.payment.amount;
//     })
// };