CREATE TABLE messages (
  id serial PRIMARY KEY,
  sender_id int NOT NULL REFERENCES "Users"(id), 
  body text NOT NULL,
  conversation_id int REFERENCES conversations(id),
  created_at timestamp NOT NULL DEFAULT current_timestamp,
  update_at timestamp NOT NULL DEFAULT current_timestamp
);

CREATE TABLE conversations (
  id serial PRIMARY KEY,
  created_at timestamp NOT NULL DEFAULT current_timestamp,
  update_at timestamp NOT NULL DEFAULT current_timestamp
);

CREATE TABLE participants (
  id serial PRIMARY KEY, 
  conversation_id int NOT NULL REFERENCES conversations(id),
  user_id int NOT NULL REFERENCES "Users"(id),
  is_black_list boolean DEFAULT false,
  is_favorite_list boolean DEFAULT false,
  UNIQUE (conversation_id, user_id)
);
