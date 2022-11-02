// Game screen -
const gameScreenMainContainer = document.getElementById('screen__container');
const gamePanelContainer = document.getElementById('game__container');
// Keyboard
const keyboardMainContainer = document.getElementById('keyboard__container');
const keyboardWrappContainer = document.getElementById('keyboard__wrapp');

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
  ['$', '4', '₪'],
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
  ['Tab', '↹'],
  ['/'],
  [`'`],
  ['ק', '€'],
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
  ['Return', '↵'],
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
    keyboardKey.id = key[0]
  
    key.forEach((char, index) => {
      const keyboardChar = document.createElement('p');
  
      if (char === 'BackSpace') {
        keyboardKey.classList = 'keys backspace__key';
      }
  
      keyboardChar.innerText = char;
      keyboardChar.id = char
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
      if (char === 'Tab') {
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
  
      if (char === 'Return') {
        keyboardKey.classList = 'keys return__key';
      }
  
      keyboardChar.innerText = char;
      keyboardChar.id = 'ש'
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
        keyboardKey.classList = 'keys ';
      }
      if (char === 'Alt' || char === 'Alt Gr') {
        keyboardKey.classList = 'keys alt__key';
      }
  
      keyboardChar.innerText = char;
      keyboardKey.appendChild(keyboardChar);
    });
  
    keyboardRowFive.appendChild(keyboardKey);
  });

window.addEventListener('keydown', (e) => {
  console.log('WORKING');
});
