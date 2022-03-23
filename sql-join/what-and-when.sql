begin;
select "f"."title",
       "f"."releaseYear",
       "genres"."name" as "genres"
    from "films" as "f"
    join "filmGenre" using ("filmId")
    join "genres" using ("genreId")
    where "f"."title" = 'Boogie Amelie';
commit;
