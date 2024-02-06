# Order Service with Pharmacy Integration

This application manages orders and integrates with external pharmacies, allowing the creation of orders with products from different pharmacies. It supports dynamic integration with pharmacies such as HealthMart, CarePlus, and QuickCare.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v12.x or later recommended)
- npm (v6.x or later)

### Installing

1. **Clone the Repository**

```bash
git clone https://github.com/lakshay927/order-service-pharmacy-integration
cd order-service-pharmacy-integration
```

### Install Dependencies

```bash
 npm install
 ```

### Start the Application
```bash
npm start
```

## Running the Tests
```bash
 npm test
 ```

 ## Usage Example

 ### Create an Order for HealthMart

### Request:



POST /api/order/HealthMart/orders 

`Host: localhost:3000`

Content-Type: application/json

```js
{
  "product": "Painkiller",
  "quantity": 3,
  "customerInfo": {
    "name": "John Doe",
    "address": "123 Main Street",
    "city": "Cityville",
    "state": "State",
    "zipcode": "12345",
    "country": "Country"
  }
}

```

### Response:

```js

{
  "orderId": "123",
  "status": "success"
}

```

In designing the application to manage orders and integrate with external pharmacies (HealthMart, CarePlus, and QuickCare), several key design decisions and assumptions were made to fulfill the requirements effectively while ensuring the application is scalable, maintainable, and adheres to good coding practices.

# Design Decisions

MVC Architecture: Adopted the Model-View-Controller (MVC) pattern to separate concerns, enhance code organization, and facilitate maintenance. This pattern was chosen for its clear separation between the data layer (Model), the business logic layer (Controller), and the presentation layer (View), though in the context of a backend application, the "View" is more about the data presentation (API responses) rather than a user interface.

Common Interface for Pharmacy Integrations: Defined a common interface (IPharmacyIntegration) for all pharmacy integrations. This approach ensures that each pharmacy integration adheres to a specific contract, making it easier to add new pharmacies or change existing ones without impacting the rest of the application.

Pharmacy Integration Factory: Implemented a factory (PharmacyIntegrationFactory) to dynamically create instances of specific pharmacy integrations based on input. This design supports scalability by allowing new pharmacies to be added with minimal code changes, as new integrations can be incorporated by extending the factory logic.

Centralized Route Handling: Utilized a single set of routes to manage orders across different pharmacies. This reduces redundancy and simplifies the route management process. The application dynamically determines the appropriate pharmacy integration to use based on the request parameters.

Error Handling: Adopted consistent error handling within controllers to ensure that errors are caught and handled gracefully, providing meaningful responses to the client. This improves the reliability and usability of the API.

Dependency Injection: Though not explicitly shown in the code snippets, the design allows for dependency injection, particularly in the way the pharmacy integrations are utilized within controllers. This facilitates testing and decouples the controllers from specific implementations of pharmacy integrations.

# Assumptions

External Pharmacy APIs: Assumed that each external pharmacy provides a compatible API for creating orders, listing orders, and fetching order details. In real-world scenarios, adaptations might be necessary to accommodate differences in API contracts.

Mock Data for Pharmacies: For the "Get Pharmacies" endpoint, it was assumed that the list of available pharmacies could be statically defined within the application. In a production environment, this data might come from a database or external service, requiring adjustments to the implementation.

# Alternate Approach

An alternative approach to dynamically managing pharmacies and creating orders involves using a database. This method offers greater flexibility and scalability, especially for applications requiring persistent storage, complex queries, and relationships between different entities (e.g., pharmacies, orders, products). Here's an overview of how this could be implemented:

## Database Design
Pharmacies Table: Stores information about each pharmacy, including name, description, API base URL, and any authentication details required for integration.

Orders Table: Contains orders placed through the system, including references to the pharmacy (via a pharmacy ID), order details (products, quantities), and customer information.

Products Table (Optional): If managing a list of products per pharmacy, a products table could store product information, which can be linked to pharmacies and orders.

## Application Design

Pharmacy Model: Corresponds to the pharmacies table, including methods for fetching pharmacy details and available products.

Order Model: Represents the orders table, including methods for creating new orders and fetching order information, potentially linked to specific pharmacies.


## Dynamic Pharmacy Integration
Rather than hardcoding the integration logic for each pharmacy, you can store integration details in the database and use a generic integration service that reads these details to make API calls dynamically. This service would:

Fetch the pharmacy's API details from the database.
Use a configurable HTTP client to interact with the pharmacy's API.
Transform request and response data as needed to match the application's internal models and the external API's requirements.
Adding New Pharmacies
To add a new pharmacy, you would:

Insert a new record into the pharmacies table with the pharmacy's details.
Implement any necessary data transformations for that pharmacy's API in the generic integration service.
## Creating Orders
Creating orders involves:

The application receiving an order request, including the chosen pharmacy, products, and customer details.
The generic integration service fetching the pharmacy's API details from the database.
The service sending a request to the pharmacy's API to create the order.
Storing the order details in the orders table, including a reference to the pharmacy.
Advantages of the Database Approach
Scalability: Easily add new pharmacies and manage products or orders without modifying the application's codebase.
Flexibility: Adapt to changes in pharmacy APIs or business requirements by updating database records rather than code.
Data Management: Leverage relational databases' power for complex queries, reporting, and analytics.
Implementation Considerations
Database Schema Design: Carefully design the database schema to accommodate future changes and ensure efficient data access patterns.
Security: Securely store sensitive information, such as API keys or credentials, potentially using encryption.
Performance: Optimize database queries and consider caching strategies for frequently accessed data.
