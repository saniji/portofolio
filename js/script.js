// Simpan posisi scroll saat halaman dimuat
window.onload = function() {
    sessionStorage.setItem('scrollPos', window.scrollY);
  }
  
  // Atur kembali posisi scroll saat halaman di-refresh
  window.onbeforeunload = function() {
    sessionStorage.setItem('scrollPos', window.scrollY);
    window.scrollTo(0, 0);
  }
  
  // Cek jika ada posisi scroll yang disimpan, atur scroll ke posisi tersebut saat halaman dimuat kembali
  window.onload = function() {
    const scrollPos = sessionStorage.getItem('scrollPos');
    if (scrollPos) {
      window.scrollTo(0, scrollPos);
      sessionStorage.removeItem('scrollPos');
    }
    
    // Set kelas active sesuai dengan posisi scroll saat halaman dimuat
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    sections.forEach(sec => {
      let top = sec.offsetTop - 150;
      let id = sec.getAttribute('id');
  
      if (scrollPosition >= top) {
        navlinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href').slice(1) === id) {
            link.classList.add('active');
          }
        });
      }
    });
  }
  
// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('nav');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll active link
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // sticky navbar
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon navbar when click
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// typed js
const typed = new Typed ('.multiple-text', {
    strings: ["Fresh Graduated"],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1000,
    loop: true
});

// ScrollReveal
ScrollReveal ({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
 });

 ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
 ScrollReveal().reveal('.home-img, .project-box, .contact form',
 { origin: 'bottom' });
 ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
 ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

 const form = document.querySelector('form');
 const Fullname = document.getElementById('name');
 const email = document.getElementById('email');
 const mess = document.getElementById('message');

 function sendEmail() {
  const bodyMessage = `Full name: ${Fullname.value}<br>
  Email: ${email.value}<br>
  Message: ${mess.value}`;

  Email.send({
    SecureToken : "1d934d56-8c1d-4357-907c-a4b6859e450e",
    To : 'saniji499@gmail.com',
    From : "saniji499@gmail.com",
    Subject : "This is the subject",
    Body : bodyMessage
  }).then(
      message => {
        if (message == 'OK') {
          Swal.fire({
            title: "Success",
            text: "Message Sent Successfully!",
            icon: "success"
          });
        }
      }
  );
}

function checkInputs() {
  const items = document.querySelectorAll(".item");

  for (const item of items) {
    if (item.value == "") {
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }
    
    item.addEventListener("input", () => {
      if (item.value != "") {
        item.classList.remove("error");
        item.parentElement.classList.remove("error");
      }
      else {
        item.classList.add("error");
        item.parentElement.classList.add("error");
      }
    });
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInputs();

  const errors = document.querySelectorAll('.error');
  if (errors.length === 0) {
      sendEmail();
  }
});