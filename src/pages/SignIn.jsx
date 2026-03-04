import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

import { 
  signInWithPopup,
  signInWithEmailAndPassword
} from "firebase/auth";

import { auth, googleProvider } from "../firebase";

const FEATURES = [
  { icon: "⚡", label: "Fast Uploads", desc: "Sub-second processing" },
  { icon: "🔍", label: "Deep Analysis", desc: "AI-powered insights" },
  { icon: "📤", label: "Easy Export", desc: "Multiple formats" },
];

export default function SignIn() {
  const [email, setEmail]           = useState("");
  const [password, setPassword]     = useState("");
  const [emailFocused, setEmailFocused] = useState(false);
  const [passFocused, setPassFocused]   = useState(false);
  const [showPass, setShowPass]     = useState(false);
  const [mounted, setMounted]       = useState(false);
  const [loading, setLoading]       = useState(false);

  const { login }  = useAuth();
  const navigate   = useNavigate();

  const handleGoogleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;

    console.log(user);
    alert(`Welcome ${user.displayName}`);
  } catch (error) {
    console.error(error);
  }
};

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log("Logged in successfully");
  } catch (error) {
    console.error(error.message);
    alert(error.message);
  }
};

  const isValid = email.trim() && password.trim();

  return (
    <div
      className="relative min-h-screen overflow-hidden flex flex-col"
      style={{ background: "#070b14", fontFamily: "'Outfit', sans-serif", marginTop: 40 }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cabinet+Grotesk:wght@400;500;700;800;900&family=Outfit:wght@300;400;500&display=swap');

        .font-display { font-family: 'Cabinet Grotesk', sans-serif; }
        .font-body    { font-family: 'Outfit', sans-serif; }

        @keyframes blob {
          0%,100% { transform: translate(0,0) scale(1); }
          33%      { transform: translate(30px,-25px) scale(1.07); }
          66%      { transform: translate(-20px,20px) scale(0.95); }
        }
        @keyframes floatUp {
          from { opacity:0; transform:translateY(28px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes fadeSlide {
          from { opacity:0; transform:translateY(-10px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes pulseDot {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:.5; transform:scale(0.85); }
        }
        @keyframes pulseGreen {
          0%,100% { box-shadow: 0 0 0 0 rgba(52,211,153,0.5); }
          50%      { box-shadow: 0 0 0 5px rgba(52,211,153,0); }
        }
        @keyframes spin { to { transform: rotate(360deg); } }

        .blob1 { animation: blob 9s  ease-in-out infinite; }
        .blob2 { animation: blob 11s ease-in-out infinite 2s; }
        .blob3 { animation: blob 13s ease-in-out infinite 4s; }

        .anim-left  { animation: floatUp .7s ease .15s both; }
        .anim-right { animation: floatUp .7s ease .30s both; }

        /* Feature rows */
        .feature-row {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 16px;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.06);
          background: rgba(255,255,255,0.025);
          transition: all .2s ease;
        }
        .feature-row:hover {
          background: rgba(99,102,241,0.07);
          border-color: rgba(99,102,241,0.22);
          transform: translateX(4px);
        }

        /* Input boxes */
        .input-box {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(30,38,60,0.6);
          border: 1px solid rgba(99,102,241,0.15);
          border-radius: 12px;
          padding: 0 14px;
          height: 48px;
          transition: border-color .2s, box-shadow .2s, background .2s;
          margin-bottom: 18px;
        }
        .input-box.focused {
          border-color: rgba(99,102,241,0.55);
          background: rgba(30,38,60,0.85);
          box-shadow: 0 0 0 3px rgba(99,102,241,0.12), inset 0 1px 0 rgba(255,255,255,0.04);
        }
        .input-box input {
          flex: 1;
          background: none;
          border: none;
          outline: none;
          font-family: 'Outfit', sans-serif;
          font-size: 14.5px;
          color: #e2e8f0;
          caret-color: #6366f1;
        }
        .input-box input::placeholder { color: rgba(100,116,139,0.45); }

        /* Buttons */
        .btn-primary {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          box-shadow: 0 4px 24px rgba(99,102,241,0.35);
          transition: transform .15s, box-shadow .15s, filter .15s;
          cursor: pointer;
        }
        .btn-primary:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 8px 32px rgba(99,102,241,0.5);
          filter: brightness(1.08);
        }
        .btn-primary:active:not(:disabled) { transform: translateY(0); }
        .btn-disabled {
          background: rgba(30,38,60,0.7);
          border: 1px solid rgba(99,102,241,0.1);
          cursor: not-allowed;
        }

        .btn-google {
          width: 100%;
          padding: 13px 20px;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03);
          color: #cbd5e1;
          font-family: 'Outfit', sans-serif;
          font-size: 14.5px; font-weight: 500;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center; gap: 10px;
          transition: background .2s, border-color .2s, transform .15s;
        }
        .btn-google:hover {
          background: rgba(255,255,255,0.07);
          border-color: rgba(255,255,255,0.14);
          transform: translateY(-1px);
        }
        .btn-google:active { transform: translateY(0); }

        .eye-btn {
          background: none; border: none; cursor: pointer;
          color: rgba(100,116,139,0.5);
          padding: 0; display: flex; align-items: center;
          transition: color .2s;
          flex-shrink: 0;
        }
        .eye-btn:hover { color: rgba(148,163,184,0.8); }

        .pulse-dot-green {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #34d399;
          flex-shrink: 0;
          animation: pulseGreen 2s ease-in-out infinite;
        }

        .gradient-text {
          background: linear-gradient(90deg, #818cf8, #a78bfa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .field-label {
          display: block;
          font-size: 11px;
          font-weight: 500;
          color: rgba(148,163,184,0.65);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .divider {
          display: flex; align-items: center; gap: 12px;
          margin: 24px 0;
        }
        .divider-line {
          flex: 1; height: 1px;
          background: linear-gradient(to right, transparent, rgba(99,102,241,0.15), transparent);
        }
        .divider span {
          font-size: 11.5px;
          color: rgba(100,116,139,0.45);
          letter-spacing: 0.06em;
          text-transform: uppercase;
          font-weight: 500;
        }

        .signup-row {
          text-align: center;
          margin-top: 22px;
          font-size: 13px;
          color: rgba(100,116,139,0.55);
        }
        .signup-row a {
          color: #818cf8;
          text-decoration: none;
          font-weight: 600;
          transition: color .2s;
        }
        .signup-row a:hover { color: #a5b4fc; }

        .forgot {
          font-size: 11.5px;
          color: rgba(99,102,241,0.75);
          text-decoration: none;
          font-weight: 500;
          transition: color .2s;
        }
        .forgot:hover { color: #818cf8; }
      `}</style>

      {/* ── Blobs ── */}
      <div className="blob1 absolute pointer-events-none" style={{ top: "-15%", left: "15%", width: 520, height: 520, borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)" }} />
      <div className="blob2 absolute pointer-events-none" style={{ bottom: "-10%", right: "5%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.16) 0%, transparent 70%)" }} />
      <div className="blob3 absolute pointer-events-none" style={{ top: "45%", left: "-8%", width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle, rgba(52,211,153,0.08) 0%, transparent 70%)" }} />

      {/* ── Grid ── */}
      <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.025, backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.1) 1px,transparent 1px)", backgroundSize: "48px 48px" }} />

      {/* ── Main ── */}
      <main style={{ position: "relative", zIndex: 10, flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 20px" }}>
        {mounted && (
          <div style={{ display: "flex", gap: 20, width: "100%", maxWidth: 960, alignItems: "stretch" }}>

            {/* ── Left info panel ── */}
            <div className="anim-left" style={{ width: 400, flexShrink: 0, padding: "44px 40px", display: "flex", flexDirection: "column", justifyContent: "space-between", borderRadius: 22, border: "1px solid rgba(99,102,241,0.15)", background: "linear-gradient(145deg, rgba(15,20,40,0.95), rgba(8,12,28,0.98))", boxShadow: "0 0 80px rgba(99,102,241,0.06)" }}>
              <div>
                {/* Badge */}
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 50, border: "1px solid rgba(99,102,241,0.25)", background: "rgba(99,102,241,0.08)", marginBottom: 28 }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#818cf8", animation: "pulseDot 2s ease-in-out infinite" }} />
                  <span className="font-body" style={{ fontSize: 11, color: "#a5b4fc", letterSpacing: "0.1em", textTransform: "uppercase" }}>Data Platform</span>
                </div>

                <h2 className="font-display" style={{ fontWeight: 800, fontSize: 34, color: "white", lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 14 }}>
                  Analytics<br />
                  <span className="gradient-text">without limits</span>
                </h2>

                <p className="font-body" style={{ fontWeight: 300, fontSize: 14, color: "rgba(148,163,184,0.75)", lineHeight: 1.7, marginBottom: 32 }}>
                  Upload datasets, run powerful analyses, and export insights — all in one seamless workspace.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {FEATURES.map(({ icon, label, desc }) => (
                    <div key={label} className="feature-row">
                      <span style={{ fontSize: 20 }}>{icon}</span>
                      <div>
                        <p className="font-body" style={{ fontWeight: 500, fontSize: 14, color: "white" }}>{label}</p>
                        <p className="font-body" style={{ fontSize: 12, color: "rgba(100,116,139,0.8)" }}>{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div style={{ marginTop: 36, paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.06)", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
                {[["12k+", "Datasets"], ["99%", "Uptime"], ["< 1s", "Response"]].map(([v, l]) => (
                  <div key={l}>
                    <p className="font-display" style={{ fontWeight: 800, fontSize: 22, color: "white" }}>{v}</p>
                    <p className="font-body" style={{ fontSize: 11, color: "rgba(100,116,139,0.8)", marginTop: 2 }}>{l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right form panel ── */}
            <div className="anim-right" style={{ flex: 1, padding: "44px 48px", display: "flex", flexDirection: "column", justifyContent: "center", borderRadius: 22, border: "1px solid rgba(99,102,241,0.15)", background: "rgba(15,20,35,0.85)", backdropFilter: "blur(24px)", boxShadow: "0 32px 64px rgba(0,0,0,0.5), 0 0 80px rgba(99,102,241,0.06)" }}>

              {/* Logo mark */}
              <div style={{ width: 40, height: 40, background: "linear-gradient(135deg,#6366f1,#8b5cf6)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24, boxShadow: "0 0 20px rgba(99,102,241,0.4)" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>

              <h1 className="font-display" style={{ fontWeight: 800, fontSize: 26, color: "#f1f5f9", letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 6 }}>
                Welcome back
              </h1>
              <p className="font-body" style={{ fontSize: 13.5, color: "rgba(148,163,184,0.6)", marginBottom: 32 }}>
                Sign in to continue to your workspace
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit}>
                {/* Email */}
                <label className="field-label">Your Email</label>
                <div className={`input-box ${emailFocused ? "focused" : ""}`}>
                  <svg style={{ color: "rgba(100,116,139,0.6)", flexShrink: 0 }} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setEmailFocused(true)}
                    onBlur={() => setEmailFocused(false)}
                  />
                  {email && <div className="pulse-dot-green" />}
                </div>

                {/* Password */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                  <label className="field-label" style={{ marginBottom: 0 }}>Password</label>
                  <a href="#" className="forgot">Forgot password?</a>
                </div>
                <div className={`input-box ${passFocused ? "focused" : ""}`}>
                  <svg style={{ color: "rgba(100,116,139,0.6)", flexShrink: 0 }} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  <input
                    type={showPass ? "text" : "password"}
                    placeholder="Enter your password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={() => setPassFocused(true)}
                    onBlur={() => setPassFocused(false)}
                  />
                  <button type="button" className="eye-btn" onClick={() => setShowPass(!showPass)} aria-label="Toggle password visibility">
                    {showPass
                      ? <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                      : <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                    }
                  </button>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={!isValid || loading}
                  className={`font-display ${isValid && !loading ? "btn-primary" : "btn-disabled"}`}
                  style={{ width: "100%", marginTop: 4, padding: "15px 24px", borderRadius: 14, fontSize: 15, fontWeight: 700, letterSpacing: "0.02em", color: isValid ? "white" : "rgba(100,116,139,0.45)", border: "none", display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}
                >
                  {loading
                    ? <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{ animation: "spin 0.8s linear infinite" }}><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
                    : <>
                        Sign In
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </>
                  }
                </button>
              </form>

              {/* Divider */}
              <div className="divider">
                <div className="divider-line" />
                <span>or</span>
                <div className="divider-line" />
              </div>

              {/* Google */}
              <button className="btn-google" type="button" onClick={handleGoogleLogin}>
                <svg width="17" height="17" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
              </button>

              {/* Sign-up link */}
              <p className="signup-row font-body">
                Don't have an account? <Link to="/get-started">Sign up</Link>
              </p>

            </div>
          </div>
        )}
      </main>
    </div>
  );
}