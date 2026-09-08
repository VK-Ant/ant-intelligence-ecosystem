function go(p, sec) {
  document.querySelectorAll('.pg').forEach(x => x.classList.remove('on'));
  document.querySelectorAll('.sb-l').forEach(x => x.classList.remove('on'));
  const el = document.getElementById('pg-' + p);
  if (el) { 
    el.classList.add('on'); 
    el.querySelectorAll('pre code:not(.hljs)').forEach(b => hljs.highlightElement(b)); 
  }
  
  if (p === 'home') {
    document.body.classList.add('home-active');
  } else {
    document.body.classList.remove('home-active');
  }

  const lnk = document.querySelector('.sb-l[data-p="' + p + '"]');
  if (lnk) lnk.classList.add('on');
  if (sec) setTimeout(() => { const s = document.getElementById(sec); if (s) s.scrollIntoView({behavior:'smooth',block:'start'}); }, 60);
  else window.scrollTo({top:0});
  document.getElementById('sb').classList.remove('open');
  history.replaceState(null, '', '#' + p + (sec ? '/' + sec : ''));
}

function tsub(id) { 
  document.querySelectorAll('.sb-sub').forEach(s => { if(s.id !== id) s.classList.remove('open'); }); 
  document.getElementById(id)?.classList.toggle('open'); 
}

function toggleTheme() {
  const html = document.documentElement;
  const next = html.dataset.theme === 'dark' ? 'light' : 'dark';
  html.dataset.theme = next;
  localStorage.setItem('theme', next);
  document.getElementById('hljs-dark').disabled = next === 'light';
  document.getElementById('hljs-light').disabled = next === 'dark';
  document.getElementById('themeIcon').innerHTML = next === 'dark'
    ? '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>'
    : '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>';
}

(function(){
  const saved = localStorage.getItem('theme');
  if (saved) { 
    document.documentElement.dataset.theme = saved; 
    document.getElementById('hljs-dark').disabled = saved==='light'; 
    document.getElementById('hljs-light').disabled = saved==='dark'; 
  }
})();

function cc(btn){ 
  const c = btn.parentElement.querySelector('code').textContent;
  navigator.clipboard.writeText(c);
  btn.textContent = 'Copied!';
  setTimeout(() => btn.textContent = 'Copy', 1500); 
}

const SI = [
  {l:'SightRAG',p:'sightrag',t:'sightrag visual rag image video camera query detection ocr grounding dino reid cli qdrant onnx tensorrt'},
  {l:'Sonarwise',p:'sonarwise',t:'sonarwise audio speech transcription whisper diarization speaker events clap embeddings live streaming microphone'},
  {l:'DocQWise',p:'docqwise',t:'docqwise document pdf ocr extraction table invoice contract graphrag rag read extract retrieve ollama openai'},
  {l:'WavqWise',p:'wavqwise',t:'wavqwise time series forecast anomaly eeg trading arima xgboost chronos sensor signal pipeline sense'},
  {l:'Adaptive Intelligence',p:'adaptive',t:'adaptive intelligence rl reinforcement learning rag orchestration mcp tools agentic memory context engineering'},
  {l:'LLMEvalKit',p:'llmevalkit',t:'llmevalkit evaluation metrics hallucination compliance hipaa gdpr dpdp security bias prompt injection pii detection'},
  {l:'AntGuard',p:'antguard',t:'antguard guard detect protect privacy security data movement file network process correlation policy profiler'},
  {l:'Quick Start',p:'quickstart',t:'install pip quick start setup getting started'},
  {l:'Ant Studio',p:'antstudio',t:'ant studio cli sdk pipeline tracking docker forecast extract document ask anomaly ollama openai build run control'},
];

function search(q){
  const b = document.getElementById('srb');
  if(!q || q.length < 2){ b.classList.remove('show'); return; }
  const lw = q.toLowerCase();
  const h = SI.filter(s => s.t.includes(lw) || s.l.toLowerCase().includes(lw));
  if(!h.length){ b.classList.remove('show'); return; }
  b.innerHTML = h.map(r => '<div class="sr-i" onmousedown="go(\''+r.p+'\');document.getElementById(\'si\').value=\'\'"><b>'+r.l+'</b><br>View documentation</div>').join('');
  b.classList.add('show');
}

function loadHash(){
  const h = location.hash.slice(1);
  if(!h) {
    go('home');
    return;
  }
  const [p,s] = h.split('/');
  go(p, s || null);
}

window.addEventListener('hashchange', loadHash);
document.addEventListener('DOMContentLoaded', () => {
  hljs.highlightAll();
  loadHash();
});

document.addEventListener('click', e => {
  const sb = document.getElementById('sb');
  if(sb.classList.contains('open') && !sb.contains(e.target) && !e.target.closest('.ham')) sb.classList.remove('open');
});
