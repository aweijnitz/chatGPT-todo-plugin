# chatGPT-todo-plugin
Tutorial plugin for OpenAI/ChatGPT.

See https://platform.openai.com/docs/plugins/getting-started

Quickstart template Python (this project uses Node.js and Nest.js though): https://github.com/openai/plugins-quickstart

## Setup

	nvm use v18
	npm i -g @nestjs/cli # optional

## Plugin configuration files for OpenAI

    public/.well-known/ai-plugin.json
	public/openai.yaml


## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Build and run in Docker

```bash
$ ./buildDocker.sh
$ ./runDocker.sh # Note the port mapping if you change port from 3333
```

## License

- This project us unlicensed. 
- Nest is [MIT licensed](LICENSE).

