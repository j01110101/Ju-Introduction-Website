// Portfolio CSS Styles
const style = document.createElement('style');
style.textContent = `
/* Reset & Base */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

body {
  overflow-x: hidden;
  background: #0f0f23;
  color: white;
  overflow-y: auto;
}

/* Layout */
.container {
  max-width: 1400px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  align-items: center; 
  justify-content: center; 
  padding: clamp(2rem, 4vw, 3rem) 0;
  flex-direction: column;
  box-sizing: border-box;
}

.grid-layout {
  display: grid;
  grid-template-columns: clamp(280px, 35vw, 500px) 1fr;
  gap: clamp(1.5rem, 4vw, 3rem);
  width: 100%;
  padding: clamp(1rem, 3vw, 2rem);
  align-items: start; 
}

/* Copy Notification */
.copy-notification {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(102, 126, 234, 0.9);
  color: white;
  padding: clamp(0.5rem, 1.5vw, 0.75rem) clamp(1rem, 2.5vw, 1.25rem);
  border-radius: clamp(8px, 1.5vw, 12px);
  font-size: clamp(0.8rem, 1.5vw, 0.9rem);
  font-weight: 500;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
  animation: slideInFromBottom 0.3s ease-out forwards, fadeOutToBottom 0.3s ease-out 2.7s forwards;
  z-index: 1000;
  white-space: nowrap;
}

@keyframes slideInFromBottom {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

@keyframes fadeOutToBottom {
  from {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
  to {
    opacity: 0;
    transform: translateX(-50%) translateY(20px);
  }
}

/* Quick Tools */
.quick-tools {
  display: flex;
  gap: clamp(0.5rem, 2vw, 1rem);
  justify-content: flex-start;
  margin-top: clamp(0.5rem, 2vw, 1rem);
}

.tool-item {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: clamp(8px, 1.5vw, 12px);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(20px);
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  color: #94a3b8;
  padding: clamp(0.6rem, 1.5vw, 0.75rem) clamp(1rem, 2.5vw, 1.25rem);
  gap: clamp(0.25rem, 1vw, 0.5rem);
}

.tool-item:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(102, 126, 234, 0.5);
  transform: translateY(-2px);
  color: white;
}

.tool-logo {
  width: clamp(16px, 3vw, 20px);
  height: clamp(16px, 3vw, 20px);
}

.tool-label {
  font-size: clamp(0.8rem, 1.5vw, 0.9rem);
  font-weight: 500;
}

/* Quest Tags */
.quest-tags {
  display: flex;
  flex-wrap: wrap;
  gap: clamp(0.3rem, 1vw, 0.5rem);
  margin-top: clamp(0.5rem, 1.5vw, 1rem);
  flex-shrink: 0;
}

.quest-tag {
  background: rgba(102, 126, 234, 0.2);
  color: #94a3b8;
  padding: clamp(0.4rem, 1vw, 0.5rem) clamp(0.8rem, 2vw, 1rem);
  border-radius: clamp(15px, 3vw, 20px);
  font-size: clamp(0.75rem, 1.5vw, 0.85rem);
  font-weight: 500;
  border: 1px solid rgba(102, 126, 234, 0.3);
  user-select: none;
}

/* Panels */
.left-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
}

.right-panel { 
  overflow-y: auto; 
  padding: clamp(2rem, 4vw, 3rem) 0 clamp(0.5rem, 2vw, 1rem) 0;
  scrollbar-width: none;
  -ms-overflow-style: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.right-panel::-webkit-scrollbar { 
  display: none; 
}

/* Hero Section */
.avatar-container {
  position: relative;
  margin-bottom: clamp(1.5rem, 4vw, 2.5rem);
}

.avatar {
  width: clamp(120px, 20vw, 200px);
  height: clamp(120px, 20vw, 200px);
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 0;
  box-shadow: 0 20px 40px rgba(102, 126, 234, 0.3);
  animation: float 6s ease-in-out infinite;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar svg {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  transform: scale(1.1) translateY(+5%);
}

/* Typography */
.hero-text h1 {
  font-size: clamp(1.8rem, 4vw + 0.5rem, 3.5rem);
  font-weight: 700;
  background: linear-gradient(135deg, #fff 0%, #a855f7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: clamp(0.5rem, 2vw, 1rem);
  line-height: 1.1;
}

.hero-text h2 {
  font-size: clamp(1rem, 2vw + 0.2rem, 1.5rem);
  color: #94a3b8;
  font-weight: 400;
  margin-bottom: clamp(1rem, 3vw, 1.5rem);
}

.hero-text p {
  font-size: clamp(0.85rem, 1.5vw + 0.1rem, 1.1rem);
  color: #64748b;
  line-height: 1.6;
  max-width: 400px;
  margin: 0 auto clamp(1.5rem, 4vw, 2.5rem);
}

/* Buttons */
.cta-buttons {
  display: flex;
  gap: clamp(0.5rem, 2vw, 1rem);
  justify-content: center;
}

.btn {
  padding: clamp(0.8rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2rem);
  border-radius: clamp(25px, 6vw, 50px);
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: clamp(0.25rem, 1vw, 0.5rem);
  text-decoration: none;
  font-size: clamp(0.9rem, 1.5vw, 1rem);
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 40px rgba(102, 126, 234, 0.6);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

/* Cards */
.card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: clamp(16px, 2vw, 24px);
  padding: clamp(1.2rem, 3vw, 2rem);
  margin-bottom: clamp(1rem, 2.5vw, 2rem);
  backdrop-filter: blur(20px);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  width: 100%;
  box-sizing: border-box;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  min-height: auto;
}

.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
}

.card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.2);
}

.card-header {
  display: flex;
  align-items: center;
  margin-bottom: clamp(1rem, 2.5vw, 1.5rem);
  flex-shrink: 0;
}

.card-icon {
  font-size: clamp(1.2rem, 2.5vw, 1.5rem);
  margin-right: clamp(0.75rem, 2vw, 1rem);
  width: clamp(32px, 6vw, 40px);
  height: clamp(32px, 6vw, 40px);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: clamp(8px, 1.5vw, 12px);
  background: rgba(102, 126, 234, 0.2);
}

.card h3 {
  font-size: clamp(1.2rem, 2.5vw, 1.5rem);
  font-weight: 600;
  color: white;
}

.card p {
  color: #94a3b8;
  line-height: 1.6;
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  flex-grow: 0;
  margin-bottom: clamp(0.5rem, 1.5vw, 1rem);
  overflow-wrap: break-word;
}

/* Skills Grid */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(clamp(80px, 15vw, 120px), 1fr));
  gap: clamp(0.5rem, 2vw, 1rem);
  margin-bottom: clamp(1rem, 3vw, 2rem);
}

.skill-item {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: clamp(12px, 2vw, 16px);
  padding: clamp(1rem, 2.5vw, 1.5rem) clamp(0.5rem, 1.5vw, 1rem);
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
}

.skill-item:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(102, 126, 234, 0.5);
}

.skill-icon {
  font-size: clamp(1.5rem, 3vw, 2rem);
  margin-bottom: clamp(0.25rem, 1vw, 0.5rem);
  display: block;
}

.skill-name {
  font-size: clamp(0.8rem, 1.5vw, 0.9rem);
  color: #94a3b8;
  font-weight: 500;
}

/* Apps Grid */
.apps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(clamp(60px, 12vw, 80px), 1fr));
  gap: clamp(0.8rem, 2vw, 1rem);
  margin-top: clamp(0.5rem, 1.5vw, 1rem);
  flex-shrink: 0;
}

.app-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease;
}

.app-item:hover {
  transform: translateY(-3px);
}

.app-icon {
  width: clamp(40px, 8vw, 50px);
  height: clamp(40px, 8vw, 50px);
  border-radius: clamp(10px, 2vw, 14px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: clamp(1rem, 2vw, 1.2rem);
  margin-bottom: clamp(0.25rem, 1vw, 0.5rem);
  color: white;
  position: relative;
}

.app-logo {
  width: clamp(20px, 4vw, 24px);
  height: clamp(20px, 4vw, 24px);
}

.app-vscode {
  background: linear-gradient(135deg, #007acc, #0078d4);
}

.app-text {
  font-size: clamp(1rem, 2vw, 1.2rem);
  font-weight: 700;
}

.app-obsidian {
  background: linear-gradient(135deg, #483699, #7c3aed);
}

.app-indesign {
  background: linear-gradient(135deg, #ff3366, #ff1744);
}

.app-figma {
  background: linear-gradient(135deg, #f24e1e, #ff6b35);
}

.app-name {
  color: #94a3b8;
  font-size: clamp(0.7rem, 1.5vw, 0.8rem);
  font-weight: 500;
}

/* Animations */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.fade-in {
  animation: fadeIn 0.6s ease-out forwards;
  opacity: 0;
  transform: translateY(20px);
}

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Mobile Responsive */
@media (max-width: 1024px) {
  .container {
    height: auto;
    padding: clamp(1rem, 3vw, 2rem) 0;
  }
  
  .grid-layout {
    grid-template-columns: 1fr;
    gap: clamp(1rem, 2vw, 1.5rem);
    height: auto;
    padding: clamp(0.5rem, 2vw, 1rem);
    min-height: auto;
  }
  
  .left-panel {
    justify-content: center;
    padding: clamp(1rem, 3vw, 1.5rem) 0;
    min-height: 60vh;
  }
  
  .right-panel {
    justify-content: flex-start;
    padding: clamp(0.5rem, 2vw, 1rem) 0;
    min-height: auto;
  }
  
  .apps-grid {
    grid-template-columns: repeat(4, 1fr);
  }
  
  .quick-tools {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: clamp(0.5rem, 2vw, 1rem);
    justify-content: center;
    max-width: 300px;
    margin: 0 auto;
    margin-top: clamp(0.5rem, 2vw, 1rem);
  }
}

@media (max-width: 768px) {
  .cta-buttons {
    flex-direction: column;
    gap: clamp(0.5rem, 2vw, 0.75rem);
    align-items: center;
  }
  
  .btn {
    width: auto;
    min-width: clamp(200px, 45vw, 260px);
    max-width: fit-content;
    justify-content: center;
    white-space: nowrap;
  }
  
  .apps-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 480px) {
  .apps-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: clamp(0.5rem, 3vw, 0.75rem);
  }
  
  .quick-tools {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: clamp(0.5rem, 3vw, 0.75rem);
    max-width: 280px;
    margin: 0 auto;
    margin-top: clamp(0.5rem, 2vw, 1rem);
  }
  
  .tool-item {
    width: 100%;
    justify-content: center;
  }
  
  .cta-buttons {
    width: 100%;
    padding: 0 clamp(0.5rem, 3vw, 1rem);
  }
  
  .btn {
    width: 100%;
    max-width: none;
  }
}
`;

