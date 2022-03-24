-- begin;
-- select max("i"."inventoryId") as "Total DVDs"
--     from "inventory" as "i";
-- commit;

begin;
select count("i"."filmId") as "Total DVDs"
    from "inventory" as "i";
