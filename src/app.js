const StudioGhibli = require('./models/studio_ghibli.js')
const GhibliListView = require('./views/list_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log("JavaScript Loaded");

  const container = document.querySelector('#studio-ghibli-list');
  const ghibliListView = new GhibliListView(container)
  ghibliListView.bindEvents()

  const studioGhibli = new StudioGhibli();
  studioGhibli.getData();

});
