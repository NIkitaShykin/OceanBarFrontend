FROM node:14.17.6
RUN mkdir -p /app8
WORKDIR /app8
COPY package*.json /app8
RUN npm install
COPY . /app8
CMD [ "npm",  "run", "dev"]
