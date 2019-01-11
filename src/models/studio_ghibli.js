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

module.exports = StudioGhibli
