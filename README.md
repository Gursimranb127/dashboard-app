Invoice Management Web App (Demo)

Purpose

This is a demo Invoice Management Web App built to showcase core features of invoice tracking and management. It is designed as a frontend-focused project using Next.js with Server-Side Rendering (SSR) and SQL for data persistence, simulating a real-world invoicing tool without backend APIs or authentication flow complexity.

⸻

Major Functions
	•	Sign In (Credential-Based): Simple sign-in using example email credentials (no signup or third-party auth).
	•	Invoice Management:
	•	Create new invoices
	•	Edit and delete existing invoices
	•	Track status (e.g., Paid, Pending, Draft)
	•	Client Info Handling: Enter and update client-related details per invoice.
	•	Server-Side Rendering: All data is fetched and rendered on the server using Next.js.
	•	SQL-Based Storage: Data is stored in a relational database using SQL.
	•	Responsive UI: Optimized for both mobile and desktop screens.

⸻

Tech Stack / Dependencies
	•	Frontend & SSR:
	•	Next.js
	•	React
	•	Tailwind CSS for UI styling
	•	next-auth for basic credential-based authentication
	•	Database:
	•	SQL (e.g., PostgreSQL, SQLite, or MySQL depending on your setup)
	•	Used with a compatible ORM or query library like Prisma (if used)
	•	Other Tools:
	•	next-auth for sign-in functionality
	•	next/router for navigation
	•	dotenv for managing secrets locally