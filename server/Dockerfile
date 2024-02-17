FROM --platform=linux/amd64 node:20.11.0-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3001

CMD ["npm", "start"]
