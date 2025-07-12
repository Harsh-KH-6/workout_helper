document.getElementById('calorieForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const age = parseInt(document.getElementById('age').value);
  const gender = document.getElementById('gender').value;
  const height = parseFloat(document.getElementById('calHeight').value);
  const weight = parseFloat(document.getElementById('calWeight').value);
  const activity = parseFloat(document.getElementById('activity').value);
  const goal = document.getElementById('calGoal').value;

  // Validate inputs
  if (!age || !gender || !height || !weight || !activity || !goal) {
    document.getElementById('calorieResult').innerHTML = `
      <div class="exercise-card" style="max-width:400px;border:2px solid #ff3c38;">
        <h3>⚠️ Missing Information</h3>
        <p>Please fill in all fields to calculate your calorie needs.</p>
      </div>
    `;
    return;
  }

  if (age < 10 || age > 100 || height < 100 || height > 250 || weight < 30 || weight > 200) {
    document.getElementById('calorieResult').innerHTML = `
      <div class="exercise-card" style="max-width:400px;border:2px solid #ff3c38;">
        <h3>⚠️ Invalid Input</h3>
        <p>Please enter valid values within the specified ranges.</p>
      </div>
    `;
    return;
  }

  // Mifflin-St Jeor Equation
  let bmr = 0;
  if (gender === 'male') {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }
  const tdee = bmr * activity;
  
  let suggestion = '';
  let goalColor = '';
  if (goal === 'maintain') {
    suggestion = `To maintain your weight, eat about <b>${Math.round(tdee)}</b> calories/day.`;
    goalColor = '#4CAF50';
  } else if (goal === 'lose') {
    suggestion = `To lose weight, aim for <b>${Math.round(tdee - 500)}</b> calories/day (approx. 500 kcal deficit).`;
    goalColor = '#ff9800';
  } else if (goal === 'gain') {
    suggestion = `To gain weight, aim for <b>${Math.round(tdee + 300)}</b> calories/day (approx. 300 kcal surplus).`;
    goalColor = '#2196F3';
  }

  document.getElementById('calorieResult').innerHTML = `
    <div class="exercise-card" style="max-width:400px;">
      <h3>Your Calorie Estimate</h3>
      <p><b>BMR (Basal Metabolic Rate):</b> ${Math.round(bmr)} kcal/day</p>
      <p><b>TDEE (Total Daily Energy Expenditure):</b> ${Math.round(tdee)} kcal/day</p>
      <p style="color:${goalColor};">${suggestion}</p>
      <p style="font-size:0.9rem;color:#888;margin-top:1rem;">
        <strong>Note:</strong> These are estimates. Adjust based on your progress and consult a healthcare professional for personalized advice.
      </p>
    </div>
  `;
}); 