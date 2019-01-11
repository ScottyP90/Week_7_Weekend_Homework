const GhibiDetailView = function() {

}

GhibiDetailView.prototype.createDetail = function(studioGhibli) {
  const studioGhibliDev = document.createElement('div');

  const header = document.createElement('h2')
  header.textContent = studioGhibli.title;
  studioGhibliDev.appendChild(header)

  const detailList = document.createElement('ul')

  const directorItem = document.createElement('li')
  directorItem.textContent = `Director: ${studioGhibli.director}`
  detailList.appendChild(directorItem);

  const producerItem = document.createElement('li')
  producerItem.textContent = `Producer: ${studioGhibli.producer}`
  detailList.appendChild(producerItem)

  const releaseDateItem = document.createElement('li')
  releaseDateItem.textContent = `Release Date: ${studioGhibli.release_date}`
  detailList.appendChild(releaseDateItem)

  const rtScoreItem = document.createElement('li')
  rtScoreItem.textContent = `Rotten Tomato Score: ${studioGhibli.rt_score}%`
  detailList.appendChild(rtScoreItem)

  const descriptionItem = document.createElement('li')
  descriptionItem.textContent = `Description: ${studioGhibli.description}`
  detailList.appendChild(descriptionItem);

  studioGhibliDev.appendChild(detailList)

  return studioGhibliDev;
}

module.exports = GhibiDetailView;
