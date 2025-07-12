document.getElementById('bmiForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const height = parseFloat(document.getElementById('bmiHeight').value);
  const weight = parseFloat(document.getElementById('bmiWeight').value);
  
  if (!height || !weight || height < 100 || height > 250 || weight < 30 || weight > 200) {
    document.getElementById('bmiResult').innerHTML = `
      <div class="exercise-card" style="max-width:400px;border:2px solid #ff3c38;">
        <h3>⚠️ Invalid Input</h3>
        <p>Please enter valid height (100-250 cm) and weight (30-200 kg) values.</p>
      </div>
    `;
    return;
  }
  
  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);
  let category = '';
  let categoryColor = '';
  
  if (bmi < 18.5) {
    category = 'Underweight';
    categoryColor = '#ff6b6b';
  } else if (bmi < 25) {
    category = 'Normal weight';
    categoryColor = '#4CAF50';
  } else if (bmi < 30) {
    category = 'Overweight';
    categoryColor = '#ff9800';
  } else {
    category = 'Obese';
    categoryColor = '#f44336';
  }
  
  document.getElementById('bmiResult').innerHTML = `
    <div class="exercise-card" style="max-width:400px;">
      <h3>Your BMI Result</h3>
      <p><b>BMI:</b> ${bmi.toFixed(1)}</p>
      <p><b>Category:</b> <span style="color:${categoryColor};">${category}</span></p>
      <p style="font-size:0.9rem;color:#888;margin-top:1rem;">
        <strong>Note:</strong> BMI is a screening tool and may not be accurate for athletes, pregnant women, or the elderly.
      </p>
    </div>
  `;
}); 