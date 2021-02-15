import { createSelector } from 'reselect';

const selectItems = state => state.items;

export const selectIncomes = createSelector(
    [selectItems],
    items => items.incomes
);

export const selectExpenses = createSelector(
    [selectItems],
    items => items.expenses
);

export const selectIncomesTotal = createSelector(
    [selectIncomes],
    incomes =>
    incomes.reduce(
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
    [selectIncomesTotal, selectExpensesTotal],
    (selectIncomesTotal, selectExpensesTotal) => 
        selectIncomesTotal - selectExpensesTotal
);