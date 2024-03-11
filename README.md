# Frontend React Native coding assessment

## The Challenge

It is cross-platform mobile application using React Native and TypeScript that allows users to search for movies in an open API movie database. The app displays 10 random movies on the home screen along with a search bar. Users are allowed to search for movies and view detailed information about each movie, including title, description, poster, actors, and reviews.
As a bonus, create a network business logic SDK that can be reused in a React.js project and integrate a state manager solution.

BASE_URL Integration with Open API Movie Database: https://search.imdbot.workers.dev/.

### Requirements

    [] Axios
    [] Typescript
    [] React Native
    [] Async Storage
    [] React Navigation
    [] Loading and Error states
    [] Redux | Redux Toolkit | Persistance

### Platforms

    [] Work on ios
    [] Work on android

### Flows & Functionalities

    - Home Screen
        [] Display 10 random movies on the home screen
        [] Include a Search Bar at the top of the screen for users to search

    - Search Bar
        [] Search functionality based on title or keywords

    - Search Results
        [] Display Search results in a list with movie posters and titles

    - Details Screen
        [] Create a movie detail screen that shows detailed information about a selected movie.
        [] Display the movie's title, description, poster, actors, list of reviews, and keywords.

### Bonus: SDK Usage in a react.js project

    - Include functions for:
        [] fetching random movies,
        [] searching for movies,
        [] retrieving movie details.

## How to run

- Clone the repository in your local

```
    git clone https://github.com/LuisCamargoM/movieImdb.git
```

- Run the following commands

```
    cd movieimdb && npm install
    For iOS:
        - cd ios && pod install && cd ..
        - yarn ios
    For Android:
        - cd android && ./gradlew clean && cd ..
        - yarn android
```
