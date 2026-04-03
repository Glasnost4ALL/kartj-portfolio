FROM node:24-alpine AS base
WORKDIR /app

FROM base AS deps
COPY package.json package-lock.json* ./
RUN npm install

FROM base AS dev
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

EXPOSE 3000
ENV NODE_ENV=development
ENV HOSTNAME="0.0.0.0"

CMD ["npm", "run", "dev"]
