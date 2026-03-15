:root{
  --bg:#0f0f0f;
  --panel:#1a1a1a;
  --panel2:#141414;
  --line:#2a2a2a;
  --text:#f0f0f0;
  --muted:#888888;
  --accent:#e8b923;
  --accent-light:#f5d547;
  --good:#22c55e;
  --bad:#ef4444;
  --shadow: 0 20px 60px rgba(0,0,0,.85);
  --shadow-sm: 0 4px 12px rgba(0,0,0,.5);
  --radius: 12px;
}

*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{
  margin:0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  background: #0f0f0f;
  color:var(--text);
  line-height:1.6;
  overflow-x:hidden;
}

a{color:inherit;text-decoration:none}
button{font-family:inherit;cursor:pointer;border:none;background:none}
input{font-family:inherit}
.container{max-width:1200px;margin:0 auto;padding:0 20px}
.muted{color:var(--muted)}

/* ===== TOPBAR ===== */
.topbar{
  position: sticky;top:0;z-index: 50;
  background: linear-gradient(180deg, rgba(15,15,15,.98), rgba(15,15,15,.92));
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(232,185,35,.1);
  box-shadow: 0 4px 30px rgba(0,0,0,.5);
}

.topbar__inner{
  display:flex;align-items:center;justify-content:space-between;
  padding:16px 20px;gap:20px;
}

.brand{
  display:flex;align-items:center;gap:14px;
  text-decoration:none;cursor:pointer;
  transition: transform .3s;
}

.brand:hover{transform: scale(1.02)}

.brand__logo{
  width:44px;height:44px;border-radius:10px;
  display:grid;place-items:center;
  background: linear-gradient(135deg, var(--accent-light), var(--accent));
  color:#0f0f0f;
  font-weight:900;
  font-size:1.2rem;
  box-shadow: var(--shadow-sm), 0 0 20px rgba(232,185,35,.2);
  letter-spacing: -1px;
}

.brand__text{display:flex;flex-direction:column;gap:2px}
.brand__text strong{font-size:1rem;font-weight:700;letter-spacing: .5px}
.brand__text small{font-size:.8rem;color:var(--muted)}

.topbar__actions{display:flex;gap:10px}

/* ===== BUTTONS ===== */
.btn{
  display:inline-flex;align-items:center;justify-content:center;
  gap:8px;padding:10px 18px;
  border-radius:10px;
  border:2px solid transparent;
  font-weight:700;font-size:.95rem;
  transition: all .3s cubic-bezier(.4, 0, .2, 1);
  position: relative;
  overflow: hidden;
}

.btn::before{
  content:'';position:absolute;inset:0;
  background: linear-gradient(45deg, transparent, rgba(255,255,255,.1), transparent);
  transform: translateX(-100%);
}

.btn:hover::before{transform: translateX(100%)}

.btn:not(.btn--ghost):not(.btn--soft){
  background: linear-gradient(135deg, var(--accent-light), var(--accent));
  color:#0f0f0f;
  box-shadow: 0 10px 30px rgba(232,185,35,.2);
}

.btn:not(.btn--ghost):not(.btn--soft):hover{
  transform: translateY(-2px);
  box-shadow: 0 15px 40px rgba(232,185,35,.3);
}

.btn--ghost{
  border-color: rgba(232,185,35,.3);
  color:var(--text);
  background: transparent;
}

.btn--ghost:hover{
  background: rgba(232,185,35,.08);
  border-color: rgba(232,185,35,.5);
}

.btn--soft{
  background: rgba(232,185,35,.12);
  border-color: rgba(232,185,35,.25);
  color:var(--text);
}

.btn--soft:hover{
  background: rgba(232,185,35,.18);
  border-color: rgba(232,185,35,.35);
}

/* ===== HERO ===== */
.hero{padding:50px 0;display:grid;grid-template-columns:1.1fr .9fr;gap:40px;align-items:start}

.hero__text h1{
  font-size:2.8rem;line-height:1.15;margin:20px 0 20px;
  font-weight:900;letter-spacing: -1px;
}

.hero__text p{
  color:var(--muted);font-size:1.05rem;max-width:58ch;
  line-height: 1.7;
}

.pill{
  display:inline-flex;align-items:center;gap:8px;
  padding:10px 16px;
  border:1px solid rgba(232,185,35,.25);
  background: rgba(232,185,35,.08);
  border-radius:999px;
  color:var(--muted);
  font-size:.9rem;
  margin-bottom:16px;
  font-weight: 600;
}

.accent{color:var(--accent-light)}

/* ===== INPUT GROUP ===== */
.hero__panel{display:flex;flex-direction:column;gap:20px}

.input-group{
  padding:20px;
  background: rgba(232,185,35,.04);
  border:1px solid rgba(232,185,35,.1);
  border-radius: var(--radius);
}

.label{
  font-size:.85rem;font-weight:700;
  color:var(--muted);text-transform: uppercase;
  letter-spacing: .5px;
  display: block;
  margin-bottom: 12px;
}

.input-wrapper{
  display:flex;gap:10px;
}

.input{
  flex:1;
  padding:12px 14px;
  border-radius:8px;
  border:1px solid rgba(232,185,35,.15);
  background: rgba(232,185,35,.05);
  color:var(--text);
  font-size:.95rem;
  outline:none;
  transition: all .3s;
}

