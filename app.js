// ES5 version of the Observer pattern
function EventObserver() {
  this.observers = [];
}

EventObserver.prototype = {
  subscribe: function(fn) {
    this.observers.push(fn);
    console.log(`You are now subscribed to ${fn.name}`);
  },
  unsubscribe: function(fn) {
    this.observers = this.observers.filter(function(item) {
      if (item !== fn) {
        return item;
      }
    });
    console.log(`You are now unsubscribed from ${fn.name}`);
  },
  fireEvent: function() {
    this.observers.forEach(function(item) {
      item.call();
    });
  }
};

const click = new EventObserver();

document.querySelector('.sub-ms').addEventListener('click', function() {
  click.subscribe(getCurrentMS);
});

document.querySelector('.unsub-ms').addEventListener('click', function() {
  click.unsubscribe(getCurrentMS);
});

document.querySelector('.fire-event').addEventListener('click', function() {
  click.fireEvent();
});

const getCurrentMS = function() {
  console.log(`Current Milliseconds: ${new Date().toMilliseconds()}`);
};