document.head.appendChild(style);

// Portfolio HTML Structure
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div class="container">
  <div class="grid-layout">
    <!-- Left Panel - Hero -->
    <div class="left-panel">
      <div class="avatar-container">
        <div class="avatar">
          <img src="avatar_ju.png" alt="Avatar Ju" class="avatar-img" />
        </div>
      </div>
      
      <div class="hero-text">
        <h1>Hi - ich bin Ju!</h1>
        <h2>IT-Allrounder & Digital Native</h2>
        <p>Tech-begeistertes, blauhaariges Egirl & Nachtaktive Gamerin mit einem Faible zum Coding, die lieber supportive mit KI arbeitet als stundenlang über Syntax zu grübeln ☕🎮 </p>
        
        <div class="cta-buttons">
          <button class="btn btn-primary" id="contactBtn">
            <span>💬</span>
            <span>Schreib mir ne Mail</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Right Panel - Content -->
    <div class="right-panel">
      <!-- About Card -->
      <div class="card fade-in">
        <div class="card-header">
          <div class="card-icon">👋</div>
          <h3>About Ju</h3>
        </div>
        <p><strong>Okay, Karten auf den Tisch:</strong> Kann viel, weiß nicht alles - aber hey, muss ich auch nicht! ^^ Nach acht Monaten Programming-Basics code ich jetzt KI-powered und bilde mich weiter 💻 Erfahrungen aus vielen Bereichen: <strong>Operations, Development, IT-Projektmanagement</strong> - jedoch hab ich auch mal Lust auf Hardware, z.B. eine Nintendo Switch modden (wenn das Löten gut geht... xD) oder ein neues PC Build bauen ^^ Ach, und <strong>Ju</strong> ist tatsächlich mein ganzer Name :D</p>
      </div>

      <!-- Current Learning/Quest Card -->
      <div class="card fade-in">
        <div class="card-header">
          <div class="card-icon">🎯</div>
          <h3>Aktuelle Quest</h3>
        </div>
        <p>Derzeit vertiefe ich mich in <strong>Unity & C#</strong> für 2D Game Development - weil warum nur Spiele spielen, wenn man sie auch erschaffen kann?👉🏻👈🏻 Dabei code ich das erste Mal in <strong>C#</strong> - auch um OOP besser zu kennenzulernen. Designs entstehen in <strong>Figma</strong>, das Backend läuft als WebSocket-Server in <strong>C# (.NET)</strong> und meine Datenbank-Erfahrung fließt in eine <strong>SQLite-DB</strong> ein!</p>        
        <div class="quest-tags">
          <span class="quest-tag">🎮 Unity 2D</span>
          <span class="quest-tag">⚡ C#</span>
          <span class="quest-tag">🎨 Figma</span>
          <span class="quest-tag">🔌 WebSocket</span>
          <span class="quest-tag">🗄️ SQLite</span>
        </div>
      </div>

      <!-- Main Apps Card -->
      <div class="card fade-in">
        <div class="card-header">
          <div class="card-icon">⚔️</div>
          <h3>Main Weapons</h3>
        </div>
        
        <div class="apps-grid">
          <div class="app-item">
            <div class="app-icon app-vscode">
              <svg viewBox="0 0 24 24" fill="currentColor" class="app-logo">
                <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/>
              </svg>
            </div>
            <div class="app-name">VS Code</div>
          </div>
          <div class="app-item">
            <div class="app-icon app-obsidian">
              <img src="obsidian.svg" alt="Obsidian" class="app-logo" />
            </div>
            <div class="app-name">Obsidian</div>
          </div>
          <div class="app-item">
            <div class="app-icon app-indesign">
              <img src="indesign.svg" alt="InDesign" class="app-logo" />
            </div>
            <div class="app-name">InDesign</div>
          </div>
          <div class="app-item">
            <div class="app-icon app-figma">
              <svg viewBox="0 0 24 24" fill="currentColor" class="app-logo">
                <path d="M8 2C6.34315 2 5 3.34315 5 5C5 6.65685 6.34315 8 8 8H12V2H8Z"/>
                <path d="M12 8H16C17.6569 8 19 6.65685 19 5C19 3.34315 17.6569 2 16 2H12V8Z"/>
                <path d="M12 8V14H16C17.6569 14 19 12.6569 19 11C19 9.34315 17.6569 8 16 8H12Z"/>
                <path d="M5 17C5 18.6569 6.34315 20 8 20C9.65685 20 11 18.6569 11 17V14H8C6.34315 14 5 15.3431 5 17Z"/>
                <path d="M5 11C5 12.6569 6.34315 14 8 14H12V8H8C6.34315 8 5 9.34315 5 11Z"/>
              </svg>
            </div>
            <div class="app-name">Figma</div>
          </div>
        </div>
      </div>
      
      <!-- Quick Tools -->
      <div class="quick-tools fade-in">
        <a href="https://www.linkedin.com/in/ju-haslinger/" class="tool-item" title="LinkedIn">
          <svg class="tool-logo" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          <span class="tool-label">LinkedIn</span>
        </a>
        <a class="tool-item" title="Discord" style="cursor: pointer;">
          <svg class="tool-logo" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.197.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
          </svg>
          <span class="tool-label">Discord</span>
        </a>
      </div>
    </div>
  </div>
