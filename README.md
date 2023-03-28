# React authentication using EasyAuth

1. Sign in to [easyauth.io](https://easyauth.io) and create a new 'Registered Client' with redirect URI set to `http://127.0.0.1:3000`

2. Clone the sample app from [https://github.com/easyauth-io/easyauth-react-example](https://github.com/easyauth-io/easyauth-react-example)

    `git clone https://github.com/easyauth-io/easyauth-react-example.git`

3. Copy `.env` into `.env.local`

    `cp .env .env.local`

4. Edit `.env.local` and set the parameters from your 'Registered Client' that you created in Step 1.

5. Run `npm install` followed by `npm run start`

6. Visit [http://127.0.0.1:3000](http://127.0.0.1:3000)

