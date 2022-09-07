INSERT INTO users(name, email, password) VALUES('tester','tester@testemail.com','password');

INSERT INTO liquor(name) VALUES('Vodka'), ('Tequila'), ('Bourbon'), ('White Rum'),('Dark Rum'), ('Scotch Whiskey'), ('Gin'),('Triple Sec'), ('Vermouth'), ('Absinthe');

INSERT INTO cabinet_contents(user_id, liquor_id, volume) values(1, 1, 750);
INSERT INTO cabinet_contents(user_id, liquor_id, volume) values(1, 2, 750);
INSERT INTO cabinet_contents(user_id, liquor_id, volume) values(1, 6, 750);
INSERT INTO cabinet_contents(user_id, liquor_id, volume) values(1, 7, 250);




-- Mojito \n
INSERT INTO cocktail(name,description,procedure) 
VALUES('Mojito', 
E'60ml White Rum \n
 Juice of 1 Lime \n 1 Tsp granulated sugar \n Mint Leaves \n Soda water ',
E'STEP 1 \n
Muddle the lime juice, sugar and mint leaves in a small jug, crushing the mint as you go. Pour into a tall glass and add a handful of ice. \n \n

STEP 2 \n
Pour over the rum, stirring with a long-handled spoon. Top up with soda water, garnish with mint and serve.');

INSERT INTO cocktail_ingredients (cocktail_id, liquor_id, volume) VALUES(1, 4, 60);
 
-- Tom Collins
INSERT INTO cocktail(name,description,procedure) 
VALUES('Tom Collins', 
E'50ml Gin \n
 25ml lemon juice \n 25ml sugar syrup \n  125ml chilled soda water',
E'STEP 1 \n
Build the drink over plenty of ice in a Collins glass, stir gently and garnish with a slice of lemon.');

INSERT INTO cocktail_ingredients (cocktail_id, liquor_id, volume) VALUES(2, 6, 50);

-- Sex on the beach
INSERT INTO cocktail(name,description,procedure) 
VALUES('Sex on the Beach', 
E'50ml Vodka \n
 2 oranges juiced \n 50ml cranberry juice \n  25ml peach schnapps \n ice' ,
E'STEP 1 \n
Fill two tall glasses with ice cubes. Pour the vodka, peach schnapps and fruit juices into a large jug and stir. 
\n \n

STEP 2 \n
Divide the mixture between the two glasses and stir gently to combine. Additionally garnish with the cocktail cherries and orange slices.');

INSERT INTO cocktail_ingredients (cocktail_id, liquor_id, volume) VALUES(3, 1, 50);

-- Piña colada
INSERT INTO cocktail(name,description,procedure) 
VALUES('Pina colada', 
E'60ml White Rum \n
 60ml coconut cream \n 120 ml pineapple juice \n ice' ,
E'STEP 1 \n
Pulse all the ingredients along with a handful of ice in a blender until smooth. Pour into a tall glass and garnish as you like. 
');

INSERT INTO cocktail_ingredients (cocktail_id, liquor_id, volume) VALUES(4, 4, 60);

-- Special Lemon Lime Bitters
INSERT INTO cocktail(name,description,procedure) 
VALUES('Special Lemon Lime Bitters', 
E'60ml Gin \n
 60ml Lime Juice \n 120 ml Tonic Water \n A dash of angostura bitters' ,
E'STEP 1 \n
Pulse all the ingredients along with a handful of ice in a blender until smooth. Pour into a tall glass and garnish as you like. 
');

INSERT INTO cocktail_ingredients (cocktail_id, liquor_id, volume) VALUES(5, 4, 60);

-- Ge Special
INSERT INTO cocktail(name,description,procedure) 
VALUES('Ge Special', 
E'60ml Vodka \n 60ml Tequila \n 120 ml Gin \n 150ml Redbull \n ice' ,
E'STEP 1 \n
Pulse all the ingredients along with a handful of ice in a blender until smooth. Pour into a tall glass and pray.
\n \n

STEP 2 \n
Pour RedBull over the top, and add ice. Enjoy and garnish as desired.
');

INSERT INTO cocktail_ingredients (cocktail_id, liquor_id, volume) VALUES(6, 7, 120);
INSERT INTO cocktail_ingredients (cocktail_id, liquor_id, volume) VALUES(6, 1, 60);
INSERT INTO cocktail_ingredients (cocktail_id, liquor_id, volume) VALUES(6, 2, 60);

-- Zombie Cocktail
INSERT INTO cocktail(name,description,procedure) 
VALUES('Zombie Cocktail', 
E'25ml Dark Rum \n 
25ml White Rum \n 50ml Lime Juice \n 150ml Pineapple Juice \n ice' ,
E'STEP 1\n
Pour the rums and fruit juices into a cocktail shaker filled with ice and shake hard until the outside of the shaker feels really cold.
\n \n
STEP 2 \n
Strain the mixture into a tall glass or hurricane glass filled with ice, then slowly pour in the grenadine to colour the drink.
\n \n

STEP 3 \n
Skewer the orange wedge and cherries on a cocktail stick. Garnish the drink with mint sprigs and the skewered fruit.
');

INSERT INTO cocktail_ingredients (cocktail_id, liquor_id, volume) VALUES(7, 4, 25);
INSERT INTO cocktail_ingredients (cocktail_id, liquor_id, volume) VALUES(7, 5, 25);

-- Long Island Iced Tea
INSERT INTO cocktail(name,description,procedure) 
VALUES('Long Island Iced Tea', 
E'50ml Vodka \n 
50ml Gin \n 50ml Tequila \n 50ml White Rum \n 50ml Triple Sec \n Ice \n 50ml Lime Juice\ 500ml cola' ,
E'STEP 1\n
Pour the vodka, gin, tequila, rum and triple sec into a large (1.5l) jug, and add lime juice to taste. Half fill the jug with ice, then stir until the outside feels cold.
\n \n

STEP 2\n
Add the cola then stir to combine. Drop in the lime wedges.

\n \n
STEP 3 \n
Fill 4 tall glasses with more ice cubes and pour in the iced tea.
');

INSERT INTO cocktail_ingredients (cocktail_id, liquor_id, volume) VALUES(8, 1, 50);
INSERT INTO cocktail_ingredients (cocktail_id, liquor_id, volume) VALUES(8, 2, 50);
INSERT INTO cocktail_ingredients (cocktail_id, liquor_id, volume) VALUES(8, 4, 50);
INSERT INTO cocktail_ingredients (cocktail_id, liquor_id, volume) VALUES(8, 7, 50);
INSERT INTO cocktail_ingredients (cocktail_id, liquor_id, volume) VALUES(8, 8, 50);

-- Corpse Reviver No 3
INSERT INTO cocktail(name,description,procedure) 
VALUES('Corpse Reviver No 3', 
E'30ml Gin \n 
30ml Lemon Juice \n 30ml Cointreau \n 30ml Vermouth \n 5ml Absinthe ' ,
E'STEP 1 \n
Add the gin, lemon juice, Cointreau, dry vermouth, and absinthe to a cocktail shaker. Fill it with ice and shake it until cold.
\n \n
STEP 2 \n
Strain into a cocktail glass. If desired, garnish with an orange peel or orange wedge. 
');

INSERT INTO cocktail_ingredients (cocktail_id, liquor_id, volume) VALUES(9, 7, 30);
INSERT INTO cocktail_ingredients (cocktail_id, liquor_id, volume) VALUES(9, 9, 30);
INSERT INTO cocktail_ingredients (cocktail_id, liquor_id, volume) VALUES(9, 10, 5);

