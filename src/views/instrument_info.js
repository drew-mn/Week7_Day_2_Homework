const PubSub = require('../helpers/pub_sub.js');

const InstrumentInfoView = function(element){
  this.element = element;
};

InstrumentInfoView.prototype.bindEvents = function(){
  PubSub.subscribe('Instrument:selected-instrument-ready', (event) => {
    const instrument = event.detail;
    this.render(instrument);
  });
};

// https://stackoverflow.com/questions/5758161/how-do-i-create-a-new-line-in-javascript
InstrumentInfoView.prototype.render = function(instrument){
  const infoParagraph = document.createElement('p');
    infoParagraph.textContent = `${instrument.name}
    \nDescription: ${instrument.description}
    \nInstruments Include: ${instrument.instruments} `
    this.element.innerHTML = '';
    this.element.appendChild(infoParagraph);
};

module.exports = InstrumentInfoView;
