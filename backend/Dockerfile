# Use the latest and lightweight Node.js image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json for dependency installation
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Copy the .env file into the container
COPY .env ./

# Expose the port your app will run on
EXPOSE 5000

# Start the application
CMD ["npm", "start"]
