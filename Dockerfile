FROM node:16-alpine

WORKDIR /app

COPY . .

ENV NODE_ENV production

RUN yarn install

RUN yarn build

RUN yarn global add serve

CMD ["serve", "-s", "build", "-l", "3000"]
