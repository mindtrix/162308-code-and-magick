'use strict';
var body = document.body;
var wizardWindow = body.querySelector('.setup');
wizardWindow.classList.remove('hidden');
var similarListElement = wizardWindow.querySelector('.setup-similar-list');
var wizardsTemplate = document.getElementById('similar-wizard-template').content;
var WIZARD_NAMES = ['Иван','Хуан','Себастьян','Мария','Кристоф','Виктор','Юлия','Вашингтон'];
var WIZARD_SEC_NAMES = ['да Марья','Верон','Мирабелла','Вальц','Онопко','Топольницкая','Нионго','Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)','rgb(241, 43, 107)','rgb(146, 100, 161)','rgb(56, 159, 117)','rgb(215, 210, 55)','rgb(0, 0, 0)'];
var EYES_COLORS = ['black','red','blue','yellow','green'];
var random = function (min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}
var wizardOne = {
  name:WIZARD_NAMES[random(0,WIZARD_NAMES.length-1)],
  secondname:WIZARD_SEC_NAMES[random(0,WIZARD_SEC_NAMES.length-1)],
  coatColor:COAT_COLORS[random(0,COAT_COLORS.length-1)],
  eyesColor:EYES_COLORS[random(0,EYES_COLORS.length-1-1)],
}
var wizardTwo = {
  name:WIZARD_NAMES[random(0,WIZARD_NAMES.length-1)],
  secondname:WIZARD_SEC_NAMES[random(0,WIZARD_SEC_NAMES.length-1)],
  coatColor:COAT_COLORS[random(0,COAT_COLORS.length-1)],
  eyesColor:EYES_COLORS[random(0,EYES_COLORS.length-1)],
}
var wizardThree = {
  name:WIZARD_NAMES[random(0,WIZARD_NAMES.length-1)],
  secondname:WIZARD_SEC_NAMES[random(0,WIZARD_SEC_NAMES.length-1)],
  coatColor:COAT_COLORS[random(0,COAT_COLORS.length-1)],
  eyesColor:EYES_COLORS[random(0,EYES_COLORS.length-1)],
}
var wizardFour = {
  name:WIZARD_NAMES[random(0,WIZARD_NAMES.length-1)],
  secondname:WIZARD_SEC_NAMES[random(0,WIZARD_SEC_NAMES.length-1)],
  coatColor:COAT_COLORS[random(0,COAT_COLORS.length-1)],
  eyesColor:EYES_COLORS[random(0,EYES_COLORS.length-1)],
}
var wizardsTypes = [wizardOne,wizardTwo,wizardThree,wizardFour];
var renderWizard = function() {
  var wizardElement = wizardsTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizardsTypes[i].name +"\n"+ wizardsTypes[i]. secondname;
  wizardElement.querySelector('.wizard-coat').style.fill = wizardsTypes[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill =  wizardsTypes[i].eyesColor;
  return wizardElement;
}
var wizardsList = document.createDocumentFragment();
for(var i=0; i < wizardsTypes.length; i++) {
  wizardsList.appendChild(renderWizard());
}
similarListElement .appendChild(wizardsList);
body.querySelector('.setup-similar').classList.remove('hidden');

