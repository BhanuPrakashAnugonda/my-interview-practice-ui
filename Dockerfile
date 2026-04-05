# Step 1: Build
FROM node:20 AS builder

WORKDIR /app

# ✅ Copy package files first
COPY package*.json ./

# ✅ Install dependencies
RUN npm install

# ✅ Copy remaining files
COPY . .

# ✅ Build app
RUN npm run build

# Step 2: Production
FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app ./

EXPOSE 3000

CMD ["npm", "start"]
