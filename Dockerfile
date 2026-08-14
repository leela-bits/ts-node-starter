FROM node:24-trixie AS builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run check

FROM node:24-trixie-slim AS runtime

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci --omit=dev

COPY --from=builder /app/src ./src

ENV NODE_ENV=production

USER node

EXPOSE 3000

CMD ["node", "src/index.ts"]
