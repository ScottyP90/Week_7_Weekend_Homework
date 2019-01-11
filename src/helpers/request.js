const Request = function functionName(url) {
  this.url = url;
}

Request.prototype.get = function functionName() {
  return fetch (this.url).then((res) => {
    return res.json();
  });
}

module.exports = Request;
