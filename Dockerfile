# syntax=docker/dockerfile:1

# FROM node:12.18.1-alpine

# # ENV NODE_ENV=production

# WORKDIR /app

# COPY ["package.json", "package-lock.json*", "./"]

# RUN npm install 
# # --production

# COPY . .

# CMD [ "node", "index.js" ]



FROM node:12-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 8000

CMD [ "node", "index.js" ]