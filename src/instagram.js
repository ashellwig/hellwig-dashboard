const dotenv = require('dotenv')

dotenv.config({
  path: '../.env.local'
})

export const clientId = process.env.INSTAGRAM_CLIENT_ID
export const redirectUri = process.env.INSTAGRAM_REDIRECT_DEV

export function getUrl (client, redirect) {
  let url = 'https://api.instagram.com/oauth/authorize/?client_id=' +
    client +
    '&redirect_uri=http://localhost:8080/callback' +
    // redirect +
    '&response_type=token'

  console.log(url)
}
