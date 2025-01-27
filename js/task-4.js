const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  // Sayfanın yeniden yüklenmesini önle
  event.preventDefault();

  // Form alanlarını al ve boşlukları temizle
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  // Alanların doldurulup doldurulmadığını kontrol et
  if (!email || !password) {
    alert("All form fields must be filled in");
    return;
  }

  // Form verilerini bir nesneye topla
  const formData = {
    email: email,
    password: password,
  };

  // Form verilerini konsola yazdır
  console.log("Form Data:", formData);

  // Formun sıfırlanması
  form.reset();
});
