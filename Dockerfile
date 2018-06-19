FROM node:10.4.1
COPY . /usr/local/message-app
WORKDIR /usr/local/message-app
RUN npm install
CMD ["npm", "start"]