import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const FEATURES = [
  { icon: "⚡", label: "Fast Uploads", desc: "Sub-second processing" },
  { icon: "🔍", label: "Deep Analysis", desc: "AI-powered insights" },
  { icon: "📤", label: "Easy Export", desc: "Multiple formats" },
];

export default function SignIn() {
  const [name, setName] = useState("");
  const [focused, setFocused] = useState(false);
  const [mounted, setMounted] = useState(false);

  // ── Original functionality preserved ──
  const { login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    await login(name);
    navigate("/dashboard");
  };

  return (
    <div
      className="relative min-h-screen overflow-hidden flex flex-col"
      style={{ background: "#05101f", fontFamily: "'Outfit', sans-serif", marginTop: 40 }}
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

        .blob1 { animation: blob 9s ease-in-out infinite; }
        .blob2 { animation: blob 11s ease-in-out infinite 2s; }
        .blob3 { animation: blob 13s ease-in-out infinite 4s; }

        .anim-nav   { animation: fadeSlide .6s ease forwards; }
        .anim-left  { animation: floatUp .7s ease .15s both; }
        .anim-right { animation: floatUp .7s ease .3s  both; }

        .btn-primary {
          background: linear-gradient(135deg, #0ea5e9, #6366f1);
          box-shadow: 0 4px 24px rgba(56,189,248,0.25);
          transition: all .25s ease;
          cursor: pointer;
        }
        .btn-primary:hover {
          box-shadow: 0 0 32px rgba(56,189,248,0.5), 0 4px 20px rgba(99,102,241,0.3);
          transform: translateY(-1px);
        }
        .btn-disabled {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          cursor: not-allowed;
        }

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
          background: rgba(56,189,248,0.07);
          border-color: rgba(56,189,248,0.22);
          transform: translateX(4px);
        }

        .input-box {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 18px;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.04);
          transition: border-color .2s, box-shadow .2s;
        }
        .input-box.focused {
          border-color: rgba(56,189,248,0.55);
          box-shadow: 0 0 0 3px rgba(56,189,248,0.12);
        }
        .input-box input {
          flex: 1;
          background: none;
          border: none;
          outline: none;
          color: white;
          font-size: 15px;
          font-family: 'Outfit', sans-serif;
        }
        .input-box input::placeholder { color: rgba(100,116,139,0.6); }

        .gradient-text {
          background: linear-gradient(90deg, #38bdf8, #818cf8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .pulse-dot { animation: pulseDot 2s ease-in-out infinite; }
      `}</style>

      {/* ── Blobs ── */}
      <div className="blob1 absolute pointer-events-none" style={{ top: "-15%", left: "15%", width: 520, height: 520, borderRadius: "50%", background: "radial-gradient(circle, rgba(56,189,248,0.18) 0%, transparent 70%)" }} />
      <div className="blob2 absolute pointer-events-none" style={{ bottom: "-10%", right: "5%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.16) 0%, transparent 70%)" }} />
      <div className="blob3 absolute pointer-events-none" style={{ top: "45%", left: "-8%", width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle, rgba(14,165,233,0.12) 0%, transparent 70%)" }} />

      {/* ── Grid ── */}
      <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.025, backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.1) 1px,transparent 1px)", backgroundSize: "48px 48px" }} />

      
      {/* ── Main ── */}
      <main style={{ position: "relative", zIndex: 10, flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 20px"}}>
        {mounted && (
          <div style={{ display: "flex", gap: 20, width: "100%", maxWidth: 960, alignItems: "stretch" }}>

            {/* Left info panel */}
            <div className="anim-left" style={{ width: 400, flexShrink: 0, padding: "44px 40px", display: "flex", flexDirection: "column", justifyContent: "space-between", borderRadius: 22, border: "1px solid rgba(255,255,255,0.07)", background: "linear-gradient(145deg, rgba(15,30,60,0.95), rgba(8,15,32,0.98))" }}>
              <div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 50, border: "1px solid rgba(56,189,248,0.25)", background: "rgba(56,189,248,0.08)", marginBottom: 28 }}>
                  <div className="pulse-dot" style={{ width: 6, height: 6, borderRadius: "50%", background: "#38bdf8" }} />
                  <span className="font-body" style={{ fontSize: 11, color: "#7dd3fc", letterSpacing: "0.1em", textTransform: "uppercase" }}>Data Platform</span>
                </div>

                <h2 className="font-display" style={{ fontWeight: 900, fontSize: 34, color: "white", lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 14 }}>
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

            {/* Right form panel */}
            <div className="anim-right" style={{ flex: 1, padding: "44px 48px", display: "flex", flexDirection: "column", justifyContent: "center", borderRadius: 22, border: "1px solid rgba(255,255,255,0.07)", background: "rgba(8,15,30,0.92)", backdropFilter: "blur(24px)" }}>

              <div style={{ marginBottom: 36 }}>
                <span style={{ fontSize: 30, display: "block", marginBottom: 14 }}>👋</span>
                <h1 className="font-display" style={{ fontWeight: 900, fontSize: 36, color: "white", letterSpacing: "-0.03em", marginBottom: 8 }}>
                  Welcome back
                </h1>
                <p className="font-body" style={{ fontSize: 15, color: "rgba(148,163,184,0.65)", fontWeight: 300 }}>
                  Sign in to access your dashboard
                </p>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
                <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.07)" }} />
                <span className="font-body" style={{ fontSize: 11, color: "rgba(100,116,139,0.7)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Continue with name</span>
                <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.07)" }} />
              </div>

              {/* ── Form — same onSubmit, same state as original ── */}
              <form onSubmit={handleSubmit}>
                <label className="font-body" style={{ display: "block", fontSize: 11, fontWeight: 500, color: "rgba(148,163,184,0.7)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>
                  Your Name
                </label>

                <div className={`input-box ${focused ? "focused" : ""}`}>
                  <svg style={{ color: "rgba(100,116,139,0.6)", flexShrink: 0 }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                  />
                  {name && (
                    <div className="pulse-dot" style={{ width: 8, height: 8, borderRadius: "50%", background: "#34d399", flexShrink: 0 }} />
                  )}
                </div>

                <button
                  type="submit"
                  disabled={!name.trim()}
                  className={`font-display ${name.trim() ? "btn-primary" : "btn-disabled"}`}
                  style={{ width: "100%", marginTop: 16, padding: "15px 24px", borderRadius: 14, fontSize: 15, fontWeight: 700, letterSpacing: "0.02em", color: name.trim() ? "white" : "rgba(100,116,139,0.5)", border: "none", display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}
                >
                  Sign In
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </form>

              <p className="font-body" style={{ marginTop: 20, fontSize: 12, color: "rgba(100,116,139,0.6)", textAlign: "center" }}>
                <span style={{ color: "#38bdf8" }}>●</span>
                {" "}New here? Just enter your name to get started — no password needed.
              </p>

              <div style={{ marginTop: 32, paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", justifyContent: "center", gap: 28 }}>
                {["🔒 Secure", "⚡ Instant Access", "🌐 Always On"].map((b) => (
                  <span key={b} className="font-body" style={{ fontSize: 12, color: "rgba(100,116,139,0.55)" }}>{b}</span>
                ))}
              </div>
            </div>

          </div>
        )}
      </main>
    </div>
  );
}