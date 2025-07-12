const exercises = {
  chest: [
    {
      name: 'Push-Ups',
      steps: [
        'Start in a plank position with hands under shoulders.',
        'Lower your body until your chest nearly touches the floor.',
        'Push back up to the starting position.'
      ],
      video: 'https://www.youtube.com/embed/_l3ySVKYVJ8'
    },
    {
      name: 'Bench Press',
      steps: [
        'Lie on a bench with feet flat on the floor.',
        'Grip the bar slightly wider than shoulder-width.',
        'Lower the bar to your chest, then press it back up.'
      ],
      video: 'https://www.youtube.com/embed/gRVjAtPip0Y'
    },
    {
      name: 'Chest Fly',
      steps: [
        'Lie on a bench with dumbbells in hand.',
        'Extend arms above chest, palms facing each other.',
        'Lower arms out to the sides, then bring them back together.'
      ],
      video: 'https://www.youtube.com/embed/eozdVDA78K0'
    },
    {
      name: 'Incline Dumbbell Press',
      steps: [
        'Set bench to a 30-45 degree incline.',
        'Press dumbbells up and together above chest.',
        'Lower to chest level and repeat.'
      ],
      video: 'https://www.youtube.com/embed/8iPEnn-ltC8'
    },
    {
      name: 'Decline Push-Ups',
      steps: [
        'Place feet on a raised surface.',
        'Perform a push-up with body in a straight line.'
      ],
      video: 'https://www.youtube.com/embed/0pkjOk0EiAk'
    },
    {
      name: 'Cable Crossover',
      steps: [
        'Stand between two cable stacks.',
        'Pull handles together in front of chest, arms slightly bent.'
      ],
      video: 'https://www.youtube.com/embed/taI4XduLpTk'
    }
  ],
  arms: [
    {
      name: 'Bicep Curls',
      steps: [
        'Stand with dumbbells at your sides.',
        'Curl weights up while keeping elbows close to your torso.'
      ],
      video: 'https://www.youtube.com/embed/ykJmrZ5v0Oo'
    },
    {
      name: 'Tricep Dips',
      steps: [
        'Place hands on a bench behind you.',
        'Lower your body by bending elbows, then push back up.'
      ],
      video: 'https://www.youtube.com/embed/0326dy_-CzM'
    },
    {
      name: 'Hammer Curls',
      steps: [
        'Hold dumbbells with palms facing each other.',
        'Curl weights up, keeping wrists neutral.'
      ],
      video: 'https://www.youtube.com/embed/zC3nLlEvin4'
    },
    {
      name: 'Tricep Pushdown',
      steps: [
        'Stand at a cable machine with a bar attachment.',
        'Push the bar down until arms are fully extended.'
      ],
      video: 'https://www.youtube.com/embed/2-LAMcpzODU'
    },
    {
      name: 'Concentration Curl',
      steps: [
        'Sit on a bench, elbow on inner thigh.',
        'Curl dumbbell up, focusing on bicep contraction.'
      ],
      video: 'https://www.youtube.com/embed/soxrZlIl35U'
    },
    {
      name: 'Overhead Tricep Extension',
      steps: [
        'Hold a dumbbell overhead with both hands.',
        'Lower behind your head, then extend arms up.'
      ],
      video: 'https://www.youtube.com/embed/YbX7Wd8jQ-Q'
    }
  ],
  legs: [
    {
      name: 'Squats',
      steps: [
        'Stand with feet shoulder-width apart.',
        'Lower hips back and down, then return to standing.'
      ],
      video: 'https://www.youtube.com/embed/aclHkVaku9U'
    },
    {
      name: 'Lunges',
      steps: [
        'Step forward with one leg.',
        'Lower until both knees are at 90 degrees, then return.'
      ],
      video: 'https://www.youtube.com/embed/QOVaHwm-Q6U'
    },
    {
      name: 'Leg Press',
      steps: [
        'Sit on the leg press machine.',
        'Push the platform away with your feet.'
      ],
      video: 'https://www.youtube.com/embed/IZxyjW7MPJQ'
    },
    {
      name: 'Leg Extension',
      steps: [
        'Sit on the leg extension machine.',
        'Extend legs until straight, then lower.'
      ],
      video: 'https://www.youtube.com/embed/YyvSfVjQeL0'
    },
    {
      name: 'Hamstring Curl',
      steps: [
        'Lie face down on the machine.',
        'Curl your legs up toward your glutes.'
      ],
      video: 'https://www.youtube.com/embed/1Tq3QdYUuHs'
    },
    {
      name: 'Calf Raises',
      steps: [
        'Stand on a step or flat surface.',
        'Raise heels as high as possible, then lower.'
      ],
      video: 'https://www.youtube.com/embed/-M4-G8p8fmc'
    }
  ],
  back: [
    {
      name: 'Pull-Ups',
      steps: [
        'Hang from a bar with palms facing away.',
        'Pull your chin above the bar, then lower.'
      ],
      video: 'https://www.youtube.com/embed/eGo4IYlbE5g'
    },
    {
      name: 'Bent-Over Rows',
      steps: [
        'Hold a barbell or dumbbells, hinge at hips.',
        'Pull weights to your waist, then lower.'
      ],
      video: 'https://www.youtube.com/embed/vT2GjY_Umpw'
    },
    {
      name: 'Lat Pulldown',
      steps: [
        'Sit at a lat pulldown machine.',
        'Pull bar to chest, then release.'
      ],
      video: 'https://www.youtube.com/embed/CAwf7n6Luuc'
    },
    {
      name: 'Seated Cable Row',
      steps: [
        'Sit at a cable row machine.',
        'Pull handle to your torso, then release.'
      ],
      video: 'https://www.youtube.com/embed/GZbfZ033f74'
    },
    {
      name: 'Face Pull',
      steps: [
        'Set cable at upper chest height.',
        'Pull rope toward your face, elbows high.'
      ],
      video: 'https://www.youtube.com/embed/rep-qVOkqgk'
    },
    {
      name: 'Superman',
      steps: [
        'Lie face down on the floor.',
        'Lift arms and legs off the ground, hold, then lower.'
      ],
      video: 'https://www.youtube.com/embed/z6PJMT2y8GQ'
    }
  ],
  shoulders: [
    {
      name: 'Shoulder Press',
      steps: [
        'Sit or stand with dumbbells at shoulder height.',
        'Press weights overhead, then lower.'
      ],
      video: 'https://www.youtube.com/embed/B-aVuyhvLHU'
    },
    {
      name: 'Lateral Raises',
      steps: [
        'Hold dumbbells at your sides.',
        'Raise arms out to the sides, then lower.'
      ],
      video: 'https://www.youtube.com/embed/3VcKaXpzqRo'
    },
    {
      name: 'Front Raises',
      steps: [
        'Hold dumbbells in front of thighs.',
        'Raise arms straight in front, then lower.'
      ],
      video: 'https://www.youtube.com/embed/-t7fuZ0KhDA'
    },
    {
      name: 'Reverse Fly',
      steps: [
        'Hinge at hips, arms hanging down.',
        'Raise arms out to the sides, squeezing shoulder blades.'
      ],
      video: 'https://www.youtube.com/embed/6kALZikXxLc'
    },
    {
      name: 'Arnold Press',
      steps: [
        'Hold dumbbells in front of shoulders, palms facing you.',
        'Rotate palms out as you press overhead.'
      ],
      video: 'https://www.youtube.com/embed/vj2w851ZHRM'
    },
    {
      name: 'Upright Row',
      steps: [
        'Hold barbell or dumbbells in front of thighs.',
        'Pull weights up to chest, elbows high.'
      ],
      video: 'https://www.youtube.com/embed/JA6eAvOIg8A'
    }
  ],
  abs: [
    {
      name: 'Crunches',
      steps: [
        'Lie on your back, knees bent.',
        'Lift shoulders off the floor, then lower.'
      ],
      video: 'https://www.youtube.com/embed/Xyd_fa5zoEU'
    },
    {
      name: 'Plank',
      steps: [
        'Start in a forearm plank position.',
        'Hold your body in a straight line.'
      ],
      video: 'https://www.youtube.com/embed/pSHjTRCQxIw'
    },
    {
      name: 'Leg Raises',
      steps: [
        'Lie on your back, legs straight.',
        'Lift legs up to 90 degrees, then lower.'
      ],
      video: 'https://www.youtube.com/embed/JB2oyawG9KI'
    },
    {
      name: 'Russian Twist',
      steps: [
        'Sit on the floor, knees bent.',
        'Twist torso side to side, holding a weight.'
      ],
      video: 'https://www.youtube.com/embed/wkD8rjkodUI'
    },
    {
      name: 'Bicycle Crunch',
      steps: [
        'Lie on your back, hands behind head.',
        'Alternate bringing opposite elbow to knee.'
      ],
      video: 'https://www.youtube.com/embed/9FGilxCbdz8'
    },
    {
      name: 'Mountain Climbers',
      steps: [
        'Start in a plank position.',
        'Alternate driving knees toward chest quickly.'
      ],
      video: 'https://www.youtube.com/embed/cnyTQDSE884'
    }
  ]
};

document.getElementById('showBtn').addEventListener('click', function() {
  const part = document.getElementById('bodyPart').value;
  const list = document.getElementById('exerciseList');
  const button = this;
  const originalText = button.innerHTML;
  
  // Show loading state
  button.innerHTML = '<span class="btn-text">LOADING...</span><span class="btn-icon">⏳</span>';
  button.disabled = true;
  
  // Clear previous results
  list.innerHTML = '';
  
  // Simulate loading delay for better UX
  setTimeout(() => {
    exercises[part].forEach((ex, index) => {
      const card = document.createElement('div');
      card.className = 'exercise-card';
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.innerHTML = `
        <h3>${ex.name}</h3>
        <ul>${ex.steps.map(step => `<li>${step}</li>`).join('')}</ul>
        <div class="video-container">
          <iframe src="${ex.video}" frameborder="0" allowfullscreen loading="lazy" title="Exercise tutorial for ${ex.name}"></iframe>
        </div>
      `;
      list.appendChild(card);
      
      // Animate cards in
      setTimeout(() => {
        card.style.transition = 'all 0.5s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, index * 100);
    });
    
    // Reset button
    button.innerHTML = originalText;
    button.disabled = false;
  }, 500);
}); 