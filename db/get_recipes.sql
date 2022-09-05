-- Get recipes where all required alcohol exist in cabinet
select c.*
from cocktail c
join cocktail_ingredients ci on ci.cocktail_id = c.id
where ci.liquor_id in (select i.liquor_id
                       from   cocktail_ingredients i 
                       join   cabinet_contents cc on cc.liquor_id = i.liquor_id
                       where  i.volume <= cc.volume
                       and    i.cocktail_id = ci.cocktail_id
                      )

 
