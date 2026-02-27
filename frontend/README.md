# Install and Run Softcan app

npm install
npm run dev

## Docker

Build the image locally:

```bash
docker build -t orders-frontend:latest .
```

Run the container:

```bash
docker run --rm -p 3000:80 orders-frontend:latest
```

Or use docker-compose (maps host port 3000 to container port 80):

```bash
docker-compose up --build
```

The app will be available at http://localhost:3000
