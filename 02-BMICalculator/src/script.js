document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("bmiForm").addEventListener("submit", submitForm);
});

const submitForm = (e) => {
  e.preventDefault();

  const gender = document.getElementById("gender").value;
  const age = parseInt(document.getElementById("age").value);
  const heightFeet = parseInt(document.getElementById("heightFeet").value);
  const heightInches = parseInt(document.getElementById("heightInches").value);
  const weight = parseFloat(document.getElementById("weight").value);

  let errorMessageAge = document.getElementById("errorMessageAge");
  let errorMessageHeightFeet = document.getElementById(
    "errorMessageHeightFeet"
  );
  let errorMessageHeightInches = document.getElementById(
    "errorMessageHeightInches"
  );
  let errorMessageWeight = document.getElementById("errorMessageWeight");

  if (!age) {
    errorMessageAge.innerHTML = "Please enter your age.";
    return;
  }

  if (!heightFeet) {
    errorMessageAge.innerHTML = "";
    errorMessageHeightFeet.innerHTML = "Please enter your height in Feet.";
    return;
  }

  if (!heightInches) {
    errorMessageHeightFeet.innerHTML = "";
    errorMessageHeightInches.innerHTML = "Please enter your height in Inches.";
    return;
  }

  if (!weight) {
    errorMessageHeightInches.innerHTML = "";
    errorMessageWeight.innerHTML = "Please enter your weight.";
    return;
  }

  errorMessageAge.innerHTML = "";
  errorMessageHeightFeet.innerHTML = "";
  errorMessageHeightInches.innerHTML = "";
  errorMessageWeight.innerHTML = "";

  const heightMeters = heightFeet * 0.3048 + heightInches * 0.0254;
  const bmi = weight / (heightMeters * heightMeters);

  let category = "";
  let result = document.getElementById("result");

  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = "Normal weight";
  } else if (bmi >= 25 && bmi < 29.9) {
    category = "Overweight";
  } else {
    category = "Obese";
  }

  result.innerHTML = `Your BMI is ${bmi.toFixed(2)} <br>`;
  result.innerHTML += `Category: ${category}`;
};
