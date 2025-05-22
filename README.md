# physics-adventure

This project is a basic backend web application built using Express and connected to a MySQL database. It serves as a template for creating RESTful APIs with TypeScript.

## Project Structure

```
physics-adventure
├── src
│   ├── index.ts               # Application configuration
│   ├── index.html             # Main page display
│   ├── config
│   │   └── database.ts        # Database connection configuration
│   ├── controllers            # Controllers folder
│   ├── database               # Database-related folder
│   │   └── migrations         # Database migration files
│   ├── routes                 # Routes for endpoints
│   ├── models                 # Model defining the structure of datas
│   └── types
│       └── index.ts           # Type definitions for the application
├── server.ts                  # Entry point of the application
├── package.json               # NPM package configuration
├── database.json              # Database setting for migration
├── .env.example               # Environment variable file example
├── tsconfig.json              # TypeScript configuration
└── README.md                  # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd physics-adventure
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Configure the database:**
   Set the database connection settings using `.env.example` to match your MySQL database credentials.

4. **Migrate the database:**
   ```
   db-migrate --migrations-dir src/database/migrations up
   ```

5. **Run the application:**
   ```
   npm start
   ```

6. **Access the API:**
   The API will be available at `http://localhost:8081`. You can use tools like Postman or curl to interact with the endpoints.

## Example Endpoints

- **GET /api/answer**: Retrieve all of students answer.
- **GET /api/answer/:studentUuid**: Retrieve a student answer by student UUID.
- **GET /api/answer/class/:studentClass**: Retrieve students answer filtered by student class.
- **POST /api/answer**: Create a new student answer data.
- **PUT /api/answer/:studentUuid**: Updated a student answer.
- **DELETE /api/answer/:studentUuid**: Delete a student answer.

## License

This project is licensed under the MIT License.