.input:focus{
  border-color: rgba(232,185,35,.4);
  background: rgba(232,185,35,.1);
  box-shadow: 0 0 0 3px rgba(232,185,35,.05);
}

.input::placeholder{color:rgba(136,136,136,.5)}

/* ===== ACTIONS ===== */
.actions{
  display:flex;gap:10px;flex-wrap:wrap;
}

/* ===== RESULT ===== */
.result{
  display:flex;gap:12px;align-items:flex-start;
  border-radius: 12px;
  border:1px solid rgba(232,185,35,.15);
  background: rgba(232,185,35,.06);
  padding:14px;
  transition: all .3s;
}

.dot{
  width:14px;height:14px;border-radius:999px;
  background: rgba(232,185,35,.5);
  margin-top:4px;
  box-shadow: 0 0 0 6px rgba(232,185,35,.08);
  transition: all .3s;
}

.result strong{
  display:block;font-size:1.05rem;
  margin-bottom:4px;
}

.result.good{
  border-color: rgba(34,197,94,.35);
  background: rgba(34,197,94,.08);
}

.result.good .dot{
  background: var(--good);
  box-shadow: 0 0 0 6px rgba(34,197,94,.12);
}

.result.bad{
  border-color: rgba(239,68,68,.35);
  background: rgba(239,68,68,.08);
}

.result.bad .dot{
  background: var(--bad);
  box-shadow: 0 0 0 6px rgba(239,68,68,.12);
}

/* ===== INFO BOX ===== */
.info-box{
  border:1px solid rgba(232,185,35,.2);
  background: rgba(232,185,35,.08);
  border-radius: var(--radius);
  padding:14px;
}

.info-title{
  margin:0 0 6px;
  font-weight:700;
  color:var(--accent-light);
  font-size:.95rem;
}

.info-text{
  margin:0;
  color:var(--muted);
  font-size:.9rem;
  line-height:1.5;
}

/* ===== SECTION ===== */
.section{padding:50px 0}

.section--alt{
  background: rgba(232,185,35,.02);
  border-top:1px solid rgba(232,185,35,.1);
  border-bottom:1px solid rgba(232,185,35,.1);
  padding: 50px 0;
}

.section__head{margin-bottom:30px}

.section__head h2{
  font-size:2rem;margin:0 0 10px;
  font-weight: 900;letter-spacing: -1px;
}

.section__head p{margin:0;color:var(--muted);font-size:1.05rem}

/* ===== FEATURES GRID ===== */
.features-grid{
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap:20px;
}

.feature{
  border:1px solid rgba(232,185,35,.15);
  background: rgba(232,185,35,.06);
  border-radius: var(--radius);
  padding:20px;
  transition: all .3s;
}

.feature:hover{
  border-color: rgba(232,185,35,.3);
  background: rgba(232,185,35,.1);
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(232,185,35,.1);
}

.feature__icon{
  font-size:2.5rem;
  margin-bottom:12px;
}

.feature h3{
  margin:0 0 8px;
  font-size:1.1rem;
  font-weight:700;
}

.feature p{
  margin:0;
  color:var(--muted);
  font-size:.9rem;
  line-height:1.6;
}

/* ===== EXAMPLES ===== */
.examples-grid{
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap:14px;
}

.example-card{
  border:1px solid rgba(232,185,35,.15);
  background: rgba(232,185,35,.06);
  border-radius: var(--radius);
  padding:16px;
  cursor:pointer;
  transition: all .3s;
}

.example-card:hover{
  border-color: rgba(232,185,35,.35);
  background: rgba(232,185,35,.12);
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(232,185,35,.1);
}

.example-label{
  font-size:.75rem;
  font-weight:800;
  color:var(--accent-light);
  text-transform:uppercase;
  letter-spacing: .5px;
  display:block;
  margin-bottom:8px;
}

.example-card code{
  display:block;
  background: rgba(232,185,35,.1);
  border-radius:6px;
  padding:8px;
  font-family: 'Courier New', monospace;
  font-size:.9rem;
  color:var(--accent);
  margin-bottom:8px;
}

.example-desc{
  margin:0;
  font-size:.85rem;
  color:var(--muted);
}

/* ===== FOOTER ===== */
.footer{
  border-top:1px solid rgba(232,185,35,.1);
  padding:30px 0;color:var(--muted);
  font-size:.9rem;
}

.footer__inner{
  display:flex;justify-content:space-between;
  gap:14px;flex-wrap:wrap;
}

/* ===== RESPONSIVE ===== */
@media (max-width:768px){
  .hero{grid-template-columns:1fr;gap:30px}
  
  .hero__text h1{font-size:2.2rem}
  
  .input-wrapper{flex-direction:column}
  
  .features-grid{grid-template-columns: 1fr}
  
  .examples-grid{grid-template-columns: repeat(2, 1fr)}
}

@media (max-width:520px){
  .hero__text h1{font-size:1.8rem}
  
  .topbar__inner{flex-direction:column;align-items:flex-start}
  
  .actions{flex-direction:column}
  
  .btn{width:100%}
  
  .examples-grid{grid-template-columns: 1fr}
}
