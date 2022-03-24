begin;
select max("i"."inventoryId") as "Total DVDs"
    from "inventory" as "i";
commit;
