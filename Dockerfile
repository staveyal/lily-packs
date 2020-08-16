FROM node:alpine

# Downloaded project npm dependencies
COPY package*.json ./
RUN npm install
# Copy server folder files
COPY ./server ./server
COPY ./tsconfig.json ./tsconfig.json
# Build server
RUN npm run build:server
# Copy frontend source files
COPY ./client ./client
COPY webpack.config.js webpack.config.js
COPY ./.env ./.env
# Build frontend
RUN npm run build:fe
RUN npm prune --production

COPY ./public ./public

EXPOSE ${SERVERPORT}

CMD ["npm", "start"]
