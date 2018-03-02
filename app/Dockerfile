FROM node:alpine

ENV PORT 9999

COPY ./package.json /package.json
COPY ./yarn.lock /yarn.lock

RUN yarn install

COPY . .

RUN npm run compile

EXPOSE $PORT

CMD [ "npm", "start" ]
