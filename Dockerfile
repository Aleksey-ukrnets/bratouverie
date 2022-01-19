# syntax=docker/dockerfile:1
FROM node:17-alpine3.12
WORKDIR /code
COPY package.json /code/
RUN apk add npm && npm install
COPY . /code/