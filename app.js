const fetch = require('node-fetch')
const prompt = require('prompt')

const main = (input) => {
  const { token, channel } = input
  const headers = new fetch.Headers()

  headers.append('accept', '*/*')
  headers.append('accept-encoding', 'gzip, deflate, br')
  headers.append('authorization', token)
  headers.append('content-length', '0')
  headers.append('origin', 'https://discord.com')
  headers.append('sec-ch-ua', '"Not?A_Brand";v="8", "Chromium";v="108"')

  const requestOptions = {
    method: 'POST',
    redirect: 'follow',
    headers
  }

  fetch(`https://discord.com/api/v9/channels/${channel}/typing`, requestOptions)
    .then(response => response.text())
    .then(result => console.log('Event sent', result))
    .catch(error => console.log('error', error));
}

const promptSchema = {
  properties: {
    token: {
      description: 'Your account token',
      required: true
    },
    channel: {
      description: 'Channel ID',
      pattern: /^[0-9\s\-]+$/,
      required: true
    },
    timer: {
      description: 'Interval in seconds',
      pattern: /^[0-9\s\-]+$/,
      required: true
    }
  }
};


prompt.start()

prompt.get(
  promptSchema,
  (err, input) => {
    main(input)
    setInterval(() => main(input), input.timer * 1000)
  }
)
