
begin;
select "countries"."name" as "Country",
       count("cities"."countryId") as "Number of Cities"
    from "cities"
  join "countries" using ("countryId")
  group by "Country"
  order by "Country" asc;
commit;
