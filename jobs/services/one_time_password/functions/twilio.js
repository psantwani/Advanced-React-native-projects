const twilio = require('twilio');

const accountSid = 'ACffbc1804f9569b9b66c1211bab97d38a';
// This token has been revoked, don't bother trying :)
const authToken = '940e0f93357eaf6a240cf415e2daadc4';

module.exports = new twilio.Twilio(accountSid, authToken);