// Курсы: сколько тенге за 1 единицу валюты
    const rates = {
      RUB: 6.76, 
      UZS: 0.043,
      USD: 538.80,
    };

    const amountInput = document.getElementById('amount');
    const currencySelect = document.getElementById('currency');
    const resultDiv = document.getElementById('result');

    function appendNumber(num) {
      amountInput.value += num;
      convert();
    }

    function clearInput() {
      amountInput.value = amountInput.value.slice(0, -1000000);
      convert();
    }

    function convert() {
      const amountKZT = parseFloat(amountInput.value);
      const selectedCurrency = currencySelect.value;

      if (isNaN(amountKZT) || amountKZT <= 0) {
        return;
      }

      const rate = rates[selectedCurrency];
      const result = amountKZT / rate;

      resultDiv.textContent = `${result.toFixed(2)} ${selectedCurrency}`;
    }

    currencySelect.addEventListener('change', convert);
