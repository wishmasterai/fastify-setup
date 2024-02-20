# Fastify Application Setup

This guide provides a streamlined setup for initiating a new project utilizing Fastify, TypeScript, ESLint, Prettier,
and Husky.

### Prerequisites

Ensure you have Node.js and npm installed on your system to follow the setup instructions.

### Getting Started

This project uses Husky to manage Git hooks, ensuring code quality and consistency. Follow these steps to set up your
project environment:

#### Setting Up Husky

To utilize Husky's pre-commit hook for enhancing your development workflow, execute the following command:

```
npx husky install
```

Executing this command will create a .husky directory in your project. Inside this directory, a subdirectory named \_
will appear, containing the husky.sh script, which is essential for Husky's operation.

### Create new .env file from .env.example file

```
cp .env.example .env
```

### Installing Dependencies

To install the project dependencies, including Fastify, TypeScript, ESLint, and Prettier, run:

```
npm install
```

### Running the Application

To start the application in development mode with live reloading, use:

```
npm run watch
```

This command compiles the TypeScript code and watches for any changes, automatically restarting the server to reflect
updates.
