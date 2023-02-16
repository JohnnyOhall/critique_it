# Critique-it

Critique-it is a single page social media app for TV lovers! Users can create critiques (reviews of episodes) with customized options like badges and boxes, explore other's profiles and critiques, admire others with our admire system, and much more. 

This app was built by Jacqui Koroll and John O'Halloran for their final project at the Lighthouse Labs Web Development bootmap using React, Express, and PostgreSQL. TV Maze API is used to obtain the show data.

UI future enhancements include a chat system, more customization and filtering options, genres and much more!

Other enhancements include a full restructure of html and css responsive design.

## Getting started

- Fork and clone this repository
- Back-end: cd server && npm install
- Front-end: cd client && npm install
- Set up the database:
  - psql -U development
  - Enter a password
  - CREATE DATABASE critique_it;
  - \i db/schema/01_schema.sql;
  - \i db/seeds/01_seeds.sql;

## Usage

- Back-end: npm start
- Reset database: npm run db:reset
- Export database: pg_dump critique_it > filename
- Build: cd client && npm run build

## Dependencies

- Node v16.19.0
- React v18.2.0
- Express v4.18.2
- PostgreSQL
- Axios
- Cookie-session
- Bcrypt JS
- Morgan
- Nodemon
- Dotenv
- @szhsin/react-menu
- Rc-slider
- react-simple-star-rating
- react-simply-carousel

## Screenshots

!["Nav"](https://github.com/JohnnyOhall/critique_it/blob/main/docs/nav.png)

!["Register"](https://github.com/JohnnyOhall/critique_it/blob/main/docs/register.png)

!["Show"](https://github.com/JohnnyOhall/critique_it/blob/main/docs/show.png)

!["Create critique"](https://github.com/JohnnyOhall/critique_it/blob/main/docs/critique-create.png)

!["Critique"](https://github.com/JohnnyOhall/critique_it/blob/main/docs/critique.png)

!["User"](https://github.com/JohnnyOhall/critique_it/blob/main/docs/user.png)

!["Profile"](https://github.com/JohnnyOhall/critique_it/blob/main/docs/profile.png)

!["Footer"](https://github.com/JohnnyOhall/critique_it/blob/main/docs/footer.png)

!["About us"](https://github.com/JohnnyOhall/critique_it/blob/main/docs/about-us.png)