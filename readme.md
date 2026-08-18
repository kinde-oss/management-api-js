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

Alternatively, the configuration can be passed to `init` directly:

```js
import { init } from "@kinde/management-api-js";

init({
  kindeDomain: "mybusiness.kinde.com",
  clientId: "your_m2m_client_id",
  clientSecret: "your_m2m_client_secret",
});
```

## Usage

```js
import { Users, init } from "@kinde/management-api-js";

init();
const { users } = await Users.getUsers();
```

### Passing parameters

Parameters are grouped by where they are sent in the request: `path`, `query` and `body`.

```js
import { Users, init } from "@kinde/management-api-js";

const params = {
  query: {
    id: "kp_xxx",
  },
};

init();
const userData = await Users.getUserData(params);
```

```js
await Users.updateUser({
  query: {
    id: "kp_xxx",
  },
  body: {
    given_name: "Ada",
  },
});
```

### TypeScript

Calls resolve with the response payload and throw an `ApiError` on failure. The generated types don't assume this, so responses are typed as possibly `undefined`; pass `throwOnError: true` to a call to get a non-optional response type:

```ts
const { users } = await Users.getUsers({ throwOnError: true });
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
