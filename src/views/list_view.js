const PubSub = require('../helpers/pub_sub.js')
const GhibiDetailView = require('./detail_view.js')

const GhibliListView = function(container) {
  this.container = container;
}

GhibliListView.prototype.bindEvents = function() {
  PubSub.subscribe('StudioGhibli:studio-ghibli-loaded', (event) => {
    this.render(event.detail)
    PubSub.subscribe('StudioGhibli:studio-ghibli-director', (evet) => {
      this.clearList();
      this.render(evet.detail);
    })
  })
}

GhibliListView.prototype.render = function functionName(studio) {
  studio.forEach((studio) => {
    const studioDetail = new GhibiDetailView();
    const studioDev = studioDetail.createDetail(studio)
    this.container.appendChild(studioDev)
  })
}

GhibliListView.prototype.clearList = function () {
  this.container.innerHTML = '';
};

module.exports = GhibliListView
