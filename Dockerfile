FROM oven/bun

WORKDIR /app

COPY package*.json ./

RUN bun install

COPY . .

RUN bun run build

RUN bun add --global serve

CMD ["serve", "-s", "dist", "-l", "3000"]
