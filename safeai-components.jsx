// SafeAI — shared components, tokens, icons
// Exported to window at bottom

/* ── Design tokens ── */
const T = {
  paper:     '#FAF7F2',
  paperWarm: '#F2EDE2',
  ink:       '#0F2A44',
  inkSoft:   '#2A4360',
  sage:      '#4F7864',
  sageDark:  '#3D5E4F',
  terra:     '#C66B3D',
  terraDark: '#A2552E',
  grey:      '#6B6F76',
  line:      '#E5E0D6',
  white:     '#FFFFFF',
  // legacy aliases kept for BookingModal / CookieBanner / WhatsApp
  navy:      '#0F2A44',
  teal:      '#4F7864',
  tealDark:  '#3D5E4F',
  tealLight: '#EEF4F0',
  charcoal:  '#0F2A44',
  muted:     '#6B6F76',
  cream:     '#FAF7F2',
};

/* ── Formspree email submission ── */
const FORMSPREE_ID = 'YOUR_FORMSPREE_ID';
function submitEmail(email, source) {
  if (!email || FORMSPREE_ID === 'YOUR_FORMSPREE_ID') return Promise.resolve();
  return fetch('https://formspree.io/f/' + FORMSPREE_ID, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, source }),
  }).catch(() => {});
}

/* ── CSS variables + base styles injected once ── */
if (!document.getElementById('safeai-base')) {
  const s = document.createElement('style');
  s.id = 'safeai-base';
  s.textContent = `
    :root {
      --paper:      #FAF7F2;
      --paper-warm: #F2EDE2;
      --ink:        #0F2A44;
      --ink-soft:   #2A4360;
      --sage:       #4F7864;
      --sage-dark:  #3D5E4F;
      --terra:      #C66B3D;
      --terra-dark: #A2552E;
      --grey:       #6B6F76;
      --line:       #E5E0D6;
    }
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; font-size: 16px; }
    body { font-family: 'Hanken Grotesk', sans-serif; color: var(--ink); background: var(--paper); }
    h1, h2, h3, h4, h5 { font-family: 'Fraunces', serif; font-weight: 600; line-height: 1.2; }
    :focus-visible { outline: 2px solid var(--terra); outline-offset: 2px; }

    .sa-kicker {
      font-family: 'Fraunces', serif; font-style: italic;
      font-size: 12px; font-weight: 400; letter-spacing: 0.05em;
      color: var(--terra); margin-bottom: 16px; display: block;
    }

    .sa-btn-primary {
      display: inline-flex; align-items: center; justify-content: center; gap: 8px;
      background: var(--terra); color: #fff; font-family: 'Hanken Grotesk', sans-serif;
      font-weight: 600; font-size: 15px; padding: 14px 28px; border-radius: 4px;
      border: none; cursor: pointer; text-decoration: none;
      transition: background 0.18s, transform 0.12s; line-height: 1;
    }
    .sa-btn-primary:hover { background: var(--terra-dark); transform: translateY(-1px); }

    .sa-btn-outline {
      display: inline-flex; align-items: center; justify-content: center; gap: 8px;
      background: transparent; color: var(--ink); font-family: 'Hanken Grotesk', sans-serif;
      font-weight: 600; font-size: 15px; padding: 13px 28px; border-radius: 4px;
      border: 2px solid var(--line); cursor: pointer; text-decoration: none;
      transition: border-color 0.18s;
    }
    .sa-btn-outline:hover { border-color: var(--ink); }

    .sa-btn-ghost {
      display: inline-flex; align-items: center; gap: 6px;
      background: transparent; color: var(--terra); font-family: 'Hanken Grotesk', sans-serif;
      font-weight: 500; font-size: 14px; border: none; cursor: pointer; text-decoration: none;
      transition: color 0.15s;
    }
    .sa-btn-ghost:hover { color: var(--terra-dark); }

    .sa-section { padding: 80px 24px; }
    @media (max-width: 768px) { .sa-section { padding: 56px 24px; } }
    .sa-max { max-width: 1180px; margin: 0 auto; }

    .sa-input {
      flex: 1; padding: 13px 16px; border-radius: 4px;
      border: 1.5px solid var(--line); background: var(--paper);
      font-family: 'Hanken Grotesk', sans-serif; font-size: 14px; color: var(--ink);
      transition: border-color 0.15s;
    }
    .sa-input::placeholder { color: var(--grey); }
    .sa-input:focus { outline: none; border-color: var(--terra); }

    /* FAQ details/summary — native no-JS accordions */
    details.faq-item { border-bottom: 1px solid var(--line); }
    details.faq-item summary {
      cursor: pointer; padding: 20px 0; list-style: none;
      display: flex; justify-content: space-between; align-items: center; gap: 16px;
      font-family: 'Hanken Grotesk', sans-serif; font-size: 15px; font-weight: 600;
      color: var(--ink); line-height: 1.5;
    }
    details.faq-item summary::-webkit-details-marker { display: none; }
    details.faq-item summary::after {
      content: '+'; flex-shrink: 0; font-size: 22px; font-weight: 300;
      color: var(--terra); font-family: 'Fraunces', serif; font-style: italic;
      transition: transform 0.22s; line-height: 1;
    }
    details.faq-item[open] summary::after { transform: rotate(45deg); }
    details.faq-item .faq-body {
      padding: 0 48px 20px 0; font-family: 'Hanken Grotesk', sans-serif;
      font-size: 14px; color: var(--ink-soft); line-height: 1.85;
    }

    /* Blog card */
    .blog-card { transition: box-shadow 0.2s, transform 0.2s; }
    .blog-card:hover { box-shadow: 0 6px 24px rgba(15,42,68,0.08); transform: translateY(-2px); }

    /* Quiz option */
    .quiz-opt:hover { border-color: var(--terra) !important; background: #FAF0E8 !important; }

    /* Mobile nav */
    .sa-nav-links { display: flex; align-items: center; gap: 28px; }
    .sa-hamburger { display: none; background: none; border: none; cursor: pointer; padding: 6px; color: var(--ink); }
    .sa-mobile-menu { display: none; }
    @media (max-width: 860px) {
      .sa-nav-links { display: none; }
      .sa-hamburger { display: flex; align-items: center; justify-content: center; }
      .sa-mobile-menu {
        display: block; position: fixed; top: 64px; left: 0; right: 0;
        background: rgba(250,247,242,0.98); backdrop-filter: blur(8px);
        border-bottom: 1px solid var(--line); padding: 20px 24px 28px; z-index: 99;
      }
      .sa-mobile-link {
        display: block; padding: 13px 0; font-size: 16px; font-weight: 500;
        color: var(--ink); text-decoration: none; border-bottom: 1px solid var(--line);
        font-family: 'Hanken Grotesk', sans-serif;
      }
      .sa-mobile-link:last-child { border-bottom: none; }
    }

    /* About section responsive */
    .about-grid { display: flex; gap: 56px; align-items: flex-start; flex-wrap: wrap; }
    .about-photo { flex: 0 0 260px; min-width: 200px; max-width: 300px; }
    .about-text { flex: 1 1 380px; min-width: 0; }

    /* Footer grid responsive */
    .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 32px; margin-bottom: 40px; }
    @media (max-width: 768px) { .footer-grid { grid-template-columns: 1fr 1fr; } }
    @media (max-width: 480px) { .footer-grid { grid-template-columns: 1fr; } }
  `;
  document.head.appendChild(s);
}

