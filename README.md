# Material List App

## Overview
This project is a SAP UI5 application that displays a list of materials from an SAP system in a clean and user-friendly table format. The application fetches data through an OData service and presents it in a web browser.

## Project Structure
The project is organized into several key files and directories:

- **ui5.yaml**: Contains server configuration for the UI5 application, including local development server settings and proxy configuration to connect to the SAP backend.
- **package.json**: Serves as the identity card for the application, including metadata, dependencies, and scripts for starting the application.
- **.env**: Stores sensitive information such as the SAP username and password, which is not committed to version control for security reasons.
- **webapp/**: Contains all the user-facing components of the application:
  - **index.html**: The entry point of the application that loads necessary SAP UI5 libraries and initializes the app.
  - **Component.js**: Acts as the main engine of the application, managing the application lifecycle.
  - **manifest.json**: The blueprint for the application, defining the data source (OData service URL), application settings, and routing information.
  - **view/**: Contains the UI layout files.
    - **MainView.view.xml**: Defines the structure of the main view, including the table and data binding to the OData entity set.
  - **controller/**: Contains the logic for the main view.
    - **MainView.controller.js**: Handles user interactions and manages data binding.
  - **i18n/**: Contains internationalization properties.
    - **i18n.properties**: Includes text labels and descriptions for localization.

## Setup and Running the Application
1. **Clone the Repository**: Clone this project to your local machine.
2. **Install Dependencies**: Navigate to the project directory and run `npm install` to install the required dependencies.
3. **Configure Environment Variables**: Create a `.env` file in the root directory and add your SAP username and password.
4. **Start the Application**: Run `npm start` from the project folder. This will start the local development server and open the application in your default web browser.
5. **Login**: Enter your SAP credentials when prompted to access the material data.

## Functionality
The application connects to the SAP backend via an OData service to fetch and display a list of materials. Users can view material details in a structured table format, with data binding ensuring that the displayed information is always up-to-date.

## Key Features
- User-friendly interface for viewing materials.
- Real-time data fetching from the SAP system.
- Organized project structure for easy maintenance and scalability.

## Conclusion
This Material List App serves as a practical example of how to build a UI5 application that interacts with SAP systems, demonstrating the integration of OData services and the use of SAP BTP for cloud-based applications.