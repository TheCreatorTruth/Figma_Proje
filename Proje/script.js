// logo için kullanılan kod

const logos = document.querySelectorAll('.logo1');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
});

logos.forEach(logo => observer.observe(logo));


// fade için kullanılan kod

const images = document.querySelectorAll('.fade');

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible'); 
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, { threshold: 0.02 });

images.forEach(img => fadeObserver.observe(img));

const revealItems = document.querySelectorAll('.reveal');

const observerScroll = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Ekrana girince görünür yap
      entry.target.classList.add('visible');
    } else {
      // Ekrandan çıkınca tekrar gizle (yeni scroll animasyonu için)
      entry.target.classList.remove('visible');
    }
  });
}, { threshold: 0.1 }); // %10 görünürlük tetikler

revealItems.forEach(item => observerScroll.observe(item));








