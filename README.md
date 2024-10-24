# Yelp Camp

A web application for campers to share and discover new campgrounds.

## About

Yelp Camp is a full-stack web application built using Node.js, Express.js, and MongoDB. The application allows users to create an account, login, and share their favorite campgrounds. Other users can then view, review, and rate these campgrounds.

## Features

- User authentication and authorization using Passport.js
- Create, read, update, and delete (CRUD) operations for campgrounds and reviews
- Flash messages for user feedback
- Error handling and custom error pages
- Responsive design using EJS templates

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- MongoDB (version 4 or higher)
- npm (version 6 or higher)

### Installation

1. Clone the repository: `git clone https://github.com/your-username/yelp-camp.git`
2. Install dependencies: `npm install`
3. Start the MongoDB server: `mongod`
4. Start the application: `node app.js`

### Environment Variables

- `MONGO_URI`: the connection string for your MongoDB database
- `SECRET`: a secret key for session encryption

## Usage

1. Open a web browser and navigate to `http://localhost:3002`
2. Create an account or login to an existing account
3. Explore and create new campgrounds
4. View and review existing campgrounds

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome! Please submit a pull request with your changes.

## Acknowledgments

- This project uses the following dependencies:
  - Express.js
  - MongoDB
  - Passport.js
  - EJS
