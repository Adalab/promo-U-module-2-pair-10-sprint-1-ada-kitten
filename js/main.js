'use-strict';
//querySelector

const jsList = document.querySelector('.js-list');
const input_search_desc = document.querySelector('.js_in_search_desc');

const jsbtnadd = document.querySelector('.js-btn-add');
const newForm = document.querySelector('.new-form');

const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const inputRace = document.querySelector('.js-input-race');
const labelMessageError = document.querySelector('.js-label-error');

const jsNewformAdd = document.querySelector('.js-newform-add');
const jsNewformCancel = document.querySelector('.js-newform-cancel');
const jsBtnSearch = document.querySelector('.js_btn_search');

//datos generales

const kittenImage1 = 'https://dev.adalab.es/gato-siames.webp';
const kittenName1 = 'Anastasio';
const kittenDesc1 =
  'Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.';
const kittenRace1 = 'Siamés';

const kittenImage2 = 'https://dev.adalab.es/sphynx-gato.webp';
const kittenName2 = 'Fiona';
const kittenDesc2 =
  'Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.';
const kittenRace2 = 'Sphynx';

const kittenImage3 = 'https://dev.adalab.es/maine-coon-cat.webp';
const kittenName3 = 'Cielo';
const kittenDesc3 =
  'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.';
const kittenRace3 = 'Maine Coon';

const kittenOne = renderKitten(
  kittenImage1,
  kittenDesc1,
  kittenName1,
  kittenRace1
);

const kittenTwo = renderKitten(
  kittenImage2,
  kittenDesc2,
  kittenName2,
  kittenRace2
);

const kittenThree = renderKitten(
  kittenImage3,
  kittenDesc3,
  kittenName3,
  kittenRace3
);

const descrSearchText = input_search_desc.value;

//funciones

function renderKitten(url, desc, name, race) {
  return `<li class="card">
<article>
  <img
    class="card_img"
    src= "${url}"
    alt="gatito"
  />
  <h3 class="card_title">${name.toUpperCase()}</h3>
  <h4 class="card_race">${race}</h4>
  <p class="card_description">
  ${desc}
   </p>
</article>
</li>`;
}

//let html = '';

function showNewCatForm() {
  newForm.classList.remove('collapsed');
}
function hideNewCatForm() {
  newForm.classList.add('collapsed');
}

function handleClickNewCatForm(event) {
  event.preventDefault();
  if (newForm.classList.contains('collapsed')) {
    showNewCatForm();
  } else {
    hideNewCatForm();
  }
}

function addNewKitten(event) {
  event.preventDefault();
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;
  const valueRace = inputRace.value;

  if (
    valueDesc === '' ||
    valuePhoto === '' ||
    valueName === '' ||
    valueRace === ''
  ) {
    labelMessageError.innerHTML = `¡Uy, parece que has olvidado algo!`;
  } else {
    const cardKitten = renderKitten(
      inputPhoto.value,
      inputDesc.value,
      inputName.value,
      inputRace.value
    );
    jsList.innerHTML += cardKitten;
  }
}

jsNewformCancel.addEventListener('click', () => {
  newForm.classList.toggle('collapsed');
  inputDesc.value = ``;
  inputPhoto.value = ``;
  inputName.value = ``;
  inputRace.value = ``;
  labelMessageError.innerHTML = ``;
});

const filterKitten = (event) => {
  event.preventDefault();
  if (kittenDesc1.includes(descrSearchText)) {
    jsList.innerHTML += kittenOne;
  }
  if (kittenDesc2.includes(descrSearchText)) {
    jsList.innerHTML += kittenTwo;
  }
  if (kittenDesc3.includes(descrSearchText)) {
    jsList.innerHTML += kittenThree;
  }
};

//manejadores

jsbtnadd.addEventListener('click', handleClickNewCatForm);
jsNewformAdd.addEventListener('click', addNewKitten);
jsBtnSearch.addEventListener('click', filterKitten);

// jsbtnadd.addEventListener('click', () => {
//   newForm.classList.toggle('collapsed');
// });
