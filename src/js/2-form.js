const STORAGE_KEY = 'feedback-form-state';

const formData = { email: '', message: '' };

window.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.feedback-form');

  if (!form) {
    return;
  }

  const saved = localStorage.getItem(STORAGE_KEY);

  if (saved !== null) {
    const parsed = JSON.parse(saved);
    formData.email = parsed.email ?? '';
    formData.message = parsed.message ?? '';
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  }

  form.addEventListener('input', function (event) {
    const { name, value } = event.target;
    if (name === 'email' || name === 'message') {
      formData[name] = value.trim();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    }
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (formData.email === '' || formData.message === '') {
      alert('Fill please all fields');
      return;
    }
    console.log(formData);
    localStorage.removeItem(STORAGE_KEY);
    formData.email = '';
    formData.message = '';
    form.reset();
  });
});
