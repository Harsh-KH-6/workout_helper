const plans = {
  veg: {
    gain: {
      breakfast: 'Oats with milk, banana, almonds',
      lunch: 'Paneer curry, brown rice, salad',
      dinner: 'Dal, roti, mixed veg, curd',
      snacks: 'Peanut butter toast, fruit smoothie'
    },
    lose: {
      breakfast: 'Sprouts salad, green tea',
      lunch: 'Grilled tofu, quinoa, veggies',
      dinner: 'Moong dal soup, salad',
      snacks: 'Carrot sticks, buttermilk'
    },
    maintain: {
      breakfast: 'Poha with peas, milk',
      lunch: 'Rajma, rice, salad',
      dinner: 'Vegetable khichdi, curd',
      snacks: 'Fruit bowl, nuts'
    }
  },
  nonveg: {
    gain: {
      breakfast: 'Egg omelette, whole wheat bread, milk',
      lunch: 'Chicken curry, rice, salad',
      dinner: 'Fish curry, roti, veggies',
      snacks: 'Boiled eggs, protein shake'
    },
    lose: {
      breakfast: 'Boiled eggs, black coffee',
      lunch: 'Grilled chicken breast, veggies',
      dinner: 'Egg drop soup, salad',
      snacks: 'Greek yogurt, cucumber slices'
    },
    maintain: {
      breakfast: 'Egg sandwich, milk',
      lunch: 'Chicken stew, rice, salad',
      dinner: 'Grilled fish, veggies',
      snacks: 'Fruit, nuts'
    }
  }
};

document.getElementById('dietForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const type = document.getElementById('dietType').value;
  const goal = document.getElementById('goal').value;
  const weight = document.getElementById('weight').value;
  
  // Validate inputs
  if (!type || !goal || !weight) {
    document.getElementById('dietResult').innerHTML = `
      <div class="exercise-card" style="max-width:400px;border:2px solid #ff3c38;">
        <h3>⚠️ Missing Information</h3>
        <p>Please fill in all fields to get your personalized diet plan.</p>
      </div>
    `;
    return;
  }
  
  if (weight < 30 || weight > 200) {
    document.getElementById('dietResult').innerHTML = `
      <div class="exercise-card" style="max-width:400px;border:2px solid #ff3c38;">
        <h3>⚠️ Invalid Weight</h3>
        <p>Please enter a valid weight between 30-200 kg.</p>
      </div>
    `;
    return;
  }
  
  let plan;
  let typeLabel = '';
  if (type === 'both') {
    // Show both veg and non-veg options for each meal
    const veg = plans.veg[goal];
    const nonveg = plans.nonveg[goal];
    plan = {
      breakfast: `<b>Veg:</b> ${veg.breakfast}<br><b>Non-Veg:</b> ${nonveg.breakfast}`,
      lunch: `<b>Veg:</b> ${veg.lunch}<br><b>Non-Veg:</b> ${nonveg.lunch}`,
      dinner: `<b>Veg:</b> ${veg.dinner}<br><b>Non-Veg:</b> ${nonveg.dinner}`,
      snacks: `<b>Veg:</b> ${veg.snacks}<br><b>Non-Veg:</b> ${nonveg.snacks}`
    };
    typeLabel = 'Vegetarian & Non-Vegetarian';
  } else {
    plan = plans[type][goal];
    typeLabel = type === 'veg' ? 'Vegetarian' : 'Non-Vegetarian';
  }
  
  const goalColor = goal === 'gain' ? '#2196F3' : goal === 'lose' ? '#ff9800' : '#4CAF50';
  
  const result = document.getElementById('dietResult');
  result.innerHTML = `
    <div class="exercise-card" style="max-width:400px;">
      <h3>Personalized Diet Plan</h3>
      <p><b>Diet Type:</b> ${typeLabel}<br>
         <b>Goal:</b> <span style="color:${goalColor};">${goal.charAt(0).toUpperCase() + goal.slice(1)}</span><br>
         <b>Current Weight:</b> ${weight} kg</p>
      <ul>
        <li><b>Breakfast:</b> ${plan.breakfast}</li>
        <li><b>Lunch:</b> ${plan.lunch}</li>
        <li><b>Dinner:</b> ${plan.dinner}</li>
        <li><b>Snacks:</b> ${plan.snacks}</li>
      </ul>
      <p style="font-size:0.9rem;color:#888;margin-top:1rem;">
        <strong>Note:</strong> This is a general guideline. Adjust portions based on your calorie needs and consult a nutritionist for personalized advice.
      </p>
    </div>
  `;
}); 