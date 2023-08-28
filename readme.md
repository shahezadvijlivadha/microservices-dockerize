Assignment: 
Time Limit: 30 minutes

Question: 
Your task is to build a multi-container application consisting of two microservices: a User Service and an Order Service. Each service will be encapsulated within its own Docker container.

A. User Service: The User Service is responsible for managing user information.
Implement a Node.js REST API for user management:
	1. Create a new user.
	2. Get user details by ID.
	3. List all users.
	4. List all orders for an User
	Note: Use an in-memory data store (e.g., an array or a simple database library) to store user data.

B. Order Service: The Order Service handles order-related operations.
Implement a Node.js REST API for order management:
	1. Create a new order with user ID.
	2. Get order details by ID.
	3. List all orders.
	Note: Use a separate in-memory data store for order data.

C. Docker:
	1. Create a Dockerfile for each microservice.
	2. Use Docker Compose to define and manage the multi-container application.
	3. Ensure that the microservices can communicate with each other within the Docker network.