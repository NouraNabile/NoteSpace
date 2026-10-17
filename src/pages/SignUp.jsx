
import { useState } from "react";
import "./SignIn.css";
import "./SignUp.css";

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true">
      <circle cx="12" cy="7" r="4" />
      <path d="M5 21a7 7 0 0 1 14 0" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 7.89 5.26a2 2 0 0 0 2.22 0L21 7" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true">
      <rect x="4" y="11" width="16" height="11" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  );
}

function EyeIcon({ visible }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true">
      {visible ? (
        <>
          <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
          <circle cx="12" cy="12" r="3" />
        </>
      ) : (
        <>
          <path d="M2.46 12C3.73 7.94 7.52 5 12 5s8.27 2.94 9.54 7c-1.27 4.06-5.06 7-9.54 7s-8.27-2.94-9.54-7Z" />
          <circle cx="12" cy="12" r="3" />
        </>
      )}
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09a6.6 6.6 0 0 1 0-4.18V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.85z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}
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
  );}
function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    alert("Sign-up UI only — account creation is not connected yet.");
  }

  return (
    <div className="signin-page signup-page">
      <div className="signup-bg signup-bg-top" aria-hidden="true" />
      <div className="signup-bg signup-bg-bottom" aria-hidden="true" />

      <div className="signup-spark signup-spark-top" aria-hidden="true">
        <span />
        <span />
      </div>
      <div className="signup-spark signup-spark-bottom" aria-hidden="true">
        <span />
        <span />
      </div>

      {/* <header className="signin-header">
        <a className="ns-brand" href="/" aria-label="NoteSpace home">
          <span className="ns-brand-mark">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M5.25 4.5A2.25 2.25 0 0 0 3 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25h1.5A2.25 2.25 0 0 0 9 17.25V9.613l6.45 9.03a2.25 2.25 0 0 0 1.84.857h1.46A2.25 2.25 0 0 0 21 17.25V6.75a2.25 2.25 0 0 0-2.25-2.25h-1.5A2.25 2.25 0 0 0 15 6.75v7.637L8.55 5.357A2.25 2.25 0 0 0 6.71 4.5H5.25Z" />
            </svg>
          </span>
          <span>NoteSpace</span>
        </a>
      </header> */}
      <header className="site-header">
        <div className="container header-inner">
          <Logo />
          </div>
      </header>

      <main className="signin-main signup-main">
        <section className="signin-card signup-card">
          <div className="signup-avatar">
            <UserIcon />
            <span className="signup-avatar-spark" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
          </div>

          <div className="signin-card-header signup-heading">
            <h1>Create your account</h1>
            <p>Get started for free</p>
          </div>

          <form className="signin-form signup-form" onSubmit={handleSubmit}>
            <div className="signin-field">
              <label htmlFor="signup-fullname">Full name</label>
              <div className="signin-input-wrap">
                <span className="signin-input-icon">
                  <UserIcon />
                </span>
                <input
                  id="signup-fullname"
                  name="fullname"
                  type="text"
                  autoComplete="name"
                  placeholder="Your full name"
                  required
                />
              </div>
            </div>

            <div className="signin-field">
              <label htmlFor="signup-email">Email address</label>
              <div className="signin-input-wrap">
                <span className="signin-input-icon">
                  <MailIcon />
                </span>
                <input
                  id="signup-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div className="signin-field">
              <label htmlFor="signup-password">Password</label>
              <div className="signin-input-wrap">
                <span className="signin-input-icon">
                  <LockIcon />
                </span>
                <input
                  id="signup-password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  placeholder="Create a password"
                  minLength={8}
                  required
                />
                <button
                  className="signin-password-toggle"
                  type="button"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  aria-pressed={showPassword}
                  onClick={() => setShowPassword((current) => !current)}
                >
                  <EyeIcon visible={showPassword} />
                </button>
              </div>
            </div>

            <div className="signup-submit-wrap">
              <button className="signin-submit" type="submit">
                Create account
              </button>
            </div>
          </form>

          <div className="signin-divider">
            <span>or</span>
          </div>

          <button
            className="signin-google"
            type="button"
            onClick={() => alert("Google sign-up is not connected yet.")}
          >
            <GoogleIcon />
            <span>Continue with Google</span>
          </button>

          <p className="signin-signup signup-login-link">
            Already have an account?{" "}
            <a href="/signin">Log in</a>
          </p>
        </section>
      </main>

      {/* <footer className="signin-footer">
        <a href="/terms">Terms of Service</a>
        <span>•</span>
        <a href="/privacy">Privacy Policy</a>
        <span>•</span>
        <a href="/help">Help Center</a>
      </footer> */}
    </div>
  );
}

export default SignUp;
