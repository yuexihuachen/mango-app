# pull the Node.js Docker image
# Create a new build stage from a Node image.
FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /workspace

COPY . .

FROM base AS prod-deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm -F './server' install --prod --frozen-lockfile

FROM oven/bun:1 AS bun
WORKDIR /workspace
# copy the generated modules and all other files to the container
# our app is running on port 3000 within the container, so need to expose it
EXPOSE 3001

# run npm install in our local machine
# the command that starts our app
CMD [ "pnpm", "start" ]
