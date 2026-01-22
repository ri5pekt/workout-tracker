# Workout Tracker

A modern, mobile-first workout tracking application designed for gym enthusiasts who want to log their training sessions, track progress over time, and maintain a comprehensive workout history.

## Overview

Workout Tracker helps you:
- **Log workouts in real-time** with an intuitive, fast interface optimized for the gym floor
- **Track various exercise types** including strength training (weight × reps), cardio (distance, time, steps), and bodyweight exercises
- **Monitor your progress** with detailed exercise history and personal records
- **Manage your weight** alongside your workouts for accurate calorie calculations
- **Build a custom exercise library** tailored to your training style
- **Access your data anywhere** with cloud sync across all devices

Designed for both beginners and experienced lifters, the app prioritizes speed and simplicity while providing powerful tracking capabilities.

## App Screens

### Core Workout Flow
- **Home** - Dashboard showing today's active workout, quick start button, and recent workout history with calorie estimates
- **Workout (Empty)** - Clean starting point for creating a new workout with editable name, date/time, and quick exercise addition
- **Workout (Active)** - Full workout editor with timer, exercise cards, set logging (weight/reps inputs), and finish workout action
- **Exercise History** - Detailed view of an individual exercise's past performance across all workouts, showing sets/reps/weight progression over time

### Exercise Management
- **Exercise Library** - Browsable catalog of all available exercises organized by type (Strength/Cardio) with visual icons
- **Add New Exercise** - Form for creating custom exercises with icon upload, measurement type selection (Weight×Reps, Distance×Time, Count×Time, Time, Reps), muscle group, and notes

### History & Progress
- **History (Timeline)** - Chronological list of all workouts grouped by date, showing workout name, status (Ongoing/Completed), duration, and calories
- **History (Calendar)** - Monthly calendar view with workout indicators (dots/badges) for quick navigation and pattern visualization

### User Profile
- **Profile & Settings** - User parameters (name, height, date of birth), weight tracking with measurement history and progress indicators, unit preferences (kg/lbs, km/mi)

## Tech Stack

### Frontend

- Vue 3 + Vite + TypeScript
- Tailwind CSS (styling)
- VueUse (composition utilities & mobile interactions)
- Heroicons or Lucide Icons
- Pinia (state management)
- Vue Router
- Native `fetch` (no Axios)

### Backend

- Node.js + TypeScript
- Fastify (REST API)
- Zod (request validation)
- Prisma (ORM + migrations)
- PostgreSQL

### Auth

- JWT access tokens
- Refresh token stored in httpOnly cookie
- bcrypt password hashing

## Project Structure (Monorepo)

```
workout-tracker/
├── backend/          # Node.js + Fastify API
├── frontend/         # Vue 3 + Vite app
├── docs/             # UI mockups and documentation
├── docker-compose.yml
└── README.md
```

## 🚀 Quick Start

### Prerequisites

- Docker Desktop installed and running
- Git

### Setup & Run

#### Option A: Recommended for Development (Fastest Hot Reload)

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd workout-tracker
   ```

2. **Create environment file**
   ```bash
   cp .env.example .env
   ```
   
   ⚠️ **IMPORTANT**: In production, change the JWT secrets in `.env`!

3. **Start backend + database with Docker**
   ```bash
   docker-compose up -d db backend
   ```

4. **Run database migrations**
   ```bash
   docker-compose exec backend npx prisma migrate dev --name init
   ```

5. **Seed the database with default exercises**
   ```bash
   docker-compose exec backend npm run prisma:seed
   ```

6. **Install frontend dependencies & run locally**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

7. **Open the app**
   - Navigate to `http://localhost:5173`
   - ⚡ **Hot reload is instant** - any changes you make will update immediately!
   - Create an account and start tracking! 💪

#### Option B: Full Docker Setup (All Services in Docker)

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd workout-tracker
   ```

2. **Create environment file**
   ```bash
   cp .env.example .env
   ```

3. **Start all services with Docker**
   ```bash
   docker-compose up --build
   ```
   
   This will start:
   - PostgreSQL database on `localhost:5432`
   - Backend API on `http://localhost:3000`
   - Frontend app on `http://localhost:5173`

4. **Run database migrations** (in a new terminal)
   ```bash
   docker-compose exec backend npx prisma migrate dev --name init
   ```

5. **Seed the database with default exercises**
   ```bash
   docker-compose exec backend npm run prisma:seed
   ```

6. **Open the app**
   - Navigate to `http://localhost:5173`
   - Create an account and start tracking! 💪
   
   ⚠️ **Note**: Hot reload may be slower in Docker on Windows. For faster development, use Option A.

### Common Commands

```bash
# Stop all services
docker-compose down

# View logs
docker-compose logs -f

# Restart a specific service
docker-compose restart backend

# Remove everything including volumes (⚠️ deletes data)
docker-compose down -v

# Access database with Prisma Studio
docker-compose exec backend npx prisma studio
```

### Development

**Recommended Setup (Option A):**
- **Frontend**: Run locally for instant hot reload (`npm run dev` in `frontend/`)
- **Backend + Database**: Run in Docker for consistency

**Alternative Setup (Option B):**
- **All services in Docker**: Slower hot reload on Windows, but simpler setup

**Common Development Tasks:**
- Frontend changes: Auto-reload instantly (Option A) or within seconds (Option B)
- Backend changes: Auto-reload via tsx watch mode in Docker
- Database changes: Use Prisma migrations (`npx prisma migrate dev`)
- View database: `docker-compose exec backend npx prisma studio`

## API Documentation

### Auth Endpoints

- `POST /api/auth/register` - Create new account
- `POST /api/auth/login` - Sign in
- `POST /api/auth/refresh` - Refresh access token
- `POST /api/auth/logout` - Sign out

### User Endpoints

- `GET /api/users/me` - Get current user profile
- `PATCH /api/users/me` - Update profile

More endpoints coming soon as we build out workout and exercise features!

## UI Mockups

Detailed UI mockups and design references are available in `docs/screens.html`. Open it in a browser to see all screen designs.

## Contributing

This is an initial setup. More features coming soon:
- Workout CRUD operations
- Exercise library management
- Progress tracking and analytics
- Weight measurement tracking

## License

MIT
