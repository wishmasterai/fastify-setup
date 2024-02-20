# Fastify Application Setup Guide

Welcome to the Fastify Application Setup Guide! This comprehensive guide is designed to help you kickstart a new project with Fastify, TypeScript, ESLint, Prettier, and Husky. By following these instructions, you'll set up a robust development environment optimized for efficiency and code quality.

## Prerequisites

Before diving into the setup process, please ensure you have the following installed on your system:
- **Node.js**: The runtime environment for executing JavaScript code server-side.
- **npm**: The Node Package Manager, used for installing dependencies.

## Getting Started

This project leverages Husky, an advanced tool for managing Git hooks, to ensure code quality and consistency across your development workflow. Let's get started by setting up your project environment step by step.

### Setting Up Husky

Husky introduces pre-commit hooks to your workflow, enhancing development practices by automating tasks such as code formatting and lint checks before commits. To set up Husky, follow these steps:

1. **Install Husky**: Run the following command to install Husky in your project:
    ```shell
    npx husky install
    ```
   This command creates a `.husky` directory in your project root, where Husky's configuration and scripts will reside.

### Environment Configuration

To prepare your project environment, create a new `.env` file based on the provided example:

```shell
cp .env.example .env
````

### Installing Dependencies

To install the project dependencies, including Fastify, TypeScript, ESLint, and Prettier, run:

```
npm install
```

### Running the Application

#### Development Mode
For development purposes, start the application with live reloading enabled:
```
npm run start:dev
```

#### Production Mode
To compile the application for production use and start the server:
```
npm run build && npm run start
```

You can verify the application is running by accessing: http://127.0.0.1:4000/hello
