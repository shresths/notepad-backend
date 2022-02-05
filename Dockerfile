FROM node:16.6.2 as notepadbackend

FROM notepadbackend
ADD package.json /tmp/package.json
ADD package-lock.json /tmp/package-lock.json
RUN cd /tmp && npm --production=false ci
RUN mkdir -p /usr/app && cp -a /tmp/node_modules /usr/app/
WORKDIR /usr/app
ARG ENVIRONMENT='production'

ARG APP_HOST='0.0.0.0'
ARG APP_PORT=3000

ARG MONGO_HOST=
ARG MONGO_DB=

ARG REDIS_HOST=
ARG REDIS_PORT=6379
ARG REDIS_DB=

RUN echo "BUILDING WITH ENVIRONMENT SET TO $ENVIRONMENT and NODE_ENV set to $NODE_ENV"
ENV ENVIRONMENT=${ENVIRONMENT}
ENV MONGO_HOST=${MONGO_HOST}
ENV MONGO_DB=${MONGO_DB}

ENV REDIS_HOST=${REDIS_HOST}
ENV REDIS_PORT=${REDIS_PORT}
ENV REDIS_DB=${REDIS_DB}

COPY . .
RUN  npm run build
EXPOSE $APP_PORT
CMD [ "npm", "run", "start:prod" ]