# Seeder Etvas APP

This repository is intended to have a quick start
for ETVAS Application Integrations.

It contains both the Front-End (React) and the Back-End (NodeJS)
applications.

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

```
npm run bootstrap
npm run start
```

## Setup the Environment variables
