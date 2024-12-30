# pull the Node.js Docker image
# Create a new build stage from a Node image.
FROM oven/bun:latest

# create the directory inside the container
WORKDIR /workspace

# copy the package.json files from local machine to the workdir in container
COPY . .

RUN bun run server:setup

# copy the generated modules and all other files to the container
# our app is running on port 3000 within the container, so need to expose it
EXPOSE 3001

# run npm install in our local machine
# the command that starts our app
CMD ["bun", "run", "server"]
