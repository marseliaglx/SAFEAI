// SafeAI — shared components, tokens, icons
// Exported to window at bottom

/* ── Tokens ── */
const T = {
  teal:       '#1B9AAA',
  tealLight:  '#E6F4F6',
  tealDark:   '#147a87',
  navy:       '#1B3A6B',
  navyDark:   '#122849',
  charcoal:   '#3F4B56',
  ink:        '#2D3640',
  muted:      '#7A8590',
  cream:      '#F4F7F9',
  white:      '#FFFFFF',
};

/* ── Formspree email submission ── */
const FORMSPREE_ID = 'YOUR_FORMSPREE_ID'; // replace at formspree.io after creating a free form
function submitEmail(email, source) {
  if (!email || FORMSPREE_ID === 'YOUR_FORMSPREE_ID') return Promise.resolve();
  return fetch('https://formspree.io/f/' + FORMSPREE_ID, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: email, source: source }),
  }).catch(function() {});
}

/* ── Base styles injected once ── */
if (!document.getElementById('safeai-base')) {
  const s = document.createElement('style');
  s.id = 'safeai-base';
  s.textContent = `
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; font-size: 16px; }
    body { font-family: 'Poppins', sans-serif; color: ${T.ink}; background: ${T.white}; }
    :focus-visible { outline: 2px solid ${T.teal}; outline-offset: 2px; }

    .sa-btn-primary {
      display: inline-flex; align-items: center; justify-content: center; gap: 8px;
      background: ${T.teal}; color: #fff; font-family: 'Poppins', sans-serif;
      font-weight: 600; font-size: 15px; padding: 14px 28px; border-radius: 6px;
      border: none; cursor: pointer; text-decoration: none; transition: background 0.18s, transform 0.12s;
      line-height: 1;
    }
    .sa-btn-primary:hover { background: ${T.tealDark}; transform: translateY(-1px); }

    .sa-btn-outline {
      display: inline-flex; align-items: center; justify-content: center; gap: 8px;
      background: transparent; color: ${T.white}; font-family: 'Poppins', sans-serif;
      font-weight: 600; font-size: 15px; padding: 13px 28px; border-radius: 6px;
      border: 2px solid rgba(255,255,255,0.55); cursor: pointer; text-decoration: none;
      transition: border-color 0.18s, background 0.18s;
    }
    .sa-btn-outline:hover { border-color: #fff; background: rgba(255,255,255,0.08); }

    .sa-btn-ghost {
      display: inline-flex; align-items: center; gap: 6px;
      background: transparent; color: ${T.teal}; font-family: 'Poppins', sans-serif;
      font-weight: 500; font-size: 14px; border: none; cursor: pointer; text-decoration: none;
      transition: color 0.15s;
    }
    .sa-btn-ghost:hover { color: ${T.tealDark}; }

    .sa-card {
      background: ${T.white}; border-radius: 10px;
      border: 1.5px solid #e0e8ed; padding: 24px;
    }
    .sa-card-teal { border-left: 4px solid ${T.teal}; }

    .sa-tag {
      display: inline-block; padding: 3px 10px; border-radius: 20px;
      font-size: 11px; font-weight: 600; letter-spacing: 0.04em;
    }
    .sa-tag-teal { background: ${T.tealLight}; color: ${T.teal}; }
    .sa-tag-navy { background: rgba(27,58,107,0.1); color: ${T.navy}; }
    .sa-tag-white { background: rgba(255,255,255,0.15); color: #fff; }

    .sa-eyebrow {
      font-size: 11px; font-weight: 600; letter-spacing: 0.14em;
      text-transform: uppercase; color: ${T.teal}; margin-bottom: 10px;
    }

    .sa-input {
      flex: 1; padding: 13px 16px; border-radius: 6px;
      border: 1.5px solid #d0dce4; background: ${T.white};
      font-family: 'Poppins', sans-serif; font-size: 14px; color: ${T.ink};
      transition: border-color 0.15s;
    }
    .sa-input::placeholder { color: ${T.muted}; }
    .sa-input:focus { outline: none; border-color: ${T.teal}; }

    /* Smooth section transitions */
    section { position: relative; }

    /* Quiz answer hover */
    .quiz-opt:hover { border-color: ${T.teal} !important; background: ${T.tealLight} !important; }

    /* Blog card hover */
    .blog-card:hover { box-shadow: 0 6px 24px rgba(27,58,107,0.10); transform: translateY(-2px); }
    .blog-card { transition: box-shadow 0.2s, transform 0.2s; }

    /* FAQ item */
    .faq-item { border-bottom: 1px solid #e8edf2; }
    .faq-q { cursor: pointer; padding: 18px 0; display: flex; justify-content: space-between; align-items: center; gap: 16px; }
    .faq-q:hover .faq-chevron { color: ${T.teal}; }
    .faq-chevron { transition: transform 0.22s; flex-shrink: 0; }
    .faq-a { overflow: hidden; transition: max-height 0.3s ease, padding 0.3s ease; }

    /* Scrollbar subtle */
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: #c8d6de; border-radius: 3px; }

    /* Mobile nav */
    .sa-nav-links { display: flex; align-items: center; gap: 32px; }
    .sa-hamburger { display: none; background: none; border: none; cursor: pointer; padding: 6px; color: ${T.charcoal}; }
    .sa-mobile-menu { display: none; }
    @media (max-width: 860px) {
      .sa-nav-links { display: none; }
      .sa-hamburger { display: flex; align-items: center; justify-content: center; }
      .sa-mobile-menu { display: block; position: fixed; top: 88px; left: 0; right: 0; background: rgba(255,255,255,0.98); backdrop-filter: blur(8px); border-bottom: 1px solid #e8edf2; padding: 20px 24px 28px; z-index: 99; }
      .sa-mobile-link { display: block; padding: 13px 0; font-size: 16px; font-weight: 500; color: ${T.charcoal}; text-decoration: none; border-bottom: 1px solid #f0f4f7; }
      .sa-mobile-link:last-child { border-bottom: none; }
    }
  `;
  document.head.appendChild(s);
}

