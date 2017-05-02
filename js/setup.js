'use strict';
var WIZARD_NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Вашингтон'];
var WIZARD_SEC_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var body = document.body;
var wizardWindow = body.querySelector('.setup');
var similarListElement = wizardWindow.querySelector('.setup-similar-list');
var wizardsTemplate = document.getElementById('similar-wizard-template').content;
var wizardImg =  document.querySelector('.wizard');
var wizardfireBall = wizardWindow.querySelector('.setup-fireball-wrap');
var wizardCoat = wizardImg.querySelector('.wizard-coat');
var wizardEyes = wizardImg.querySelector('.wizard-eyes');
var random = function (min, max) {
  return Math.round(Math.random() * (max - min)) + min;
};
var wizardOne = {
  name: WIZARD_NAMES[random(0, WIZARD_NAMES.length - 1)],
  secondname: WIZARD_SEC_NAMES[random(0, WIZARD_SEC_NAMES.length - 1)],
  coatColor: COAT_COLORS[random(0, COAT_COLORS.length - 1)],
  eyesColor: EYES_COLORS[random(0, EYES_COLORS.length - 1)],
};
var wizardTwo = {
  name: WIZARD_NAMES[random(0, WIZARD_NAMES.length - 1)],
  secondname: WIZARD_SEC_NAMES[random(0, WIZARD_SEC_NAMES.length - 1)],
  coatColor: COAT_COLORS[random(0, COAT_COLORS.length - 1)],
  eyesColor: EYES_COLORS[random(0, EYES_COLORS.length - 1)],
};
var wizardThree = {
  name: WIZARD_NAMES[random(0, WIZARD_NAMES.length - 1)],
  secondname: WIZARD_SEC_NAMES[random(0, WIZARD_SEC_NAMES.length - 1)],
  coatColor: COAT_COLORS[random(0, COAT_COLORS.length - 1)],
  eyesColor: EYES_COLORS[random(0, EYES_COLORS.length - 1)],
};
var wizardFour = {
  name: WIZARD_NAMES[random(0, WIZARD_NAMES.length - 1)],
  secondname: WIZARD_SEC_NAMES[random(0, WIZARD_SEC_NAMES.length - 1)],
  coatColor: COAT_COLORS[random(0, COAT_COLORS.length - 1)],
  eyesColor: EYES_COLORS[random(0, EYES_COLORS.length - 1)],
};
var wizardsTypes = [wizardOne, wizardTwo, wizardThree, wizardFour];
var renderWizard = function () {
  var wizardElement = wizardsTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizardsTypes[i].name + '\n' + wizardsTypes[i].secondname;
  wizardElement.querySelector('.wizard-coat').style.fill = wizardsTypes[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizardsTypes[i].eyesColor;
  return wizardElement;
};
var wizardsList = document.createDocumentFragment();
for (var i = 0; i < wizardsTypes.length; i++) {
  wizardsList.appendChild(renderWizard());
}
similarListElement .appendChild(wizardsList);
body.querySelector('.setup-similar').classList.remove('hidden');

var avatarIcon = document.querySelector('.setup-open');
var windowCross = wizardWindow.querySelector('.setup-close');

var onEscPress = function(evt) {
 if(evt.keyCode == 27) {
  closeWizardWindow();
 }
};
var onEnterPress = function(evt) {
  if(evt.keyCode == 13) {
    openWizardWindow();
  }
};
var openWizardWindow = function() {
  wizardWindow.classList.remove('hidden');
  document.addEventListener('keydown', onEscPress)
};
var closeWizardWindow = function() {
  wizardWindow.classList.add('hidden');
  document.removeEventListener('keydown',onEscPress)
};
avatarIcon.addEventListener('click',function() {
  openWizardWindow();
});
windowCross.addEventListener('click', function() {
  closeWizardWindow();
})
avatarIcon.addEventListener('keydown', onEnterPress);
windowCross.addEventListener('keydown', onEnterPress);
var getRandomColor = function() {
  var randomCoatColor = 'rgb' + '(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) + ')'; 
  return randomCoatColor;
};
var randomcolorChanger = function(item) {
  item.addEventListener('click', function() {
  item.style.fill = getRandomColor();
  });
}
var getColorFromArr = function(arrName) {
  var colorFromArr = arrName[random(0,arrName.length-1)];
  return colorFromArr;
}
var changerColorFromArr = function(item,arrName) {
  item.addEventListener('click', function() {
    item.style.fill = getColorFromArr(arrName);
  });
}
var changeBgColorFromArr = function(item, arrName) {
  item.addEventListener('click', function() {
    item.style.background = getColorFromArr(arrName);
  })
}
randomcolorChanger(wizardCoat);
changerColorFromArr(wizardEyes, EYES_COLORS);
changeBgColorFromArr(wizardfireBall, FIREBALL_COLORS);

var wizardNameInput = wizardWindow.querySelector('.setup-user-name');
wizardNameInput.addEventListener('keydown', function(evt) {
  if (evt.keyCode == 27) {
    evt.stopPropagation();  
  }
});








