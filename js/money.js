// calculate income and expenses
function totalExpenseEvent() {


    const totalIncome = document.getElementById('total-income').value;
    const foodExpense = document.getElementById('food-expense').value;
    const rentExpense = document.getElementById('rent-expense').value;
    const clothesExpense = document.getElementById('clothes-expense').value;

    if (isNaN(totalIncome) || isNaN(foodExpense) || isNaN(rentExpense) || isNaN(clothesExpense)) {
        alert("Please enter a valid amount");
    }
    else {
        const tototalExpenseInput = document.getElementById('total-expense');
        const tototalExpenseValue = tototalExpenseInput.innerText;
        const totalExpenseAmount = parseFloat(foodExpense) + parseFloat(rentExpense) + parseFloat(clothesExpense);

        if (totalIncome < totalExpenseAmount) {
            alert("Expenses are greater then Income amount!!")
        }
        else {
            tototalExpenseInput.innerText = totalExpenseAmount;

            const remainingBalanceInput = document.getElementById('remaining-balance');
            const remainingBalanceValue = remainingBalanceInput.innerText;
            const remainingBalanceAmount = parseFloat(totalIncome) - parseFloat(totalExpenseAmount);
            remainingBalanceInput.innerText = remainingBalanceAmount;
        }

    }

}
// calculate percentage of income and savings
function percentSave() {



    const totalIncome = document.getElementById('total-income').value;
    const totalIncomeAmount = parseFloat(totalIncome);

    const percentageInput = document.getElementById('percent-input').value;

    if (isNaN(percentageInput)) {
        alert("Please enter a valid amount");
    }
    else {
        const percentageAmount = parseFloat(percentageInput);
        const percentageSave = totalIncomeAmount * percentageAmount / 100;

        const saveInput = document.getElementById('save-amount');
        const saveValue = parseFloat(saveInput.innerText);
        saveInput.innerText = parseFloat(percentageSave);



        const finalBalanceInput = document.getElementById('final-balance');
        const finalBalanceValue = finalBalanceInput.innerText;
        const finalBalanceAmount = parseFloat(finalBalanceValue);


        const foodExpense = document.getElementById('food-expense').value;
        const rentExpense = document.getElementById('rent-expense').value;
        const clothesExpense = document.getElementById('clothes-expense').value;

        const tototalExpenseInput = document.getElementById('total-expense');
        const tototalExpenseValue = tototalExpenseInput.innerText;
        const totalExpenseAmount = parseFloat(foodExpense) + parseFloat(rentExpense) + parseFloat(clothesExpense);

        finalBalanceInput.innerText = totalIncomeAmount - percentageSave - totalExpenseAmount;
    }


}



