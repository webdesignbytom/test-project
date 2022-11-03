// Game screen
const gameScreenMainContainer = document.getElementById('screen__container');
const gamePanelContainer = document.getElementById('game__container');
// Game Letters Container
const gameLetterContainer = document.getElementById('game__letters')
// speed settings
const speedInt = document.getElementById('speed__setting__int');
const speedUpArrow = document.getElementById('up__arrow');
const speedDownArrow = document.getElementById('down__arrow');
// Keyboard
const keyboardMainContainer = document.getElementById('keyboard__container');
const keyboardWrappContainer = document.getElementById('keyboard__wrapp');
// Hide Keyboard
const hideKeyboardCheckbox = document.getElementById('hide__keyboard');
// Level
const levelInt = document.getElementById('level__int');
const levelTypeDisplay = document.getElementById('level__type__display')
// const levelSelector = document.getElementById('levelType__selector')
// Hit letters
const hitLetters = document.getElementById('hit__container');
// Missed Letters
const missedLetters = document.getElementById('miss__container');

// Reference
const hewbrewAlphabet = [
  { char: 'ש', letter: '', key: '' },
  { char: 'ד', letter: '', key: '' },
];

const keyboardRowOne = document.getElementById('row__one');
const rowOne = [
  ['~', ';'],
  ['!', '1'],
  ['@', '2'],
  ['#', '3'],
  ['₪', '4'],
  ['%', '5'],
  ['^', '6'],
  ['&', '7'],
  ['*', '8'],
  [')', '9'],
  ['(', '0'],
  ['_', '-', '־'],
  ['+', '='],
  ['BackSpace'],
];

const keyboardRowTwo = document.getElementById('row__two');
const rowTwo = [
  ['Tab ↹'],
  ['/'],
  [`'`],
  ['ק'],
  ['ר'],
  ['א'],
  ['ט'],
  ['ֺו'],
  ['ן'],
  ['ם'],
  ['פ'],
  ['}', ']'],
  ['{', '['],
  ['|', "'"],
];

const keyboardRowThree = document.getElementById('row__three');
const rowThree = [
  ['Caps Lock'],
  ['ש'],
  ['ד'],
  ['ג'],
  ['כ'],
  ['ע'],
  ['י', 'ײ'],
  ['ח', 'ױ'],
  ['ל'],
  ['ך'],
  [':', 'ף'],
  ['"', ','],
  ['Return ↵'],
];

const keyboardRowFour = document.getElementById('row__four');
const rowFour = [
  ['⇧', 'Shift'],
  ['ז'],
  ['ס'],
  ['ב'],
  ['ה'],
  ['נ'],
  ['מ'],
  ['צ'],
  ['>', 'ת'],
  ['<', 'ץ'],
  ['?', '.'],
  ['Shift', '⇧'],
];

const keyboardRowFive = document.getElementById('row__five');
const rowFive = [
  ['Ctrl'],
  ['Win'],
  ['Alt'],
  [''],
  ['Alt Gr'],
  ['Win'],
  ['Menu'],
  ['Ctrl'],
];

// Keyboard Rendering
// Top row render
rowOne.forEach((key, index) => {
  const keyboardKey = document.createElement('div');
  keyboardKey.classList = 'keys';
  keyboardKey.id = key[0];

  key.forEach((char, index) => {
    const keyboardChar = document.createElement('p');

    if (char === 'BackSpace') {
      keyboardKey.classList = 'keys backspace__key';
    }

    keyboardChar.innerText = char;
    keyboardChar.id = char;
    keyboardKey.appendChild(keyboardChar);
  });

  keyboardRowOne.appendChild(keyboardKey);
});

// Second row render
rowTwo.forEach((key, index) => {
  console.log('key', key);
  const keyboardKey = document.createElement('div');
  keyboardKey.classList = 'keys';

  key.forEach((char, index) => {
    const keyboardChar = document.createElement('p');
    if (char === 'Tab ↹') {
      keyboardKey.classList = 'keys tab__key';
    }
    keyboardChar.innerText = char;
    keyboardKey.appendChild(keyboardChar);
  });

  keyboardRowTwo.appendChild(keyboardKey);
});

// Thrid row render
rowThree.forEach((key, index) => {
  const keyboardKey = document.createElement('div');
  keyboardKey.classList = 'keys';

  key.forEach((char, index) => {
    const keyboardChar = document.createElement('p');

    if (char === 'Caps Lock') {
      keyboardKey.classList = 'keys capsLock__key';
    }

    if (char === 'Return ↵') {
      keyboardKey.classList = 'keys return__key';
    }

    keyboardChar.innerText = char;
    keyboardChar.id = 'ש';
    keyboardKey.appendChild(keyboardChar);
  });

  keyboardRowThree.appendChild(keyboardKey);
});

