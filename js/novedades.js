function calculateMonthlyConsumption() {
    const dailyConsumption = parseFloat(document.getElementById('dailyConsumption').value);
    const daysInMonth = 30; // Assuming an average month
    const monthlyConsumption = dailyConsumption * daysInMonth;
  
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Tu consumo mensual estimado es de ${monthlyConsumption.toFixed(2)} litros.`;
  }