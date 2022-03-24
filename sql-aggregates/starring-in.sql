begin;
select "genres"."name" as "Genre",
       count("genres"."genreId") as "Number of Films Lisa Monroe was in for that Genre"
    from "actors"
    join "castMembers" using ("actorId")
    join "films" using ("filmId")
    join "filmGenre" using ("filmId")
    join "genres" using ("genreId")
  where "actors"."firstName" = 'Lisa'
    and  "actors"."lastName" = 'Monroe'
  group by "Genre"
  order by "Genre" asc;
commit;
