import { createSelector } from 'reselect';

const selectItems = state => state.items;

export const selectIncome = createSelector(
    [selectItems],
    items => items.income
);

export const selectExpenses = createSelector(
    [selectItems],
    items => items.expenses
);

export const selectIncomeTotal = createSelector(
    [selectIncome],
    income =>
    income.reduce(
        (accumulatedTotal, income) =>
            accumulatedTotal + parseInt(income.value), 0
    )
);

export const selectExpensesTotal = createSelector(
    [selectExpenses],
    expenses =>
    expenses.reduce(
        (accumulatedTotal, expenses) =>
            accumulatedTotal + parseInt(expenses.value), 0
    )
);

export const selectItemsBalance = createSelector(
    [selectIncomeTotal, selectExpensesTotal],
    (selectIncomeTotal, selectExpensesTotal) => 
        selectIncomeTotal - selectExpensesTotal
);