FROM node:16-alpine
WORKDIR /app

# Adjust the path based on where package.json is located
COPY weather-be/package.json ./
# Uncomment if you have a package-lock.json
# COPY weather-be/package-lock.json ./

RUN npm install

# Copy the rest of your application code
COPY weather-be .  # Adjust this line based on your structure

EXPOSE 3001
CMD ["node", "weather.js"]
