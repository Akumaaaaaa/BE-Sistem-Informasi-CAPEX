# Capital Expenditure Management - Back End

This documentation provides an overview of the **Web Service** and **RESTful API** implemented in **CAPEX MANAGEMENT**, built using
<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=mongodb,express,nodejs,postman" />
  </a>
</p>
 
## Table of Contents
- [Overview](https://github.com/Akumaaaaaa/BE-Sistem-Informasi-CAPEX.git#overview)
- [Getting Started](https://github.com/Akumaaaaaa/BE-Sistem-Informasi-CAPEX.git#getting-started)
- [Project Structure](https://github.com/Akumaaaaaa/BE-Sistem-Informasi-CAPEX.git#project-structure)
- [API Endpoints](https://github.com/Akumaaaaaa/BE-Sistem-Informasi-CAPEX.git#api-endpoints)
- [Entity Relationship Diagram](https://github.com/Akumaaaaaa/BE-Sistem-Informasi-CAPEX.git#erd)

<br>

### 1. Overview <a name="overview"></a>
Integrated Information System to Monitor and Manage CAPEX Digitally

<br>

### 2. Getting Started <a name="getting-started"></a>
**a. Prerequisites**
- Node.js installed
- MongoDB Atlas account for database (update the .env file with your MongoDB connection URL)
- Set up environment variables in a ```.env``` file

<br>

**b. Installation**
- Clone the repository to your local machine:
```
https://github.com/Akumaaaaaa/BE-Sistem-Informasi-CAPEX.git
```
- Open the project directory
```
cd BE-Sistem-Informasi-CAPEX
npm install
```
- Set Environment Variables
```
DB_URL=mongodb+srv://your_username:your_password@your_mongodb_url/CapitalExpenditure
JWT_SECRET=YourJWTSecretKey
```
- Run it
```
npm start
```
The server will be running on `http://localhost:3000`

<br>

### 3. Project Structure <a name="project-structure"></a>
The project follows a modular structure:
- ```index.js```: Entry point of the application, establishes server connection and defines middleware.
- ```config/```: Contains database configuration.
- ```middlewares/```: Holds authentication middleware for authorization checks.
- ```models/```: Contains Mongoose models for datacapex, pekan, and summary.
- ```routes/```: Includes routes for authentication and data handling.

<br>

### 4. API Endpoints <a name="api-endpoints"></a>
**Authentication**
- ```POST /auth/register```: Register a new user.
- ```POST /auth/login```: Log in an existing user.

<br>

**Data Handling**<br>
**a. Users**
- ```POST /data/users```: Create a new user (admin-only).
- ```GET /data/users```: Get all users (admin-only).
- ```PUT /data/users/:id```: Update a user by ID (admin-only).
- ```DELETE /data/users/:id```: Delete a user by ID (admin-only).

**b. Summary**
- ```POST /summary```: Create a new summary (admin-only).
- ```GET /summary```: Get all summaries (accessible to all users).
- ```PUT /summary/:id```: Update a summary by ID (admin-only).
- ```DELETE /summary/:id```: Delete a summary by ID (admin-only).

**c. Pekan**
- ```POST /pekan```: Create a new pekan (admin-only).
- ```GET /pekan```: Get all pekan (accessible to all users).
- ```PUT /pekan/:id```: Update a pekan by ID (admin-only).
- ```DELETE /pekan/:id```: Delete a pekan by ID (admin-only).

**d. Data Capex**
- ```POST /dataCapex```: Create a new dataCapex (admin-only).
- ```GET /dataCapex```: Get all dataCapex (accessible to all users).
- ```PUT /dataCapex/:id```: Update a dataCapex by ID (admin-only).
- ```DELETE /dataCapex/:id```: Delete a dataCapex by ID (admin-only).

<br>

**Postman Documentation Available here**: https://documenter.getpostman.com/view/31106938/2sAYdoESmN

<br>

### 5. Entity Relationship Diagram <a name="erd"></a>
<p align="center">
  <img src="https://imgur.com/Ntb4LHi.png" height="580"/>
</p>
