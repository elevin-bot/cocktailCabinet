INSERT INTO users(name, email, password) VALUES('tester','tester@testemail.com','password');

INSERT INTO liquor(name) VALUES('Vodka'), ('Tequila'), ('Bourbon'), ('White Rum'),('Dark Rum'), ('Whiskey'), ('Gin'),('Triple Sec'), ('Vermouth');

INSERT INTO cabinet_contents(user_id, liquor_id, volume) values(1, 1, 750);
INSERT INTO cabinet_contents(user_id, liquor_id, volume) values(1, 2, 750);
INSERT INTO cabinet_contents(user_id, liquor_id, volume) values(1, 6, 750);
INSERT INTO cabinet_contents(user_id, liquor_id, volume) values(1, 7, 250);

INSERT INTO cocktail(name,description,procedure) VALUES('sample cocktail 1', 'a sample cocktail 1 to make','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et vulputate erat. Quisque ultrices odio sit amet odio euismod venenatis. Donec sem velit, ultrices eget iaculis ut, dapibus sit amet nisi. Curabitur nec nisl id ligula sagittis pellentesque. Etiam at faucibus sapien. Proin semper orci ut ante imperdiet, non aliquet enim ultricies. Quisque nec porta tortor. Donec in nibh ut ipsum efficitur congue sit amet eget dolor. Nulla a porta augue, ac volutpat est. Pellentesque dolor massa, ultrices sit amet enim in, eleifend lacinia mi. Pellentesque vel varius metus. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
INSERT INTO cocktail(name,description,procedure) VALUES('sample cocktail 2', 'a sample cocktail 2 to make','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et vulputate erat. Quisque ultrices odio sit amet odio euismod venenatis. Donec sem velit, ultrices eget iaculis ut, dapibus sit amet nisi. Curabitur nec nisl id ligula sagittis pellentesque. Etiam at faucibus sapien. Proin semper orci ut ante imperdiet, non aliquet enim ultricies. Quisque nec porta tortor. Donec in nibh ut ipsum efficitur congue sit amet eget dolor. Nulla a porta augue, ac volutpat est. Pellentesque dolor massa, ultrices sit amet enim in, eleifend lacinia mi. Pellentesque vel varius metus. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
INSERT INTO cocktail(name,description,procedure) VALUES('sample cocktail 3', 'a sample cocktail 2 to make','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et vulputate erat. Quisque ultrices odio sit amet odio euismod venenatis. Donec sem velit, ultrices eget iaculis ut, dapibus sit amet nisi. Curabitur nec nisl id ligula sagittis pellentesque. Etiam at faucibus sapien. Proin semper orci ut ante imperdiet, non aliquet enim ultricies. Quisque nec porta tortor. Donec in nibh ut ipsum efficitur congue sit amet eget dolor. Nulla a porta augue, ac volutpat est. Pellentesque dolor massa, ultrices sit amet enim in, eleifend lacinia mi. Pellentesque vel varius metus. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.');

INSERT INTO cocktail_ingredients (cocktail_id, liquor_id, volume) VALUES(1, 1, 50);
INSERT INTO cocktail_ingredients (cocktail_id, liquor_id, volume) VALUES(1, 2, 35);
INSERT INTO cocktail_ingredients (cocktail_id, liquor_id, volume) VALUES(1, 5, 50);

INSERT INTO cocktail_ingredients (cocktail_id, liquor_id, volume) VALUES(2, 4, 50);
INSERT INTO cocktail_ingredients (cocktail_id, liquor_id, volume) VALUES(2, 2, 35);
INSERT INTO cocktail_ingredients (cocktail_id, liquor_id, volume) VALUES(2, 6, 50);
INSERT INTO cocktail_ingredients (cocktail_id, liquor_id, volume) VALUES(2, 3, 50);

INSERT INTO cocktail_ingredients (cocktail_id, liquor_id, volume) VALUES(3, 1, 50);
INSERT INTO cocktail_ingredients (cocktail_id, liquor_id, volume) VALUES(3, 7, 35);

-- Mojito \n
INSERT INTO cocktail(name,description,procedure) 
VALUES('Mojito', 
E'White Rum \n Juice of 1 Lime \n 1 Tsp granulated sugar \n Mint Leaves \n Soda water ',
E'STEP 1 \n
Muddle the lime juice, sugar and mint leaves in a small jug, crushing the mint as you go. Pour into a tall glass and add a handful of ice. \n \n

STEP 2 \n
Pour over the rum, stirring with a long-handled spoon. Top up with soda water, garnish with mint and serve.');

INSERT INTO cocktail_ingredients (cocktail_id, liquor_id, volume) VALUES(1, 4, 60);
 
-- Tom Collins
INSERT INTO cocktail(name,description,procedure) 
VALUES('Tom Collins', 
E'Gin \n 25ml lemon juice \n 25ml sugar syrup \n  125ml chilled soda water',
E'STEP 1 \n
Build the drink over plenty of ice in a Collins glass, stir gently and garnish with a slice of lemon.');

INSERT INTO cocktail_ingredients (cocktail_id, liquor_id, volume) VALUES(2, 6, 50);

-- Sex on the beach
INSERT INTO cocktail(name,description,procedure) 
VALUES('Sex on the Beach', 
E'Vodka \n 2 oranges juiced \n 50ml cranberry juice \n  25ml peach schnapps \n ice' ,
E'STEP 1 \n
Fill two tall glasses with ice cubes. Pour the vodka, peach schnapps and fruit juices into a large jug and stir. 
\n \n

STEP 2 \n
Divide the mixture between the two glasses and stir gently to combine. Additionally garnish with the cocktail cherries and orange slices.');

INSERT INTO cocktail_ingredients (cocktail_id, liquor_id, volume) VALUES(3, 1, 50);

-- Piña colada
INSERT INTO cocktail(name,description,procedure) 
VALUES('Pina colada', 
E'60ml White Rum \n 60ml coconut cream \n 120 ml pineapple juice ||chr(10|| ice' ,
E'STEP 1 \n
Pulse all the ingredients along with a handful of ice in a blender until smooth. Pour into a tall glass and garnish as you like. 
');

INSERT INTO cocktail_ingredients (cocktail_id, liquor_id, volume) VALUES(4, 4, 60);



