# Backend Notes

## What is a backend?
The backend is the server-side part of a web app. It receives requests
from the frontend, applies the rules (business logic), and manages data.
Users don't see it.

## Main parts
- Server (Node.js, Express.js): runs the backend code and sends responses.
- Database (MySQL, MongoDB): stores data permanently.
- API (REST): lets the frontend and backend talk to each other.

## How data flows
User -> Frontend -> Backend -> Database -> Backend -> Frontend -> User

## Analogy
The backend is the engine of a car. The frontend is the steering wheel.

## What if a part fails?
If the database is down, the backend can't get the data, so the
frontend shows an error.