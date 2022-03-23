begin;
select "p"."amount",
       "c"."firstName",
       "c"."lastName"
  from "payments" as "p"
  join "customers" as "c" using ("customerId")
  order by "p"."amount" desc,
           "c"."customerId" asc
  limit 10;
commit;
