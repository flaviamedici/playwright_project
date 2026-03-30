# Playwright Project Documentation  

## Project Overview  
This project is designed to demonstrate the capabilities of Playwright for automating browser interactions and testing web applications. Playwright enables the creation of modern web applications that are responsive and reliable across multiple browsers.

## Setup Instructions  
1. **Clone the repository:**  
   `git clone https://github.com/flaviamedici/playwright_project.git`  

2. **Navigate to the project directory:**  
   `cd playwright_project`  

3. **Install the necessary dependencies:**  
   `npm install`  

4. **Install Playwright browsers:**  
   `npx playwright install`  

## Project Structure  
- `tests/` - Contains all test scripts organized by features.
- `pages/` - Page Object Model structure to represent the structure of the web pages.
- `utils/` - Utility functions that assist with testing.
- `config/` - Configuration files for different environments.
- `package.json` - Defines the dependencies and scripts for the project.

## Running Tests  
To run all tests, use the following command:  
`npx playwright test`  

To run a specific test file:  
`npx playwright test tests/example.spec.ts`  

## Configuration  
Configuration for different environments can be found in the `config/` directory. Modify the settings as necessary for your testing environment.

## Directory Descriptions  
- **tests/**: Contains all the test files, organized by specific features and scenarios.
- **pages/**: Implements the Page Object Model for easier test maintenance and improved structure.
- **utils/**: Additional helper functions used throughout the testing scripts.
- **config/**: Configuration files that determine the settings and environment variables used during testing.