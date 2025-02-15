ARG FIREFOX_VERSION='107.0'

FROM cypress/factory:latest

WORKDIR /opt/app

RUN npm install -g corepack
RUN corepack enable

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY . /opt/app

RUN pnpm exec cypress verify

# Default command: run Cypress in headless mode
CMD ["pnpm", "exec", "cypress", "run"]
