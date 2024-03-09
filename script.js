document.addEventListener("DOMContentLoaded", function () {
  const menuLinks = document.querySelectorAll("ul.menu a");

  menuLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const targetPosition = targetElement.getBoundingClientRect().top;
        const scrollPosition = window.scrollY;

        // Rola até a posição da seção desejada
        window.scrollTo({
          top: scrollPosition + targetPosition,
          behavior: "smooth",
        });

        // Define um atraso para rolar mais um pouco após um curto período de tempo (por exemplo, 500ms)
        const additionalOffset = 200; // Ajuste conforme necessário
        setTimeout(() => {
          window.scrollBy(0, additionalOffset);
        }, 500);
      }
    });
  });
});



// Função responsável por criar uma animação de digitação para o título da página, o heading_arr
// function TypeWriterHeading() {
//     const heading_arr = ["Hi! My name is Alex and I'm a Front-End Developer"]; // Guarda um array contendo uma string
//     let i = 0;
//     let text_elem = document.getElementById("typewriter_heading");
//     let word = heading_arr[i].split("");
//     let type = function () {
//       if (word.length > 0) {
//         text_elem.innerHTML += word.shift();
//       }
//     };
//     setInterval(type, 150); // Chama a função type a cada 120 milissegundos, ou seja, é meio que o tempo entre a inserçãso de cada caractere na tela
//   }

let body_arr = ["Hi! My name is Alex and I'm a Font"];
let body_delword = "Front-End Web Developer";

// Função responsável por criar uma animação de digitação e exclusão do texto da página
function TypeWriterBody() {
  let i = 0;
  let text_elem = document.getElementById("typewriter_body");
  let word = body_arr[i].split("");
  let delcounter = 0;
  let finished = false;

  // Aqui é definida uma função responsável por realizar a animação de digitação e exclusão
  let type = function () {
    if (word.length > 0) {
      text_elem.innerHTML += word.shift();
    } else if (delcounter < 4) {
      text_elem.innerText = text_elem.innerText.slice(
        0,
        text_elem.innerText.length - 1
      );
      delcounter++;
    } else if (!finished) {
      word = body_delword.split("");
      finished = true;
    }
  };
  setInterval(type, 150); // Chama a função type a cada 120 milissegundos, ou seja, é meio que o tempo entre a inserçãso de cada caractere na tela
}

// Tempo para o começo de cada animação
setTimeout(function () {
  // TypeWriterHeading();
  $(".typewriter_caret.heading").show();
});
setTimeout(function () {
  TypeWriterBody();
  $(".typewriter_caret.heading").hide();
  $(".typewriter_carettwo.body").show();
  setTimeout(function () {
    $(".typewriter_carettwo.body").hide();
    $(".typewriter_caret.body").show();
  }, 9300);
}, 5000);

function openFullscreen(iframeId) {
  var elem = document.getElementById(iframeId);
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
    elem.setAttribute("scrolling", "yes");
  } else if (elem.mozRequestFullScreen) {
    /* Firefox */
    elem.mozRequestFullScreen();
    elem.setAttribute("scrolling", "yes");
  } else if (elem.webkitRequestFullscreen) {
    /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
    elem.setAttribute("scrolling", "yes");
  } else if (elem.msRequestFullscreen) {
    /* IE/Edge */
    elem.msRequestFullscreen();
    elem.setAttribute("scrolling", "yes");
  }
}
document.addEventListener("fullscreenchange", function () {
  if (!document.fullscreenElement) {
    // Quando sai da tela cheia, atualiza a página
    location.reload();
  }
});

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));
