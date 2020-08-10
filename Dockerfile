FROM node

# Downloaded project npm dependencies
COPY package*.json ./
RUN npm install

COPY ./dist ./dist
COPY ./public ./public

EXPOSE 8080

CMD ["npm", "run", "serve"]