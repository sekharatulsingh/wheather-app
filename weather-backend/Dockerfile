# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm cache clean --force
RUN npm config set registry https://registry.npmjs.org/
RUN npm install --max-old-space-size=4096 --verbose
RUN node -v && npm -v && ls -la

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["node", "server.js"]  # Replace with your actual start command
