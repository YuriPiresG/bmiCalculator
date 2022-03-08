function bmiCalculator (weight, height) {
  var weight = prompt("Type your weight in kgs: ");
  var height = prompt("Type your height in m: ");
  var interpretation = weight/(height)**2;
  
  if (interpretation < 18.5){
    alert("Your BMI is " + interpretation + ", so you are underweight");
  }
  if (interpretation > 18.5 && interpretation <= 24.9){
    alert("Your BMI is " + interpretation + ", so you have a normal weight");
  }
  if (interpretation > 24.9){
    alert("Your BMI is " + interpretation + ", so you are overweight");
  }
  return interpretation;
}

bmiCalculator();
