function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  const input = document.querySelector('input');
  const createButton = document.querySelector('[data-create]');
  const destroyButton = document.querySelector('[data-destroy]');
  const boxesContainer = document.getElementById('boxes');

  createButton.addEventListener('click', createBoxes);
  destroyButton.addEventListener('click', destroyBoxes);

  function createBoxes() {
    const amount = input.valueAsNumber;

    if (isValidAmount(amount)) {
      const boxes = [];

      for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        box.style.width = `${30 + i * 10}px`;
        box.style.height = `${30 + i * 10}px`;
        box.style.backgroundColor = getRandomHexColor();
        boxes.push(box);
      }

      boxesContainer.append(...boxes);
      input.value = '';
    } else {
      alert('Please enter a valid number between 1 and 100.');
    }
  }

  function destroyBoxes() {
    boxesContainer.innerHTML = '';
  }

  function isValidAmount(amount) {
    return Number.isInteger(amount) && amount >= 1 && amount <= 100;
  }