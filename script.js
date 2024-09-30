    const billInput = document.getElementById("bill");
    const customTipInput = document.getElementById("customTip");
    const tipButtons = document.querySelectorAll(".btns button");
    const tipAmountDisplay = document.getElementById("tip-amount");
    const totalAmountDisplay = document.getElementById("total-amount");
    const resetButton = document.querySelector(".reset");

    let selectedTipPercent = 0;

    function updateTipAndTotal() {
        const billValue = parseFloat(billInput.value);
        const tipPercent = selectedTipPercent || parseFloat(customTipInput.value) || 0;
        const tipValue = (billValue * tipPercent) / 100;
        const totalValue = billValue + tipValue;

        tipAmountDisplay.textContent = tipValue.toFixed(2);
        totalAmountDisplay.textContent = totalValue.toFixed(2);
    }

    tipButtons.forEach(button => {
        button.addEventListener("click", function () {
            customTipInput.value = "";
            selectedTipPercent = parseFloat(button.getAttribute("data-percent"));
            updateTipAndTotal();
        });
    });

    billInput.addEventListener("focus", function(){
        if(billInput.value=="0.00"){
            billInput.value="";
        }
    });

    billInput.addEventListener("blur", function () {
        if (billInput.value === "") {
            billInput.value = "0.00"; 
        }
    });

    customTipInput.addEventListener("input", function () {
        selectedTipPercent = 0;
        updateTipAndTotal();
    });

    billInput.addEventListener("input", updateTipAndTotal);

    resetButton.addEventListener("click", function () {
        billInput.value = "0.00";
        customTipInput.value = "";
        selectedTipPercent = 0;

        tipAmountDisplay.textContent = "0";
        totalAmountDisplay.textContent = "0";
    });
