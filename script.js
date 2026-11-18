const $ = (s, c = document) => c.querySelector(s);

// Mobile menu
const nav = $('.nav'), burger = $('.burger');
burger.addEventListener('click', () =>
  burger.setAttribute('aria-expanded', nav.classList.toggle('open')));
nav.addEventListener('click', e => {
  if (e.target.closest('a')) {
    nav.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  }
});

// Feature tabs
const features = [
  { eb: 'Report outages • Stay updated',
    ti: 'Stay informed about power interruptions in your community',
    bo: 'Easily report power outages in your area, provide details about affected locations, and track the progress of submitted reports. Stay updated with community-reported information to better understand the situation around you.' },
  { eb: 'See hazards • Stay safe',
    ti: 'Know what’s around you before you head out',
    bo: 'See power outages and hazards near your location, and get alerts when conditions change in your area so you can plan ahead.' },
  { eb: 'Track battery • Stay connected',
    ti: 'Keep your devices charged when it matters most',
    bo: 'Monitor the battery levels of your devices in one place, and find nearby charging stations when you need to top up.' },
  { eb: 'Set timers • Stay safe',
    ti: 'Never leave an appliance running by accident',
    bo: 'Set safety timers for your appliances so they’re switched off before the power returns or your battery runs low.' }
];
const tabs = [...document.querySelectorAll('.tab')], pane = $('#pane');
tabs.forEach((tab, i) => tab.addEventListener('click', () => {
  tabs.forEach(t => t.setAttribute('aria-selected', t === tab));
  pane.setAttribute('aria-labelledby', tab.id);
  $('#f-eb').textContent = features[i].eb;
  $('#f-ti').textContent = features[i].ti;
  $('#f-bo').textContent = features[i].bo;
}));

// Contact form (front-end only: wire to your backend)
$('form').addEventListener('submit', e => {
  e.preventDefault();
  const btn = $('button', e.target);
  btn.textContent = 'Message sent';
  e.target.reset();
  setTimeout(() => (btn.textContent = 'Send Message'), 3000);
});
