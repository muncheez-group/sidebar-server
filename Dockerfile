FROM node:carbon

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

CMD [ "npm", "run", "docker" ]

EXPOSE 3001