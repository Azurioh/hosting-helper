# Base stage for common dependencies
FROM node:lts-alpine
WORKDIR /_build

ARG SERVICE_NAME
ENV SERVICE_NAME=${SERVICE_NAME}

COPY package*.json /_build
COPY apps/backend/package*.json apps/backend/tsconfig.json /_build/apps/backend/
COPY apps/backend/src/micro-services/${SERVICE_NAME} /_build/apps/backend/src/micro-services/${SERVICE_NAME}
COPY packages /_build/packages

RUN npm ci

WORKDIR /_build/apps/backend/src/micro-services/${SERVICE_NAME}

CMD ["npm", "start"]