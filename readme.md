# Kinde Management API JS

## Description

Javascript SDK to interact with the Kinde Management API.

> Important: This has to be used on a backend service, will not work on a browser or client based libraries

## Installation

```bash
# npm
npm install @kinde/management-api-js
# yarn
yarn add @kinde/management-api-js
# pnpm
pnpm add @kinde/management-api-js
```

## Configuration

The following ENV variables are required to run the project:

- `KINDE_DOMAIN`: Kinde domain e.g. `mybusiness.kinde.com`
- `KINDE_MANAGEMENT_CLIENT_ID`: Client ID of your M2M token
- `KINDE_MANAGEMENT_CLIENT_SECRET`: Client Secret of your M2M token

## Usage

```js
import { Users, init } from "@kinde/management-api-js";

init();
const { users } = await Users.getUsers();
```

## API documentation

You can find management API documentation here: [Kinde Management API Documentation](https://kinde.com/api/docs/#kinde-management-api)

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Submit a pull request.

## License

By contributing to Kinde, you agree that your contributions will be licensed under its MIT License.
