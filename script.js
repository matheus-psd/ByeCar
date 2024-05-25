const MOTO_CARD = [
    {
      img: "./assets/img-card-1.png",
      paragraph: "Scooter Elétrica Voltz EV1",
      price: "R$ 619,90",
      description: "Moto 100% elétrica com autonomia de 300 km para te levar mais longe!"
    },
    {
      img: "./assets/img-card-2.png",
      paragraph: "Honda CB 500X",
      price: "R$ 619,90",
      description: "O câmbio de 6 marchas da CB 500X oferece maior confiança e performance na pilotagem, tornando as subidas de marcha mais leves e as reduções mais suaves!"
    }
  ];
  
  let liEls = document.querySelectorAll(".carousel-cards li");
  let carouselContainer = document.querySelector(".carousel-cards");
  let modalEl = document.querySelector("#modal");
  let index = 0;
  
  function show(increase) {
    index = index + increase;
    if (index >= liEls.length) {
      index = 0;
    }
    if (index < 0) {
      index = liEls.length - 1;
    }
    // Rolagem horizontal suave para o item atual do carrossel
    let scrollAmount = liEls[index].offsetLeft - carouselContainer.offsetLeft;
    carouselContainer.scrollTo({
      left: scrollAmount,
      behavior: "smooth"
    });
  }
  
  setInterval(() => {
    show(1); // Avança para o próximo item a cada intervalo
  }, 5000);
  
  function showModal(index) {
    modalEl.innerHTML = `
      <div class="modal-card">
        <button onclick="closeModal()">
          <img src="./assets/close-btn.png" alt="close-button" />
        </button>
        <p>${MOTO_CARD[index].paragraph}</p>
        <img src="${MOTO_CARD[index].img}" alt="" />
        <description>${MOTO_CARD[index].description}</description>
        <button>Quero Assinar!</button>
      </div>
    `;
    modalEl.style.visibility = "visible";
  }
  
  function closeModal() {
    modalEl.style.visibility = "hidden";
  }
  