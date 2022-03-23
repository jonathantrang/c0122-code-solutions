begin;
select "f"."title",
       "c"."firstName",
       "c"."lastName"
    from "customers" as "c"
    join "rentals" as "r" using ("customerId")
    join "inventory" as "i" using ("inventoryId")
    join "films" as "f" using ("filmId")
  where "f"."title" = 'Magic Mallrats'
  order by "c"."firstName" desc;
commit;
