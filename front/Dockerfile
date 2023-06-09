# STAGE 1: BUILDER
FROM node:18-alpine as BUILDER
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

# STAGE 2: SERVE
FROM node:18-alpine
WORKDIR /app
COPY --from=BUILDER /app/build .
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "."]