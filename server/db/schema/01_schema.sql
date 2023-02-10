DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS badges CASCADE;
DROP TABLE IF EXISTS pages CASCADE;
DROP TABLE IF EXISTS badges_library CASCADE;
DROP TABLE IF EXISTS boxes CASCADE;
DROP TABLE IF EXISTS votes CASCADE;


CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  avatar INTEGER NOT NULL,
  username VARCHAR(255) UNIQUE NOT NULL,
  bio TEXT,
  active BOOLEAN DEFAULT TRUE NOT NULL,
  created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated TIMESTAMP DEFAULT NULL
);


CREATE TABLE badges_library (
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  img VARCHAR(255) NOT NULL
);

CREATE TABLE badges (
  id SERIAL PRIMARY KEY NOT NULL,
  badge_id INTEGER REFERENCES badges_library(id) ON DELETE CASCADE
);

CREATE TABLE pages (
  id SERIAL PRIMARY KEY NOT NULL,
  show_id INTEGER NOT NULL,
  show_title VARCHAR(255) NOT NULL,
  show_img VARCHAR(255) NOT NULL,
  season_id INTEGER,
  episode_id INTEGER,
  avatar VARCHAR(255),
  color VARCHAR(255),
  votes INTEGER,
  rating INTEGER,
  review VARCHAR(100),
  watched_on VARCHAR(255),
  episode_num VARCHAR(255),
  season_num VARCHAR(255),
  created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated TIMESTAMP DEFAULT NULL,
  creator_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  badges_id INTEGER REFERENCES badges(id) ON DELETE CASCADE
);

CREATE TABLE boxes (
  id SERIAL PRIMARY KEY NOT NULL,
  text VARCHAR(255),
  url VARCHAR(255),
  style INTEGER NOT NULL,
  page_id INTEGER REFERENCES pages(id) ON DELETE CASCADE
);

CREATE TABLE votes (
  id SERIAL PRIMARY KEY NOT NULL,
  voter_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  creator_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  page_id INTEGER REFERENCES pages(id) ON DELETE CASCADE,
  episode_id VARCHAR(100),
  upvoted BOOLEAN NOT NULL
);