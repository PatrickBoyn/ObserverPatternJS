// ES5 version of the Observer pattern
function EventObserver() {
  this.observers = [];
}
// I cheated a bit and used arrow functions from ES6
EventObserver.prototype = {
  subscribe: fn => {
    this.observers.push(fn);
    console.log(`You are now subscribed to ${fn.name}`);
  },
  unsubscribe: fn => {
    this.observers = this.observers.filter(item => {
      if (item !== fn) return item;
    });
    console.log(`You are now unsubscribed from ${fn.name}`);
  },
  fireEvent: () => {
    this.observers.forEach(item => {
      item.call();
    });
  }
};

const click = new EventObserver();

document.querySelector('.ub-ms').addEventListener('click', () => {
  click.subscribe();
});
