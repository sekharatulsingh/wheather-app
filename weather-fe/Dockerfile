FROM node:16-alpine
WORKDIR /app

# Copy package.json and package-lock.json (if it exists)
COPY package.json ./
# Uncomment the next line if you have a package-lock.json
# COPY package-lock.json ./

RUN npm install

# Copy the rest of your application code
COPY . .

EXPOSE 3000
CMD ["node", "weather.js"]
