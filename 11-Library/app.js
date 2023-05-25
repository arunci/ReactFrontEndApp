class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  toggleCheckOutStatus() {
    this._isCheckedOut
      ? (this._isCheckedOut = false)
      : (this._isCheckedOut = true);
  }

  getAverageRating() {
    const averageRating =
      this._ratings.reduce(
        (accumulator, currentValue) => accumulator + currentValue
      ) / this._ratings.length;
    return averageRating;
  }

  addRating(rating) {
    this._ratings.push(rating);
  }
}

const myMedia = new Media("Moby Dick");
console.log(myMedia.title);
console.log(myMedia.isCheckedOut);
myMedia.addRating(5);
myMedia.addRating(3);
myMedia.addRating(4);
myMedia.addRating(1);
console.log(myMedia.getAverageRating());
