# orders-mono

A full-stack order management system built as a monorepo. The backend is an ASP.NET Core Web API (.NET 10) backed by PostgreSQL, and the frontend is a React + TypeScript SPA served in production via Nginx. Real-time order status updates are delivered over SignalR.

---

## Repository Structure

```
orders-mono/
├── backend/
│   └── orders/                  # ASP.NET Core Web API
│       ├── Controllers/         # HTTP endpoints (orders, auth)
│       ├── Data/                # EF Core DbContext
│       ├── Hubs/                # SignalR hub
│       ├── Migrations/          # EF Core migrations
│       ├── Model/               # Domain models
│       └── Program.cs           # App bootstrap
├── frontend/                    # React + TypeScript SPA
│   ├── src/
│   │   ├── api/                 # Axios API clients
│   │   ├── components/          # UI components
│   │   ├── pages/               # Route-level views
│   │   ├── model/               # TypeScript interfaces
│   │   └── store.ts             # Zustand global state
│   ├── Dockerfile               # Multi-stage production build
│   └── nginx.conf               # SPA routing config
└── .github/workflows/           # CI pipelines (backend + frontend)
```

---

## Tech Stack

| Layer | Technology |
|---|---|
| Backend language | C# / .NET 10 |
| Web framework | ASP.NET Core Web API |
| ORM | Entity Framework Core 10 |
| Database | PostgreSQL 15+ |
| Real-time | SignalR |
| Frontend framework | React 18 + TypeScript |
| Build tool | Vite 5 |
| UI library | Material UI (MUI) v5 |
| State management | Zustand |
| HTTP client | Axios |
| Frontend server | Nginx (production) |

---

## Prerequisites

- [.NET 10 SDK](https://dotnet.microsoft.com/download)
- [Node.js 20+](https://nodejs.org/)
- [PostgreSQL 15+](https://www.postgresql.org/)
- Docker (optional, for frontend containerization)

---

## Getting Started

### 1. Database

Create the database and a user, then update the connection string in `backend/orders/appsettings.Development.json`:

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Host=localhost;Port=5432;Database=orders_db;Username=<user>;Password=<password>"
  }
}
```

EF Core migrations run automatically on startup — no manual `dotnet ef database update` required.

### 2. Backend

```bash
cd backend
dotnet restore
dotnet run --project orders
```

The API starts at `https://localhost:5080`. Swagger/OpenAPI is available at `https://localhost:5080/openapi`.

### 3. Frontend

```bash
cd frontend
npm install
npm run dev
```

The dev server starts at `http://localhost:5173` and proxies API calls to the backend.

---

## API Reference

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/login` | Log in — sets session, returns token |
| `POST` | `/api/logout` | Invalidate session |

### Orders

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/orders` | List all orders |
| `POST` | `/api/orders` | Create a new order |
| `GET` | `/api/orders/{id}` | Get order by ID |

### Real-time (SignalR)

Connect to `/order-status` and invoke:

| Method | Description |
|--------|-------------|
| `SendMessage(user, message)` | Broadcast a message to all connected clients |
| `SendRandomPosition()` | Start receiving random position updates (2-second interval) |

---

## Frontend Pages

| Route | Page | Access |
|-------|------|--------|
| `/login` | Login | Public |
| `/` or `/Home` | Home | Protected |
| `/orders` | Orders management | Protected |
| `/inventory` | Inventory / Licenses | Protected |
| `/Users` | User management | Protected |
| `/History` | Activity history | Protected |

All protected routes require an active session. Unauthenticated users are redirected to `/login`.

---

## Docker (Frontend)

Build and run the frontend as a container:

```bash
cd frontend
docker build -t orders-frontend:latest .
docker run --rm -p 3000:80 orders-frontend:latest
```

The image uses a multi-stage build: Node 18 compiles the Vite app, then Nginx serves the static output on port 80.

---

## Environment Variables

| Variable | Location | Description |
|----------|----------|-------------|
| `REACT_APP_API_URL` | Frontend `.env` | Base URL for API calls |
| `ConnectionStrings__DefaultConnection` | Backend env / appsettings | PostgreSQL connection string |

Avoid committing credentials in `appsettings.json`. Use `appsettings.Development.json` locally and environment variables in production.

---

## Development Scripts

### Backend

```bash
dotnet build                    # Build
dotnet test                     # Run tests
dotnet format                   # Format code
dotnet ef migrations add <Name> # Add a new migration
```

### Frontend

```bash
npm run dev       # Start dev server
npm run build     # Production build
npm run lint      # ESLint check
npm run format    # Prettier formatting
npm run preview   # Preview production build locally
```

---

## CI/CD

GitHub Actions workflows run on every push and pull request:

- **`.github/workflows/backend.yml`** — restore, build, and test the .NET project
- **`.github/workflows/frontend.yml`** — install dependencies and build the React app

---

## Data Model

```
Order
├── Id          UUID (PK)
├── CustomerId  char (nullable)
└── Items       string[]

Position
├── X  double
└── Y  double
```
