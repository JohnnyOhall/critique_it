# critique_it

Back-end:
  - open cd into server
  - npm start

  Setting up database:
    - psql -U development
    - Enter password
    - CREATE DATABASE critique_it
    - \i db/schema/01_schema.sql;
    - \i db/seeds/01_seeds.sql;

  Reset database:
    - npm run db:reset

  Export database:
    - pg_dump critique_it > db/private/filename.sql

Front-end:
  - open cd into client
  - npm start
