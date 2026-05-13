# My Next.js App 🐳

A production-ready Next.js 14 starter, fully dockerized.

## Project Structure

```
my-nextjs-app/
├── src/
│   └── app/
│       ├── layout.tsx       # Root layout
│       ├── page.tsx         # Home page
│       └── globals.css      # Global styles
├── public/                  # Static assets
├── Dockerfile               # Multi-stage Docker build
├── docker-compose.yml       # Easy local run
├── .dockerignore            # Files excluded from Docker
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── package.json
```

## Run Locally (without Docker)

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Run with Docker

### Option A — Docker directly
```bash
docker build -t my-nextjs-app .
docker run -p 3000:3000 my-nextjs-app
```

### Option B — Docker Compose (recommended)
```bash
docker compose up --build
```

Open **http://localhost:3000** 🎉

## Stop the container

```bash
docker compose down
```

## Tech Stack

- **Next.js 14** — App Router, TypeScript
- **Tailwind CSS** — Utility-first styling
- **Docker** — Multi-stage production build
