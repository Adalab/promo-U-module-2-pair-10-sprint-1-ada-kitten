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

const descrSearchText = input_search_desc.value;

const kittenData_1 = {
  image: 'https://dev.adalab.es/gato-siames.webp',
  name: 'Anastacio',
  desc: 'Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.',
  race: 'Siamés'
};
const kittenData_2 = {
  image : 'https://dev.adalab.es/sphynx-gato.webp',
  name : 'Fiona',
  desc : 'Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.',
  race : 'Sphynx'
};
const kittenData_3 = {
   image : 'https://dev.adalab.es/maine-coon-cat.webp',
   name : 'Cielo',
   desc : 'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.',
   race : 'Maine Coon'
  };


//funciones

function renderKitten(kittenData_1) {
  return `<li class="card">
<article>
  <img
    class="card_img"
    src= "${kittenData_1.image}"
    alt="gatito"
  />
  <h3 class="card_title">${kittenData_1.name}</h3>
  <h4 class="card_race">${kittenData_1.race}</h4>
  <p class="card_description">
  ${kittenData_1.desc}
   </p>
</article>
</li>`;
}

function renderKitten(kittenData_2) {
  return `<li class="card">
<article>
  <img
    class="card_img"
    src= "${kittenData_2.image}"
    alt="gatito"
  />
  <h3 class="card_title">${kittenData_2.name}</h3>
  <h4 class="card_race">${kittenData_2.race}</h4>
  <p class="card_description">
  ${kittenData_2.desc}
   </p>
</article>
</li>`;
}

function renderKitten(kittenData_3) {
  return `<li class="card">
<article>
  <img
    class="card_img"
    src= "${kittenData_3.image}"
    alt="gatito"
  />
  <h3 class="card_title">${kittenData_3.name}</h3>
  <h4 class="card_race">${kittenData_3.race}</h4>
  <p class="card_description">
  ${kittenData_3.desc}
   </p>
</article>
</li>`;
}

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
  const newKitten = {
    image: inputPhoto.value,
    name: inputName.value,
    desc: inputDesc.value,
    race: inputRace.value
  };
  if (
    newKitten.desc === '' ||
    newKitten.photo === '' ||
    newKitten.name === '' ||
    newKitten.race === ''
  ) {
    labelMessageError.innerHTML = `¡Uy, parece que has olvidado algo!`;
  } else {
    const cardKitten = renderKitten(newKitten);
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
  if (kittenData_1.desc.includes(descrSearchText)) {
    jsList.innerHTML += renderKitten(kittenData_1);
  }
  if (kittenData_2.desc.includes(descrSearchText)) {
    jsList.innerHTML += renderKitten(kittenData_2);
  }
  if (kittenData_3.desc.includes(descrSearchText)) {
    jsList.innerHTML += renderKitten(kittenData_3);
  }
};

//manejadores

jsbtnadd.addEventListener('click', handleClickNewCatForm);
jsNewformAdd.addEventListener('click', addNewKitten);
jsBtnSearch.addEventListener('click', filterKitten);

// jsbtnadd.addEventListener('click', () => {
//   newForm.classList.toggle('collapsed');
// });
