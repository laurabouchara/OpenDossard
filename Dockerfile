# Setup and build the client
FROM node:10.12.0-alpine as client

WORKDIR /app/client/
COPY services/webapp/package.json ./
RUN npm install -g react-scripts
RUN npm install
COPY services/webapp/ ./
RUN npm run build

# Setup the server
FROM node:10.12.0-alpine

WORKDIR /app/
COPY --from=client /app/client/build/ ./client/build/

WORKDIR /app/server/
COPY services/api/package*.json ./
RUN npm install -g @nestjs/cli
RUN npm install -qy
COPY services/api/ ./
RUN nest build
ENV PORT 9090
EXPOSE 9090
