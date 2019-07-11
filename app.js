// ES5 version of the Observer pattern
function EventObserver() {
  this.observers = [];
}

EventObserver.prototype = {
  subscribe: fn => {
    this.observers.push(fn);
    console.log(`You are now subscribed to ${fn.name}`);
  }
};
