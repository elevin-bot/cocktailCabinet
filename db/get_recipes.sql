-- Get cocktails for which all required alcohol exist in the cabinet with sufficient volume
select name from cocktail where id not in 
    (select cocktail_id
     from cocktail_ingredients ci
     where not exists (select 1 from cabinet_contents cc
                       where cc.user_id = 1
                       and   cc.liquor_id = ci.liquor_id
                       and   cc.volume >= ci.volume)
    );

select l.name, cc.volume
from cabinet_contents cc
join liquor l on l.id = cc.liquor_id
where cc.user_id = $1    