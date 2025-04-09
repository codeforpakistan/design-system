const form = document.getElementById('subscribe-form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = form.email.value;

  const formData = { email };

  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbw4sCyScNEoFuFhmJZDIgZbRoBGiC_ayxx4_nylnYWM7AxZaQSk0rNk8O2YUOJqx-Om/exec', {
      method: 'POST',
      mode: 'no-cors', // prevents CORS issues
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    // no-cors mode doesn't let you check response.ok, so just assume success
    alert('Thanks for subscribing!');
    form.reset();
  } catch (error) {
    alert('Oops! Something went wrong.');
    console.error('Error submitting form:', error);
  }
});