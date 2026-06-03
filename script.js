<script>
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');
  document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
  const navEl = document.getElementById('nav-' + id);
  if (navEl) navEl.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showPolicy(id, el) {
  document.querySelectorAll('.policy-section').forEach(s => s.classList.remove('active'));
  document.getElementById('policy-' + id).classList.add('active');
  document.querySelectorAll('.policy-tab').forEach(t => t.classList.remove('active'));
  if (el) el.classList.add('active');
  else {
    document.querySelectorAll('.policy-tab').forEach(t => {
      if (t.textContent.toLowerCase().includes(id.toLowerCase().substring(0,4))) t.classList.add('active');
    });
  }
}

function toggleFAQ(el) {
  const item = el.parentElement;
  const wasOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  if (!wasOpen) item.classList.add('open');
}

function submitForm() {
  const name = document.getElementById('f-name').value.trim();
  const phone = document.getElementById('f-phone').value.trim();
  const service = document.getElementById('f-service').value;
  if (!name || !phone || !service) {
    alert('Please fill in Name, Mobile Number, and Service Required.');
    return;
  }
  document.getElementById('form-success').style.display = 'block';
  // Google Ads conversion tracking (replace AW-XXXXXXXX/XXXXXXXXX with your conversion ID)
  if (typeof gtag !== 'undefined') {
    gtag('event', 'conversion', { 'send_to': 'AW-XXXXXXXX/XXXXXXXXX' });
  }
}
</script>
</body>
</html>