INSERT INTO users ( email, password, avatar, username, bio )
VALUES
( 
  'jacqui@telus.com', 
  '$2a$10$qDUYsR6AYfrAKm/J0KX7UOd/fiaDaXRu2RUpLGnaqx1HkXS5EmL1m', 
  13,
  'jacquiiii',
  'co-founder of Critique'
),
( 
  'john@telus.com', 
  '$2a$10$qDUYsR6AYfrAKm/J0KX7UOd/fiaDaXRu2RUpLGnaqx1HkXS5EmL1m', 
  6,
  'johnnyohall',
  'co-founder of Critique' 
);


INSERT INTO pages 
( 
  show_id,
  show_title,
  show_img,
  season_id,
  episode_id,
  creator_id
)
VALUES
( 1825, 'The Expanse', 'https://static.tvmaze.com/uploads/images/original_untouched/380/951122.jpg', 9017, 203920, 2 ),
( 1825, 'The Expanse', 'https://static.tvmaze.com/uploads/images/original_untouched/380/951122.jpg', 30914, 946020, 2 ),
( 53647, 'Wednesday', 'https://static.tvmaze.com/uploads/images/original_untouched/433/1082578.jpg', 120562, 2382723, 1 ),
( 914, 'The Bachelor', 'https://static.tvmaze.com/uploads/images/original_untouched/442/1107419.jpg', 3961, 86382, 1 )
;


-- INSERT INTO badges ( title, description, img )
-- VALUES
-- ( 'Top Performance', 'Awarded to the best performance by an actor/actress', 'img.jpg' ),
-- ( 'Worst Performance', 'Awarded to the worst performance by an actor/actress', 'img.jpg' ),
-- ( 'Love to hate', 'For those excellent performances that just make you hate the character that much more', 'img.jpg' ),
-- ( 'I''m shipping it', 'For the two characters you are predicting will be together', 'img.jpg' ),
-- ( 'Wish you were here', 'Missing a character who died or maybe belongs in this episode, vote them in!', 'img.jpg' )
-- ;


-- Dynamic DUO, McDreamy, best fight? (Champ), Hide yo wife, hide you husband, Leyroy Jenkins


-- INSERT INTO a (column1, column2)
-- SELECT column1, column2 FROM b
-- UNION
-- SELECT column1, column2 FROM c
-- EXCEPT
-- SELECT column1, column2 FROM a;