const alphabet = document.getElementById('alphabet');
const placeHolder = document.getElementById('placeholder');

alphabet.focus();

const dottedLetters = {
  ش: 3,
  ث: 3,
  ف: 1,
  ق: 2,
  ب: 1,
  ت: 2,
  چ: 3,
  ج: 1,
  خ: 1,
  غ: 1,
  ظ: 1,
  ز: 1,
  ژ: 3,
  ذ: 1,
  ض: 1,
  ي: 2,
  ن: 1,
};

alphabet.addEventListener('input', (e) => {
  e.preventDefault();
  // destructuring input value
  let newString = [...e.target.value];

  // looping through objects keys
  newString.map((item) => {
    Object.keys(dottedLetters).map((key, idx) => {
      const values = Object.values(dottedLetters);
      if (key === item) {
        // looping through objects values
        placeHolder.innerText = values[idx];
      }
    });
  });
});
