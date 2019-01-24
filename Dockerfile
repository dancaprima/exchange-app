# NodeJS base image
FROM node:8.12.0-alpine as node
# Declare working directory
WORKDIR /usr/src/app
# Copying package.json to docker container
COPY package*.json ./
# Install all dependency
RUN npm install
# Copy to docker container
COPY . .
# Build app
RUN npm run build

# Nginx base image
FROM nginx:1.13.12-alpine
# Copy dist file into nginx directory
COPY --from=node /usr/src/app/dist/exchange-app /usr/share/nginx/html
# Copy nginx conf into nginx default conf
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
