class EventObserver {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
    console.log(`You are now subscribed to ${fn.name}`);
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter(item => {
      if (item !== fn) {
        return item;
      }
    });
    console.log(`You are now unsubscribed from ${fn.name}`);
  }

  fireEvent() {
    this.observers.forEach(item => {
      item.call();
    });
  }
}

const click = new EventObserver();

document.querySelector('.sub-ms').addEventListener('click', () => {
  click.subscribe(getCurrentMS);
});

document.querySelector('.unsub-ms').addEventListener('click', () => {
  click.unsubscribe(getCurrentMS);
});

document.querySelector('.fire-event').addEventListener('click', () => {
  click.fireEvent();
});

const getCurrentMS = () => {
  console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
};
