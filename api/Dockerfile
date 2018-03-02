FROM node:alpine

ENV PORT 8888
ENV REDIS_HOST redis
ENV REDIS_PORT 6379

COPY ./package.json /package.json
COPY ./yarn.lock /yarn.lock

RUN yarn install

COPY . .

EXPOSE $PORT

CMD [ "npm", "start"]
