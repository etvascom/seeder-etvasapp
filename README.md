# Seeder Etvas APP

This repository is intended to have a quick start for ETVAS Application Integrations.

It contains both the Front-End (React) and the Back-End (NodeJS) applications.

## Instructions

#### 1. Clone (or fork this repo)

```
git clone git@github.com:etvascom/seeder-etvasapp.git
```

#### 2. Change the origin to point to your own repository

```
git remote rm origin
git remote add origin <your_git_repository>.git
git config master.remote origin
git config master.merge refs/head/master
```

#### 3. Change the environment values to reflect your setup

You might want to take a look at the next section prior to this.

```
vim server/.env.development.local
vim client/.env.development.local
```

#### 4. Run it

You have a special script named `bootstrap` that will run install in both client and server. Clever, huh?

```
npm run bootstrap
npm run start
```

## More information

You can find details about the implementation and information flow in the [Documentation](/Documentation.md) file.

The application uses the [etvas-sdk](https://github.com/etvascom/etvas-sdk) for back-end communication and [etvas-kit](https://github.com/etvascom/etvas-kit) for React Components, UI theming and more.

Please consult the corresponding documentation to learn more.
