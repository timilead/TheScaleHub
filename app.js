
 // ==========================================
// SECTION 1: COURSE DATA (All 10 Modules)
// ==========================================

const COURSE_TITLE = "How to Fix Low Sales and Grow Your Business";
const PASS_THRESHOLD = 70; // percent
 // ==========================================
// SECTION 2: PROGRESS MANAGEMENT (LocalStorage)
// ==========================================
/**
 * Get the full progress object from localStorage
 * Returns: { completedModules: [1, 2, ...], quizScores: { "1": 100, "2": 75 } }
 */
function getProgress() {
  const stored = localStorage.getItem('courseProgress');
  if (stored) {
    return JSON.parse(stored);
  }
  return { completedModules: [], quizScores: {} };
}
/** Save progress object to localStorage */
function saveProgress(progress) {
  localStorage.setItem('courseProgress', JSON.stringify(progress));
}
/** Mark a module as completed with its quiz score */
function completeModule(moduleId, score) {
  const progress = getProgress();
  if (!progress.completedModules.includes(moduleId)) {
    progress.completedModules.push(moduleId);
  }
  progress.quizScores[moduleId] = score;
  saveProgress(progress);
}
/** Check if a module is unlocked (Module 1 always unlocked, others require previous completion) */
function isModuleUnlocked(moduleId) {
  if (moduleId === 1) return true;
  const progress = getProgress();
  return progress.completedModules.includes(moduleId - 1);
}
/** Check if a module is completed */
function isModuleCompleted(moduleId) {
  const progress = getProgress();
  return progress.completedModules.includes(moduleId);
}
/** Get overall course progress percentage */
function getProgressPercentage() {
  const progress = getProgress();
  return Math.round((progress.completedModules.length / MODULES.length) * 100);
}
/** Check if the entire course is complete */
function isCourseComplete() {
  const progress = getProgress();
  return progress.completedModules.length === MODULES.length;
}
/** Reset all progress */
function resetProgress() {
  localStorage.removeItem('courseProgress');
}

 // ==========================================
// SECTION 3: NAVIGATION (Shared Navbar)
// ==========================================
/** Render the shared navigation bar */
function renderNavbar(activePage) {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  const progress = getProgressPercentage();
  nav.innerHTML = `
    <nav class="navbar">
      <div class="navbar-inner">
        <a href="index.html" class="navbar-logo">
          <span class="logo-icon">
          <img src="images/logo.png" alt="logo">
          </span>
          <span>TheScaleHub Academy</span>
        </a>
        <div class="navbar-links" id="navLinks">
          <a href="index.html" class="${activePage === 'home' ? 'active' : ''}">Home</a>
          <a href="dashboard.html" class="${activePage === 'dashboard' ? 'active' : ''}">Dashboard</a>
          <a href="about.html" class="${activePage === 'about' ? 'active' : ''}">About</a>
          <a href="contact.html" class="${activePage === 'contact' ? 'active' : ''}">Contact</a>
          ${isCourseComplete() ? '<a href="complete.html" class="' + (activePage === 'complete' ? 'active' : '') + '">Certificate</a>' : ''}
        </div>
        <button class="navbar-toggle" onclick="toggleNav()" aria-label="Toggle menu">☰</button>
      </div>
    </nav>
  `;
}
/** Toggle mobile navigation */
function toggleNav() {
  const links = document.getElementById('navLinks');
  if (links) {
    links.classList.toggle('open');
  }
}

 // ==========================================
// SECTION 4: DASHBOARD RENDERING
// ==========================================
/** Render the dashboard module cards and progress */
function renderDashboard() {
  const progress = getProgress();
  const percentage = getProgressPercentage();
  // Update progress bar
  const progressBar = document.getElementById('progressBar');
  const progressText = document.getElementById('progressText');
  if (progressBar) {
    progressBar.style.width = percentage + '%';
  }
  if (progressText) {
    progressText.textContent = `${progress.completedModules.length} of ${MODULES.length} modules completed (${percentage}%)`;
  }
   // Render module cards
  const grid = document.getElementById('modulesGrid');
  if (!grid) return;
  grid.innerHTML = MODULES.map(mod => {
    const completed = isModuleCompleted(mod.id);
    const unlocked = isModuleUnlocked(mod.id);
    let statusClass = '';
    let statusIcon = '';
    let statusLabel = '';
    if (completed) {
      statusClass = 'completed';
      statusIcon = '✅';
      statusLabel = 'Completed';
    } else if (unlocked) {
      statusClass = '';
      statusIcon = '▶️';
      statusLabel = 'Start';
    } else {
      statusClass = 'locked';
      statusIcon = '🔒';
      statusLabel = 'Locked';
    }
    const scoreText = progress.quizScores[mod.id] !== undefined
      ? `<br><small style="color: var(--success);">Score: ${progress.quizScores[mod.id]}%</small>`
      : '';
    return `
      <div class="module-card ${statusClass}" onclick="${unlocked ? `window.location.href='module.html?id=${mod.id}'` : 'void(0)'}" 
           title="${!unlocked ? 'Complete the previous module to unlock' : ''}">
        <div class="module-number">${completed ? '✓' : mod.id}</div>
        <div class="module-info">
          <h3>${mod.title}</h3>
          <p>${mod.description}${scoreText}</p>
        </div>
        <div class="module-status" title="${statusLabel}">${statusIcon}</div>
      </div>
    `;
  }).join('');
}

 // ==========================================
