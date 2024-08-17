// Import the events module
const EventEmitter = require('events');

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Define the event handler function
const subscribeHandler = (subscriberName) => {
    console.log(`Thanks For Subscribing to ${subscriberName}™`);
};

// Add the event handler 
eventEmitter.on('subscribe', subscribeHandler);

// Trigger the "subscribe" event 
eventEmitter.emit('subscribe', 'College Wallah');

// Remove the event handler
eventEmitter.off('subscribe', subscribeHandler);

// Trigger the "subscribe" event again 
eventEmitter.emit('subscribe', 'College Wallah');
