# School Website CMS using Strapi

This repository contains the code for a Content Management System (CMS) developed using Strapi for a school website. The CMS provides an easy-to-use interface for managing various aspects of the school's online presence, including content on the frontend.

## Features

- **Content Management**: Easily create, update, and delete content such as pages, events, images, and footer details.
- **API Integration**: Utilizes various APIs to fetch data dynamically from the backend, including:
  - **Stripe Base URL**: `"http://localhost:1337"` - Base URL for accessing Strapi APIs.
  - **Fetch Header Data**: `"http://localhost:1337/api/home-static?populate=*" `- API endpoint to fetch header data for the website.
  - **Events URL**: `"http://localhost:1337/api/events"` - API endpoint to fetch events data.
  - **Image URL**: `"http://localhost:1337/api/images"` - API endpoint to fetch images.
  - **Fetch Footer Data**: `"http://localhost:1337/api/footer-detail?populate=*" `- API endpoint to fetch footer data for the website.
- **Frontend Integration**: Seamlessly integrates with the frontend of the school website to display dynamic content fetched from the backend.

## Setup Instructions

1. **Clone the Repository**: 
   ```
   git clone <repository-url>
   ```
2. **Install Dependencies**: 
   ```
   cd school-website-cms
   npm install
   ```
4. **Run Strapi Server**: 
   ```
   npm run develop
   ```
   Strapi server will start running locally on port 1337 by default.
5. **Access Admin Panel**: 
   Open your browser and navigate to `http://localhost:1337/admin` to access the Strapi admin panel. Use the provided credentials to log in.
6. **Create Content Types and Populate Data**: 
   - Use the admin panel to create content types (e.g., Pages, Events, Images, Footer Details) and populate them with relevant data.
7. **Start Frontend Application**: 
   - Navigate to the frontend directory.
   - Follow the setup instructions provided in the frontend README to run the frontend application.

## Contributors

- [Rishabh](https://github.com/rishabh-in)

## Feedback and Contributions

Feedback, bug reports, and contributions are welcome! If you encounter any issues or have suggestions for improvement, please feel free to [open an issue](https://github.com/your-username/school-website-cms/issues) or submit a pull request.
