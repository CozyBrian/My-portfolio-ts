FROM node:16-alpine

WORKDIR /app

ARG VITE_APP_EMAILJS_KEY

COPY . .

ENV VITE_APP_EMAILJS_KEY="${VITE_APP_EMAILJS_KEY}"

RUN yarn install

RUN yarn build

RUN yarn global add serve

CMD ["serve", "-s", "dist", "-l", "3000"]
