# DevOps Microservices Starter

Three small Node.js services for the AWS/DevOps assignment:
- User Service: `/users/`
- Product Service: `/products/`
- Order Service: `/orders/`

## Run locally
```bash
docker compose up -d --build
docker compose ps
```

Test through Nginx:
```bash
curl http://localhost/users/
curl http://localhost/products/
curl http://localhost/orders/
```

Health endpoints:
```bash
curl http://localhost/users/health
curl http://localhost/products/health
curl http://localhost/orders/health
```

Stop:
```bash
docker compose down
```

This is a demo application only. It uses in-memory/static sample data and does not require a database.
