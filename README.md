# Local

A web application centered around itinerary building, 'Local' allows you to customize your vacations based on suggestions from locals. Plan your day by adding activities to your favorites, then go over to your itinerary page to add your selections to your daily itinerary. Users can also view a map of their favorites or even export their itinerary to Google calendar.


![Homepage](https://github.com/HW13/local/blob/master/docs/local-screenshot-homepage.png)

## Notable Features

- Persistent User Favorites & Itinerary
- Drag & Drop Itinerary Builder
- Rate & Favorite Local Suggestions
- Create a Suggestion
- Sign in with Google Auth
- Google Calendar, Maps, Places, & Geocoding Integration

## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information
3. Install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Run migrations: `npm run knex migrate:latest`
6. Run the seed: `npm run knex seed:run`
7. Run the server: `npm start`
8. Visit `http://localhost:3000/`

## Dependencies

- Node 5.10.x or above
- NPM 3.8.x or above
- React
- Knex
- PSQL
- Express
- Google API- Maps, Places, Geocoding, Calendar & Auth
- Babel
- Webpack
- HTML 5
- SCSS
