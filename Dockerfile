FROM node:14.18-alpine as builder
RUN mkdir -p /app
WORKDIR /app
COPY package*.json /app/
RUN yarn install
COPY . /app/
RUN npm run build

FROM node:14.18-alpine as development
RUN mkdir -p /app
WORKDIR /app
RUN npm install -g serve
COPY --from=builder /app/build /app/build/
ENTRYPOINT [ "serve", "-s", "build" ]