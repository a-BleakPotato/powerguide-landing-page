const form = document.getElementById('auth');
const msg = form.querySelector('.msg');
const submit = form.querySelector('[type=submit]');
const isSignup = !!form.elements.confirm;

const show = (text, ok = false) => {
  msg.textContent = text;
  msg.classList.toggle('ok', ok);
};

form.addEventListener('input', e => {
  e.target.removeAttribute('aria-invalid');
  show('');
});

form.addEventListener('submit', e => {
  e.preventDefault();
  const bad = [...form.elements].find(el => el.required && !el.validity.valid);
  if (bad) {
    bad.setAttribute('aria-invalid', 'true');
    bad.focus();
    show(bad.type === 'checkbox'
      ? 'Please agree to the Terms & Privacy Policy.'
      : bad.validity.tooShort
        ? 'Password must be at least 8 characters.'
        : `Please enter a valid ${bad.name === 'email' ? 'email address' : bad.name}.`);
    return;
  }
  if (isSignup && form.elements.password.value !== form.elements.confirm.value) {
    form.elements.confirm.setAttribute('aria-invalid', 'true');
    form.elements.confirm.focus();
    show('Passwords don’t match.');
    return;
  }
  // Front-end only: send the form data to your backend here.
  show(isSignup ? 'Account created.' : 'Logged in.', true);
  submit.disabled = true;
});