/* ── Simple SVG icons ── */
const Icon = {
  Check: ({ size = 16, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="8" fill={T.teal} opacity="0.15"/>
      <path d="M4.5 8.5l2.5 2.5 4.5-5" stroke={T.teal} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Arrow: ({ size = 16, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M3 8h10M9 4l4 4-4 4" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Plus: ({ open }) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ transition: 'transform 0.22s', transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}>
      <path d="M10 4v12M4 10h12" stroke={T.teal} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  CheckCircle: ({ size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="24" fill={T.tealLight}/>
      <path d="M14 25l7 7 13-14" stroke={T.teal} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Calendar: () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <rect x="1" y="2" width="12" height="11" rx="2" stroke={T.muted} strokeWidth="1.2"/>
      <path d="M1 6h12M5 1v2M9 1v2" stroke={T.muted} strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  ),
  Clock: () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <circle cx="7" cy="7" r="6" stroke={T.muted} strokeWidth="1.2"/>
      <path d="M7 4v3.5l2 2" stroke={T.muted} strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  ),
  LinkedIn: ({ size = 18, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="4" cy="4" r="2" stroke={color} strokeWidth="1.8"/>
    </svg>
  ),
  Facebook: ({ size = 18, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Instagram: ({ size = 18, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="2" y="2" width="20" height="20" rx="5" stroke={color} strokeWidth="1.8"/>
      <circle cx="12" cy="12" r="4" stroke={color} strokeWidth="1.8"/>
      <circle cx="17.5" cy="6.5" r="1" fill={color}/>
    </svg>
  ),
};

/* ── Navbar ── */
function Navbar({ tweaks }) {
  const R = React;
  const [scrolled, setScrolled] = R.useState(false);
  const [mobileOpen, setMobileOpen] = R.useState(false);

  R.useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const links = [
    { label: 'Check your risk', href: '#quiz' },
    { label: 'Services', href: '#services' },
    { label: 'Free Tools', href: '#free-tools' },
    { label: 'Knowledge Base', href: 'blog.html' },
    { label: 'About', href: '#about' },
  ];

  function closeMobile() { setMobileOpen(false); }

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled || mobileOpen ? 'rgba(255,255,255,0.97)' : 'transparent',
      backdropFilter: scrolled || mobileOpen ? 'blur(8px)' : 'none',
      boxShadow: scrolled ? '0 1px 12px rgba(27,58,107,0.08)' : 'none',
      transition: 'background 0.3s, box-shadow 0.3s',
    }}>
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 24px', minHeight: 88, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img
            src="safeai-logo.svg"
            alt="SafeAI logo"
            style={{ height: 58, width: 'auto', display: 'block' }}
          />
        </a>

        {/* Desktop links */}
        <div className="sa-nav-links">
          {links.map(function(l) { return (
            <a key={l.label} href={l.href}
              style={{ fontSize: 14, fontWeight: 500, color: T.charcoal, textDecoration: 'none', transition: 'color 0.15s' }}
              onMouseEnter={function(e) { e.target.style.color = T.teal; }}
              onMouseLeave={function(e) { e.target.style.color = T.charcoal; }}
            >{l.label}</a>
          ); })}
          <a href="#booking" className="sa-btn-primary" style={{ fontSize: 14, padding: '10px 20px' }}>
            Book a call
          </a>
        </div>

        {/* Hamburger (mobile only) */}
        <button className="sa-hamburger" onClick={function() { setMobileOpen(!mobileOpen); }} aria-label="Toggle menu">
          {mobileOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke={T.charcoal} strokeWidth="2" strokeLinecap="round"/></svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3 8h18M3 12h18M3 16h18" stroke={T.charcoal} strokeWidth="2" strokeLinecap="round"/></svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="sa-mobile-menu">
          {links.map(function(l) { return (
            <a key={l.label} href={l.href} className="sa-mobile-link" onClick={closeMobile}>{l.label}</a>
          ); })}
          <a href="#booking" className="sa-btn-primary" style={{ display: 'inline-flex', marginTop: 16, fontSize: 15, padding: '13px 24px' }} onClick={closeMobile}>Book a call</a>
        </div>
      )}
    </nav>
  );
}

/* ── Hero Section ── */
function HeroSection() {
  return (
    <section id="hero" style={{ background: T.cream, minHeight: '92vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: 108 }}>
      {/* Subtle dot-grid background */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: `radial-gradient(circle, rgba(27,58,107,0.06) 1px, transparent 1px)`,
        backgroundSize: '28px 28px',
        pointerEvents: 'none',
      }}></div>

      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '56px 24px 80px', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 48, flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 520px', minWidth: 0 }}>
            <span className="sa-tag sa-tag-teal" style={{ marginBottom: 20, display: 'inline-block' }}>
              For Irish small businesses, schools &amp; community organisations
            </span>

            <h1 style={{ fontSize: 'clamp(36px, 5.5vw, 68px)', fontWeight: 700, color: T.charcoal, lineHeight: 1.1, marginBottom: 20, maxWidth: 780, textWrap: 'balance' }}>
              Using AI in your business?
            </h1>
            <p style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 600, color: T.teal, lineHeight: 1.3, marginBottom: 20, maxWidth: 620 }}>
              You may already have legal obligations.
            </p>
            <p style={{ fontSize: 16, color: T.charcoal, lineHeight: 1.8, maxWidth: 700, marginBottom: 36 }}>
              Even everyday use of AI tools like writing emails, creating content, or summarising documents can create legal obligations under the EU AI Act for Irish businesses, schools, and organisations. Most organisations are already using AI. Very few realise they’re responsible for how it’s used.
            </p>

            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
              <a href="#quiz" className="sa-btn-primary" style={{ fontSize: 16, padding: '16px 32px' }}>
                Take the 2-minute check
              </a>
              <a href="#booking" className="sa-btn-outline" style={{ fontSize: 16, padding: '14px 32px', color: T.navy, borderColor: 'rgba(27,58,107,0.35)' }}>
                Book a call with Marcela
              </a>
            </div>
          </div>

          <div style={{ flex: '0 1 420px', minWidth: 280, display: 'flex', justifyContent: 'center' }} aria-label="SafeAI brand mark">
            <div style={{ width: '100%', maxWidth: 420, padding: '34px 26px', borderRadius: 26, background: 'rgba(255,255,255,0.78)', border: '1px solid rgba(27,58,107,0.08)', boxShadow: '0 24px 70px rgba(27,58,107,0.12)', backdropFilter: 'blur(4px)' }}>
              <img
                src="safeai-logo.png"
                alt="SafeAI — AI Training & Compliance"
                style={{ width: '100%', height: 'auto', display: 'block', filter: 'drop-shadow(0 14px 22px rgba(27,58,107,0.12))' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Problem Section ── */
function ProblemSection() {
  const uses = [
    'Using AI to write emails or content',
    'Pasting customer information into AI tools',
    'Creating AI-generated marketing materials',
    'Summarising meetings or documents',
    'Letting staff use AI tools without guidance',
  ];
  const risks = [
    'AI tools may process or store what you enter',
    'Customer or staff data can be exposed unintentionally',
    'AI-generated content can create copyright and transparency risks',
    'Organisations remain responsible for how AI is used internally',
  ];
  return (
    <section id="problem" style={{ background: T.white, padding: '88px 24px 0' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>

        {/* Part 1: awareness */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p className="sa-eyebrow">EU AI Act Ireland · AI Compliance</p>
          <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 700, color: T.charcoal, marginBottom: 14, textWrap: 'balance' }}>
            Most organisations are already using AI
          </h2>
          <p style={{ fontSize: 17, color: T.muted, maxWidth: 560, margin: '0 auto' }}>
            Very few realise they may already be responsible for how it's used.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 12, marginBottom: 40 }}>
          {uses.map((text, i) => (
            <div key={i} className="sa-card" style={{ display: 'flex', gap: 14, alignItems: 'flex-start', padding: '16px 20px' }}>
              <div style={{ width: 7, height: 7, borderRadius: '50%', background: T.teal, flexShrink: 0, marginTop: 7 }}></div>
              <span style={{ fontSize: 14, color: T.ink, lineHeight: 1.65 }}>{text}</span>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <p style={{ fontSize: 15, color: T.ink, lineHeight: 1.9, maxWidth: 620, margin: '0 auto 28px' }}>
            If any of this is already happening in your organisation, the EU AI Act and GDPR may already apply — including for everyday tools like ChatGPT, Claude, or Canva AI.
          </p>
          <a href="#free-tools" className="sa-btn-primary" style={{ fontSize: 15, padding: '14px 28px' }}>
            Get the Free AI Risk Checklist
          </a>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid #e8edf2', marginBottom: 72 }}></div>

        {/* Part 2: the quiet bit — renamed & improved */}
        <div style={{ marginBottom: 96 }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <p className="sa-eyebrow">AI Governance · AI Risk Assessment Ireland</p>
            <h2 style={{ fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 700, color: T.charcoal, marginBottom: 10, textWrap: 'balance' }}>
              The part most organisations don't realise
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 0, marginBottom: 36 }}>
            {risks.map((text, i) => (
              <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', padding: '16px 12px', borderBottom: '1px solid #f0f4f7' }}>
                <Icon.Check size={20} />
                <span style={{ fontSize: 14, color: T.ink, lineHeight: 1.75 }}>{text}</span>
              </div>
            ))}
          </div>

          <div style={{ background: T.tealLight, borderLeft: `4px solid ${T.teal}`, borderRadius: '0 10px 10px 0', padding: '22px 28px', maxWidth: 700 }}>
            <p style={{ fontSize: 15, color: T.ink, lineHeight: 1.85, marginBottom: 12 }}>
              Even small businesses and community organisations can have obligations under the EU AI Act.
            </p>
            <p style={{ fontSize: 15, fontWeight: 600, color: T.charcoal, lineHeight: 1.7 }}>
              You don't need to stop using AI.<br />You just need to use it properly.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ── Timeline Section ── */
function TimelineSection() {
  const steps = [
    { date: 'Aug 2024', label: 'Act in force', note: 'Prohibited practices banned', done: true },
    { date: 'Feb 2025', label: 'GPAI obligations', note: 'General-purpose AI rules', done: true },
    { date: 'Aug 2025', label: 'High-risk rules', note: 'Most SME obligations apply', done: false },
    { date: 'Aug 2026', label: 'Full enforcement', note: 'All articles enforceable', done: false },
  ];
  return (
    <section id="timeline" style={{ background: T.tealLight, padding: '72px 24px' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <p className="sa-eyebrow">EU AI Act — Where We Are Now</p>
        <h2 style={{ fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 700, color: T.charcoal, marginBottom: 8, textWrap: 'balance' }}>
          The law is already in motion
        </h2>
        <p style={{ fontSize: 15, color: T.muted, marginBottom: 48 }}>Here's what's in force — and what's coming next for your organisation.</p>

        <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
          {/* Connecting line */}
          <div style={{ position: 'absolute', top: 24, left: '12.5%', right: '12.5%', height: 3, background: T.teal, opacity: 0.2, borderRadius: 2 }}></div>
          <div style={{ position: 'absolute', top: 24, left: '12.5%', width: '25%', height: 3, background: T.teal, opacity: 0.8, borderRadius: 2 }}></div>

          {steps.map((s, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, position: 'relative', zIndex: 1 }}>
              <div style={{
                width: 48, height: 48, borderRadius: '50%',
                background: s.done ? T.teal : T.white,
                border: `3px solid ${s.done ? T.teal : '#c0ced8'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: s.done ? `0 0 0 6px ${T.tealLight}` : 'none',
                transition: 'all 0.2s',
              }}>
                {s.done
                  ? <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 10.5l3.5 3.5 6.5-7" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  : <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#c0ced8' }}></div>
                }
              </div>
              <div style={{ fontSize: 13, fontWeight: 700, color: s.done ? T.teal : T.muted }}>{s.date}</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: T.charcoal, textAlign: 'center' }}>{s.label}</div>
              <div style={{ fontSize: 12, color: T.muted, textAlign: 'center', lineHeight: 1.5 }}>{s.note}</div>
              {i === 2 && <span className="sa-tag sa-tag-teal">Coming up</span>}
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <span style={{ fontSize: 15, color: T.ink }}>Not sure where your organisation stands? </span>
          <a href="#quiz" style={{ fontSize: 15, color: T.teal, fontWeight: 600, textDecoration: 'none' }}>Take the 2-minute check →</a>
        </div>
      </div>
    </section>
  );
}

/* ── Quiz Section ── */
function QuizSection() {
  const R = React;
  const questions = [
    { q: 'Are you or your staff generating images with AI for marketing or social media?', opts: ['Yes, regularly','Sometimes','Not sure'] },
    { q: 'Has anyone pasted customer information or internal documents into an AI tool?', opts: ['Yes','Maybe','Definitely not'] },
    { q: 'Do you have a written policy on what staff can and cannot put into AI tools?', opts: ['Yes, written and signed','We talked about it once','No'] },
    { q: 'Have you trained your team on safe AI use in the last twelve months?', opts: ['Yes, with attendance recorded','Informally','No'] },
  ];

  const [step, setStep] = R.useState(0);
  const [answers, setAnswers] = R.useState([null,null,null,null]);
  const [email, setEmail] = R.useState('');
  const [submitted, setSubmitted] = R.useState(false);

  function pick(opt) {
    const a = [...answers]; a[step] = opt;
    setAnswers(a);
    if (step < questions.length - 1) setStep(step + 1);
    else setStep(questions.length);
  }

  function risk() {
    let score = 0;
    answers.forEach((a, i) => {
      if (!a) return;
      const idx = questions[i].opts.indexOf(a);
      if (i <= 1) { if (idx === 0) score += 1; else if (idx === 1) score += 0.5; }
      else { if (idx === 0) score -= 1; else if (idx === 1) score += 0.5; else score += 1; }
    });
    if (score <= 0) return 'Low';
    if (score <= 2) return 'Medium';
    return 'High';
  }

  const riskColors = { Low: { bg: '#ECFDF5', text: '#065F46', border: '#34D399' }, Medium: { bg: '#FFFBEB', text: '#92400E', border: '#FBBF24' }, High: { bg: '#FEF2F2', text: '#991B1B', border: '#F87171' } };
  const riskText = {
    Low: "Your organisation appears to have some awareness of AI risks. A quick review of your practices would help confirm you're on the right track.",
    Medium: "Your AI use creates some legal risk under the EU AI Act. The good news: most gaps are straightforward to close with a written policy and basic training.",
    High: "Your current AI practices create meaningful risk under the EU AI Act. This is common and fixable. A structured approach to AI governance will address most of your exposure."
  };

  return (
    <section id="quiz" style={{ background: T.white, padding: '80px 24px' }}>
      <div style={{ maxWidth: 680, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <p className="sa-eyebrow">Self-Assessment</p>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, color: T.charcoal, marginBottom: 10 }}>Find out your AI exposure in 2 minutes</h2>
          <p style={{ fontSize: 15, color: T.muted }}>4 questions. Instant result. Free checklist to your inbox.</p>
        </div>

        <div style={{ background: T.white, border: `2px solid ${T.teal}`, borderRadius: 14, padding: '32px 36px', boxShadow: '0 8px 32px rgba(27,154,170,0.10)' }}>
          {step < questions.length ? (
            <>
              <div style={{ marginBottom: 24 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span style={{ fontSize: 12, color: T.muted }}>Step {step + 1} of {questions.length}</span>
                  <span style={{ fontSize: 12, color: T.teal, fontWeight: 600 }}>{Math.round(((step + 1) / questions.length) * 100)}%</span>
                </div>
                <div style={{ height: 5, background: T.cream, borderRadius: 3, overflow: 'hidden' }}>
                  <div style={{ width: `${((step + 1) / questions.length) * 100}%`, height: '100%', background: T.teal, borderRadius: 3, transition: 'width 0.4s ease' }}></div>
                </div>
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 600, color: T.charcoal, marginBottom: 20, lineHeight: 1.5 }}>{questions[step].q}</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {questions[step].opts.map(o => (
                  <button key={o} className="quiz-opt" onClick={() => pick(o)}
                    style={{ padding: '14px 18px', background: T.cream, border: `1.5px solid #d8e4eb`, borderRadius: 8, fontSize: 14, color: T.ink, textAlign: 'left', cursor: 'pointer', fontFamily: 'Poppins, sans-serif', transition: 'all 0.15s' }}>
                    {o}
                  </button>
                ))}
              </div>
            </>
          ) : !submitted ? (
            <>
              {(() => { const r = risk(); const c = riskColors[r]; return (
                <>
                  <div style={{ textAlign: 'center', marginBottom: 24 }}>
                    <span style={{ display: 'inline-block', padding: '6px 18px', borderRadius: 24, background: c.bg, color: c.text, border: `1.5px solid ${c.border}`, fontSize: 14, fontWeight: 600 }}>
                      {r} exposure
                    </span>
                  </div>
                  <p style={{ fontSize: 15, color: T.ink, lineHeight: 1.8, marginBottom: 28 }}>{riskText[r]}</p>
                </>
              )})()}
              <div>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: T.charcoal, marginBottom: 8 }}>Send me my full report and the free Irish SME AI Risk Checklist</label>
                <div style={{ display: 'flex', gap: 10 }}>
                  <input type="email" className="sa-input" placeholder="your@email.ie" value={email} onChange={e => setEmail(e.target.value)} />
                  <button className="sa-btn-primary" style={{ fontSize: 14, padding: '13px 20px', flexShrink: 0 }} onClick={() => { if (email) { submitEmail(email, 'quiz'); setSubmitted(true); } }}>
                    Send it <Icon.Arrow size={16} color="#fff" />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <Icon.CheckCircle size={56} />
              <h3 style={{ fontSize: 20, fontWeight: 700, color: T.charcoal, margin: '16px 0 8px' }}>Check your inbox</h3>
              <p style={{ fontSize: 14, color: T.muted, lineHeight: 1.7 }}>The checklist is on its way. We'll follow up with one practical email next week, then leave you alone unless you ask us not to.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ── Services Section ── */
function ServicesSection() {
  const services = [
    { title: 'Practical AI Safety Workshop', price: 'From €800', cta: 'Book a workshop', href: 'https://cal.com/safeai/workshop', desc: '2.5-hour on-site or remote session for teams of up to 20. Your team maps every AI tool in use, agrees what is and is not acceptable, and leaves with an AI Use Inventory and a draft Acceptable Use Policy to build on.' },
    { title: 'AI Awareness Talk', price: '', cta: 'Get in touch', href: 'mailto:marcela@safeai.ie', desc: 'A 45–60 minute keynote or staff briefing on AI risks, the EU AI Act, and what safe AI use looks like in practice. Suitable for all-hands meetings, CPD days, conferences, and board briefings.' },
  ];
  return (
    <section id="services" style={{ background: T.navy, padding: '80px 24px' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <p className="sa-eyebrow" style={{ color: T.teal }}>AI Training &amp; Awareness</p>
        <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 700, color: T.white, marginBottom: 10, textWrap: 'balance', maxWidth: 600 }}>
          Practical support for organisations that want clarity, not complexity.
        </h2>
        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', marginBottom: 48, maxWidth: 540 }}>AI awareness training for SMEs · schools · community organisations · Ireland</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, marginBottom: 20 }}>
          {services.map((s, i) => (
            <div key={i} style={{ background: T.white, borderRadius: 12, padding: '28px 28px 24px' }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: T.charcoal, marginBottom: 12 }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: T.ink, lineHeight: 1.8, marginBottom: 20 }}>{s.desc}</p>
              <span style={{ display: 'inline-block', fontSize: 12, fontWeight: 600, color: T.muted, background: T.cream, border: '1px solid #d0dce4', borderRadius: 20, padding: '4px 12px', marginBottom: 20 }}>Coming soon</span>
              <a href={s.href} target="_blank" rel="noopener noreferrer" className="sa-btn-primary" style={{ fontSize: 14, padding: '12px 22px' }}>{s.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Free Tools Section ── */
function FreeToolsSection() {
  const R = React;
  const [modal, setModal] = R.useState(null);
  const [emailVal, setEmailVal] = R.useState('');
  const [sent, setSent] = R.useState(null);

  const tools = [
    { title: 'The Irish SME AI Risk Checklist', type: 'PDF · fillable', desc: 'A 10-point guide to identifying hidden risks in your daily AI use.' },
    { title: 'AI Image Safety Guide', type: 'PDF', desc: 'Know whether your AI-generated marketing content is safe to publish under Irish copyright and EU AI Act rules.' },
    { title: 'SafeAI Team Policy Template', type: 'Editable .docx', desc: 'A simple one-page Acceptable Use Policy you can give your team today.' },
  ];

  return (
    <section id="free-tools" style={{ background: T.cream, padding: '80px 24px' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p className="sa-eyebrow">Free Tools</p>
          <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 700, color: T.charcoal, marginBottom: 10 }}>Designed for your desk, not your lawyer</h2>
          <p style={{ fontSize: 15, color: T.muted, maxWidth: 480, margin: '0 auto' }}>Each download is sent to your inbox. We'll email you twice more, then leave you alone.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
          {tools.map((t, i) => (
            <div key={i} className="sa-card sa-card-teal">
              <span className="sa-tag sa-tag-teal" style={{ marginBottom: 14, display: 'inline-block' }}>{t.type}</span>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: T.charcoal, marginBottom: 8 }}>{t.title}</h3>
              <p style={{ fontSize: 13, color: T.muted, lineHeight: 1.7, marginBottom: 18 }}>{t.desc}</p>
              <button onClick={() => setModal(i)} className="sa-btn-ghost" style={{ fontSize: 14 }}>
                Get it <Icon.Arrow size={14} color={T.teal} />
              </button>
            </div>
          ))}
        </div>

        {/* Modal */}
        {modal !== null && (
          <div onClick={() => setModal(null)} style={{ position: 'fixed', inset: 0, background: 'rgba(27,58,107,0.45)', zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
            <div onClick={e => e.stopPropagation()} style={{ background: T.white, borderRadius: 14, padding: '32px 32px 28px', maxWidth: 480, width: '100%', position: 'relative', boxShadow: '0 20px 60px rgba(0,0,0,0.2)' }}>
              <button onClick={() => { setModal(null); setEmailVal(''); setSent(null); }} style={{ position: 'absolute', top: 16, right: 16, background: 'none', border: 'none', cursor: 'pointer', fontSize: 20, color: T.muted }}>×</button>
              {sent === modal ? (
                <div style={{ textAlign: 'center', padding: '20px 0' }}>
                  <Icon.CheckCircle size={48} />
                  <p style={{ fontSize: 16, fontWeight: 600, color: T.charcoal, marginTop: 12 }}>On its way!</p>
                </div>
              ) : (
                <>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: T.charcoal, marginBottom: 20 }}>{tools[modal].title}</h3>
                  <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: T.charcoal, marginBottom: 8 }}>Where should we send it?</label>
                  <div style={{ display: 'flex', gap: 10 }}>
                    <input type="email" className="sa-input" placeholder="your@email.ie" value={emailVal} onChange={e => setEmailVal(e.target.value)} />
                    <button className="sa-btn-primary" style={{ fontSize: 14, padding: '13px 18px', flexShrink: 0 }} onClick={() => { if (emailVal) { submitEmail(emailVal, 'free-tools'); setSent(modal); } }}>Send</button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/* ── Guides Section ── */
function GuidesSection() {
  const R = React;
  const [freeModal, setFreeModal] = R.useState(false);
  const [emailVal, setEmailVal] = R.useState('');
  const [sent, setSent] = R.useState(false);

  const guides = [
    { badge: 'Free', badgeStyle: 'sa-tag-teal', title: 'EU AI Act for Irish Small Organisations', desc: 'Plain-English field guide, 17 pages.', price: 'Free with email', action: () => setFreeModal(true), cta: 'Get it free' },
    { badge: '€19', badgeStyle: 'sa-tag-navy', title: 'AI for Sole Traders', desc: 'Use ChatGPT, Claude, and Canva Magic to run your business like a team of ten — without the legal headaches.', price: '€19', action: () => {}, cta: 'Order' },
    { badge: '€39', badgeStyle: 'sa-tag-navy', title: 'Educational AI Governance', desc: 'Article 4 framework for primary, post-primary, and further education. Includes staff policy template.', price: '€39', action: () => {}, cta: 'Order' },
  ];

  return (
    <section id="guides" style={{ background: T.white, padding: '80px 24px' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p className="sa-eyebrow">Companion Guides</p>
          <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 700, color: T.charcoal, marginBottom: 10 }}>When you want to go deeper</h2>
          <p style={{ fontSize: 15, color: T.muted }}>The working documents we hand to clients during workshops.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
          {guides.map((g, i) => (
            <div key={i} className="sa-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <span className={`sa-tag ${g.badgeStyle}`} style={{ marginBottom: 14, display: 'inline-block', width: 'fit-content' }}>{g.badge}</span>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: T.charcoal, marginBottom: 8, flex: 1 }}>{g.title}</h3>
              <p style={{ fontSize: 13, color: T.muted, lineHeight: 1.7, marginBottom: 16 }}>{g.desc}</p>
              <p style={{ fontSize: 16, fontWeight: 700, color: T.charcoal, marginBottom: 16 }}>{g.price}</p>
              <button onClick={g.action} className="sa-btn-ghost" style={{ fontSize: 14, alignSelf: 'flex-start', border: `1.5px solid ${T.teal}`, borderRadius: 6, padding: '8px 16px', color: T.teal }}>{g.cta}</button>
            </div>
          ))}
        </div>
      </div>

      {freeModal && (
        <div onClick={() => setFreeModal(false)} style={{ position: 'fixed', inset: 0, background: 'rgba(27,58,107,0.45)', zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
          <div onClick={e => e.stopPropagation()} style={{ background: T.white, borderRadius: 14, padding: '32px', maxWidth: 480, width: '100%', position: 'relative', boxShadow: '0 20px 60px rgba(0,0,0,0.2)' }}>
            <button onClick={() => { setFreeModal(false); setEmailVal(''); setSent(false); }} style={{ position: 'absolute', top: 16, right: 16, background: 'none', border: 'none', cursor: 'pointer', fontSize: 20, color: T.muted }}>×</button>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <Icon.CheckCircle size={48} />
                <p style={{ fontSize: 16, fontWeight: 600, color: T.charcoal, marginTop: 12 }}>On its way!</p>
              </div>
            ) : (
              <>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: T.charcoal, marginBottom: 20 }}>The EU AI Act for Irish Small Organisations</h3>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: T.charcoal, marginBottom: 8 }}>Where should we send it?</label>
                <div style={{ display: 'flex', gap: 10 }}>
                  <input type="email" className="sa-input" placeholder="your@email.ie" value={emailVal} onChange={e => setEmailVal(e.target.value)} />
                  <button className="sa-btn-primary" style={{ fontSize: 14, padding: '13px 18px', flexShrink: 0 }} onClick={() => { if (emailVal) { submitEmail(emailVal, 'guide-free'); setSent(true); } }}>Send</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

/* ── Blog Section ── */
function BlogSection() {
  function fmtDate(d) {
    return new Date(d).toLocaleDateString('en-IE', { day: 'numeric', month: 'short', year: 'numeric' });
  }

  const posts = [
    {
      url: 'posts/why-ai-implementation-should-start-with-training-your-managers.html',
      cat: 'AI Strategy',
      title: 'Why AI Implementation Should Start With Training Your Managers',
      excerpt: 'Most organisations roll out AI tools to staff and hope for the best. The ones that get it right do something different first: they train the managers.',
      date: '2026-05-14',
      time: '5 min',
    },
    {
      url: 'posts/where-should-you-actually-start-with-ai-in-your-business.html',
      cat: 'Getting Started',
      title: 'Where Should You Actually Start With AI in Your Business?',
      excerpt: 'The instinct is to start with whatever feels most exciting. That instinct produces a lot of failed AI projects. Here is a better approach.',
      date: '2026-05-14',
      time: '5 min',
    },
    {
      url: 'posts/four-rules-every-staff-member-needs-before-they-use-ai-at-work.html',
      cat: 'Getting Started',
      title: 'Four Rules Every Staff Member Needs Before They Use AI at Work',
      excerpt: 'Before the policy documents and compliance checklists — four simple habits that stop the most common AI mistakes before they happen.',
      date: '2026-05-14',
      time: '4 min',
    },
    {
      url: 'posts/how-to-do-an-ai-security-audit-in-your-business.html',
      cat: 'Getting Organised',
      title: 'How to Do an AI Security Audit in Your Business (Without Hiring a Consultant)',
      excerpt: 'A four-part framework for finding out which AI tools your team is really using, what data is flowing through them, and what to do about it.',
      date: '2026-05-14',
      time: '5 min',
    },
    {
      url: 'posts/the-real-risks-of-using-ai-blindly-a-wake-up-call-for-irish-small-businesses.html',
      cat: 'AI Risk',
      title: 'The Real Risks of Using AI Blindly: A Wake-Up Call for Irish Small Businesses',
      excerpt: 'AI can draft emails, design graphics and answer customer queries — but unchecked use creates real risks around hallucinations, privacy, transparency, bias and brand trust.',
      date: '2026-05-05',
      time: '4 min',
    },
    {
      url: 'posts/the-eu-ai-act-what-every-irish-small-business-needs-to-know-without-the-legal-jargon.html',
      cat: 'EU AI Act',
      title: 'The EU AI Act: What Every Irish Small Business Needs to Know (Without the Legal Jargon)',
      excerpt: 'A practical explanation of how everyday AI use can create obligations for Irish businesses, schools and organisations — and the simple steps to take now.',
      date: '2026-05-04',
      time: '4 min',
    },
  ];

  return (
    <section id="knowledge-base" style={{ background: T.cream, padding: '80px 24px' }}>
      <div style={{ maxWidth: 1020, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p className="sa-eyebrow">Knowledge Base</p>
          <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 700, color: T.charcoal, marginBottom: 0 }}>Practical AI guides for Irish organisations</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', gap: 20, marginBottom: 40 }}>
          {posts.map((p, i) => (
            <a key={i} href={p.url} className="sa-card blog-card" style={{ padding: '22px 24px', textDecoration: 'none', display: 'flex', flexDirection: 'column' }}>
              <span className="sa-tag sa-tag-teal" style={{ marginBottom: 12, display: 'inline-block', alignSelf: 'flex-start' }}>{p.cat}</span>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: T.charcoal, lineHeight: 1.5, marginBottom: 10, flexGrow: 1 }}>{p.title}</h3>
              <p style={{ fontSize: 13, color: T.muted, lineHeight: 1.65, marginBottom: 16 }}>{p.excerpt}</p>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap', marginTop: 'auto' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, color: T.muted }}><Icon.Calendar />{fmtDate(p.date)}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, color: T.muted }}><Icon.Clock />{p.time} read</span>
                <span style={{ fontSize: 12, color: T.teal, fontWeight: 600, marginLeft: 'auto' }}>Read →</span>
              </div>
            </a>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <a href="blog.html" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: T.navy, color: T.white,
            fontFamily: 'inherit', fontWeight: 700, fontSize: 15,
            padding: '14px 32px', borderRadius: 8, textDecoration: 'none',
            transition: 'opacity 0.15s',
          }}
          onMouseOver={e => e.currentTarget.style.opacity = '0.85'}
          onMouseOut={e => e.currentTarget.style.opacity = '1'}
          >
            Browse all guides <Icon.Arrow size={14} color={T.white} />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── About Section ── */
function AboutSection() {
  const creds = [
    '5 years in the European Parliament',
    '15 years at Microsoft and VMware',
    "Master's in EU Legal System",
    'AI in Business & Digital Transformation',
    'Bilingual — English and Polish',
  ];
  return (
    <section id="about" style={{ background: T.white, padding: '80px 24px' }}>
      <div style={{ maxWidth: 960, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 56, alignItems: 'start' }}>
        <div>
          <div style={{ aspectRatio: '3/4', background: T.cream, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20, border: '1.5px dashed #b0bec5', color: T.muted, fontSize: 13, fontStyle: 'italic', textAlign: 'center', padding: 16 }}>
            Marcela's photograph
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {creds.map((c, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <Icon.Check size={18} />
                <span style={{ fontSize: 13, color: T.charcoal, lineHeight: 1.5 }}>{c}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="sa-eyebrow">About Marcela</p>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 700, color: T.charcoal, marginBottom: 20, textWrap: 'balance' }}>
            Making complex things make sense to ordinary people.
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, fontSize: 15, color: T.ink, lineHeight: 1.85 }}>
            <p>I started in the European Parliament, where I learned that regulations only work when people can actually understand them. I then spent fifteen years at Microsoft and VMware, translating complexity into something teams could act on.</p>
            <blockquote style={{ borderLeft: `4px solid ${T.teal}`, paddingLeft: 20, fontStyle: 'italic', fontWeight: 300, fontSize: 16, color: T.charcoal, lineHeight: 1.75 }}>
              "AI is powerful. Used responsibly, it can genuinely help small organisations. Used carelessly, it can quietly risk everything — your data, your customer trust, your reputation."
            </blockquote>
            <p>I hold a Master's in Public Administration in the EU Legal System and am completing programmes in AI in Business and Digital Transformation. I run SafeAI from Cork, supporting businesses, schools, and community organisations across Ireland.</p>
            <p style={{ fontSize: 13, fontStyle: 'italic', color: T.teal }}>No jargon. No upselling. Practical guidance you can actually use.</p>
          </div>
          <div style={{ marginTop: 28, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="#booking" className="sa-btn-primary" style={{ fontSize: 15, padding: '14px 26px' }}>Book a call</a>
            <a href="#free-tools" className="sa-btn-ghost" style={{ fontSize: 14, border: `1.5px solid ${T.teal}`, borderRadius: 6, padding: '13px 22px' }}>Download a free guide</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── FAQ Section ── */
function FAQSection() {
  const R = React;
  const [open, setOpen] = R.useState(null);
  const faqs = [
    { q: 'Do I actually have EU AI Act obligations as a small business?', a: 'Most likely, yes. If you use AI tools commercially — including general-purpose tools like ChatGPT — the EU AI Act imposes obligations on you. The most immediate is Article 4, which requires AI literacy for all staff using AI in their work. SafeAI provides general information and training; for legal advice specific to your situation, consult a solicitor.' },
    { q: 'Is SafeAI a law firm?', a: 'No. SafeAI is an AI awareness and training service — not a law firm, not a compliance auditor, and not a GDPR consultant. Marcela helps organisations understand what AI tools they use, what the EU AI Act says about AI literacy, and how to put basic safe-use practices in place. For legal advice on your specific situation, you need a solicitor.' },
    { q: 'How long does a workshop take?', a: '2.5 hours, on-site or remote. We work with teams of up to 20 people. Your team maps every AI tool in use, discusses safe practices, and agrees a draft Acceptable Use Policy to build on together.' },
    { q: 'What if I only use ChatGPT occasionally?', a: "Even occasional use can create obligations, particularly around data protection (GDPR) and transparency. The EU AI Act's Article 4 AI literacy requirement applies to anyone using AI in a commercial context — there's no minimum usage threshold." },
    { q: 'Do you work with schools and community organisations?', a: 'Yes — education and community organisations are two of our three core audiences. We have a specific guide for educational settings (primary, post-primary, and further education) and experience working with non-profits and GAA clubs.' },
    { q: 'Can I get something for free before committing?', a: "Absolutely. Download the free Irish SME AI Risk Checklist or the EU AI Act field guide from the Free Tools section. You'll get a practical sense of where your organisation stands with no obligation." },
  ];

  return (
    <section id="faq" style={{ background: T.cream, padding: '80px 24px' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p className="sa-eyebrow">FAQ</p>
          <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 700, color: T.charcoal }}>Common questions</h2>
        </div>
        <div>
          {faqs.map((f, i) => (
            <div key={i} className="faq-item">
              <div className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
                <span style={{ fontSize: 15, fontWeight: 600, color: T.charcoal, lineHeight: 1.5 }}>{f.q}</span>
                <span className="faq-chevron"><Icon.Plus open={open === i} /></span>
              </div>
              <div className="faq-a" style={{ maxHeight: open === i ? 300 : 0, paddingBottom: open === i ? 20 : 0, overflow: 'hidden', transition: 'max-height 0.3s ease, padding-bottom 0.3s ease' }}>
                <p style={{ fontSize: 14, color: T.ink, lineHeight: 1.85 }}>{f.a}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <a href="faq.html" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 15, fontWeight: 600, color: T.teal, textDecoration: 'none' }}>
            See all 49 questions &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── CTA Strip ── */
function CTAStrip() {
  return (
    <section style={{ background: T.teal, padding: '60px 24px' }}>
      <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 700, color: T.white, marginBottom: 10 }}>
          Start using AI more safely and confidently
        </h2>
        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.85)', marginBottom: 36, maxWidth: 460, margin: '0 auto 36px' }}>
          Practical AI awareness training for Irish organisations.
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#free-tools"
            style={{ display: 'inline-flex', alignItems: 'center', background: T.white, color: T.teal, fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 15, padding: '15px 28px', borderRadius: 6, textDecoration: 'none', transition: 'opacity 0.15s' }}>
            Download the Free AI Checklist
          </a>
          <a href="https://cal.com/safeai/workshop" target="_blank" rel="noopener noreferrer" className="sa-btn-outline" style={{ fontSize: 15, padding: '13px 28px' }}>
            Book a Workshop
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── Footer ── */
function Footer() {
  const qlinks = [
    { label: 'Services', href: '#services' },
    { label: 'Free Tools', href: '#free-tools' },
    { label: 'Guides', href: '#guides' },
    { label: 'Knowledge Base', href: 'blog.html' },
    { label: 'About', href: '#about' },
    { label: 'FAQ', href: 'faq.html' },
    { label: 'Why Train?', href: 'why-train.html' },
  ];
  return (
    <footer style={{ background: T.navy, padding: '56px 24px 32px' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 32, marginBottom: 40 }}>
          <div>
            <div style={{ marginBottom: 16, display: 'inline-block', background: T.white, borderRadius: 12, padding: '10px 16px' }}>
              <img
                src="safeai-logo.svg"
                alt="SafeAI logo"
                style={{ height: 52, width: 'auto', display: 'block' }}
              />
            </div>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>Cork, Ireland</p>
          </div>
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 600, color: T.white, marginBottom: 14 }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {qlinks.map(l => <a key={l.label} href={l.href} style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', textDecoration: 'none', transition: 'color 0.15s' }}
                onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.55)'}>{l.label}</a>)}
            </div>
          </div>
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 600, color: T.white, marginBottom: 14 }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <a href="mailto:marcela@safeai.ie" style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>marcela@safeai.ie</a>
              <a href="#booking" style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>Book a call ↗</a>
            </div>
            <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
              {[
                { icon: <Icon.Facebook size={16} color="rgba(255,255,255,0.6)" />, href: 'https://www.facebook.com/SafeAI.Ireland/', label: 'Facebook' },
                { icon: <Icon.Instagram size={16} color="rgba(255,255,255,0.6)" />, href: 'https://www.instagram.com/safeai.ireland', label: 'Instagram' },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  style={{ width: 34, height: 34, borderRadius: 7, background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.15s', textDecoration: 'none' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.16)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 24, display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
          {['© 2026 SafeAI','marcela@safeai.ie','General information, not legal advice.','Privacy','Terms','Cookies'].map((item, i) => (
            <React.Fragment key={i}>
              {i > 0 && <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: 11 }}>·</span>}
              <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>{item}</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </footer>
  );
}

/* ── Social Proof Bar ── */
function SocialProofBar() {
  const sectors = ['SMEs & Sole Traders', 'Schools & Further Education', 'Community Organisations', 'Non-profits & GAA Clubs', 'Cork, Dublin & Remote'];
  return (
    <div style={{ background: '#fff', borderBottom: '1px solid #e8edf2', padding: '18px 24px' }}>
      <div style={{ maxWidth: 960, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
        <span style={{ fontSize: 11, color: T.muted, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginRight: 6 }}>Serving</span>
        {sectors.map(function(s, i) {
          return (
            <span key={i} style={{ fontSize: 12, color: T.charcoal, background: T.cream, border: '1px solid #d8e4eb', borderRadius: 20, padding: '4px 14px' }}>{s}</span>
          );
        })}
      </div>
    </div>
  );
}

/* ── Booking Modal (triggered by href="#booking") ── */
function BookingModal() {
  const R = React;
  const [open, setOpen] = R.useState(false);
  R.useEffect(function() {
    function check() { setOpen(window.location.hash === '#booking'); }
    check();
    window.addEventListener('hashchange', check);
    return function() { window.removeEventListener('hashchange', check); };
  }, []);
  function close() {
    window.history.replaceState(null, '', window.location.pathname + window.location.search);
    setOpen(false);
  }
  if (!open) return null;
  return (
    <div onClick={close} style={{ position: 'fixed', inset: 0, background: 'rgba(27,58,107,0.6)', zIndex: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div onClick={function(e) { e.stopPropagation(); }} style={{ background: T.white, borderRadius: 14, width: '100%', maxWidth: 780, height: '88vh', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '14px 20px', borderBottom: '1px solid #e8edf2', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0 }}>
          <span style={{ fontSize: 15, fontWeight: 600, color: T.charcoal }}>Book a call with Marcela</span>
          <button onClick={close} style={{ background: 'none', border: 'none', fontSize: 22, cursor: 'pointer', color: T.muted, lineHeight: 1, padding: '0 4px', fontFamily: 'Poppins, sans-serif' }}>&times;</button>
        </div>
        <iframe src="https://cal.com/safeai/call?embed=true" style={{ flex: 1, border: 'none', width: '100%' }} title="Book a call with Marcela" />
      </div>
    </div>
  );
}

/* ── Cookie Banner (GDPR) ── */
function CookieBanner() {
  const R = React;
  const [visible, setVisible] = R.useState(false);
  R.useEffect(function() { setVisible(!localStorage.getItem('safeai-cookie-ok')); }, []);
  function accept() { localStorage.setItem('safeai-cookie-ok', '1'); setVisible(false); }
  if (!visible) return null;
  return (
    <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 500, background: T.navy, padding: '14px 24px', display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap', boxShadow: '0 -4px 20px rgba(0,0,0,0.2)' }}>
      <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, flex: 1, margin: 0 }}>
        We use essential cookies to keep this site working. By continuing you agree to our <a href="#" style={{ color: T.teal, textDecoration: 'none' }}>cookie policy</a>.
      </p>
      <div style={{ display: 'flex', gap: 10, flexShrink: 0 }}>
        <button onClick={accept} className="sa-btn-primary" style={{ fontSize: 13, padding: '9px 20px' }}>Accept</button>
        <button onClick={accept} style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Poppins, sans-serif', padding: '9px 4px' }}>Dismiss</button>
      </div>
    </div>
  );
}

/* ── WhatsApp Floating Button ── */
function WhatsAppButton() {
  const phone = '353000000000'; // replace with Marcela's WhatsApp number e.g. 353851234567
  const msg = 'Hi Marcela, I found SafeAI and would like to ask a quick question.';
  return (
    <a
      href={'https://wa.me/' + phone + '?text=' + encodeURIComponent(msg)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
      style={{ position: 'fixed', bottom: 88, right: 24, zIndex: 400, width: 52, height: 52, borderRadius: '50%', background: '#25D366', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 16px rgba(37,211,102,0.4)', textDecoration: 'none', transition: 'transform 0.15s' }}
      onMouseEnter={function(e) { e.currentTarget.style.transform = 'scale(1.1)'; }}
      onMouseLeave={function(e) { e.currentTarget.style.transform = 'scale(1)'; }}
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>
  );
}

/* ── Newsletter Section ── */
function NewsletterSection() {
  const R = React;
  const [email, setEmail] = R.useState('');
  const [status, setStatus] = R.useState(null);
  function handleSubmit() {
    if (!email) return;
    submitEmail(email, 'newsletter');
    setStatus('sent');
  }
  return (
    <section style={{ background: T.tealLight, padding: '56px 24px' }}>
      <div style={{ maxWidth: 540, margin: '0 auto', textAlign: 'center' }}>
        <p className="sa-eyebrow">Stay informed</p>
        <h2 style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 700, color: T.charcoal, marginBottom: 8 }}>
          EU AI Act updates for Irish organisations
        </h2>
        <p style={{ fontSize: 14, color: T.muted, marginBottom: 28 }}>
          Plain-English updates when the law changes. One email per month at most.
        </p>
        {status === 'sent' ? (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
            <Icon.CheckCircle size={36} />
            <span style={{ fontSize: 15, fontWeight: 600, color: T.charcoal }}>You are on the list!</span>
          </div>
        ) : (
          <div style={{ display: 'flex', gap: 10, maxWidth: 420, margin: '0 auto' }}>
            <input type="email" className="sa-input" placeholder="your@email.ie" value={email} onChange={function(e) { setEmail(e.target.value); }} onKeyDown={function(e) { if (e.key === 'Enter') handleSubmit(); }} />
            <button onClick={handleSubmit} className="sa-btn-primary" style={{ flexShrink: 0, padding: '13px 20px', fontSize: 14 }}>Subscribe</button>
          </div>
        )}
      </div>
    </section>
  );
}

// Export everything to window
Object.assign(window, {
  T, Icon, Navbar, HeroSection, ProblemSection, TimelineSection,
  QuizSection, ServicesSection, FreeToolsSection, GuidesSection,
  BlogSection, AboutSection, FAQSection, CTAStrip, Footer,
  SocialProofBar, BookingModal, CookieBanner,
  WhatsAppButton, NewsletterSection
});