// SECTION 5: MODULE / LESSON RENDERING
// ==========================================
/** Get module ID from URL parameters */
function getModuleIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return parseInt(params.get('id')) || 1;
}
/** Render the full module lesson and quiz */
function renderModule() {
  const moduleId = getModuleIdFromURL();
  const mod = MODULES.find(m => m.id === moduleId);
  if (!mod) {
    document.getElementById('lessonContent').innerHTML = '<p>Module not found.</p>';
    return;
  }

   // Check if module is unlocked
  if (!isModuleUnlocked(moduleId)) {
    document.getElementById('lessonContent').innerHTML = `
      <div style="text-align:center; padding: 3rem;">
        <h2>🔒 Module Locked</h2>
        <p>You need to complete Module ${moduleId - 1} first.</p>
        <a href="dashboard.html" class="btn btn-primary mt-3">Back to Dashboard</a>
      </div>
    `;
    return;
  }
  // Update header
  const header = document.getElementById('moduleHeader');
  if (header) {
    header.innerHTML = `
      <div class="container-narrow">
        <div class="breadcrumb">
          <a href="dashboard.html">Dashboard</a> &nbsp;/&nbsp; Module ${mod.id}
        </div>
        <h1>Module ${mod.id}: ${mod.title}</h1>
        <p>${mod.description}</p>
      </div>
    `;
  }
   // Update page title
  document.title = `Module ${mod.id}: ${mod.title} | TheScaleHub Academy`;
  // Render lesson content + quiz
  const content = document.getElementById('lessonContent');
  if (!content) return;
  content.innerHTML = `
    <div class="container-narrow">
      <div class="lesson-content">
        ${mod.content}
      </div>
      <div class="quiz-section" id="quizSection">
        <h2>📝 Module ${mod.id} Quiz</h2>
        <p class="quiz-intro">Answer the questions below. You need at least ${PASS_THRESHOLD}% to pass and unlock the next module.</p>
        
        <form id="quizForm" onsubmit="return submitQuiz(event, ${mod.id})">
          ${mod.quiz.map((q, idx) => `
            <div class="quiz-question" id="question-${idx}">
              <h4>Question ${idx + 1}: ${q.question}</h4>
              <div class="quiz-options">
                ${q.options.map((opt, optIdx) => `
                  <label>
                    <input type="radio" name="q${idx}" value="${optIdx}" required>
                    <span>${opt}</span>
                  </label>
                `).join('')}
              </div>
            </div>
          `).join('')}
          
          <div class="quiz-actions">
            <button type="submit" class="btn btn-primary btn-lg">Submit Quiz</button>
          </div>
        </form>
      </div>
      <div style="display: flex; justify-content: space-between; flex-wrap: wrap; gap: 1rem; margin: 2rem 0 4rem;">
        ${moduleId > 1 ? `<a href="module.html?id=${moduleId - 1}" class="btn btn-secondary">← Previous Module</a>` : '<span></span>'}
        <a href="dashboard.html" class="btn btn-secondary">Back to Dashboard</a>
      </div>
    </div>
  `;
  }
 // ==========================================
// SECTION 6: QUIZ SUBMISSION & SCORING
// ==========================================
/** Handle quiz form submission */
function submitQuiz(event, moduleId) {
  event.preventDefault();
  const mod = MODULES.find(m => m.id === moduleId);
  if (!mod) return false;
  const form = document.getElementById('quizForm');
  let correct = 0;
  const total = mod.quiz.length;
  // Score each question
  mod.quiz.forEach((q, idx) => {
    const selected = form.querySelector(`input[name="q${idx}"]:checked`);
    if (selected && parseInt(selected.value) === q.correct) {
      correct++;
    }
  });
  const score = Math.round((correct / total) * 100);
  const passed = score >= PASS_THRESHOLD;
  // Save result if passed
  if (passed) {
    completeModule(moduleId, score);
  }
  // Store result temporarily for result page
  sessionStorage.setItem('lastQuizResult', JSON.stringify({
    moduleId: moduleId,
    score: score,
    correct: correct,
    total: total,
    passed: passed,
    moduleTitle: mod.title
  }));
  // Redirect to result page
  window.location.href = 'result.html';
  return false;
}
 // ==========================================
