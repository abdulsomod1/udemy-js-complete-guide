const backdropElement = document.getElementById('backdrop');
const modalLinkElements = document.querySelectorAll('.info-modal');
let infoModal;

function toggleBackdrop() {
  backdropElement.classList.toggle('visible');
}

function presentInfoModal(event) {
  const { text } = event.target.dataset;
  toggleBackdrop();
  infoModal = document.createElement('div');
  infoModal.classList.add('modal');
  infoModal.innerHTML = `
    <h2>More Details</h2>
    <p>${text}</p>
  `;
  const closeButton = document.createElement('button');
  // eslint-disable-next-line no-use-before-define
  closeButton.addEventListener('click', hideInfoModal);
  closeButton.textContent = 'Okay';
  infoModal.appendChild(closeButton);
  document.body.appendChild(infoModal);
}

function hideInfoModal() {
  toggleBackdrop();
  document.body.removeChild(infoModal);
}

// eslint-disable-next-line no-restricted-syntax
for (const linkElement of modalLinkElements) {
  linkElement.addEventListener('click', presentInfoModal);
}

backdropElement.addEventListener('click', hideInfoModal);
