FROM node:latest
LABEL description="My Moo"
LABEL maintainer="https://github.com/ArminWindlin/my-moo"

WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 3000

CMD ["node", "."]
