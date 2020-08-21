FROM node:alpine

# Downloaded project npm dependencies
COPY package*.json ./
RUN npm install --production
COPY ./dist ./dist
COPY ./public ./public
COPY ./server/queries ./server/queries

EXPOSE ${SERVERPORT}

CMD ["npm", "start"]
