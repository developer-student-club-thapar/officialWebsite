FROM node:alpine as builder
WORKDIR /app
COPY /Frontend/package.json .
RUN npm install --silent
COPY /Frontend .
RUN npm build

FROM nginx
COPY --from=builder /app/build /usr/share/ngingx/html
EXPOSE 80

