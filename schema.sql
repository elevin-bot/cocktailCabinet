CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name text,
    email text NOT NULL,
    password text NOT NULL
);

CREATE TABLE liquer_list (
    id SERIAL PRIMARY KEY,
    description text NOT NULL
);

CREATE TABLE cabinet_contents (
    id SERIAL PRIMARY KEY,
    user_id integer REFERENCES users (id),
    liquer_id integer REFERENCES liquer_list (id),
    volume integer NOT NULL
);

CREATE TABLE recipes (
    id SERIAL PRIMARY KEY,
    name text NOT NULL,
    description text,
    procedure text
);

CREATE TABLE recipe_ingredients(
    id SERIAL PRIMARY KEY,
    recipe_id integer REFERENCES recipes (id),
    liquer_id integer REFERENCES liquer_list (id),
    volume integer NOT NULL
);


