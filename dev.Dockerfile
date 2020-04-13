FROM node:alpine
WORKDIR /app
COPY /Frontend/package.json .
RUN npm install
COPY /Frontend .
CMD ["npm","start"]
