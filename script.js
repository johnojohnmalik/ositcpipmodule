let currentQuestion = 0;
let score = 0;

const quizDiv = document.getElementById('quiz');
const scoreDiv = document.getElementById('score');
const nextBtn = document.getElementById('next-btn');

// --- Celebration Feature ---
const CELEBRATION_TITLES = [
  "Firewall Whisperer",
  "Patch Master",
  "Digital Ninja",
  "The Exploit Exorcist",
  "Byte Guardian",
  "Root Access Royalty",
  "Crypto Commander",
  "Phish Slayer",
  "Zero-Day Hero",
  "The Encryptor",
  "Net Sentinel",
  "Red Team Rockstar",
  "The Bug Hunter",
  "Token Titan",
  "Cyber Sage",
  "Packet Paladin",
  "Malware Mercenary",
  "The Boolean Boss",
  "Code Shield",
  "The Kernel Keeper"
];

function showCelebration(streak) {
  const overlay = document.getElementById('celebration-overlay');
  if (!overlay) return;
  // Clear previous content
  overlay.innerHTML = '';
  // Fireworks canvas
  const fireworks = document.createElement('canvas');
  fireworks.className = 'fireworks';
  fireworks.width = window.innerWidth;
  fireworks.height = window.innerHeight;
  overlay.appendChild(fireworks);
  // Message
  const msg = document.createElement('div');
  msg.className = 'celebration-message';
  msg.textContent = `Streak ${streak}!`;
  overlay.appendChild(msg);
  // Title
  const title = document.createElement('div');
  title.className = 'celebration-title';
  title.textContent = CELEBRATION_TITLES[Math.floor(Math.random() * CELEBRATION_TITLES.length)];
  overlay.appendChild(title);
  // Show overlay
  overlay.classList.add('active');
  overlay.style.display = 'flex';
  // Fireworks animation
  launchFireworks(fireworks);
  // Hide after 2.4s
  setTimeout(() => {
    overlay.classList.remove('active');
    setTimeout(() => { overlay.style.display = 'none'; overlay.innerHTML = ''; }, 500);
  }, 2400);
}

function launchFireworks(canvas) {
  if (!canvas.getContext) return;
  const ctx = canvas.getContext('2d');
  const colors = ['#0ff', '#ff00ff', '#fff', '#00ff66', '#ff3366', '#00ccff'];
  let particles = [];
  function createFirework() {
    const x = Math.random() * canvas.width * 0.8 + canvas.width * 0.1;
    const y = Math.random() * canvas.height * 0.3 + canvas.height * 0.2;
    const count = 18 + Math.floor(Math.random() * 8);
    for (let i = 0; i < count; i++) {
      const angle = (2 * Math.PI * i) / count;
      const speed = 2 + Math.random() * 2;
      particles.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        alpha: 1,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
  }
  let frame = 0;
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.globalAlpha = p.alpha;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 5, 0, 2 * Math.PI);
      ctx.fillStyle = p.color;
      ctx.fill();
      p.x += p.vx;
      p.y += p.vy;
      p.alpha -= 0.018;
    });
    particles = particles.filter(p => p.alpha > 0);
    if (frame % 15 === 0 && frame < 45) createFirework();
    if (frame < 90) requestAnimationFrame(animate);
  }
  animate();
}
// --- End Celebration Feature ---

// --- Streak Logic ---
let streak = 0;
function checkStreak(correct) {
  if (correct) {
    streak++;
    if (streak > 0 && streak % 5 === 0) {
      showCelebration(streak);
    }
  } else {
    streak = 0;
  }
}
// --- End Streak Logic ---

