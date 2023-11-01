document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("loanCalcForm")
    .addEventListener("submit", submitForm);
});

const submitForm = (e) => {
  e.preventDefault();

  const loanAmount = parseFloat(document.getElementById("loanAmount").value);
  const interestRate = parseFloat(
    document.getElementById("interestRate").value
  );
  const loanTerm = parseFloat(document.getElementById("loanTerm").value);

  if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm)) {
    alert("Please enter valid numbers for all the fields.");
  }

  const monthlyInterest = interestRate / 100 / 12;
  const totalPayments = loanTerm;
  const monthlyPayment =
    (loanAmount * monthlyInterest) /
    (1 - Math.pow(1 + monthlyInterest, -totalPayments));
  const totalInterest = monthlyPayment * totalPayments - loanAmount;

  showResult(monthlyPayment, totalInterest);
};

const showResult = (monthlyPayment, totalInterest) => {
  const result = document.getElementById("result");

  result.innerHTML = `
    <p>Monthly Payment: ${monthlyPayment.toFixed(2)}</p>
    <p>Total Interest: ${totalInterest.toFixed(2)}</p>
  `;
};
