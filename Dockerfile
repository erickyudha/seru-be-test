# Use the official Node.js image from the Docker Hub
FROM node:21

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Set environment variables (you might want to change these)
ENV PORT=8888
ENV NODE_ENV=production

# Expose the port the app runs on
EXPOSE 8000

# Start the application
CMD ["npm", "start"]
