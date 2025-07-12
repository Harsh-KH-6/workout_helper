// Progress Tracker Logic
const form = document.getElementById('progressForm');
const historySection = document.getElementById('progressHistory');
const statsSection = document.getElementById('progressStats');
const chartSection = document.getElementById('progressChart');

function getLogs() {
  return JSON.parse(localStorage.getItem('workoutLogs') || '[]');
}

function saveLogs(logs) {
  localStorage.setItem('workoutLogs', JSON.stringify(logs));
}

function addLog(log) {
  const logs = getLogs();
  logs.push(log);
  saveLogs(logs);
}

function renderHistory() {
  const logs = getLogs().sort((a, b) => new Date(b.date) - new Date(a.date));
  if (logs.length === 0) {
    historySection.innerHTML = '<p>No workouts logged yet.</p>';
    return;
  }
  let html = `<div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;background:rgba(255,255,255,0.03);border-radius:10px;overflow:hidden;">
      <thead>
        <tr style="background:linear-gradient(135deg, #ff3c38 0%, #ff6b6b 100%);color:#fff;">
          <th style="padding:1rem;text-align:left;">Date</th>
          <th style="padding:1rem;text-align:left;">Body Part</th>
          <th style="padding:1rem;text-align:left;">Exercise</th>
        </tr>
      </thead>
      <tbody>`;
  logs.forEach((log, index) => {
    const rowColor = index % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'rgba(255,255,255,0.05)';
    html += `<tr style="background:${rowColor};">
      <td style="padding:1rem;border-bottom:1px solid rgba(255,255,255,0.1);">${log.date}</td>
      <td style="padding:1rem;border-bottom:1px solid rgba(255,255,255,0.1);">${log.bodyPart.charAt(0).toUpperCase() + log.bodyPart.slice(1)}</td>
      <td style="padding:1rem;border-bottom:1px solid rgba(255,255,255,0.1);">${log.exercise}</td>
    </tr>`;
  });
  html += '</tbody></table></div>';
  historySection.innerHTML = html;
}

function getStreak(logs) {
  if (logs.length === 0) return 0;
  // Sort by date ascending
  const sorted = logs.map(l => l.date).sort();
  let streak = 1;
  for (let i = sorted.length - 2; i >= 0; i--) {
    const d1 = new Date(sorted[i]);
    const d2 = new Date(sorted[i + 1]);
    const diff = (d2 - d1) / (1000 * 60 * 60 * 24);
    if (diff === 1) streak++;
    else if (diff > 1) break;
  }
  return streak;
}

function renderStats() {
  const logs = getLogs();
  const streak = getStreak(logs);
  
  // Calculate additional stats
  const thisWeek = logs.filter(log => {
    const logDate = new Date(log.date);
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    return logDate >= weekAgo;
  }).length;
  
  const thisMonth = logs.filter(log => {
    const logDate = new Date(log.date);
    const monthAgo = new Date();
    monthAgo.setMonth(monthAgo.getMonth() - 1);
    return logDate >= monthAgo;
  }).length;
  
  statsSection.innerHTML = `
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1rem;margin-bottom:2rem;">
      <div style="background:rgba(255,60,56,0.1);padding:1.5rem;border-radius:15px;text-align:center;border:1px solid rgba(255,60,56,0.2);">
        <div style="font-size:2rem;color:#ff3c38;font-weight:bold;">${streak}</div>
        <div style="font-size:0.9rem;color:#888;">Day Streak</div>
      </div>
      <div style="background:rgba(255,255,255,0.05);padding:1.5rem;border-radius:15px;text-align:center;border:1px solid rgba(255,255,255,0.1);">
        <div style="font-size:2rem;color:#4CAF50;font-weight:bold;">${logs.length}</div>
        <div style="font-size:0.9rem;color:#888;">Total Workouts</div>
      </div>
      <div style="background:rgba(255,255,255,0.05);padding:1.5rem;border-radius:15px;text-align:center;border:1px solid rgba(255,255,255,0.1);">
        <div style="font-size:2rem;color:#2196F3;font-weight:bold;">${thisWeek}</div>
        <div style="font-size:0.9rem;color:#888;">This Week</div>
      </div>
      <div style="background:rgba(255,255,255,0.05);padding:1.5rem;border-radius:15px;text-align:center;border:1px solid rgba(255,255,255,0.1);">
        <div style="font-size:2rem;color:#ff9800;font-weight:bold;">${thisMonth}</div>
        <div style="font-size:0.9rem;color:#888;">This Month</div>
      </div>
    </div>
  `;
}

function renderChart() {
  const logs = getLogs();
  // Get last 7 days
  const days = [];
  const today = new Date();
  for (let i = 6; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    days.push(d.toISOString().slice(0, 10));
  }
  const counts = days.map(day => logs.filter(l => l.date === day).length);
  // Render simple bar chart
  let html = '<div style="display:flex;align-items:end;gap:8px;height:120px;padding:1rem;background:rgba(255,255,255,0.03);border-radius:15px;">';
  const max = Math.max(...counts, 1);
  counts.forEach((count, i) => {
    const barHeight = count / max * 80;
    const barColor = count > 0 ? '#ff3c38' : '#444';
    html += `<div style="flex:1;display:flex;flex-direction:column;align-items:center;">
      <div style="background:${barColor};width:22px;height:${barHeight}px;border-radius:6px 6px 0 0;transition:height 0.3s;box-shadow:0 2px 8px rgba(255,60,56,0.2);"></div>
      <div style="font-size:0.9rem;margin-top:8px;color:#888;font-weight:500;">${['S','M','T','W','T','F','S'][new Date(days[i]).getDay()]}</div>
      <div style="font-size:0.8rem;color:#666;margin-top:2px;">${count}</div>
    </div>`;
  });
  html += '</div>';
  chartSection.innerHTML = `<h3 style="margin-bottom:1rem;color:#ff3c38;">Workouts This Week</h3>${html}`;
}

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const bodyPart = document.getElementById('progressBodyPart').value;
  const exercise = document.getElementById('progressExercise').value.trim();
  const date = document.getElementById('progressDate').value;
  
  if (!bodyPart || !exercise || !date) {
    alert('Please fill in all fields to log your workout.');
    return;
  }
  
  // Validate date is not in the future
  const selectedDate = new Date(date);
  const today = new Date();
  today.setHours(23, 59, 59, 999); // End of today
  
  if (selectedDate > today) {
    alert('Please select a valid date (not in the future).');
    return;
  }
  
  addLog({ bodyPart, exercise, date });
  form.reset();
  renderStats();
  renderChart();
  renderHistory();
  
  // Show success message
  const successMsg = document.createElement('div');
  successMsg.style.cssText = 'position:fixed;top:20px;right:20px;background:#4CAF50;color:white;padding:1rem;border-radius:8px;z-index:1000;';
  successMsg.textContent = '✅ Workout logged successfully!';
  document.body.appendChild(successMsg);
  setTimeout(() => successMsg.remove(), 3000);
});

// Set default date to today
document.getElementById('progressDate').value = new Date().toISOString().slice(0, 10);

// Initial render
renderStats();
renderChart();
renderHistory(); 