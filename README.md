
# Showroom Service

This repository contains the ShowroomService, a .NET Core API for fetching car data based on type, and a test suite using Playwright and Cucumber for API testing.

## Getting Started with ShowroomService

Follow these steps to get the backend service running:

### Prerequisites

- [.NET Core SDK](https://dotnet.microsoft.com/download) (version specified by the project, e.g., .NET 5 or .NET Core 3.1)
- Ensure you have the correct version of the SDK and runtime for building and running .NET applications.

### Starting the Service

To start the ShowroomService, follow these steps:

1. Navigate to the ShowroomService directory:
   ```bash
   cd ShowroomService/ShowroomService
   ```

2. Build the project to resolve dependencies:
   ```bash
   dotnet build
   ```

3. Run the service:
   ```bash
   dotnet run
   ```

After running these commands, the service should be up and available at `http://localhost:54356`.

## Running the Tests

The tests are written using Playwright and Cucumber in a Node.js environment. To run the tests, follow these steps:

### Prerequisites

- [Node.js](https://nodejs.org/) (version 12.x or higher recommended)
- npm (typically installed with Node.js)

### Setup and Execution

1. Open the test folder which contains the Playwright project:
   ```bash
   cd tests
   ```

2. Install the necessary dependencies:
   ```bash
   npm install
   ```

3. Run the tests:
   ```bash
   npm run test
   ```

This will execute the test scenarios defined in the test suite against the running instance of the ShowroomService.

## Additional Information

- Ensure that the ShowroomService is running before executing the tests as the test suite will attempt to connect to `http://localhost:54356`.
- For any issues related to setup or execution, verify that all prerequisites are correctly installed and configured.
