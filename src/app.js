const InstrumentFamilies = require('./models/instrument_families.js');
const SelectView = require('./views/select_view.js');
const InstrumentInfoView = require('./views/instrument_info.js');

document.addEventListener('DOMContentLoaded', function(){
  const selectedElement = document.querySelector('select#instrument-families');
  const instrumentFamiliesDropDown = new SelectView(selectedElement);
  instrumentFamiliesDropDown.bindEvents();

const infoDiv = document.querySelector('div#instrument-info')
const instrumentInfoDisplay = new InstrumentInfoView(infoDiv);
instrumentInfoDisplay.bindEvents();

const instrumentFamilies = new InstrumentFamilies();
instrumentFamilies.bindEvents();

});
