begin;
select "a"."line1" as "address",
       "a"."district",
       "cities"."name" as "city",
       "c"."name" as "country"
  from "addresses" as "a"
  join "cities" using ("cityId")
  join "countries" as "c" using ("countryId")
  order by "c"."name" asc;
commit;
