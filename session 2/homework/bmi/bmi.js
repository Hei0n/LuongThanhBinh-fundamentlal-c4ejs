const weight=prompt(" Enter your weight (kilogram) ");
const height=prompt(" Enter your height (meter) ");

const BMI = weight / (height * height);
if (BMI <16  )
{
    alert("You are severely underweight");
}
else if (BMI <18.5)
{
    alert("You are underweight ");
}
else if (BMI <25)
{
    alert("Your weight is normal ");
}
else if (BMI <30)
{
    alert("You are overweight ");
}
else if (BMI > 30 )
{
    alert("You are obese ");
}