/* ── Simple SVG icons ── */
const Icon = {
  Arrow: ({ size = 16, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Check: ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="8" fill={T.terra} opacity="0.12"/>
      <path d="M4.5 8.5l2.5 2.5 4.5-5" stroke={T.terra} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  CheckCircle: ({ size = 48 }) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="24" fill="#EEF4F0"/>
      <path d="M14 25l7 7 13-14" stroke={T.sageDark} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Calendar: () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <rect x="1" y="2" width="12" height="11" rx="2" stroke={T.grey} strokeWidth="1.2"/>
      <path d="M1 6h12M5 1v2M9 1v2" stroke={T.grey} strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  ),
  Clock: () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <circle cx="7" cy="7" r="6" stroke={T.grey} strokeWidth="1.2"/>
      <path d="M7 4v3.5l2 2" stroke={T.grey} strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  ),
  Facebook: ({ size = 18, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Instagram: ({ size = 18, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" stroke={color} strokeWidth="1.8"/>
      <circle cx="12" cy="12" r="4" stroke={color} strokeWidth="1.8"/>
      <circle cx="17.5" cy="6.5" r="1" fill={color}/>
    </svg>
  ),
};

/* ── Navbar ── */
function Navbar() {
  const R = React;
  const [scrolled, setScrolled] = R.useState(false);
  const [mobileOpen, setMobileOpen] = R.useState(false);

  R.useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const links = [
    { label: 'Products', href: '#products' },
    { label: "Who it's for", href: '#audience' },
    { label: 'About', href: '#about' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled || mobileOpen ? 'rgba(250,247,242,0.97)' : 'transparent',
        backdropFilter: scrolled || mobileOpen ? 'blur(8px)' : 'none',
        borderBottom: scrolled ? `1px solid ${T.line}` : 'none',
        transition: 'background 0.3s, border-color 0.3s',
      }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 24px', minHeight: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
          <a href="/" aria-label="SafeAI home" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img src="safeai-logo.svg" alt="SafeAI" style={{ height: 40, width: 'auto' }} />
          </a>

          <div className="sa-nav-links" role="list">
            {links.map(l => (
              <a key={l.label} href={l.href} role="listitem"
                style={{ fontSize: 14, fontWeight: 500, color: T.inkSoft, textDecoration: 'none', transition: 'color 0.15s', fontFamily: "'Hanken Grotesk', sans-serif" }}
                onMouseEnter={e => e.currentTarget.style.color = T.terra}
                onMouseLeave={e => e.currentTarget.style.color = T.inkSoft}>
                {l.label}
              </a>
            ))}
            <a href="/pl/" lang="pl" aria-label="Wersja polska" style={{
              fontSize: 12, fontWeight: 700, color: T.terra, fontFamily: "'Hanken Grotesk', sans-serif",
              border: `1.5px solid ${T.terra}`, borderRadius: 20, padding: '5px 14px',
              textDecoration: 'none', letterSpacing: '0.04em', transition: 'background 0.15s, color 0.15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = T.terra; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = T.terra; }}>
              Polski
            </a>
          </div>

          <button className="sa-hamburger" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle navigation menu" aria-expanded={mobileOpen}>
            {mobileOpen
              ? <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M17 5L5 17M5 5l12 12" stroke={T.ink} strokeWidth="2" strokeLinecap="round"/></svg>
              : <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M3 7h16M3 11h16M3 15h16" stroke={T.ink} strokeWidth="2" strokeLinecap="round"/></svg>
            }
          </button>
        </div>

        {mobileOpen && (
          <nav className="sa-mobile-menu" aria-label="Mobile navigation">
            {links.map(l => (
              <a key={l.label} href={l.href} className="sa-mobile-link" onClick={() => setMobileOpen(false)}>{l.label}</a>
            ))}
            <a href="/pl/" className="sa-mobile-link" lang="pl" onClick={() => setMobileOpen(false)} style={{ color: T.terra }}>Polski</a>
          </nav>
        )}
      </nav>
    </header>
  );
}

/* ── Hero ── */
function HeroSection() {
  return (
    <section id="hero" style={{ background: T.paper, paddingTop: 64, minHeight: '94vh', display: 'flex', alignItems: 'center' }}>
      <div className="sa-max" style={{ padding: '80px 24px' }}>
        <div style={{ display: 'flex', gap: 48, alignItems: 'flex-start', flexWrap: 'wrap' }}>

          {/* Left: text */}
          <div style={{ flex: '1 1 460px', minWidth: 0 }}>
            <p style={{
              fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase',
              color: T.terra, fontFamily: "'Hanken Grotesk', sans-serif", marginBottom: 22,
            }}>
              EU AI Act compliance · Ireland · plain English
            </p>

            <h1 style={{ fontSize: 'clamp(36px, 5.2vw, 66px)', fontWeight: 600, color: T.ink, lineHeight: 1.1, marginBottom: 26, maxWidth: 680 }}>
              AI compliance for Irish small businesses —{' '}
              <em style={{ fontStyle: 'italic', color: T.sageDark }}>without the consultant fees.</em>
            </h1>

            <p style={{ fontSize: 18, color: T.inkSoft, lineHeight: 1.8, maxWidth: 560, marginBottom: 36, fontFamily: "'Hanken Grotesk', sans-serif" }}>
              I'm Marcela. I help Irish sole traders and micro-businesses meet their EU AI Act obligations with plain-English templates and short, practical training. €19 to buy. Ten minutes to fill. File it and sleep at night.
            </p>

            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center', marginBottom: 14 }}>
              <a href="#quiz" className="sa-btn-primary" style={{ fontSize: 16, padding: '16px 32px' }}>
                Take the 2-minute AI risk check <Icon.Arrow size={16} color="#fff" />
              </a>
              <a href="#products" className="sa-btn-outline" style={{ fontSize: 15, padding: '14px 28px' }}>
                See the products
              </a>
            </div>

            <p style={{ fontSize: 12, color: T.grey, lineHeight: 1.6, fontFamily: "'Hanken Grotesk', sans-serif" }}>
              Free · No email required to see your score · Available in English and Polish
            </p>
          </div>

          {/* Right: anchor card */}
          <aside aria-label="Price comparison" style={{
            flex: '0 1 380px', minWidth: 260,
            background: T.paperWarm,
            border: `1px solid ${T.line}`,
            borderLeft: `4px solid ${T.terra}`,
            borderRadius: 4,
            padding: '28px 28px 24px',
            alignSelf: 'flex-start',
            marginTop: 16,
          }}>
            <p style={{
              fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase',
              color: T.grey, fontFamily: "'Hanken Grotesk', sans-serif", marginBottom: 18,
            }}>
              For comparison
            </p>
            <blockquote style={{
              fontFamily: "'Fraunces', serif", fontSize: 'clamp(18px, 2.2vw, 24px)',
              fontStyle: 'italic', fontWeight: 400, color: T.ink, lineHeight: 1.5, marginBottom: 18,
            }}>
              "An AI compliance consultant in Ireland costs €2,000–€5,000. SafeAI does the same for €19, once."
            </blockquote>
            <p style={{ fontSize: 13, color: T.inkSoft, lineHeight: 1.8, fontFamily: "'Hanken Grotesk', sans-serif" }}>
              Same regulation. Same Article 4 requirement. Same documents you'd hand a regulator. The difference is the price — and that you don't have to wait four weeks.
            </p>
          </aside>

        </div>
      </div>
    </section>
  );
}

/* ── Quiz (embedded, score shown immediately — no email gate) ── */
function QuizSection() {
  const R = React;

  const questions = [
    { q: 'Do you or your staff use any AI tools (ChatGPT, Copilot, Gemini, Canva AI, etc.)?', opts: ['Yes, regularly', 'Yes, occasionally', 'No / not sure'], risk: [1, 0.5, 0] },
    { q: 'Do you have a written AI Acceptable Use Policy?', opts: ['Yes, signed by all staff', 'Draft exists, not signed', 'No'], risk: [-1, 0, 1] },
    { q: 'Have you or your staff completed AI literacy training in the last 12 months?', opts: ['Yes, with records kept', 'Informally, nothing documented', 'No'], risk: [-1, 0.5, 1] },
    { q: 'Do you have a record of which AI tools your business uses?', opts: ['Yes, full inventory', 'Partial list', 'No'], risk: [-1, 0, 1] },
    { q: 'Do staff ever paste client or customer data into AI tools?', opts: ['Yes, regularly', 'Sometimes', 'Never'], risk: [1, 0.5, 0] },
    { q: 'Have your staff signed anything related to AI use at work?', opts: ['Yes, all have signed', 'Some have', 'No'], risk: [-1, 0, 1] },
    { q: 'Does everyone on your team know which AI tools are approved vs. off-limits?', opts: ["Yes, it's written down", 'They sort of know', 'No'], risk: [-1, 0, 1] },
    { q: 'Have you taken any Article 4 compliance steps since 2 February 2025?', opts: ['Yes, have documentation', 'Aware but not acted', 'No / unaware of the deadline'], risk: [-1, 0.5, 1] },
  ];

  const [step, setStep] = R.useState(0);
  const [answers, setAnswers] = R.useState(new Array(questions.length).fill(null));
  const [email, setEmail] = R.useState('');
  const [emailSent, setEmailSent] = R.useState(false);

  function pick(optIdx) {
    const a = [...answers];
    a[step] = optIdx;
    setAnswers(a);
    if (step < questions.length - 1) setStep(step + 1);
    else setStep(questions.length);
  }

  function calcScore() {
    return answers.reduce((sum, ans, i) => {
      if (ans === null) return sum;
      return sum + (questions[i].risk[ans] || 0);
    }, 0);
  }

  function getRisk(score) {
    if (score <= 1) return 'Low';
    if (score <= 4) return 'Medium';
    return 'High';
  }

  function getGaps() {
    const gaps = [];
    if (answers[1] === 2) gaps.push('No written AI Acceptable Use Policy — required for Article 4');
    if (answers[2] >= 1) gaps.push('No documented AI literacy training for staff');
    if (answers[3] >= 1) gaps.push('No inventory of AI tools used in the business');
    if (answers[5] >= 1) gaps.push('Staff have not signed an AI use agreement');
    if (answers[7] >= 1) gaps.push('No Article 4 compliance documentation since Feb 2025');
    return gaps;
  }

  const riskMeta = {
    Low:    { bg: '#F0F4F1', text: T.sageDark, border: T.sage, label: 'Low exposure' },
    Medium: { bg: '#FFF8F2', text: '#7A3A18', border: T.terra, label: 'Medium exposure' },
    High:   { bg: '#FFF4F0', text: '#7A2010', border: '#C0402A', label: 'High exposure' },
  };
  const riskText = {
    Low:    "You've taken some steps. A quick review will confirm you're covered under Article 4.",
    Medium: "Your AI use creates some gaps under Article 4. These are straightforward to close with the right templates.",
    High:   "Your current setup creates real exposure under Article 4. This is common — and fixable with the Sole Trader Pack.",
  };

  const score = step === questions.length ? calcScore() : null;
  const risk = score !== null ? getRisk(score) : null;

  function restart() {
    setStep(0);
    setAnswers(new Array(questions.length).fill(null));
    setEmail('');
    setEmailSent(false);
  }

  return (
    <section id="quiz" className="sa-section" style={{ background: T.paperWarm, borderTop: `1px solid ${T.line}`, borderBottom: `1px solid ${T.line}` }}>
      <div style={{ maxWidth: 680, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <span className="sa-kicker" style={{ display: 'block', textAlign: 'center' }}>2-minute AI risk check</span>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', color: T.ink, marginBottom: 10 }}>
            Find out where you stand under Article 4
          </h2>
          <p style={{ fontSize: 14, color: T.grey, fontFamily: "'Hanken Grotesk', sans-serif" }}>
            8 questions · instant result · no email required
          </p>
        </div>

        <div style={{ background: T.paper, border: `1.5px solid ${T.line}`, borderRadius: 6, padding: '32px 36px' }}>
          {step < questions.length ? (
            <>
              <div style={{ marginBottom: 28 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span style={{ fontSize: 12, color: T.grey, fontFamily: "'Hanken Grotesk', sans-serif" }}>
                    Question {step + 1} of {questions.length}
                  </span>
                  <span style={{ fontSize: 12, color: T.terra, fontWeight: 600, fontFamily: "'Hanken Grotesk', sans-serif" }}>
                    {Math.round(((step + 1) / questions.length) * 100)}%
                  </span>
                </div>
                <div style={{ height: 3, background: T.line, borderRadius: 2, overflow: 'hidden' }}>
                  <div style={{ width: `${((step + 1) / questions.length) * 100}%`, height: '100%', background: T.terra, borderRadius: 2, transition: 'width 0.4s ease' }} />
                </div>
              </div>
              <h3 style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 17, fontWeight: 600, color: T.ink, marginBottom: 20, lineHeight: 1.5 }}>
                {questions[step].q}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {questions[step].opts.map((o, i) => (
                  <button key={i} className="quiz-opt" onClick={() => pick(i)}
                    style={{ padding: '14px 18px', background: T.paper, border: `1.5px solid ${T.line}`, borderRadius: 4, fontSize: 14, color: T.ink, textAlign: 'left', cursor: 'pointer', fontFamily: "'Hanken Grotesk', sans-serif", transition: 'all 0.15s' }}>
                    {o}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <>
              {/* Score shown immediately — no email gate */}
              <div style={{ textAlign: 'center', marginBottom: 24 }}>
                <span style={{
                  display: 'inline-block', padding: '8px 24px', borderRadius: 3,
                  background: riskMeta[risk].bg, color: riskMeta[risk].text,
                  border: `1.5px solid ${riskMeta[risk].border}`,
                  fontFamily: "'Fraunces', serif", fontSize: 18, fontStyle: 'italic',
                }}>
                  {riskMeta[risk].label}
                </span>
              </div>

              <p style={{ fontSize: 15, color: T.ink, lineHeight: 1.85, marginBottom: 20, textAlign: 'center', fontFamily: "'Hanken Grotesk', sans-serif" }}>
                {riskText[risk]}
              </p>

              {getGaps().length > 0 && (
                <div style={{ background: T.paperWarm, border: `1px solid ${T.line}`, borderRadius: 4, padding: '16px 20px', marginBottom: 24 }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: T.ink, marginBottom: 10, letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: "'Hanken Grotesk', sans-serif" }}>
                    Specific gaps found:
                  </p>
                  {getGaps().map((g, i) => (
                    <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 6 }}>
                      <span style={{ color: T.terra, fontSize: 14, flexShrink: 0, lineHeight: 1.6 }}>→</span>
                      <span style={{ fontSize: 13, color: T.inkSoft, lineHeight: 1.6, fontFamily: "'Hanken Grotesk', sans-serif" }}>{g}</span>
                    </div>
                  ))}
                </div>
              )}

              <div style={{ textAlign: 'center', marginBottom: 24 }}>
                <a href="#products" className="sa-btn-primary" style={{ fontSize: 15, padding: '14px 28px' }}>
                  See the products that close these gaps <Icon.Arrow size={15} color="#fff" />
                </a>
              </div>

              {/* Optional email — clearly labelled as optional */}
              <div style={{ paddingTop: 20, borderTop: `1px solid ${T.line}` }}>
                {!emailSent ? (
                  <>
                    <p style={{ fontSize: 13, color: T.grey, marginBottom: 12, fontFamily: "'Hanken Grotesk', sans-serif" }}>
                      Optional: get a copy of your results by email. We only follow up if you ask us to.
                    </p>
                    <div style={{ display: 'flex', gap: 10 }}>
                      <input type="email" className="sa-input" placeholder="your@email.ie" value={email} onChange={e => setEmail(e.target.value)} />
                      <button className="sa-btn-primary" style={{ fontSize: 14, padding: '13px 18px', flexShrink: 0 }}
                        onClick={() => { if (email) { submitEmail(email, 'quiz'); setEmailSent(true); } }}>
                        Send
                      </button>
                    </div>
                  </>
                ) : (
                  <p style={{ fontSize: 14, color: T.sageDark, fontFamily: "'Hanken Grotesk', sans-serif" }}>✓ Sent — check your inbox.</p>
                )}
              </div>

              <div style={{ marginTop: 16, textAlign: 'center' }}>
                <button onClick={restart} style={{ fontSize: 12, color: T.grey, background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'Hanken Grotesk', sans-serif", textDecoration: 'underline' }}>
                  Start again
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

/* ── Section 1 — Artifacts ── */
function ArtifactsSection() {
  const items = [
    { num: '01', label: 'Signed AI Acceptable Use Policy', desc: 'One page. Names which tools your business approves and which data is off-limits. Staff sign it.' },
    { num: '02', label: 'Article 4 Training Log', desc: 'Demonstrable evidence that your staff have AI literacy. Required since 2 February 2025.' },
    { num: '03', label: 'Per-staff completion certificates', desc: 'Printable. Goes in the compliance folder. Proof, not pedigree.' },
    { num: '04', label: 'One-page compliance summary', desc: "The page you hand a regulator (or your accountant) that says \"here's what we've done.\" Short." },
  ];
  return (
    <section id="artifacts" className="sa-section" style={{ background: T.paper }}>
      <div className="sa-max">
        <div style={{ marginBottom: 56, maxWidth: 680 }}>
          <span className="sa-kicker">N° 01 · The artifact</span>
          <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', color: T.ink, marginBottom: 18, lineHeight: 1.15 }}>
            What you actually walk away with.
          </h2>
          <p style={{ fontSize: 17, color: T.inkSoft, lineHeight: 1.8, fontFamily: "'Hanken Grotesk', sans-serif" }}>
            No vague promises about transformation. Here's the list of documents you'll have on your hard drive — or printed and pinned above your desk — by tomorrow afternoon.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', border: `1px solid ${T.line}`, borderRadius: 4, overflow: 'hidden' }}>
          {items.map((item, i) => (
            <article key={i} style={{ background: T.paperWarm, padding: '28px 24px', borderRight: `1px solid ${T.line}`, borderBottom: `1px solid ${T.line}` }}>
              <p style={{ fontFamily: "'Fraunces', serif", fontSize: 11, fontStyle: 'italic', color: T.terra, marginBottom: 14, letterSpacing: '0.04em' }}>
                Item {item.num}
              </p>
              <h3 style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 15, fontWeight: 700, color: T.ink, marginBottom: 10, lineHeight: 1.5 }}>
                {item.label}
              </h3>
              <p style={{ fontSize: 13, color: T.inkSoft, lineHeight: 1.75, fontFamily: "'Hanken Grotesk', sans-serif" }}>
                {item.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Section 2 — Products ── */
function ProductsSection() {
  const products = [
    {
      price: '€0', badge: 'free',
      title: '2-Minute AI Risk Check',
      desc: 'A short interactive quiz that tells you where you stand under Article 4 of the EU AI Act. Your score is shown immediately — no email needed to see it. We only follow up if you ask.',
      cta: 'Take the quiz →', href: '#quiz',
      featured: false,
    },
    {
      price: '€19', badge: 'one-time',
      title: 'Sole Trader AI Compliance Pack',
      desc: 'AUP template, Article 4 training log, Use Policy form, sign-off page. Print it, fill it, file it. Plain English. Available in Polish. Built for businesses with 1–10 staff.',
      cta: 'Buy the pack →', href: '#',
      featured: true, tag: 'FLAGSHIP',
    },
    {
      price: '€69', badge: 'one-time',
      title: 'EU AI Act Compliance Course',
      desc: 'Five short videos (under one hour total), a quick quiz, and a printable certificate for each staff member\'s compliance folder. Watch on your phone during lunch.',
      cta: 'Get the course →', href: '#',
      featured: false,
    },
  ];

  return (
    <section id="products" className="sa-section" style={{ background: T.paperWarm, borderTop: `1px solid ${T.line}` }}>
      <div className="sa-max">
        <div style={{ marginBottom: 48 }}>
          <span className="sa-kicker">N° 02 · Three products</span>
          <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', color: T.ink, marginBottom: 16 }}>
            Three things. That's it.
          </h2>
          <p style={{ fontSize: 17, color: T.inkSoft, maxWidth: 560, lineHeight: 1.8, fontFamily: "'Hanken Grotesk', sans-serif" }}>
            No tier confusion. No upsell ladder. Start with the free quiz; buy the pack if you need the documents; take the course if you want the certificate.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          {products.map((p, i) => (
            <article key={i} style={{
              background: p.featured ? '#FFF8F2' : T.paper,
              border: `1.5px solid ${p.featured ? T.terra : T.line}`,
              borderRadius: 4, padding: '28px 24px 24px',
              display: 'flex', flexDirection: 'column', position: 'relative',
            }}>
              {p.tag && (
                <div style={{
                  position: 'absolute', top: -1, left: 20,
                  background: T.terra, color: '#fff',
                  fontSize: 9, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
                  padding: '3px 10px', borderRadius: '0 0 4px 4px',
                  fontFamily: "'Hanken Grotesk', sans-serif",
                }}>
                  {p.tag}
                </div>
              )}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16, marginTop: p.tag ? 10 : 0 }}>
                <span style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: p.featured ? T.terra : T.grey, fontFamily: "'Hanken Grotesk', sans-serif",
                }}>
                  {p.badge}
                </span>
                <span style={{ fontFamily: "'Fraunces', serif", fontSize: 30, fontWeight: 700, color: T.ink, lineHeight: 1 }}>
                  {p.price}
                </span>
              </div>
              <h3 style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 17, fontWeight: 700, color: T.ink, marginBottom: 12, lineHeight: 1.4 }}>
                {p.title}
              </h3>
              <p style={{ fontSize: 14, color: T.inkSoft, lineHeight: 1.8, marginBottom: 24, flex: 1, fontFamily: "'Hanken Grotesk', sans-serif" }}>
                {p.desc}
              </p>
              <a href={p.href} className={p.featured ? 'sa-btn-primary' : 'sa-btn-outline'} style={{ fontSize: 14, padding: '12px 20px', alignSelf: 'flex-start' }}>
                {p.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Section 3 — Who it's for ── */
function AudienceSection() {
  const chips = [
    { label: 'Beauty salons', highlight: false },
    { label: 'Hair & nails', highlight: false },
    { label: 'Polish-speaking businesses', highlight: true },
    { label: 'Sole traders', highlight: false },
    { label: "Solicitors' offices", highlight: false },
    { label: 'GP practices', highlight: false },
    { label: 'Accountants & bookkeepers', highlight: false },
    { label: 'Restaurants & cafés', highlight: false },
    { label: 'Crèches', highlight: false },
    { label: 'Tradespeople', highlight: false },
    { label: 'Coaches & consultants', highlight: false },
    { label: 'Online retailers', highlight: false },
  ];
  return (
    <section id="audience" className="sa-section" style={{ background: T.paper, borderTop: `1px solid ${T.line}` }}>
      <div className="sa-max">
        <span className="sa-kicker">N° 03 · Who it's for</span>
        <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', color: T.ink, marginBottom: 20, maxWidth: 600 }}>
          This is for you if you run a small Irish business.
        </h2>
        <p style={{ fontSize: 17, color: T.inkSoft, maxWidth: 680, lineHeight: 1.85, marginBottom: 14, fontFamily: "'Hanken Grotesk', sans-serif" }}>
          If you use ChatGPT, Copilot, Gemini, or any tool with "AI" in the name, the EU AI Act applies to you. It probably also applies to your booking system, your design app, and the AI features hiding in your accounting software. There's no SME exemption, and Article 4 is already enforceable.
        </p>
        <p style={{ fontSize: 16, color: T.inkSoft, maxWidth: 580, lineHeight: 1.85, marginBottom: 36, fontFamily: "'Hanken Grotesk', sans-serif" }}>
          SafeAI is sized and priced for businesses with 1–10 staff. Sole traders especially.{' '}
          <em style={{ fontStyle: 'italic', fontFamily: "'Fraunces', serif", color: T.sageDark }}>Polish-speaking businesses very especially.</em>
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }} role="list" aria-label="Sectors served">
          {chips.map((c, i) => (
            <span key={i} role="listitem" style={{
              fontSize: 13, padding: '7px 16px', borderRadius: 3,
              background: c.highlight ? T.sageDark : T.paperWarm,
              color: c.highlight ? '#fff' : T.inkSoft,
              border: `1px solid ${c.highlight ? T.sageDark : T.line}`,
              fontFamily: "'Hanken Grotesk', sans-serif",
              fontWeight: c.highlight ? 600 : 400,
            }}>
              {c.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Section 4 — How it works ── */
function HowItWorksSection() {
  const steps = [
    {
      num: 'Step one',
      title: 'Take the 2-minute quiz',
      desc: "Answer eight questions about how your business uses AI tools. You'll get an instant score and a list of the specific things you need to fix.",
    },
    {
      num: 'Step two',
      title: 'Buy the right pack',
      desc: 'Most small businesses need the €19 Sole Trader Pack. Owners of teams may want the €69 course on top. Available in English and Polish.',
    },
    {
      num: 'Step three',
      title: 'Fill it, sign it, file it',
      desc: 'Print the templates. Fill them in. Get staff to sign. Save the PDFs. You now have everything Article 4 requires.',
    },
  ];
  return (
    <section id="how" className="sa-section" style={{ background: T.paperWarm, borderTop: `1px solid ${T.line}` }}>
      <div className="sa-max">
        <span className="sa-kicker">N° 04 · How it works</span>
        <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', color: T.ink, marginBottom: 56 }}>
          Three steps. Total: about an hour of your life.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 40 }}>
          {steps.map((s, i) => (
            <div key={i}>
              <p style={{ fontFamily: "'Fraunces', serif", fontSize: 12, fontStyle: 'italic', color: T.terra, marginBottom: 12 }}>
                {s.num}
              </p>
              <h3 style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 17, fontWeight: 700, color: T.ink, marginBottom: 14, lineHeight: 1.4 }}>
                {s.title}
              </h3>
              <div style={{ width: 28, height: 2, background: T.terra, borderRadius: 1, marginBottom: 14 }} />
              <p style={{ fontSize: 14, color: T.inkSoft, lineHeight: 1.85, fontFamily: "'Hanken Grotesk', sans-serif" }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Section 5 — About ── */
function AboutSection() {
  return (
    <section id="about" className="sa-section" style={{ background: T.paper, borderTop: `1px solid ${T.line}` }}>
      <div className="sa-max">
        <div className="about-grid">
          <div className="about-photo">
            <div style={{
              aspectRatio: '4/5', background: T.paperWarm, borderRadius: 4,
              border: `1.5px dashed ${T.line}`, display: 'flex', alignItems: 'center',
              justifyContent: 'center', color: T.grey, fontSize: 12, fontStyle: 'italic',
              textAlign: 'center', padding: 20, fontFamily: "'Fraunces', serif", lineHeight: 1.6,
            }}>
              Marcela's photograph<br />(informal · not a suit)
            </div>
          </div>

          <div className="about-text">
            <span className="sa-kicker">N° 05 · About</span>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', color: T.ink, marginBottom: 24 }}>
              Hi — I'm Marcela.
            </h2>

            <p style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(17px, 2vw, 21px)', fontStyle: 'italic', color: T.sageDark, lineHeight: 1.65, marginBottom: 22 }}>
              I built SafeAI because I watched too many small Irish business owners get told to spend thousands on AI compliance consultants who explained nothing in plain English.
            </p>
            <p style={{ fontSize: 16, color: T.inkSoft, lineHeight: 1.85, marginBottom: 16, fontFamily: "'Hanken Grotesk', sans-serif" }}>
              I'm Polish. I live in Ireland. I'm not a lawyer, and that's deliberate — most of you don't need a lawyer, you need someone to translate the EU AI Act into actual sentences and give you the documents to print, sign, and file.
            </p>
            <p style={{ fontSize: 16, color: T.inkSoft, lineHeight: 1.85, marginBottom: 16, fontFamily: "'Hanken Grotesk', sans-serif" }}>
              I built SafeAI for the bookkeeper in Drogheda, the hair salon in Cork, the Polish builder in Mullingar, the GP in Kilkenny. Anyone running a small business who is being told they need to "do something about AI" and doesn't want to spend €5,000 finding out what.
            </p>
            <p style={{ fontSize: 16, color: T.inkSoft, lineHeight: 1.85, marginBottom: 28, fontFamily: "'Hanken Grotesk', sans-serif" }}>
              If you'd rather read this in Polish,{' '}
              <a href="#polski" style={{ color: T.terra, textDecoration: 'underline' }}>scroll a little further</a>.
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="#booking" className="sa-btn-primary" style={{ fontSize: 15, padding: '14px 26px' }}>Book a call with Marcela</a>
              <a href="#products" className="sa-btn-outline" style={{ fontSize: 14, padding: '13px 22px' }}>See the products</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Section 6 — Polski ── */
function PolskiSection() {
  return (
    <section id="polski" lang="pl" className="sa-section" style={{ background: T.ink }}>
      <div className="sa-max">
        <span style={{ fontFamily: "'Fraunces', serif", fontStyle: 'italic', fontSize: 12, color: T.terra, display: 'block', marginBottom: 16 }}>
          Nr 06 · Po polsku
        </span>
        <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(28px, 3.5vw, 44px)', color: T.paper, marginBottom: 22 }}>
          AI compliance dla polskich firm w Irlandii.
        </h2>
        <p style={{ fontSize: 18, color: 'rgba(250,247,242,0.85)', lineHeight: 1.8, maxWidth: 680, marginBottom: 20, fontFamily: "'Hanken Grotesk', sans-serif" }}>
          Jestem Marcela. Pomagam polskim przedsiębiorcom w Irlandii spełnić wymogi unijnego AI Act (Rozporządzenie 2024/1689) bez prawników i bez konsultantów za €5,000.
        </p>
        <p style={{ fontSize: 16, color: 'rgba(250,247,242,0.75)', lineHeight: 1.85, maxWidth: 680, marginBottom: 16, fontFamily: "'Hanken Grotesk', sans-serif" }}>
          Prowadzisz salon kosmetyczny? Fryzjera? Sklep? Firmę budowlaną? Działalność jednoosobową? Jeśli ty lub twoi pracownicy używacie ChatGPT, Copilot, Gemini lub jakichkolwiek narzędzi z AI — Artykuł 4 dotyczy ciebie od 2 lutego 2025 roku.
        </p>
        <p style={{ fontSize: 16, color: 'rgba(250,247,242,0.75)', lineHeight: 1.85, maxWidth: 680, marginBottom: 36, fontFamily: "'Hanken Grotesk', sans-serif" }}>
          Pakiet SafeAI dla małych firm (€19) zawiera szablon polityki użytkowania AI, rejestr szkoleń zgodny z Artykułem 4, formularz dla pracowników i jednostronicowe podsumowanie zgodności. Wszystko po polsku. Wypełnij, podpisz, schowaj do segregatora. Gotowe.
        </p>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center', marginBottom: 24 }}>
          <a href="#quiz" className="sa-btn-primary" style={{ fontSize: 15, padding: '14px 28px' }}>
            Sprawdź swoją zgodność (2 minuty) <Icon.Arrow size={15} color="#fff" />
          </a>
          <a href="#products" style={{
            fontSize: 15, fontWeight: 600, color: 'rgba(250,247,242,0.8)', textDecoration: 'none',
            border: '1.5px solid rgba(250,247,242,0.3)', borderRadius: 4, padding: '13px 28px',
            fontFamily: "'Hanken Grotesk', sans-serif", transition: 'border-color 0.15s',
          }}
          onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(250,247,242,0.7)'}
          onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(250,247,242,0.3)'}>
            Zobacz produkty
          </a>
        </div>
        <a href="/pl/" style={{ fontSize: 13, color: T.terra, textDecoration: 'underline', fontFamily: "'Hanken Grotesk', sans-serif" }}>
          Pełna wersja po polsku → /pl/
        </a>
      </div>
    </section>
  );
}

/* ── Section 7 — FAQ (native <details> accordions — no JS needed) ── */
function FAQSection() {
  const faqs = [
    {
      q: 'Does the EU AI Act really apply to my small business?',
      a: 'Yes. If you or your staff use any tool with AI in it — ChatGPT, Copilot, Gemini, AI features in your booking system, AI photo retouching, AI in your accounting software — the EU AI Act applies. There is no SME exemption. Article 4 has been enforceable since 2 February 2025.',
    },
    {
      q: 'I only use ChatGPT occasionally. Do I really need this?',
      a: "If you use it for anything that touches client data, customer communication, marketing copy, or business decisions — yes. Article 4 requires you to demonstrate AI literacy among your staff. \"Occasionally\" doesn't exempt you; documentation does.",
    },
    {
      q: 'Are you a lawyer? Is this legal advice?',
      a: "No, and no. I'm not a lawyer, and that's deliberate. SafeAI provides general information and templates, not legal advice. Most small businesses don't need bespoke legal counsel — they need plain-English documents to print, sign, and file. For anything sector-specific or contentious, consult a solicitor.",
    },
    {
      q: 'How is this different from ComplianceKit.ie?',
      a: "ComplianceKit is GDPR software — different regulation, different model (monthly subscription). SafeAI covers the EU AI Act specifically, with one-time purchases instead of subscriptions. If you need both, buy both. They don't overlap.",
    },
    {
      q: 'How is this different from Agentive.ie?',
      a: "Agentive delivers 4-week consulting engagements for companies with 50+ staff. SafeAI is for businesses too small for that — 1 to 10 people, sole traders, micro-SMEs. Different segment, different price, same regulation.",
    },
    {
      q: "What's the actual penalty for not complying?",
      a: "Up to €7.5 million or 1.5% of annual global turnover, whichever is higher, for Article 4 violations. In practice, regulators are far more likely to issue enforcement notices and request documentation. The fine cap exists to make the regulation taken seriously.",
    },
    {
      q: 'Czy materiały są dostępne po polsku?',
      a: 'Tak — pakiet SafeAI dla małych firm (€19) dostępny jest po polsku. Jestem Polką mieszkającą w Irlandii i pisałam te dokumenty z myślą o polskich przedsiębiorcach prowadzących firmy w Irlandii.',
    },
    {
      q: 'Is the certificate from the €69 course a "real" qualification?',
      a: "It's evidence that you completed the training. That's exactly what Article 4 requires — proof of AI literacy. It is not a regulated credential (like a CPA or solicitor's qualification). Don't mistake it for one. Do file it in your compliance folder.",
    },
  ];
  return (
    <section id="faq" className="sa-section" style={{ background: T.paperWarm, borderTop: `1px solid ${T.line}` }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <span className="sa-kicker">N° 07 · FAQ</span>
        <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', color: T.ink, marginBottom: 40 }}>
          Questions you actually have.
        </h2>
        <div>
          {faqs.map((f, i) => (
            <details key={i} className="faq-item">
              <summary>{f.q}</summary>
              <p className="faq-body">{f.a}</p>
            </details>
          ))}
        </div>
        <div style={{ marginTop: 32 }}>
          <a href="faq.html" style={{ fontSize: 14, color: T.terra, textDecoration: 'none', fontWeight: 600, fontFamily: "'Hanken Grotesk', sans-serif" }}>
            See all questions →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── Section 8 — Final CTA ── */
function FinalCTASection() {
  return (
    <section id="start" className="sa-section" style={{ background: T.ink }}>
      <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
        <span style={{ fontFamily: "'Fraunces', serif", fontStyle: 'italic', fontSize: 12, color: T.terra, display: 'block', marginBottom: 16 }}>
          N° 08 · Start here
        </span>
        <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(28px, 3.5vw, 44px)', color: T.paper, marginBottom: 20 }}>
          See where you stand in 120 seconds.
        </h2>
        <p style={{ fontSize: 17, color: 'rgba(250,247,242,0.8)', lineHeight: 1.8, marginBottom: 36, fontFamily: "'Hanken Grotesk', sans-serif" }}>
          The 2-minute AI risk check is free. No email needed for the score. If you're already compliant, you'll know. If you're not, you'll know exactly what's missing.
        </p>
        <a href="#quiz" className="sa-btn-primary" style={{ fontSize: 16, padding: '16px 36px' }}>
          Take the 2-minute risk check <Icon.Arrow size={16} color="#fff" />
        </a>
      </div>
    </section>
  );
}

/* ── Knowledge Base ── */
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
      date: '2026-05-14', time: '5 min',
    },
    {
      url: 'posts/where-should-you-actually-start-with-ai-in-your-business.html',
      cat: 'Getting Started',
      title: 'Where Should You Actually Start With AI in Your Business?',
      excerpt: 'The instinct is to start with whatever feels most exciting. That instinct produces a lot of failed AI projects. Here is a better approach.',
      date: '2026-05-14', time: '5 min',
    },
    {
      url: 'posts/four-rules-every-staff-member-needs-before-they-use-ai-at-work.html',
      cat: 'Getting Started',
      title: 'Four Rules Every Staff Member Needs Before They Use AI at Work',
      excerpt: 'Before the policy documents and compliance checklists — four simple habits that stop the most common AI mistakes before they happen.',
      date: '2026-05-14', time: '4 min',
    },
    {
      url: 'posts/how-to-do-an-ai-security-audit-in-your-business.html',
      cat: 'Getting Organised',
      title: 'How to Do an AI Security Audit in Your Business (Without Hiring a Consultant)',
      excerpt: 'A four-part framework for finding out which AI tools your team is really using, what data is flowing through them, and what to do about it.',
      date: '2026-05-14', time: '5 min',
    },
    {
      url: 'posts/the-real-risks-of-using-ai-blindly-a-wake-up-call-for-irish-small-businesses.html',
      cat: 'AI Risk',
      title: 'The Real Risks of Using AI Blindly: A Wake-Up Call for Irish Small Businesses',
      excerpt: 'AI can draft emails, design graphics and answer customer queries — but unchecked use creates real risks around hallucinations, privacy, transparency, bias and brand trust.',
      date: '2026-05-05', time: '4 min',
    },
    {
      url: 'posts/the-eu-ai-act-what-every-irish-small-business-needs-to-know-without-the-legal-jargon.html',
      cat: 'EU AI Act',
      title: 'The EU AI Act: What Every Irish Small Business Needs to Know (Without the Legal Jargon)',
      excerpt: 'A practical explanation of how everyday AI use can create obligations for Irish businesses, schools and organisations — and the simple steps to take now.',
      date: '2026-05-04', time: '4 min',
    },
  ];

  return (
    <section id="knowledge-base" className="sa-section" style={{ background: T.paper, borderTop: `1px solid ${T.line}` }}>
      <div className="sa-max">
        <div style={{ marginBottom: 48 }}>
          <span className="sa-kicker">Knowledge base</span>
          <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', color: T.ink }}>
            Practical AI guides for Irish organisations
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', gap: 20, marginBottom: 40 }}>
          {posts.map((p, i) => (
            <a key={i} href={p.url} className="blog-card" style={{
              background: T.paperWarm, border: `1px solid ${T.line}`, borderRadius: 4,
              padding: '22px 24px', textDecoration: 'none', display: 'flex', flexDirection: 'column',
            }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.terra, marginBottom: 12, display: 'inline-block', fontFamily: "'Hanken Grotesk', sans-serif" }}>
                {p.cat}
              </span>
              <h3 style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 15, fontWeight: 700, color: T.ink, lineHeight: 1.5, marginBottom: 10, flexGrow: 1 }}>
                {p.title}
              </h3>
              <p style={{ fontSize: 13, color: T.grey, lineHeight: 1.65, marginBottom: 16, fontFamily: "'Hanken Grotesk', sans-serif" }}>
                {p.excerpt}
              </p>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap', marginTop: 'auto' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, color: T.grey }}><Icon.Calendar />{fmtDate(p.date)}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, color: T.grey }}><Icon.Clock />{p.time} read</span>
                <span style={{ fontSize: 12, color: T.terra, fontWeight: 600, marginLeft: 'auto', fontFamily: "'Hanken Grotesk', sans-serif" }}>Read →</span>
              </div>
            </a>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <a href="blog.html" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: T.ink, color: T.paper, fontFamily: "'Hanken Grotesk', sans-serif",
            fontWeight: 700, fontSize: 15, padding: '14px 32px', borderRadius: 4,
            textDecoration: 'none', transition: 'opacity 0.15s',
          }}
          onMouseOver={e => e.currentTarget.style.opacity = '0.85'}
          onMouseOut={e => e.currentTarget.style.opacity = '1'}>
            Browse all guides <Icon.Arrow size={14} color={T.paper} />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── Footer ── */
function Footer() {
  const products = [
    { label: '2-Min Risk Check', href: '#quiz' },
    { label: 'Sole Trader Pack (€19)', href: '#' },
    { label: 'EU AI Act Course (€69)', href: '#' },
  ];
  const sectors = [
    { label: 'Beauty salons', href: '#audience' },
    { label: 'Sole traders', href: '#audience' },
    { label: 'Accountants', href: '#audience' },
    { label: 'Polskie firmy', href: '/pl/' },
  ];
  const about = [
    { label: 'About Marcela', href: '#about' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: 'mailto:marcela@safeai.ie' },
    { label: 'Privacy', href: 'privacy.html' },
  ];
  const linkStyle = { fontSize: 13, color: 'rgba(250,247,242,0.55)', textDecoration: 'none', fontFamily: "'Hanken Grotesk', sans-serif", transition: 'color 0.15s' };
  return (
    <footer style={{ background: T.ink }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '56px 24px 32px' }}>
        <div className="footer-grid">
          <div>
            <div style={{ marginBottom: 16, display: 'inline-block', background: T.paper, borderRadius: 4, padding: '10px 14px' }}>
              <img src="safeai-logo.svg" alt="SafeAI logo" style={{ height: 36, width: 'auto', display: 'block' }} />
            </div>
            <p style={{ fontSize: 13, color: 'rgba(250,247,242,0.55)', lineHeight: 1.75, maxWidth: 240, fontFamily: "'Hanken Grotesk', sans-serif" }}>
              Plain-English AI compliance for Irish micro-businesses. Built in Ireland by Marcela. Polish-friendly.
            </p>
          </div>

          <div>
            <h4 style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 11, fontWeight: 700, color: T.paper, marginBottom: 14, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Products</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {products.map(l => <a key={l.label} href={l.href} style={linkStyle} onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = 'rgba(250,247,242,0.55)'}>{l.label}</a>)}
            </div>
          </div>

          <div>
            <h4 style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 11, fontWeight: 700, color: T.paper, marginBottom: 14, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Sectors</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {sectors.map(l => <a key={l.label} href={l.href} style={linkStyle} onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = 'rgba(250,247,242,0.55)'}>{l.label}</a>)}
            </div>
          </div>

          <div>
            <h4 style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 11, fontWeight: 700, color: T.paper, marginBottom: 14, letterSpacing: '0.1em', textTransform: 'uppercase' }}>About</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {about.map(l => <a key={l.label} href={l.href} style={linkStyle} onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = 'rgba(250,247,242,0.55)'}>{l.label}</a>)}
            </div>
            <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
              {[
                { icon: <Icon.Facebook size={16} color="rgba(250,247,242,0.6)" />, href: 'https://www.facebook.com/SafeAI.Ireland/', label: 'Facebook' },
                { icon: <Icon.Instagram size={16} color="rgba(250,247,242,0.6)" />, href: 'https://www.instagram.com/safeai.ireland', label: 'Instagram' },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  style={{ width: 34, height: 34, borderRadius: 4, background: 'rgba(250,247,242,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', transition: 'background 0.15s' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(250,247,242,0.16)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'rgba(250,247,242,0.08)'}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div style={{ borderLeft: `3px solid ${T.terra}`, padding: '14px 16px', borderRadius: '0 4px 4px 0', background: 'rgba(198,107,61,0.07)', marginBottom: 24 }}>
          <p style={{ fontSize: 12, color: 'rgba(250,247,242,0.6)', lineHeight: 1.75, fontFamily: "'Hanken Grotesk', sans-serif" }}>
            <strong style={{ color: 'rgba(250,247,242,0.85)' }}>Not legal advice.</strong>{' '}
            SafeAI provides general information and templates only. For situation-specific legal questions, consult a solicitor.
          </p>
        </div>

        <div style={{ borderTop: '1px solid rgba(250,247,242,0.08)', paddingTop: 20, display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 11, color: 'rgba(250,247,242,0.35)', fontFamily: "'Hanken Grotesk', sans-serif" }}>
            © 2026 SafeAI.ie · Built with care in Ireland
          </span>
          <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
            <a href="/pl/" lang="pl" style={{ fontSize: 11, color: 'rgba(250,247,242,0.45)', textDecoration: 'none', fontFamily: "'Hanken Grotesk', sans-serif" }}
              onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = 'rgba(250,247,242,0.45)'}>Polski</a>
            <span style={{ fontSize: 11, color: 'rgba(250,247,242,0.2)' }}>/</span>
            <a href="/" lang="en" style={{ fontSize: 11, color: 'rgba(250,247,242,0.45)', textDecoration: 'none', fontFamily: "'Hanken Grotesk', sans-serif" }}
              onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = 'rgba(250,247,242,0.45)'}>English</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ── Booking Modal (cal.com — preserved) ── */
function BookingModal() {
  const R = React;
  const [open, setOpen] = R.useState(false);
  R.useEffect(() => {
    function check() { setOpen(window.location.hash === '#booking'); }
    check();
    window.addEventListener('hashchange', check);
    return () => window.removeEventListener('hashchange', check);
  }, []);
  function close() {
    window.history.replaceState(null, '', window.location.pathname + window.location.search);
    setOpen(false);
  }
  if (!open) return null;
  return (
    <div onClick={close} style={{ position: 'fixed', inset: 0, background: 'rgba(15,42,68,0.65)', zIndex: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div onClick={e => e.stopPropagation()} style={{ background: T.paper, borderRadius: 6, width: '100%', maxWidth: 780, height: '88vh', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '14px 20px', borderBottom: `1px solid ${T.line}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0 }}>
          <span style={{ fontSize: 15, fontWeight: 600, color: T.ink, fontFamily: "'Hanken Grotesk', sans-serif" }}>Book a call with Marcela</span>
          <button onClick={close} style={{ background: 'none', border: 'none', fontSize: 22, cursor: 'pointer', color: T.grey, lineHeight: 1, padding: '0 4px', fontFamily: "'Hanken Grotesk', sans-serif" }} aria-label="Close">&times;</button>
        </div>
        <iframe src="https://cal.com/safeai/call?embed=true" style={{ flex: 1, border: 'none', width: '100%' }} title="Book a call with Marcela" />
      </div>
    </div>
  );
}

/* ── Cookie Banner (GDPR — preserved) ── */
function CookieBanner() {
  const R = React;
  const [visible, setVisible] = R.useState(false);
  R.useEffect(() => { setVisible(!localStorage.getItem('safeai-cookie-ok')); }, []);
  function accept() { localStorage.setItem('safeai-cookie-ok', '1'); setVisible(false); }
  if (!visible) return null;
  return (
    <div role="dialog" aria-label="Cookie consent" style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 500, background: T.ink, padding: '14px 24px', display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap', borderTop: `1px solid rgba(250,247,242,0.1)` }}>
      <p style={{ fontSize: 13, color: 'rgba(250,247,242,0.75)', lineHeight: 1.6, flex: 1, margin: 0, fontFamily: "'Hanken Grotesk', sans-serif" }}>
        We use essential cookies to keep this site working. By continuing you agree to our{' '}
        <a href="privacy.html" style={{ color: T.terra, textDecoration: 'none' }}>Privacy Policy</a>.
      </p>
      <div style={{ display: 'flex', gap: 10, flexShrink: 0 }}>
        <button onClick={accept} className="sa-btn-primary" style={{ fontSize: 13, padding: '9px 20px' }}>Accept</button>
        <button onClick={accept} style={{ fontSize: 13, color: 'rgba(250,247,242,0.5)', background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'Hanken Grotesk', sans-serif", padding: '9px 4px' }}>Dismiss</button>
      </div>
    </div>
  );
}

/* ── WhatsApp floating button (preserved — update phone number) ── */
function WhatsAppButton() {
  const phone = '353000000000';
  const msg = 'Hi Marcela, I found SafeAI and would like to ask a quick question.';
  return (
    <a href={'https://wa.me/' + phone + '?text=' + encodeURIComponent(msg)}
      target="_blank" rel="noopener noreferrer"
      aria-label="Chat with Marcela on WhatsApp"
      style={{ position: 'fixed', bottom: 80, right: 24, zIndex: 400, width: 52, height: 52, borderRadius: '50%', background: '#25D366', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 16px rgba(37,211,102,0.35)', textDecoration: 'none', transition: 'transform 0.15s' }}
      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>
  );
}

// Export to window
Object.assign(window, {
  T, Icon, submitEmail,
  Navbar, HeroSection, QuizSection,
  ArtifactsSection, ProductsSection, AudienceSection, HowItWorksSection,
  AboutSection, PolskiSection, FAQSection, FinalCTASection,
  BlogSection, Footer,
  BookingModal, CookieBanner, WhatsAppButton,
});
