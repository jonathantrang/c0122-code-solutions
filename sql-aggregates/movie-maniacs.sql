begin;
select "c"."firstName" as "First Name",
       "c"."lastName" as "Last Name",
       sum("payments"."amount") as "Total Amount Spent on Rentals"
    from "customers" as "c"
    join "payments" using ("customerId")
  group by "c"."customerId"
  order by "Total Amount Spent on Rentals" desc;
commit;
