const PubSub = require('../helpers/pub_sub.js')
const Request = require('../helpers/request.js')

const StudioGhibli = function() {
  this.studio = [];
}

StudioGhibli.prototype.getData = function() {
  const request = new Request('https://ghibliapi.herokuapp.com/films')
  request.get().then((data) => {
    this.studio = data;
    PubSub.publish('StudioGhibli:studio-ghibli-loaded', this.studio);
  })
};

StudioGhibli.prototype.bindEvents = function() {
  PubSub.subscribe('GhibliSelectView:selected-director', (event) => {
    const chosenDirector = event.detail
    const selectedDirector = this.findByDirector(chosenDirector)
    PubSub.publish('StudioGhibli:studio-ghibli-director', selectedDirector)
  })
}

StudioGhibli.prototype.findByDirector = function(searchDirector) {
  const foundDirector = this.studio.filter((studioGhibli) => {
    return studioGhibli.director === searchDirector;
  })
  return foundDirector;
}

module.exports = StudioGhibli
