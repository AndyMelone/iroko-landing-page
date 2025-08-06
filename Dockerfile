FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat curl unzip bash
WORKDIR /app

# Install Bun
RUN curl -fsSL https://bun.sh/install | bash
ENV PATH="/root/.bun/bin:${PATH}"

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* bun.lock* .npmrc* ./
RUN \
    if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
    elif [ -f package-lock.json ]; then npm ci; \
    elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \
    elif [ -f bun.lock ]; then bun install --frozen-lockfile; \
    else echo "Lockfile not found." && exit 1; \
    fi


# Rebuild the source code only when needed
FROM base AS builder
RUN apk add --no-cache libc6-compat curl unzip bash
WORKDIR /app

# Install Bun in builder stage
RUN curl -fsSL https://bun.sh/install | bash
ENV PATH="/root/.bun/bin:${PATH}"

COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN \
    if [ -f yarn.lock ]; then yarn run build; \
    elif [ -f package-lock.json ]; then npm run build; \
    elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm run build; \
    elif [ -f bun.lock ]; then bun run build; \
    else echo "Lockfile not found." && exit 1; \
    fi

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000

ENV HOSTNAME="0.0.0.0"
CMD ["node", "server.js"]