# Stage 1: Build the React application
FROM node:20 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Clean npm cache and install dependencies
RUN npm cache clean --force && npm install --prefer-offline --no-audit --progress=false --no-fund

# Copy the rest of the application code
COPY . .

# Build the React application
RUN npm run build

# Stage 2: Serve the React application with Node.js
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy the build output from the previous stage
COPY --from=build /app/build /app/build

# Install a simple HTTP server for serving static files
RUN npm install -g serve

# Expose the application on port 3002
EXPOSE 3002

# Serve the application
CMD ["serve", "-s", "build", "-l", "3002"]
