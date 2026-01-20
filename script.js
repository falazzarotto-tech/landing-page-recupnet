// script.js - interações: FAQ, form e ano do rodapé

// FAQ accordion
document.querySelectorAll('.faq__question').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const item = btn.closest('.faq__item');
    const ans = item.querySelector('.faq__answer');
    const open = ans.classList.contains('open');
    // fechar todos
    document.querySelectorAll('.faq__answer.open').forEach(a=>a.classList.remove('open'));
    if(!open) ans.classList.add('open');
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
  });
});

// Form submit (fake) - replace with real endpoint later
const form = document.getElementById('leadForm');
const msgBox = document.getElementById('formMessage');
if(form){
  form.addEventListener('submit', e=>{
    e.preventDefault();
    const name = (document.getElementById('name')||{}).value || '';
    const phone = (document.getElementById('phone')||{}).value || '';
    const email = (document.getElementById('email')||{}).value || '';
    // validação simples
    if(!name.trim() || !phone.trim() || !email.trim()){
      msgBox.style.color = 'crimson';
      msgBox.textContent = 'Por favor, preencha todos os campos.';
      return;
    }
    // aqui você pode integrar com Formspree, webhook ou sua API
    // Simular envio
    msgBox.style.color = 'green';
    msgBox.textContent = 'Obrigado! Recebemos seu pedido. Responderemos em até 24h.';
    form.reset();
    // opcional: enviar para um endpoint via fetch (exemplo comentado)
    /*
    fetch('https://seu-endpoint.com/leads', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({name, phone, email})
    }).then(()=>{ ... })
    */
  });
}

// Atualiza ano no rodapé
const yearEl = document.getElementById('year');
if(yearEl) yearEl.textContent = new Date().getFullYear();
