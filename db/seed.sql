-- description can maybe be changed to liquer_Name
INSERT INTO liquor(name) VALUES('Vodka'), ('Tequila'), ('Bourbon'), ('Rum'), ('Whiskey'), ('Gin'),('triple sec'), ('vermouth');

INSERT INTO cocktail('name','description','procedure') VALUES('sample cocktail', 'a sample cocktail to make','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et vulputate erat. Quisque ultrices odio sit amet odio euismod venenatis. Donec sem velit, ultrices eget iaculis ut, dapibus sit amet nisi. Curabitur nec nisl id ligula sagittis pellentesque. Etiam at faucibus sapien. Proin semper orci ut ante imperdiet, non aliquet enim ultricies. Quisque nec porta tortor. Donec in nibh ut ipsum efficitur congue sit amet eget dolor. Nulla a porta augue, ac volutpat est. Pellentesque dolor massa, ultrices sit amet enim in, eleifend lacinia mi. Pellentesque vel varius metus. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.');

INSERT INTO cocktail('name','description','procedure') VALUES('sample cocktail 2', 'a sample cocktail2 to make','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et vulputate erat. Quisque ultrices odio sit amet odio euismod venenatis. Donec sem velit, ultrices eget iaculis ut, dapibus sit amet nisi. Curabitur nec nisl id ligula sagittis pellentesque. Etiam at faucibus sapien. Proin semper orci ut ante imperdiet, non aliquet enim ultricies. Quisque nec porta tortor. Donec in nibh ut ipsum efficitur congue sit amet eget dolor. Nulla a porta augue, ac volutpat est. Pellentesque dolor massa, ultrices sit amet enim in, eleifend lacinia mi. Pellentesque vel varius metus. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.');

INSERT INTO users('name','email','password') VALUES('tester','tester@testemail.com','password');



INSERT INTO cocktail_ingredients (cocktail_id, liquor_id, volume) VALUES(1, 1, 50);
INSERT INTO cocktail_ingredients (cocktail_id, liquor_id, volume) VALUES(1, 2, 35);
INSERT INTO cocktail_ingredients (cocktail_id, liquor_id, volume) VALUES(1, 5, 50);
INSERT INTO cocktail_ingredients (cocktail_id, liquor_id, volume) VALUES(2, 4, 50);
INSERT INTO cocktail_ingredients (cocktail_id, liquor_id, volume) VALUES(2, 2, 35);
INSERT INTO cocktail_ingredients (cocktail_id, liquor_id, volume) VALUES(2, 6, 50);
INSERT INTO cocktail_ingredients (cocktail_id, liquor_id, volume) VALUES(2, 3, 50);
INSERT INTO cocktail_ingredients (cocktail_id, liquor_id, volume) VALUES(3, 1, 50);
INSERT INTO cocktail_ingredients (cocktail_id, liquor_id, volume) VALUES(3, 7, 35);

INSERT INTO cabinet_contents(user_id, liquor_id, volume) values(1, 1, 750);
INSERT INTO cabinet_contents(user_id, liquor_id, volume) values(1, 2, 750);
INSERT INTO cabinet_contents(user_id, liquor_id, volume) values(1, 6, 750);
INSERT INTO cabinet_contents(user_id, liquor_id, volume) values(1, 7, 250);