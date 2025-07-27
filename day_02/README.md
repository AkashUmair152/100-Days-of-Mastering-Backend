
# Day 2: Building a Basic HTTP Server with Node.js

## What I Learned Today

Today, I learned how to build a basic HTTP server using Node.js's core `http` module. Here are the key concepts I covered:

- **Creating a server** using the `http` module.
- Understanding the **request (`req`) and response (`res`) objects**.
- Implementing **basic routing** by checking `req.url` and `req.method`.
- Serving **static HTML** and **JSON responses**.
- Setting appropriate **HTTP status codes** like `200` (OK), `404` (Not Found), and `500` (Internal Server Error).
- Using **Nodemon** for automatic server restarts during development.

---

## Example: Simple API Server

Below is an example of a simple API server I built. It has endpoints for `/`, `/users`, and `/posts`, serving hardcoded data.
