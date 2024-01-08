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
    boxesContainer.innerHTML = '';


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
      const warning = document.createElement('p');
      warning.textContent = 'Please enter a valid number between 1 and 100.';
      document.body.appendChild(warning);
  
      setTimeout(() => {
        warning.remove();
      }, 2000);
    }
  }