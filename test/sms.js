'use strict';
const should = require('should');

const zapier = require('zapier-platform-core');

const App = require('../index');
const appTester = zapier.createAppTester(App);

// These are automated tests for the Issue create and Issue Trigger.
// They will run every time the `zapier test` command is executed.
describe('send SMS', () => {
  zapier.tools.env.inject();

  // Make sure there's an open issue to fetch here!
  it('should send SMS', (done) => {
    const bundle = {
      inputData: {
        userId: process.env.TEST_USERID,
        password: process.env.TEST_PASSWORD,
        recipients: process.env.TEST_RECIPIENTS,
        message: process.env.TEST_MESSAGE
      }
    };
    appTester(App.created.sms.operation.perform, bundle)
      .then((response) => {
        response.should.be.an.instanceOf(Object);
        // TODO: Add more robust tests.
        done();
      })
      .catch(done);
  });
});
