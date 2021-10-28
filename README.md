# Foton's Frontend Challenge

This is the codebase for the Frontend challenge of [Foton Tech](https://fotontech.io/).

## Technologies used

- Language: Typescript
- Main Framework: React.js
- CSS: Chakra UI
- API Consumption: SWR and Axios

## Visiting the site

A hosted version of this webapp can be visited on [Vercel](https://foton-challenge-daniel-berg.vercel.app/)

## Running the site locally

Follow this steps on the command line to run react.js:

- Install Dependencies

```bash
yarn
```

- Create .env file based on .env.example

```bash
echo "REACT_APP_API_URL=https://www.googleapis.com/books/v1" > .env
```

- Start the dev server

```bash
yarn start
```

## About the challenge

The challenge was to create a web app that consumes the [Google Books API](https://developers.google.com/books/docs/v1/using). The design can be found on [Figma](https://www.figma.com/file/KFElqzD983WNyvMY1SaF0c/frontend-book-app).

## Pages

The app is divided on 3 pages:

- Home
  - It's the main page. You can see a 'Discover new book' listing, the 'Currently reading' book, and book review videos
- Search
  - Search books with pagination based on their names. Click on the book to see it's details.
- Details
  - List the most important informations about the book, e.g., title, description and authors.
