// Fetch data.json and render the portfolio content
function loadData(){
  const inline = document.getElementById('data-inline');
  if(inline){
    try{
      const data = JSON.parse(inline.textContent);
      render(data);
      return;
    }catch(e){
      console.error('Embedded JSON parse failed', e);
    }
  }
  console.error('No embedded data found. Please add a JSON block with id="data-inline" in index.html');
}

function el(selector){ return document.querySelector(selector); }

function render(data){
  // sidebar
  el('.name').textContent = data.name || 'Your Name';
  el('.role').textContent = data.role || '';
  el('.contact a[href^="mailto:"]').textContent = data.contact?.email || 'email@example.com';
  el('.contact a[href^="mailto:"]').href = 'mailto:' + (data.contact?.email || '');
  const siteLink = el('.contact a[href="#"]');
  if(siteLink){ siteLink.textContent = data.contact?.website || 'your-website.com'; siteLink.href = data.contact?.website || '#'; }

  // skills
  const skillsEl = document.querySelector('.skills ul');
  skillsEl.innerHTML = '';
  (data.skills || []).forEach(s=>{
    const li = document.createElement('li');
    li.innerHTML = `<span class="skill-chip">${s}</span>`;
    skillsEl.appendChild(li);
  });

  // about
  const aboutEl = document.querySelector('.about p');
  if(aboutEl) aboutEl.textContent = data.about || '';

  // education
  const eduEl = document.querySelector('.edu p');
  if(eduEl){
    const e = (data.education && data.education[0]) || {};
    eduEl.textContent = `${e.degree || ''} — ${e.institution || ''} (${e.year || ''})`;
  }

  // projects
  const projectsContainer = document.querySelector('.projects');
  projectsContainer.innerHTML = '<h2>Selected Projects</h2>';
  const grid = document.createElement('div');
  grid.className = 'projects-grid';
  grid.style.display = 'grid';
  grid.style.gridTemplateColumns = 'repeat(auto-fill,minmax(220px,1fr))';
  grid.style.gap = '16px';
  (data.projects || []).forEach(p=>{
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `<h3>${p.title}</h3><p>${p.description}</p>`;
    grid.appendChild(card);
  });
  projectsContainer.appendChild(grid);

  // publications
  const pubEl = document.querySelector('.publications ul');
  pubEl.innerHTML = '';
  (data.publications || []).forEach(p=>{
    const li = document.createElement('li');
    li.textContent = `${p.title} — ${p.venue} (${p.year})`;
    pubEl.appendChild(li);
  });
}

// Section toggle
document.addEventListener('click', (e)=>{
  const h = e.target.closest('.main h2');
  if(!h) return;
  const sec = h.parentElement;
  sec.classList.toggle('collapsed');
});

loadData();
