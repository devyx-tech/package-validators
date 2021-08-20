FROM node:14.9-alpine3.10
RUN apk add bash
WORKDIR /node

#RUN npm install --global jest-coverage-badges

CMD tail -f /dev/null