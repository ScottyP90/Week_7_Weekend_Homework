const PubSub = require('../helpers/pub_sub.js')

const GhibliSelectView = function(element) {
  this.element = element
}

GhibliSelectView.prototype.bindEvents = function() {
  PubSub.subscribe('StudioGhibli:studio-ghibli-loaded', (event) => {
    const studios = event.detail
    this.populate(studios)
  })
  this.element.addEventListener('change', (event) => {
    const selectedDirector = event.target.value
    PubSub.publish('GhibliSelectView:selected-director', selectedDirector)
  })
};

GhibliSelectView.prototype.populate = function(studios) {
  const uniqueDirectors = []
  studios.forEach((studio) => {
    if(!uniqueDirectors.includes(studio.director)){
      uniqueDirectors.push(studio.director)
    }
  })
  uniqueDirectors.forEach((director) => {
    const option = document.createElement('option')
    option.value = director
    option.textContent = director
    this.element.appendChild(option)
  })
}

module.exports = GhibliSelectView;