// SECTION 7: RESULT PAGE RENDERING
// ==========================================
/** Render the quiz result */
function renderResult() {
  const resultData = sessionStorage.getItem('lastQuizResult');
  if (!resultData) {
    window.location.href = 'dashboard.html';
    return;
  }
   const result = JSON.parse(resultData);
  const container = document.getElementById('resultContent');
  if (!container) return;
  const nextModuleId = result.moduleId + 1;
  const hasNextModule = nextModuleId <= MODULES.length;
  const courseComplete = isCourseComplete();
  container.innerHTML = `
    <div class="result-card">
      <div class="result-icon ${result.passed ? 'pass' : 'fail'}">
        ${result.passed ? '🎉' : '😔'}
      </div>
      <h1>${result.passed ? 'Congratulations!' : 'Not Quite There'}</h1>
      <p>Module ${result.moduleId}: ${result.moduleTitle}</p>
      <div class="score ${result.passed ? 'pass' : 'fail'}">${result.score}%</div>
      <p>You answered ${result.correct} out of ${result.total} questions correctly.</p>
      <p>${result.passed
        ? 'You passed the quiz! ' + (courseComplete ? 'You have completed the entire course!' : (hasNextModule ? 'The next module is now unlocked.' : ''))
        : `You need at least ${PASS_THRESHOLD}% to pass. Review the material and try again.`
      }</p>
      <div class="result-actions">
        ${!result.passed ? `<a href="module.html?id=${result.moduleId}" class="btn btn-primary">🔄 Retry Quiz</a>` : ''}
        ${result.passed && courseComplete ? `<a href="complete.html" class="btn btn-success btn-lg">🏆 View Certificate</a>` : ''}
        ${result.passed && hasNextModule && !courseComplete ? `<a href="module.html?id=${nextModuleId}" class="btn btn-success">Next Module →</a>` : ''}
        <a href="dashboard.html" class="btn btn-secondary">Dashboard</a>
      </div>
    </div>
  `;
  }
  // ==========================================
  // SECTION 8: COMPLETION PAGE
  // ==========================================
  /** Render the course completion certificate */
  function renderCertificate() {
    if (!isCourseComplete()) {
      window.location.href = 'dashboard.html';
      return;
   }
  const container = document.getElementById('certificateContent');
  if (!container) return;
  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const progress = getProgress();
  const avgScore = Object.values(progress.quizScores).reduce((a, b) => a + b, 0) / Object.values(progress.quizScores).length;
  container.innerHTML = `
    <div class="certificate">
      <div class="certificate-badge">🏆</div>
      <h1>Certificate of Completion</h1>
      <h2>This certifies that you have successfully completed</h2>
      <p class="congrats">"${COURSE_TITLE}"</p>
      <p class="course-name">All ${MODULES.length} modules completed with an average quiz score of ${Math.round(avgScore)}%</p>
      <hr style="border: none; border-top: 2px solid var(--gray-200); margin: 1.5rem 0;">
      <p style="color: var(--gray-600); margin-bottom: 0.5rem;">You've demonstrated knowledge in sales diagnostics, audience targeting, value proposition, marketing, sales funnels, sales processes, social proof, pricing, follow-up systems, and feedback-driven innovation.</p>
      <p class="date">Completed on ${today}</p>
      <div style="margin-top: 2rem; display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap;">
        <button onclick="window.print()" class="btn btn-primary">🖨️ Print Certificate</button>
        <a href="dashboard.html" class="btn btn-secondary">View Dashboard</a>
        <button onclick="if(confirm('This will erase all progress. Are you sure?')){resetProgress(); window.location.href='index.html';}" class="btn btn-danger btn-sm">Reset Course</button>
      </div>
    </div>
  `;
  }
  // ==========================================
  // SECTION 9: LANDING PAGE CURRICULUM
  // ==========================================
  /** Render the curriculum list on the landing page */
  function renderCurriculum() {
    const container = document.getElementById('curriculumList');
    if (!container) return;
 container.innerHTML = MODULES.map(mod => `
    <div class="curriculum-item">
      <div class="curriculum-num">${mod.id}</div>
      <span>${mod.title}</span>
    </div>
  `).join('');
 }
 // ==========================================
 // SECTION 10: FOOTER
 // ==========================================

 /** Render the shared footer */
function renderFooter() {
  const footer = document.getElementById('footer');
  if (!footer) return;
  footer.innerHTML = `
    <div class="footer">
      <div class="footer-links">
        <a href="about.html">About</a>
        <a href="contact.html">Contact</a>
        <a href="privacy.html">Privacy Policy</a>
        <a href="dashboard.html">Dashboard</a>
      </div>
     <p>&copy; ${new Date().getFullYear()} TheScaleHub Academy. All rights reserved. | Built for learning and growth. | Built by Timi Tech<a href="https://wa.me/2348122801827?text=Hello timi tech i message you from TheScaleHub Academy, i want to........ are you available to chat ?"> || Click here to message timi tech !</a></p>
    </div>
  `;
}