// Fourth row render
rowFour.forEach((key, index) => {
  const keyboardKey = document.createElement('div');
  keyboardKey.classList = 'keys';

  if (key[0] === 'Shift') {
    keyboardKey.classList = 'keys shift__key__right';
  }

  if (key[1] === 'Shift') {
    keyboardKey.classList = 'keys shift__key__left';
  }

  key.forEach((char, index) => {
    const keyboardChar = document.createElement('p');

    keyboardChar.innerText = char;
    keyboardKey.appendChild(keyboardChar);
  });

  keyboardRowFour.appendChild(keyboardKey);
});

// Fifth row render
rowFive.forEach((key, index) => {
  const keyboardKey = document.createElement('div');
  keyboardKey.classList = 'keys';

  key.forEach((char, index) => {
    const keyboardChar = document.createElement('p');
    if (char === '') {
      keyboardKey.classList = 'keys space__key';
    }
    if (char === 'Ctrl') {
      keyboardKey.classList = 'keys ctrl__key';
    }
    if (char === 'Alt' || char === 'Alt Gr') {
      keyboardKey.classList = 'keys alt__key';
    }

    keyboardChar.innerText = char;
    keyboardKey.appendChild(keyboardChar);
  });

  keyboardRowFive.appendChild(keyboardKey);
});

// KEY LISTENER
window.addEventListener('keydown', (e) => {
  console.log('WORKING');
});

// HIDE KEYBOARD
function hideKeyboard() {
  console.log(state.keyBoardHidden)
  state.keyBoardHidden = !state.keyBoardHidden
  console.log(state.keyBoardHidden)
  
  if (state.keyBoardHidden === true) {
    keyboardWrappContainer.style.display = 'none'
  }

  if (state.keyBoardHidden === false) {
    keyboardWrappContainer.style.display = 'grid'
  }
}

// TEMP GAME ARRAY
const gameArray = [
  ['Alef', 'Ayin', 'Alef', 'Ayin'],
  // ['Bet', 'Ayin', 'Ayin', 'Bet', 'Ayin'],
  // ['Gimel', 'Ayin', 'Gimel', 'Ayin', 'Bet', 'Ayin', 'Alef', 'Ayin'],
  // ['Ayin', 'Alef', 'Bet', 'Ayin', 'Bet', 'Alef', 'Ayin', 'Kaf', 'Chet'],
  // ['Kaf', 'Chet', 'Ayin', 'Alef', 'Kaf', 'Sofit', 'Ayin', 'Kaf'],
];

// STATE
const state = {
  levelType: 'Drills',
  level: 1,
  levelIndex: 0,
  speedSetting: 1,
  currentGameArray: [],
  currentArrayLine: [],
  currentLetter: '',
  missedLetters: 2,
  correctLetters: 7,
  currentLevelLineIndex: 0,
  currentLevelCharIndex: 0,
  timer: 0,
  keyBoardHidden: false,
};

// LEVEL TYPE SELECTOR
const levelSelection = (event) => {
  levelTypeDisplay.innerText = event.target.value
}

// SPEED SETTINGS
speedUpArrow.addEventListener('click', (event) => {
  if (state.speedSetting >= 9) {
    return;
  }

  state.speedSetting++;
  console.log('speedSetting', state.speedSetting);
  reRenderState();
});

speedDownArrow.addEventListener('click', (event) => {
  if (state.speedSetting <= 1) {
    return;
  }

  state.speedSetting--;
  console.log('speedSetting', state.speedSetting);
  reRenderState();
});




// Buttons 
function startGame() {
  console.log('startGame');
  gameLetterContainer.innerText = gameArray
  state.currentLetter = gameArray[state.currentLevelLineIndex][state.currentLevelCharIndex]
  console.log(state)
}

function resetLevel() {
  state.correctLetters = 0;
  state.missedLetters = 0;
  reRenderState();
}

function nextLevel() {
  state.level++;
  console.log(state.level);
  reRenderState();
}

function reRenderState() {
  speedInt.innerText = state.speedSetting;
  levelInt.innerText = state.level;
  hitLetters.innerText = state.correctLetters;
  missedLetters.innerText = state.missedLetters;
}

// Auto runs to set starting numbers for speed, level and such
function renderStartingConditions() {
  speedInt.innerText = state.speedSetting;
  levelInt.innerText = state.level;
  hitLetters.innerText = state.correctLetters;
  missedLetters.innerText = state.missedLetters;
  levelTypeDisplay.innerText = state.levelType
}

renderStartingConditions();

