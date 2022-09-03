select * from recipe_ingredients r
where exists (select 1 from cabinet_contents where liquer_id = r.liquer_id

-- Get recipes where all required alcohol exisst in cabinet
select