function showQuestion() {
  nextBtn.style.display = "none";
  scoreDiv.textContent = `Score: ${score} / ${currentQuestion}`;
  const q = questions[currentQuestion];
  let html = `<div class="question">${q.question}</div>`;

  if (q.type === "mc") {
    html += '<ul class="options">';
    q.options.forEach((opt, idx) => {
      html += `<li><button class="option-btn" data-idx="${idx}">${opt}</button></li>`;
    });
    html += '</ul>';
  } else if (q.type === "tf") {
    html += `
      <button class="option-btn" data-tf="true">True</button>
      <button class="option-btn" data-tf="false">False</button>
    `;
  } else if (q.type === "oe") {
    html += `
      <input type="text" id="oe-answer" placeholder="Your answer" style="width:90%;padding:8px;">
      <button id="submit-oe">Submit</button>
    `;
  }

  quizDiv.innerHTML = html;

  // Add event listeners
  if (q.type === "mc") {
    document.querySelectorAll('.option-btn').forEach(btn => {
      btn.onclick = function() {
        handleMCAnswer(parseInt(this.dataset.idx), this);
      };
    });
  } else if (q.type === "tf") {
    document.querySelectorAll('.option-btn').forEach(btn => {
      btn.onclick = function() {
        handleTFAnswer(this.dataset.tf === "true", this);
      };
    });
  } else if (q.type === "oe") {
    document.getElementById('submit-oe').onclick = function() {
      handleOEAnswer();
    };
  }
}

function handleMCAnswer(selectedIdx, btn) {
  const q = questions[currentQuestion];
  document.querySelectorAll('.option-btn').forEach(b => b.disabled = true);
  btn.classList.add('selected');
  let correct = false;
  if (selectedIdx === q.answer) {
    btn.classList.add('correct');
    score++;
    correct = true;
    scoreDiv.textContent = `Correct! Score: ${score} / ${currentQuestion + 1}`;
  } else {
    btn.classList.add('incorrect');
    document.querySelectorAll('.option-btn')[q.answer].classList.add('correct');
    let correctText = `<span style='color:#00ff66;'>${q.options[q.answer]}</span>`;
    let explanation = q.explanation ? `<br><span style='font-size:1rem;color:#0ff;'>Explanation: ${q.explanation}</span>` : '';
    scoreDiv.innerHTML = `Incorrect.<br>Correct answer: <b>${correctText}</b>. Score: ${score} / ${currentQuestion + 1}${explanation}`;
  }
  checkStreak(correct);
  nextBtn.style.display = "inline-block";
}

function handleTFAnswer(selected, btn) {
  const q = questions[currentQuestion];
  document.querySelectorAll('.option-btn').forEach(b => b.disabled = true);
  btn.classList.add('selected');
  let correct = false;
  if (selected === q.answer) {
    btn.classList.add('correct');
    score++;
    correct = true;
    scoreDiv.textContent = `Correct! Score: ${score} / ${currentQuestion + 1}`;
  } else {
    btn.classList.add('incorrect');
    let correctText = `<span style='color:#00ff66;'>${q.answer ? 'True' : 'False'}</span>`;
    let explanation = q.explanation ? `<br><span style='font-size:1rem;color:#0ff;'>Explanation: ${q.explanation}</span>` : '';
    scoreDiv.innerHTML = `Incorrect.<br>Correct answer: <b>${correctText}</b>. Score: ${score} / ${currentQuestion + 1}${explanation}`;
  }
  checkStreak(correct);
  nextBtn.style.display = "inline-block";
}

function handleOEAnswer() {
  const q = questions[currentQuestion];
  const userAns = document.getElementById('oe-answer').value.trim().toLowerCase();
  const correctAns = q.answer.toLowerCase();
  let correct = false;
  // For open-ended, check if all keywords are present
  if (correctAns.split(',').every(word => userAns.includes(word.trim()))) {
    correct = true;
  }
  document.getElementById('oe-answer').disabled = true;
  document.getElementById('submit-oe').disabled = true;
  if (correct) {
    score++;
    scoreDiv.textContent = `Correct! Score: ${score} / ${currentQuestion + 1}`;
  } else {
    scoreDiv.innerHTML = `Incorrect.<br>Correct answer: <b><span style='color:#00ff66;'>${q.answer}</span></b>. Score: ${score} / ${currentQuestion + 1}`;
  }
  checkStreak(correct);
  nextBtn.style.display = "inline-block";
}

nextBtn.onclick = function() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    quizDiv.innerHTML = `<h2>Quiz Complete!</h2><p>Your final score: ${score} / ${questions.length}</p>`;
    nextBtn.style.display = "none";
    scoreDiv.textContent = "";
  }
};

window.onload = showQuestion;