</div>
`;

// Portfolio JavaScript Functionality
document.addEventListener('DOMContentLoaded', function() {
  // Responsive zoom for larger screens
  if (window.innerWidth <= 1920) {
    document.body.style.zoom = '80%';
  }
  
  // Staggered fade-in animation for cards
  const fadeElements = document.querySelectorAll('.fade-in') as NodeListOf<HTMLElement>;
  fadeElements.forEach((el, index) => {
    el.style.animationDelay = `${index * 0.15}s`;
  });

  // Contact button - opens email in new tab
  const contactBtn = document.getElementById('contactBtn');
  contactBtn?.addEventListener('click', () => {
    window.open('mailto:haslinger@ju-it.at', '_blank');
  });

  // Tool links functionality
  const toolItems = document.querySelectorAll('.tool-item') as NodeListOf<HTMLAnchorElement>;
  toolItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const title = item.getAttribute('title');
      
      if (title === 'Discord') {
        copyDiscordUsername();
      } else if (title === 'LinkedIn') {
        window.open('https://www.linkedin.com/in/ju-haslinger/', '_blank');
      }
    });
  });

  // Discord username copy functionality
  function copyDiscordUsername() {
    const discordUsername = 'j01110101';
    
    navigator.clipboard.writeText(discordUsername).then(() => {
      showCopyNotification('Discord Username kopiert! 🎮');
    }).catch(() => {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = discordUsername;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      showCopyNotification('Discord Username kopiert! 🎮');
    });
  }

  // Copy notification display
  function showCopyNotification(message: string) {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.copy-notification');
    if (existingNotification) {
      existingNotification.remove();
    }

    // Create notification
    const notification = document.createElement('div');
    notification.className = 'copy-notification';
    notification.textContent = message;
    
    document.body.appendChild(notification);

    // Auto-remove after 3 seconds
    setTimeout(() => {
      if (notification.parentElement) {
        notification.remove();
      }
    }, 3000);
  }
});

console.log('🎨 Ju\'s Portfolio loaded successfully!');