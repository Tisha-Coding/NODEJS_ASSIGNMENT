// Import the events module
const EventEmitter = require('events');

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Determine and print the current maximum number of listeners
console.log("Default maximum number of event listeners: ", eventEmitter.getMaxListeners());

// Set the maximum number of listeners to 5
eventEmitter.setMaxListeners(5);
console.log("Updated maximum number of event listeners: ", eventEmitter.getMaxListeners());

// Define the event handler for the "subscribe" event
eventEmitter.on('subscribe', (subscriberName) => {
    console.log(`Thanks For Subscribing to ${subscriberName}`);
});

// Trigger the "subscribe" event with the subscriber's name
eventEmitter.emit('subscribe', 'College Wallah');
