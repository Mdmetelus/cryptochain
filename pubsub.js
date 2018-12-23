const PubNub = require('pubnub');


const credentials ={
    publishKey: 'pub-c-031effba-ffb0-42ac-9f91-7e6808586a57',
    subscribeKey: 'sub-c-dd5386cc-0662-11e9-849f-127435af060e',
    secretKey: 'sec-c-NGUxMTljZTUtYzQ1OC00YWJmLWIxOGUtM2NhNzJjNWJkYTJj'
};

const CHANNELS = {
    TEST: 'TEST'
};

class PubSub {
    constructor() {
        this.pubnub = new PubNub(credentials);


        this.pubnub.subscribe({ channels: Object.values(CHANNELS) });

        this.pubnub.addListener(this.listener());
    }

    listener() {
        return {
            message: (messageObject) => {
                const { channel, message } = messageObject;

                console.log(`Message recieved. Channel: ${channel}. Message: ${message}`);
            }
        };
    }

    publish({ channel, message }) {
        this.pubnub.publish({ channel, message});
    }
}

module.export = PubSub;