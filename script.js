const container = document.querySelector ('#container')
const containerSize = 600

// FUNCTION TO CREATE GRID:
function createGrid (scale) {
    container.innerHTML = ''
    for (i = 0; i < scale * scale; i++) {
      const square = document.createElement ('div')
      square.className = 'square'
      square.style.backgroundColor = 'lightgrey'
      const squareSize = (containerSize - (scale - 1) * 2) / scale
      square.style.width = `${squareSize}px`
      square.style.height = `${squareSize}px`
      square.addEventListener ('mouseover', function() {
        square.style.backgroundColor = 'grey'
      })
      container.appendChild (square)
    }
}

// CREATE DEFAULT 16X16 GRID:
createGrid (16)

// BUTTON TO CHANGE RESOLUTION:
const resolution = document.querySelector ('#resolution')
resolution.addEventListener ('click', function() {
    let scale = prompt('Which resolution would you like to draw in?')
    scale = parseInt(scale)
    if (isNaN(scale) || scale <= 0) {
      alert ('Please enter a valid number.');
      return;
    }
    else if (scale >= 100) {
      alert ('That resolution is too high. Please choose again.')
      return
    }
    else {
      createGrid (scale)
    }
})

// BUTTON TO TOGGLE RAINBOW CURSOR: 
const color = document.querySelector ('#color')
color.addEventListener ('click', function() {
  const squares = document.querySelectorAll ('.square')
  squares.forEach(square => {
    square.addEventListener('mouseover', function () {
      square.style.backgroundColor = 'rgba(' + getRandomInt(255) + ',' + getRandomInt(255) + ',' + getRandomInt(255) + ',' + 0.5 + ')';
    })
  })
})

// AUXILIARY FUNCTION TO GET RANDOM RGB VALUE:
function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1))
}

// BUTTON TO TOGGLE OPACITY CURSOR:
const opacity = document.querySelector ('#opacity')
opacity.addEventListener ('click', function() {
  const squares = document.querySelectorAll('.square')
  squares.forEach(square => {
    let opacityLevel = 0
    square.addEventListener('mouseover', function () {
      if (opacityLevel < 1) {
        opacityLevel += 0.1
        square.style.opacity = opacityLevel
      }
    });
  });
});