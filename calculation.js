
function calculateBMI() {
    var feet = document.getElementById('feet').value;
    var inches = document.getElementById('inches').value || 0; // default to 0 if inches are not provided
    var pounds = document.getElementById('pounds').value;

    var totalInches = (+feet * 12) + +inches; // convert feet to inches and add inches
    var heightInMeters = totalInches * 0.0254; // convert inches to meters

    var weightInKilos = pounds * 0.453592; // convert pounds to kilograms

    var bmi = weightInKilos / (heightInMeters * heightInMeters); // BMI formula
    bmi = bmi.toFixed(2); // rounding off to 2 decimal places

    document.getElementById('result').innerHTML = `Your BMI is ${bmi}`;
}
