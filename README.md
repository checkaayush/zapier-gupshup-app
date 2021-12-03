<p align="center">
  <img src="./assets/zapier-logo.svg" height="80px"/>
  &nbsp;&nbsp;

  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/800px-Heart_coraz%C3%B3n.svg.png" height="80px"/>
  &nbsp;&nbsp;

  <img src="https://aithority.com/wp-content/uploads/2018/02/Gupshup-Logo.jpg" height="80px"/>

  <br><br>
</p>

# Zapier - Gupshup SMS Integration

[Gupshup SMS API](http://enterprise.smsgupshup.com/doc/GatewayAPIDoc.pdf) integration with Zapier.

## Why

For sending non-promotional messages to Indian(+91) numbers, I've found [Gupshup](https://www.gupshup.io/developer/home) to be very reliable, even for numbers with `Do Not Disturb` (DND) enabled (these seem to fail on other Zapier apps like Twilio).

> Note: I prefer and recommend the Zapier Twilio app for sending text messages and voice calls internationally.

## Development and Deployment

Follow along [Zapier CLI Quick Start](https://zapier.com/developer/start/introduction) for instructions to get started.

## Testing

1. Run `npm install`.
2. Replace values inside `.env.template` with your own values.
3. Copy contents of `.env.template` into a new file named `.env`.
4. Run `zapier test`.

## Troubleshooting

- Run `zapier validate` to validate project structure locally if you encounter errors while pushing the app after making code changes.

- _Invalid SMS template:_ Gupshup SMS REST API has the concept of approval of SMS templates for transactional messages. You might need to get your SMS content template registered and approved before being able to send an SMS.

## TODO

- [ ] Add support for sending WhatsApp messages.
- [ ] Validate input arguments for things like phone numbers.
- [ ] Add demo screen recording with mobile emulator

## References

1. [Zapier Developer Docs](https://zapier.com/developer/)
2. [Zapier CLI Docs](https://github.com/zapier/zapier-platform-cli)

## Disclaimer

This is not an official app by Zapier or Gupshup. Use it at your own discretion.
