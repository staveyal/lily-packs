FROM node

# Downloaded project npm dependencies
COPY package*.json ./
RUN npm install
COPY ./server ./server
COPY ./tsconfig.json ./tsconfig.json
COPY ./src ./src
COPY webpack.config.js
RUN npm run build
RUN npm prune --production

COPY ./public ./public

EXPOSE ${SERVERPORT}

CMD ["npm", "run", "serve"]