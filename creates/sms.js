const sendSMS = (z, bundle) => {
  const options = {
    method: 'GET',
    url: 'https://enterprise.smsgupshup.com/GatewayAPI/rest',
    params: {
      method: 'SendMessage',
      send_to: bundle.inputData.recipients,
      msg: bundle.inputData.message,
      msg_type: 'TEXT',
      userid: bundle.inputData.userId,
      auth_scheme: 'plain',
      password: bundle.inputData.password,
      v: '1.1',
      format: 'json'
    }
  };
  const responsePromise = z.request(options);
  return responsePromise
    .then(response => JSON.parse(response.content));
};

module.exports = {
  key: 'sms',
  noun: 'SMS',

  display: {
    label: 'Send SMS',
    description: 'Sends SMS to given recipients.'
  },

  operation: {
    inputFields: [{
      key: 'userId',
      label: 'User ID', 
      required: true, 
      helpText: 'User ID used to log in to your Gupshup account.'
    }, {
      key: 'password', 
      label: 'Password', 
      required: true, 
      helpText: 'Password used to log in to your Gupshup account.'
    }, {
      key: 'recipients', 
      label: 'Recipient', 
      required: true,
      helpText: 'Comma separated phone numbers for recipients. Eg.: 919876543210,919867542301'
    }, {
      key: 'message',
      label: 'Message',
      required: true,
      helpText: 'SMS content'
    }],
    perform: sendSMS
  }
};
