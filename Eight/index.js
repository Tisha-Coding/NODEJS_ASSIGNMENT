// Import the events module
const EventEmitter = require('events');

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Define the event handler for the "subscribe" event
eventEmitter.on('subscribe', (subscriberName) => {
    console.log(`Thanks For Subscribing to ${subscriberName}`);
});

// Trigger the "subscribe" event with the subscriber's name
eventEmitter.emit('subscribe', 'College Wallah');




