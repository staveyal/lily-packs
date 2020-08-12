FROM node

# Downloaded project npm dependencies
COPY package*.json ./
RUN npm install
# Copy server folder files
COPY ./server ./server
COPY ./tsconfig.json ./tsconfig.json
# Copy frontend source files
COPY ./src ./src
COPY webpack.config.js webpack.config.js
# Build frontend and server
RUN npm run build
RUN npm prune --production

COPY ./public ./public

EXPOSE ${SERVERPORT}

CMD ["npm", "run", "serve"]