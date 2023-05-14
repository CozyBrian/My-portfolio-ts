FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN yarn install

RUN yarn global add serve

COPY . .

RUN yarn build

CMD ["serve", "-s", "dist", "-l", "3000"]
