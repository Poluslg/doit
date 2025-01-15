# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Getting Started

To get started with this React + Vite template, follow the instructions below:

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (version 14 or later)
- npm (Node package manager)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Application

To start the development server, run:

- `npm run dev`: Starts the development server.

This will start the Vite development server and open your application in the default web browser.

### Building for Production

To create a production build of your application, run:

- `npm run build`: Builds the app for production.
- `npm run serve`: Serves the production build locally.

This will generate a `dist` folder containing the optimized production files.

## Plugins

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh.
