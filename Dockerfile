# image builder
FROM node:latest as builder
WORKDIR /app
COPY . .
RUN npm install --production
RUN npm cache clean --force
RUN npm run build

# image runner
FROM node:latest
WORKDIR /app
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/package-lock.json ./
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next/

RUN npm install

EXPOSE 3000
CMD ["npm", "start"]











