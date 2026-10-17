
import "./LandingPage.css";

const features = [
  {
    icon: "▤",
    title: "Notes",
    description:
      "Capture your thoughts, ideas and information in one place.",
  },
  {
    icon: "✓",
    title: "Tasks",
    description:
      "Stay focused with simple and flexible task management.",
  },
  {
    icon: "▦",
    title: "Projects",
    description:
      "Plan, organize and make progress on your goals.",
  },
];

// function Logo({ small = false }) {
//   return (
//     <a className={`ns-logo ${small ? "ns-logo-small" : ""}`} href="/">
//       <span className="ns-logo-mark">N</span>
//       <span>NoteSpace</span>
//     </a>
//   );
// }
function Logo() {
  return (
    <a className="ns-brand" href="/" aria-label="NoteSpace home">
      <span className="ns-brand-mark">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M5 4h3.2v9.3L15.8 4H19v16h-3.2v-9.3L8.2 20H5V4z" />
        </svg>
      </span>
      <span>NoteSpace</span>
    </a>
  );
}

function WorkspacePreview() {
  return (
    <div className="workspace-window" id="workspace">
      <aside className="workspace-sidebar">
        <Logo small />

        <div className="workspace-nav">
          <div className="workspace-nav-item active">
            <span>⌂</span> Home
          </div>
          <div className="workspace-nav-item">
            <span>⌕</span> Search
          </div>
          <div className="workspace-nav-item">
            <span>▱</span> Inbox
            <span className="inbox-count">3</span>
          </div>
          <div className="workspace-nav-item">
            <span>⚙</span> Settings
          </div>
        </div>

        <div className="workspace-categories">
          <p>WORKSPACE</p>
          <div className="workspace-nav-item">
            <span>▰</span> Personal
          </div>
          <div className="workspace-nav-item">
            <span>▤</span> Notes
          </div>
          <div className="workspace-nav-item">
            <span>☑</span> Tasks
          </div>
          <div className="workspace-nav-item">
            <span>▦</span> Projects
          </div>
        </div>
      </aside>

      <div className="workspace-main">
        <div className="mock-search">
          <span>⌕</span>
          <span>Search anything...</span>
          <kbd>⌘ K</kbd>
        </div>

        <div className="greeting-banner">
          <div>
            <h3>Good morning! ☀️</h3>
            <p>Let's make today productive ✨</p>
          </div>
          <span className="plant">🌿</span>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <p>☑ Tasks Today</p>
            <strong>3 / 6</strong>
            <div className="progress-track">
              <span />
            </div>
          </div>

          <div className="stat-card">
            <p>▦ This Week</p>
            <strong>5 Tasks <small>+1</small></strong>
            <div className="mini-chart">⌁⌁⌁⌁</div>
          </div>
        </div>

        <div className="workspace-bottom">
          <div className="progress-card">
            <div className="preview-card-heading">
              <strong>Your Progress</strong>
              <span>This Week ▾</span>
            </div>

            <svg
              className="progress-chart"
              viewBox="0 0 220 100"
              role="img"
              aria-label="Illustration of weekly progress"
            >
              {[20, 45, 70].map((y) => (
                <line
                  key={y}
                  x1="5"
                  y1={y}
                  x2="215"
                  y2={y}
                  stroke="#edf2f7"
                />
              ))}
              <polyline
                points="10,65 45,58 80,43 115,28 150,48 185,32 210,20"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {[
                [10, 65],
                [45, 58],
                [80, 43],
                [115, 28],
                [150, 48],
                [185, 32],
                [210, 20],
              ].map(([cx, cy]) => (
                <circle
                  key={cx}
                  cx={cx}
                  cy={cy}
                  r="3"
                  fill="#3b82f6"
                />
              ))}
            </svg>
            <div className="chart-days">
              <span>Mon</span><span>Tue</span><span>Wed</span>
              <span>Thu</span><span>Fri</span><span>Sat</span>
              <span>Sun</span>
            </div>
          </div>

          <div className="today-card">
            <strong>Today's Plan</strong>
            <p><span className="checked">✓</span> Finish project UI</p>
            <p><span className="checked">✓</span> Study React Hooks</p>
            <p><span className="unchecked" /> Work on ideas</p>
            <p><span className="unchecked" /> Read an article</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LandingPage() {
  return (
    <div className="landing-page">
      <header className="site-header">
        <div className="container header-inner">
          <Logo />

          <nav className="main-nav" aria-label="Main navigation">
            <a href="#features">Features</a>
            <a href="#templates">Templates</a>
          </nav>

          <div className="header-actions">
            <a className="login-link" href="/signin">sign in</a>
            <a className="button button-primary header-cta" href="/signin">
              Get Started
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="hero-section container">
          <div className="hero-copy">
            <h1>
              Your ideas,
              <br />
              organized.
            </h1>

            <p className="hero-description">
              A simple space to plan, write, and get things done — all
              in one place.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="/signin">
                Get Started Free
              </a>
              <a className="button button-secondary" href="#workspace">
                Explore Workspace
              </a>
            </div>
          </div>

          <WorkspacePreview />
        </section>

        <section className="features-section container" id="features">
          <div className="section-heading">
            <span className="eyebrow">WHY NOTESPACE?</span>
            <h2>
              Everything you need,
              <br />
              to stay on track.
            </h2>
          </div>

          <div className="features-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.title}>
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="cta-section container" id="templates">
          <div className="cta-banner">
            <div className="cta-copy">
              <h2>Built for your best work</h2>
              <p>
                From quick notes to big projects, NoteSpace helps you
                stay organized and get more done.
              </p>
              <a href="/signin" className="cta-link">
                Explore templates <span>→</span>
              </a>
            </div>

            <div className="floating-cards" aria-hidden="true">
              <div className="floating-card back-card">
                <span />
                <span />
                <span />
                <span />
              </div>
              <div className="floating-card front-card">
                <div className="floating-card-top">
                  <span />
                  <b>✓</b>
                </div>
                <span />
                <span />
                <span />
              </div>
              <span className="sparkle sparkle-one">✦</span>
              <span className="sparkle sparkle-two">✦</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <Logo small />
          <nav className="footer-links" aria-label="Footer navigation">
            <a href="#features">About</a>
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
          </nav>
          <span className="footer-note">Made for your ideas.</span>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
