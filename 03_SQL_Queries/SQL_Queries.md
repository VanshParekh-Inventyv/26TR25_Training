- Vansh Parekh
- vansh.parekh.inventyv@gmail.com
---
# SQL Queries

## Basic Queries :

1. Write a SQL query to find the name and year of the movies. Return movie title, movie release year.
```
Query:
SELECT mov_title, mov_year FROM movie;
Output:
        mov_title         | mov_year
--------------------------+----------
 Vertigo                  |     1958
 The Innocents            |     1961
 Lawrence of Arabia       |     1962
 The Deer Hunter          |     1978
 Amadeus                  |     1984
 Blade Runner             |     1982
 Eyes Wide Shut           |     1999
 The Usual Suspects       |     1995
 Chinatown                |     1974
 Boogie Nights            |     1997
 Annie Hall               |     1977
 Princess Mononoke        |     1997
 The Shawshank Redemption |     1994
 American Beauty          |     1999
 Titanic                  |     1997
 Good Will Hunting        |     1997
 Deliverance              |     1972
 Trainspotting            |     1996
 The Prestige             |     2006
 Donnie Darko             |     2001
 Slumdog Millionaire      |     2008
 Aliens                   |     1986
 Beyond the Sea           |     2004
 Avatar                   |     2009
 Seven Samurai            |     1954
 Spirited Away            |     2001
 Back to the Future       |     1985
 Braveheart               |     1995
(28 rows)
```

2. Write a SQL query to find when the movie 'American Beauty' released. Return movie release year.
```
Query:
SELECT mov_dt_rel FROM movie WHERE mov_title = 'American Beauty';
Output:
mov_dt_rel
------------

(1 row)
```

3. Write a SQL query to find the movie that was released in 1999. Return movie title.
```
Query:
SELECT mov_title FROM movie WHERE mov_dt_rel BETWEEN '1999-01-01' AND '1999-12-31';
Output:
mov_title
-----------
(0 rows)
```

4. Write a SQL query to find those movies, which were released before 1998. Return movie title.
```
Query:
SELECT mov_title FROM movie WHERE mov_dt_rel < '1998-01-01';
Output:
        mov_title
--------------------------
 Vertigo
 The Innocents
 Lawrence of Arabia
 The Deer Hunter
 Amadeus
 Blade Runner
 The Usual Suspects
 Chinatown
 Annie Hall
 The Shawshank Redemption
 Deliverance
 Trainspotting
 Aliens
 Seven Samurai
 Back to the Future
 Braveheart
(16 rows)
```

5. Write a SQL query to find the name of all reviewers and movies together in a single list.
```
Query:
(SELECT rev_name AS names FROM movie_reviewer)
UNION
(SELECT mov_title AS names FROM movie);
Output:
          names
--------------------------

 Seven Samurai
 Avatar
 Brandt Sponseller
 American Beauty
 Krug Stillo
 Deliverance
 Back to the Future
 Victor Woeltjen
 Wesley S. Walker
 Jack Malvern
 Princess Mononoke
 Braveheart
 Vertigo
 Donnie Darko
 Amadeus
 Scott LeBrun
 Blade Runner
 Slumdog Millionaire
 The Innocents
 Alec Shaw
 The Shawshank Redemption
 Lawrence of Arabia
 The Usual Suspects
 The Deer Hunter
 Josh Cates
 Flagrant Baronessa
 The Prestige
 Spirited Away
 Annie Hall
 Hannah Steele
 Titanic
 Righty Sock
 Sasha Goldshtein
 Neal Wruck
 Paul Monks
 Aliens
 Vincent Cadena
 Beyond the Sea
 Eyes Wide Shut
 Chinatown
 Boogie Nights
 Richard Adams
 Mike Salvati
 Good Will Hunting
 Trainspotting
 Simon Wright
(47 rows)
```

6. Write a SQL query to find all reviewers who have rated seven or more stars to their rating. Return reviewer name.
```
Query:
SELECT rev_name FROM movie_reviewer
WHERE rev_id IN
(SELECT rev_id FROM movie_rating WHERE rev_stars >= 7);
Output:
      rev_name
--------------------
 Righty Sock
 Jack Malvern
 Flagrant Baronessa

 Victor Woeltjen
 Simon Wright
 Mike Salvati

 Sasha Goldshtein
 Krug Stillo
 Hannah Steele
 Vincent Cadena
 Brandt Sponseller
(13 rows)
```

7. Write a SQL query to find the movies without any rating. Return movie title.
```
Query:
SELECT mov_title FROM movie
WHERE mov_id IN
(SELECT mov_id FROM movie_rating WHERE rev_stars IS NULL);
Output:
   mov_title
---------------
 Chinatown
 Trainspotting
(2 rows)
```

8. Write a SQL query to find the movies with ID 905 or 907 or 917. Return movie title.
```
Query:
SELECT mov_title FROM movie WHERE mov_id IN (905, 907, 917);
Output:
 mov_title
-----------
(0 rows)
```

9. Write a SQL query to find the movie titles that contain the word 'Boogie Nights'. Sort the result-set in ascending order by movie year.
```
Query:
SELECT mov_id, mov_title, mov_dt_rel FROM movie 
WHERE mov_title LIKE '%Boogie Nights%'
ORDER BY mov_year;
Output:
 mov_id |   mov_title   | mov_dt_rel
--------+---------------+------------
     10 | Boogie Nights | 1998-02-16
(1 row)
```

10. Write a SQL query to find those actors with the first name 'Woody' and the last name 'Allen'. Return actor ID.
```
Query:
SELECT act_id FROM actor WHERE act_fname = 'Woody' AND act_lname = 'Allen';
Output:
 act_id
--------
     11
(1 row)
```

## Sub-Queries :

11. Write a SQL query to find the actors who played a role in the movie 'Annie Hall'. Return all the fields of actor table.
```
Query:
SELECT *
FROM actor
WHERE act_id IN (
    SELECT act_id
    FROM movie_cast
    WHERE mov_id IN (
        SELECT mov_id
        FROM movie
        WHERE mov_title = 'Annie Hall'
    )
);
Output:
 act_id | act_fname | act_lname | act_gender
--------+-----------+-----------+------------
     11 | Woody     | Allen     | M
(1 row)
```

12. Write a SQL query to find the director of a film that cast a role in 'Eyes Wide Shut'. Return director first name, last name.
```
Query:
SELECT *
FROM director
WHERE dir_id IN (
    SELECT dir_id
    FROM movie_direction
    WHERE mov_id IN (
        SELECT mov_id
        FROM movie
        WHERE mov_title = 'Eyes Wide Shut'
    )
);
Output:
 dir_id | dir_fname | dir_lname
--------+-----------+-----------
      7 | Stanley   | Kubrick
(1 row)
```

13. Write a SQL query to find those movies that have been released in countries other than the United Kingdom. Return movie title, movie year, movie time, and date of release, releasing country.
```
Query:
SELECT
    mov_title,
    mov_year,
    mov_time,
    mov_dt_rel,
    mov_rel_country
FROM movie
WHERE mov_rel_country NOT IN (
    SELECT mov_rel_country
    FROM movie
    WHERE mov_rel_country = 'UK'
);
Output:
   mov_title   | mov_year | mov_time | mov_dt_rel | mov_rel_country
---------------+----------+----------+------------+-----------------
 The Innocents |     1961 |      100 | 1962-02-19 | SW
 Annie Hall    |     1977 |       93 | 1977-04-20 | USA
 Seven Samurai |     1954 |      207 | 1954-04-26 | JP
(3 rows)
```

14. Write a SQL query to find for movies whose reviewer is unknown. Return movie title, year, release date, director first name, last name, actor first name, last name.
```
Query:
SELECT
    movie.mov_title,
    movie.mov_year,
    movie.mov_dt_rel,
    director.dir_fname,
    director.dir_lname,
    actor.act_fname,
    actor.act_lname
FROM movie,
     director,
     actor,
     movie_cast,
     movie_direction
WHERE movie.mov_id IN (
    SELECT movie_rating.mov_id
    FROM movie_rating
    WHERE movie_rating.rev_id IN (
        SELECT rev_id
        FROM movie_reviewer
        WHERE rev_name IS NULL
    )
)
AND movie.mov_id = movie_cast.mov_id
AND movie.mov_id = movie_direction.mov_id
AND movie_cast.act_id = actor.act_id
AND movie_direction.dir_id = director.dir_id;
Output:
     mov_title     | mov_year | mov_dt_rel | dir_fname | dir_lname | act_fname | act_lname
-------------------+----------+------------+-----------+-----------+-----------+-----------
 Blade Runner      |     1982 | 1982-09-09 | Ridley    | Scott     | Harrison  | Ford
 Princess Mononoke |     1997 | 2001-10-19 | Hayao     | Miyazaki  | Claire    | Danes
(2 rows)
```

15. Write a SQL query to find those movies directed by the director whose first name is Woddy and last name is Allen. Return movie title.
```
Query:
SELECT mov_title
FROM movie
WHERE mov_id IN (
    SELECT mov_id
    FROM movie_direction
    WHERE dir_id IN (
        SELECT dir_id
        FROM director
        WHERE dir_fname = 'Woody'
          AND dir_lname = 'Allen'
    )
);
Output:
 mov_title
------------
 Annie Hall
(1 row)
```

16. Write a SQL query to determine those years in which there was at least one movie that received a rating of at least three stars. Sort the result-set in ascending order by movie year. Return movie year.
```
Query:
SELECT DISTINCT mov_year
FROM movie
WHERE mov_id IN (
    SELECT mov_id
    FROM movie_rating
    WHERE rev_stars <= 3
)
ORDER BY mov_year;
Output:
 mov_year
----------
     1997
(1 row)
```

17. Write a SQL query to search for movies that do not have any ratings. Return movie title.
```
Query:
SELECT mov_title
FROM movie
WHERE mov_id IN (
    SELECT mov_id
    FROM movie_rating
    WHERE num_o_ratings IS NULL
);
Otput:
     mov_title
-------------------
 Princess Mononoke
 Avatar
(2 rows)
```

18. Write a SQL query to find those reviewers who have not given a rating to certain films. Return reviewer name.
```
Query:
SELECT rev_name
FROM movie_reviewer
WHERE rev_id NOT IN (
    SELECT rev_id
    FROM movie_rating
);
Output:
     rev_name
------------------
 Alec Shaw
 Wesley S. Walker
(2 rows)
```

19. Write a SQL query to find movies that have been reviewed by a reviewer and received a rating. Sort the result-set in ascending order by reviewer name, movie title, review Stars. Return reviewer name, movie title, review Stars.
```
Query:
SELECT
    movie_reviewer.rev_name,
    movie.mov_title,
    movie_rating.rev_stars
FROM movie_reviewer,
     movie,
     movie_rating
WHERE movie_rating.mov_id IN (
    SELECT mov_id
    FROM movie_rating
    WHERE rev_id IS NOT NULL
      AND num_o_ratings IS NOT NULL
)
AND movie.mov_id = movie_rating.mov_id
AND movie_reviewer.rev_id = movie_rating.rev_id
ORDER BY
    movie_reviewer.rev_name,
    movie.mov_title,
    movie_rating.rev_stars;
Output:
      rev_name      |      mov_title      | rev_stars
--------------------+---------------------+-----------
 Brandt Sponseller  | Aliens              |      8.40
 Flagrant Baronessa | Lawrence of Arabia  |      8.30
 Hannah Steele      | Donnie Darko        |      8.10
 Jack Malvern       | The Innocents       |      7.90
 Josh Cates         | Good Will Hunting   |      4.00
 Krug Stillo        | Seven Samurai       |      7.70
 Mike Salvati       | Annie Hall          |      8.10
 Neal Wruck         | Chinatown           |
 Paul Monks         | Boogie Nights       |      3.00
 Richard Adams      | Beyond the Sea      |      6.70
 Righty Sock        | Titanic             |      7.70
 Righty Sock        | Vertigo             |      8.40
 Sasha Goldshtein   | American Beauty     |      7.00
 Scott LeBrun       | Trainspotting       |
 Simon Wright       | The Usual Suspects  |      8.60
 Vincent Cadena     | Slumdog Millionaire |      8.00
                    | Blade Runner        |      8.20
(17 rows)
```
20. Write a SQL query to find movies that have been reviewed by a reviewer and received a rating. Group the result set on reviewer’s name, movie title. Return reviewer’s name, movie title.
```
Query:
SELECT
    movie_reviewer.rev_name,
    movie.mov_title
FROM movie_reviewer,
     movie
WHERE movie_reviewer.rev_id IN (
    SELECT movie_rating.rev_id
    FROM movie_rating
    WHERE movie_rating.mov_id = movie.mov_id
      AND movie_rating.rev_stars IS NOT NULL
)
GROUP BY
    movie_reviewer.rev_name,
    movie.mov_title;
Output:
      rev_name      |      mov_title
--------------------+---------------------
 Richard Adams      | Beyond the Sea
                    | Princess Mononoke
                    | Blade Runner
 Vincent Cadena     | Slumdog Millionaire
 Righty Sock        | Titanic
 Sasha Goldshtein   | American Beauty
 Brandt Sponseller  | Aliens
 Krug Stillo        | Seven Samurai
 Righty Sock        | Vertigo
 Hannah Steele      | Donnie Darko
 Josh Cates         | Good Will Hunting
 Mike Salvati       | Annie Hall
 Simon Wright       | The Usual Suspects
 Flagrant Baronessa | Lawrence of Arabia
 Jack Malvern       | The Innocents
 Paul Monks         | Boogie Nights
 Victor Woeltjen    | Avatar
(17 rows)
```

21. Write a SQL query to find those movies, which have received highest number of stars. Group the result set on movie title and sorts the result-set in ascending order by movie title. Return movie title and maximum number of review stars.
```
Query:
SELECT
    mov_title,
    (
        SELECT MAX(rev_stars)
        FROM movie_rating
        WHERE movie_rating.mov_id = movie.mov_id
    ) AS max_stars
FROM movie
WHERE movie.mov_id IN (
    SELECT mov_id
    FROM movie_rating
    WHERE rev_stars = (
        SELECT MAX(rev_stars)
        FROM movie_rating
    )
)
GROUP BY
    mov_title,
    movie.mov_id
ORDER BY
    mov_title;
Output:
     mov_title      | max_stars
--------------------+-----------
 The Usual Suspects |      8.60
(1 row)
```

22. Write a SQL query to find all reviewers who rated the movie 'American Beauty'. Return reviewer name.
```
Query:
SELECT rev_name
FROM movie_reviewer
WHERE rev_id IN (
    SELECT rev_id
    FROM movie_rating
    WHERE mov_id IN (
        SELECT mov_id
        FROM movie
        WHERE mov_title = 'American Beauty'
    )
);
Output:
     rev_name
------------------
 Sasha Goldshtein
(1 row)
```

23. Write a SQL query to find the movies that have not been reviewed by any reviewer body other than 'Paul Monks'. Return movie title.
```
Query:
SELECT mov_title
FROM movie
WHERE mov_id IN (
    SELECT mov_id
    FROM movie_rating
    WHERE rev_id IN (
        SELECT rev_id
        FROM movie_reviewer
        WHERE rev_name = 'Paul Monks'
    )
);
Output:
   mov_title
---------------
 Boogie Nights
(1 row)
```

24. Write a SQL query to find the movies with the lowest ratings. Return reviewer name, movie title, and number of stars for those movies.
```
Query:
SELECT
    movie_reviewer.rev_name,
    movie.mov_title,
    movie_rating.rev_stars
FROM movie_reviewer,
     movie,
     movie_rating
WHERE movie_reviewer.rev_id = movie_rating.rev_id
  AND movie.mov_id = movie_rating.mov_id
  AND movie_rating.rev_stars = (
        SELECT MIN(rev_stars)
        FROM movie_rating
        WHERE rev_stars IS NOT NULL
    );
Output:
  rev_name  |   mov_title   | rev_stars
------------+---------------+-----------
 Paul Monks | Boogie Nights |      3.00
(1 row)
```

25. Write a SQL query to find the movies directed by 'James Cameron'. Return movie title.
```
Query:
SELECT mov_title
FROM movie
WHERE mov_id IN (
    SELECT mov_id
    FROM movie_rating
    WHERE rev_id IN (
        SELECT rev_id
        FROM movie_reviewer
        WHERE rev_name = 'James Cameron'
    )
);
Output:
 mov_title
-----------
(0 rows)
```

26. Write a query in SQL to find the movies in which one or more actors appeared in more than one film.
```
Query:
SELECT DISTINCT
    movie.mov_title
FROM movie
WHERE movie.mov_id IN (
    SELECT movie_cast.mov_id
    FROM movie_cast
    WHERE movie_cast.act_id IN (
        SELECT movie_cast.act_id
        FROM movie_cast
        GROUP BY movie_cast.act_id
        HAVING COUNT(DISTINCT movie_cast.mov_id) > 1
    )
);
Output:
    mov_title
-----------------
 American Beauty
 Beyond the Sea
(2 rows)
```

## Joins :

27. Write a SQL query to find all reviewers whose ratings contain a NULL value. Return reviewer name.
```
Query:
SELECT rev_name
FROM movie_reviewer
INNER JOIN movie_rating
    ON movie_reviewer.rev_id = movie_rating.rev_id
WHERE rev_stars IS NULL;
Output:
   rev_name
--------------
 Neal Wruck
 Scott LeBrun
(2 rows)
```

28. Write a SQL query to find out who was cast in the movie 'Annie Hall'. Return actor first name, last name and role.
```
Query:
SELECT act_fname,
       act_lname,
       role
FROM actor
INNER JOIN movie_cast
    ON actor.act_id = movie_cast.act_id
INNER JOIN movie
    ON movie_cast.mov_id = movie.mov_id
WHERE mov_title = 'Annie Hall';
Output:
 act_fname | act_lname |    role
-----------+-----------+-------------
 Woody     | Allen     | Alvy Singer
(1 row)
```
29. Write a SQL query to find the director who directed a movie that featured a role in 'Eyes Wide Shut'. Return director first name, last name and movie title.
```
Query:
SELECT dir_fname,
       dir_lname,
       mov_title
FROM director
INNER JOIN movie_direction
    ON director.dir_id = movie_direction.dir_id
INNER JOIN movie
    ON movie_direction.mov_id = movie.mov_id
WHERE mov_title = 'Eyes Wide Shut';
Output:
 dir_fname | dir_lname |   mov_title
-----------+-----------+----------------
 Stanley   | Kubrick   | Eyes Wide Shut
(1 row)
```

30. Write a SQL query to find the director of a movie that cast a role as Sean Maguire. Return director first name, last name and movie title.
```
Query:
SELECT dir_fname,
       dir_lname,
       mov_title
FROM director
INNER JOIN movie_direction
    ON director.dir_id = movie_direction.dir_id
INNER JOIN movie
    ON movie_direction.mov_id = movie.mov_id
INNER JOIN movie_cast
    ON movie.mov_id = movie_cast.mov_id
WHERE role = 'Sean Maguire';
Output:
 dir_fname | dir_lname |     mov_title
-----------+-----------+-------------------
 Gus       | Van Sant  | Good Will Hunting
(1 row)
```

31. Write a SQL query to find out which actors have not appeared in any movies between 1990 and 2000 (Begin and end values are included.). Return actor first name, last name, movie title and release year.
```
Query:
SELECT act_fname,
       act_lname,
       mov_title,
       mov_year
FROM actor
INNER JOIN movie_cast
    ON actor.act_id = movie_cast.act_id
LEFT JOIN movie
    ON movie_cast.mov_id = movie.mov_id
WHERE mov_year NOT BETWEEN 1990 AND 2000;
Output:
 act_fname | act_lname  |      mov_title      | mov_year
-----------+------------+---------------------+----------
 James     | Stewart    | Vertigo             |     1958
 Deborah   | Kerr       | The Innocents       |     1961
 Peter     | OToole     | Lawrence of Arabia  |     1962
 Robert    | De Niro    | The Deer Hunter     |     1978
 F. Murray | Abraham    | Amadeus             |     1984
 Harrison  | Ford       | Blade Runner        |     1982
 Woody     | Allen      | Annie Hall          |     1977
 Jon       | Voight     | Deliverance         |     1972
 Maggie    | Gyllenhaal | Donnie Darko        |     2001
 Dev       | Patel      | Slumdog Millionaire |     2008
 Sigourney | Weaver     | Aliens              |     1986
 Kevin     | Spacey     | Beyond the Sea      |     2004
 Jack      | Nicholson  | Chinatown           |     1974
 Christian | Bale       | Chinatown           |     1974
(14 rows)
```

32. Write a SQL query to find the directors who have directed films in a variety of genres. Group the result set on director first name, last name and generic title. Sort the result-set in ascending order by director first name and last name. Return director first name, last name and number of genres movies.
```
Query:
SELECT
    director.dir_fname,
    director.dir_lname,
    COUNT(DISTINCT genres.gen_title) AS number_of_genres
FROM director
INNER JOIN movie_direction
    ON director.dir_id = movie_direction.dir_id
INNER JOIN movie_genres
    ON movie_direction.mov_id = movie_genres.mov_id
INNER JOIN genres
    ON movie_genres.gen_id = genres.gen_id
GROUP BY
    director.dir_fname,
    director.dir_lname
ORDER BY
    director.dir_fname ASC,
    director.dir_lname ASC;
Output:
 dir_fname | dir_lname | number_of_genres
-----------+-----------+------------------
 Alfred    | Hitchcock |                1
 Bryan     | Singer    |                1
 Danny     | Boyle     |                1
 David     | Lean      |                1
 Frank     | Darabont  |                1
 Hayao     | Miyazaki  |                1
 Jack      | Clayton   |                1
 James     | Cameron   |                1
 John      | Boorman   |                1
 Kevin     | Spacey    |                1
 Michael   | Cimino    |                1
 Ridley    | Scott     |                1
 Sam       | Mendes    |                1
 Stanley   | Kubrick   |                1
 Woody     | Allen     |                1
(15 rows)
```

33. Write a SQL query to find the movies with year and genres. Return movie title, movie year and generic title.
```
Query:
SELECT mov_title,
       mov_year,
       gen_title
FROM movie
INNER JOIN movie_genres
    ON movie.mov_id = movie_genres.mov_id
INNER JOIN genres
    ON movie_genres.gen_id = genres.gen_id;
Output:
        mov_title         | mov_year | gen_title
--------------------------+----------+-----------
 Aliens                   |     1986 | Action
 Deliverance              |     1972 | Adventure
 Lawrence of Arabia       |     1962 | Adventure
 Princess Mononoke        |     1997 | Animation
 Annie Hall               |     1977 | Comedy
 The Usual Suspects       |     1995 | Crime
 The Shawshank Redemption |     1994 | Crime
 Spirited Away            |     2001 | Drama
 Braveheart               |     1995 | Drama
 Trainspotting            |     1996 | Drama
 Slumdog Millionaire      |     2008 | Drama
 The Innocents            |     1961 | Horror
 Beyond the Sea           |     2004 | Music
 Eyes Wide Shut           |     1999 | Mystery
 Back to the Future       |     1985 | Mystery
 Vertigo                  |     1958 | Mystery
 American Beauty          |     1999 | Romance
 Blade Runner             |     1982 | Thriller
 The Deer Hunter          |     1978 | War
(19 rows)
```

34. Write a SQL query to find all the movies with year, genres, and name of the director.
```
Query:
SELECT mov_title,
       mov_year,
       gen_title,
       dir_fname
FROM movie
INNER JOIN movie_genres
    ON movie.mov_id = movie_genres.mov_id
INNER JOIN movie_direction
    ON movie.mov_id = movie_direction.mov_id
INNER JOIN genres
    ON movie_genres.gen_id = genres.gen_id
INNER JOIN director
    ON movie_direction.dir_id = director.dir_id;
Output:
        mov_title         | mov_year | gen_title | dir_fname
--------------------------+----------+-----------+-----------
 Vertigo                  |     1958 | Mystery   | Alfred
 The Innocents            |     1961 | Horror    | Jack
 Lawrence of Arabia       |     1962 | Adventure | David
 The Deer Hunter          |     1978 | War       | Michael
 Blade Runner             |     1982 | Thriller  | Ridley
 Eyes Wide Shut           |     1999 | Mystery   | Stanley
 The Usual Suspects       |     1995 | Crime     | Bryan
 Annie Hall               |     1977 | Comedy    | Woody
 Princess Mononoke        |     1997 | Animation | Hayao
 The Shawshank Redemption |     1994 | Crime     | Frank
 American Beauty          |     1999 | Romance   | Sam
 Deliverance              |     1972 | Adventure | John
 Trainspotting            |     1996 | Drama     | Danny
 Slumdog Millionaire      |     2008 | Drama     | Danny
 Aliens                   |     1986 | Action    | James
 Beyond the Sea           |     2004 | Music     | Kevin
(16 rows) 
```

35. Write a SQL query to find the movies released before 1st January 1989. Sort the result-set in descending order by date of release. Return movie title, release year, date of release, duration, and first and last name of the director.
```
Query:
SELECT
    movie.mov_title,
    movie.mov_year,
    movie.mov_dt_rel,
    movie.mov_time,
    director.dir_fname,
    director.dir_lname
FROM movie
INNER JOIN movie_direction
    ON movie.mov_id = movie_direction.mov_id
INNER JOIN director
    ON movie_direction.dir_id = director.dir_id
WHERE movie.mov_dt_rel < '1989-01-01'
ORDER BY movie.mov_dt_rel DESC;
Output:
     mov_title      | mov_year | mov_dt_rel | mov_time | dir_fname | dir_lname
--------------------+----------+------------+----------+-----------+-----------
 Aliens             |     1986 | 1986-08-29 |      137 | James     | Cameron
 Amadeus            |     1984 | 1985-01-07 |      160 | Milos     | Forman
 Deliverance        |     1972 | 1982-10-05 |      109 | John      | Boorman
 Blade Runner       |     1982 | 1982-09-09 |      117 | Ridley    | Scott
 The Deer Hunter    |     1978 | 1979-03-08 |      183 | Michael   | Cimino
 Annie Hall         |     1977 | 1977-04-20 |       93 | Woody     | Allen
 Chinatown          |     1974 | 1974-08-09 |      130 | Roman     | Polanski
 Lawrence of Arabia |     1962 | 1962-12-11 |      216 | David     | Lean
 The Innocents      |     1961 | 1962-02-19 |      100 | Jack      | Clayton
 Vertigo            |     1958 | 1958-08-24 |      128 | Alfred    | Hitchcock
(10 rows)
```

36. Write a SQL query to calculate the average movie length and count the number of movies in each genre. Return genre title, average time and number of movies for each genre.
```
Query:
SELECT
    genres.gen_title,
    AVG(movie.mov_time) AS average_time,
    COUNT(movie.mov_id) AS number_of_movies
FROM genres
INNER JOIN movie_genres
    ON genres.gen_id = movie_genres.gen_id
INNER JOIN movie
    ON movie_genres.mov_id = movie.mov_id
GROUP BY genres.gen_title
ORDER BY genres.gen_title ASC;
Output:
 gen_title |     average_time     | number_of_movies
-----------+----------------------+------------------
 Action    | 137.0000000000000000 |                1
 Adventure | 162.5000000000000000 |                2
 Animation | 134.0000000000000000 |                1
 Comedy    |  93.0000000000000000 |                1
 Crime     | 124.0000000000000000 |                2
 Drama     | 129.2500000000000000 |                4
 Horror    | 100.0000000000000000 |                1
 Music     | 118.0000000000000000 |                1
 Mystery   | 134.3333333333333333 |                3
 Romance   | 122.0000000000000000 |                1
 Thriller  | 117.0000000000000000 |                1
 War       | 183.0000000000000000 |                1
(12 rows)
```

37. Write a SQL query to find movies with the shortest duration. Return movie title, movie year, director first name, last name, actor first name, last name and role.
```
Query:
SELECT
    movie.mov_title,
    movie.mov_year,
    director.dir_fname,
    director.dir_lname,
    actor.act_fname,
    actor.act_lname,
    movie_cast.role
FROM movie
INNER JOIN movie_direction
    ON movie.mov_id = movie_direction.mov_id
INNER JOIN director
    ON movie_direction.dir_id = director.dir_id
INNER JOIN movie_cast
    ON movie.mov_id = movie_cast.mov_id
INNER JOIN actor
    ON movie_cast.act_id = actor.act_id
WHERE movie.mov_time = (
    SELECT MIN(mov_time)
    FROM movie
);
Output:
 mov_title  | mov_year | dir_fname | dir_lname | act_fname | act_lname |    role
------------+----------+-----------+-----------+-----------+-----------+-------------
 Annie Hall |     1977 | Woody     | Allen     | Woody     | Allen     | Alvy Singer
(1 row)
```

38. Write a SQL query to find the years in which a movie received a rating of 3 or 4. Sort the result in increasing order on movie year.
```
Query:
SELECT
    movie.mov_title,
    movie_rating.rev_stars
FROM movie
INNER JOIN movie_rating
    ON movie.mov_id = movie_rating.mov_id
WHERE rev_stars BETWEEN 3 AND 4
ORDER BY rev_stars;
Output:
     mov_title     | rev_stars
-------------------+-----------
 Boogie Nights     |      3.00
 Good Will Hunting |      4.00
(2 rows) 
```

39. Write a SQL query to get the reviewer name, movie title, and stars in an order that reviewer name will come first, then by movie title, and lastly by number of stars.
```
Query:
SELECT
    movie_reviewer.rev_name,
    movie.mov_title,
    movie_rating.rev_stars
FROM movie_reviewer
INNER JOIN movie_rating
    ON movie_reviewer.rev_id = movie_rating.rev_id
INNER JOIN movie
    ON movie_rating.mov_id = movie.mov_id
ORDER BY
    movie_reviewer.rev_name,
    movie.mov_title,
    movie_rating.rev_stars;
output:
      rev_name      |      mov_title      | rev_stars
--------------------+---------------------+-----------
 Brandt Sponseller  | Aliens              |      8.40
 Flagrant Baronessa | Lawrence of Arabia  |      8.30
 Hannah Steele      | Donnie Darko        |      8.10
 Jack Malvern       | The Innocents       |      7.90
 Josh Cates         | Good Will Hunting   |      4.00
 Krug Stillo        | Seven Samurai       |      7.70
 Mike Salvati       | Annie Hall          |      8.10
 Neal Wruck         | Chinatown           |
 Paul Monks         | Boogie Nights       |      3.00
 Richard Adams      | Beyond the Sea      |      6.70
 Righty Sock        | Titanic             |      7.70
 Righty Sock        | Vertigo             |      8.40
 Sasha Goldshtein   | American Beauty     |      7.00
 Scott LeBrun       | Trainspotting       |
 Simon Wright       | The Usual Suspects  |      8.60
 Victor Woeltjen    | Avatar              |      7.30
 Vincent Cadena     | Slumdog Millionaire |      8.00
                    | Blade Runner        |      8.20
                    | Princess Mononoke   |      8.40
(19 rows)
```

40. Write a SQL query to find those movies that have at least one rating and received the most stars. Sort the result-set on movie title. Return movie title and maximum review stars.
```
Query:
SELECT
    movie.mov_title,
    MAX(movie_rating.rev_stars) AS max_review_stars
FROM movie
INNER JOIN movie_rating
    ON movie.mov_id = movie_rating.mov_id
WHERE movie_rating.rev_stars IS NOT NULL
  AND movie_rating.rev_stars = (
        SELECT MAX(rev_stars)
        FROM movie_rating
        WHERE rev_stars IS NOT NULL
  )
GROUP BY
    movie.mov_title
ORDER BY
    movie.mov_title ASC;
Output:
     mov_title      | max_review_stars
--------------------+------------------
 The Usual Suspects |             8.60
(1 row)
```

41. Write a SQL query to find out which movies have received ratings. Return movie title, director first name, director last name and review stars.
```
Query:
SELECT
    movie.mov_title,
    director.dir_fname,
    director.dir_lname,
    movie_rating.rev_stars
FROM movie
INNER JOIN movie_rating
    ON movie.mov_id = movie_rating.mov_id
INNER JOIN movie_direction
    ON movie.mov_id = movie_direction.mov_id
INNER JOIN director
    ON movie_direction.dir_id = director.dir_id
WHERE movie_rating.rev_stars IS NOT NULL;
Output:
      mov_title      | dir_fname |    dir_lname    | rev_stars
---------------------+-----------+-----------------+-----------
 Vertigo             | Alfred    | Hitchcock       |      8.40
 The Innocents       | Jack      | Clayton         |      7.90
 Lawrence of Arabia  | David     | Lean            |      8.30
 Blade Runner        | Ridley    | Scott           |      8.20
 The Usual Suspects  | Bryan     | Singer          |      8.60
 Boogie Nights       | Paul      | Thomas Anderson |      3.00
 Annie Hall          | Woody     | Allen           |      8.10
 Princess Mononoke   | Hayao     | Miyazaki        |      8.40
 American Beauty     | Sam       | Mendes          |      7.00
 Titanic             | James     | Cameron         |      7.70
 Good Will Hunting   | Gus       | Van Sant        |      4.00
 Donnie Darko        | Richard   | Kelly           |      8.10
 Slumdog Millionaire | Danny     | Boyle           |      8.00
 Aliens              | James     | Cameron         |      8.40
 Beyond the Sea      | Kevin     | Spacey          |      6.70
(15 rows)
```

42. Write a SQL query to find movies in which one or more actors have acted in more than one film. Return movie title, actor first and last name, and the role.
```
Query:
SELECT
    movie.mov_title,
    actor.act_fname,
    actor.act_lname,
    movie_cast.role
FROM movie
INNER JOIN movie_cast
    ON movie.mov_id = movie_cast.mov_id
INNER JOIN actor
    ON movie_cast.act_id = actor.act_id
WHERE movie_cast.act_id IN (
    SELECT movie_cast.act_id
    FROM movie_cast
    GROUP BY movie_cast.act_id
    HAVING COUNT(movie_cast.mov_id) > 1
)
ORDER BY
    movie.mov_title,
    actor.act_fname,
    actor.act_lname;
Output:
    mov_title    | act_fname | act_lname |      role
-----------------+-----------+-----------+----------------
 American Beauty | Kevin     | Spacey    | Lester Burnham
 Beyond the Sea  | Kevin     | Spacey    | Bobby Darin
(2 rows)
```

43. Write a SQL query to find the actor whose first name is 'Claire' and last name is 'Danes'. Return director first name, last name, movie title, actor first name and last name, role.
```
Query:
SELECT
    director.dir_fname,
    director.dir_lname,
    movie.mov_title,
    actor.act_fname,
    actor.act_lname,
    movie_cast.role
FROM actor
INNER JOIN movie_cast
    ON actor.act_id = movie_cast.act_id
INNER JOIN movie
    ON movie_cast.mov_id = movie.mov_id
INNER JOIN movie_direction
    ON movie.mov_id = movie_direction.mov_id
INNER JOIN director
    ON movie_direction.dir_id = director.dir_id
WHERE actor.act_fname = 'Claire'
  AND actor.act_lname = 'Danes';
Output:
 dir_fname | dir_lname |     mov_title     | act_fname | act_lname | role
-----------+-----------+-------------------+-----------+-----------+------
 Hayao     | Miyazaki  | Princess Mononoke | Claire    | Danes     | San
(1 row)
```

44. Write a SQL query to find for actors whose films have been directed by them. Return actor first name, last name, movie title and role.
```
Query:
SELECT
    actor.act_fname,
    actor.act_lname,
    movie.mov_title,
    movie_cast.role
FROM actor
INNER JOIN movie_cast
    ON actor.act_id = movie_cast.act_id
INNER JOIN movie
    ON movie_cast.mov_id = movie.mov_id
INNER JOIN movie_direction
    ON movie.mov_id = movie_direction.mov_id
INNER JOIN director
    ON movie_direction.dir_id = director.dir_id
WHERE actor.act_fname = director.dir_fname
  AND actor.act_lname = director.dir_lname;
Output:
 act_fname | act_lname |   mov_title    |    role
-----------+-----------+----------------+-------------
 Woody     | Allen     | Annie Hall     | Alvy Singer
 Kevin     | Spacey    | Beyond the Sea | Bobby Darin
(2 rows)
```

45. Write a SQL query to find the cast list of the movie ‘Chinatown’. Return first name, last name.
```
Query:
SELECT actor.act_fname, actor.act_lname
FROM actor
INNER JOIN movie_cast ON actor.act_id = movie_cast.act_id
INNER JOIN movie ON movie_cast.mov_id = movie.mov_id
WHERE movie.mov_title = 'Chinatown';
Output:
 act_fname | act_lname
-----------+-----------
 Jack      | Nicholson
 Christian | Bale
(2 rows)
```

46. Write a SQL query to find those movies where actor’s first name is 'Harrison' and last name is 'Ford'. Return movie title.
```
Query:
SELECT movie.mov_title FROM movie
INNER JOIN movie_cast ON movie.mov_id = movie_cast.mov_id
INNER JOIN actor ON movie_cast.act_id = actor.act_id
WHERE actor.act_fname = 'Harrison' AND actor.act_lname = 'Ford';
Output:
  mov_title
--------------
 Blade Runner
(1 row)
```

47. Write a SQL query to find the highest-rated movies. Return movie title, movie year, review stars and releasing country.
```
Query:
SELECT movie.mov_title, movie.mov_year, movie_rating.rev_stars, movie.mov_rel_country FROM movie
INNER JOIN movie_rating ON movie.mov_id = movie_rating.mov_id
WHERE movie_rating.rev_stars = (
 SELECT MAX(rev_stars) FROM movie_rating
 WHERE rev_stars IS NOT NULL
);
Output:
     mov_title      | mov_year | rev_stars | mov_rel_country
--------------------+----------+-----------+-----------------
 The Usual Suspects |     1995 |      8.60 | UK
(1 row)
```

48. Write a SQL query to find the highest-rated ‘Mystery Movies’. Return the title, year, and rating.
```
Query:
SELECT
    movie.mov_title,
    movie.mov_year,
    movie_rating.rev_stars
FROM movie
INNER JOIN movie_genres
    ON movie.mov_id = movie_genres.mov_id
INNER JOIN genres
    ON movie_genres.gen_id = genres.gen_id
INNER JOIN movie_rating
    ON movie.mov_id = movie_rating.mov_id
WHERE genres.gen_title = 'Mystery'
  AND movie_rating.rev_stars = (
        SELECT MAX(movie_rating.rev_stars)
        FROM movie_rating
        INNER JOIN movie_genres
            ON movie_rating.mov_id = movie_genres.mov_id
        INNER JOIN genres
            ON movie_genres.gen_id = genres.gen_id
        WHERE genres.gen_title = 'Mystery'
  );
Output:
 mov_title | mov_year | rev_stars
-----------+----------+-----------
 Vertigo   |     1958 |      8.40
(1 row)
```

49. Write a SQL query to find the years when most of the ‘Mystery Movies’ produced. Count the number of generic title and compute their average rating. Group the result set on movie release year, generic title. Return movie year, generic title, number of generic title and average rating.
```
Query:
SELECT
    movie.mov_year,
    genres.gen_title,
    COUNT(genres.gen_title) AS number_of_genres,
    AVG(movie_rating.rev_stars) AS average_rating
FROM movie
INNER JOIN movie_genres
    ON movie.mov_id = movie_genres.mov_id
INNER JOIN genres
    ON movie_genres.gen_id = genres.gen_id
INNER JOIN movie_rating
    ON movie.mov_id = movie_rating.mov_id
WHERE genres.gen_title = 'Mystery'
GROUP BY
    movie.mov_year,
    genres.gen_title
ORDER BY
    movie.mov_year ASC;
Output:
 mov_year | gen_title | number_of_genres |   average_rating
----------+-----------+------------------+--------------------
     1958 | Mystery   |                1 | 8.4000000000000000
(1 row)
```

50. Write a query in SQL to generate a report, which contain the fields movie title, name of the female actor, year of the movie, role, movie genres, the director, date of release, and rating of that movie.
```
Query:
SELECT
    movie.mov_title,
    actor.act_fname,
    actor.act_lname,
    movie.mov_year,
    movie_cast.role,
    genres.gen_title,
    director.dir_fname,
    director.dir_lname,
    movie.mov_dt_rel,
    movie_rating.rev_stars
FROM movie
INNER JOIN movie_cast
    ON movie.mov_id = movie_cast.mov_id
INNER JOIN actor
    ON movie_cast.act_id = actor.act_id
INNER JOIN movie_genres
    ON movie.mov_id = movie_genres.mov_id
INNER JOIN genres
    ON movie_genres.gen_id = genres.gen_id
INNER JOIN movie_direction
    ON movie.mov_id = movie_direction.mov_id
INNER JOIN director
    ON movie_direction.dir_id = director.dir_id
INNER JOIN movie_rating
    ON movie.mov_id = movie_rating.mov_id
WHERE actor.act_gender = 'F';
Output:
     mov_title     | act_fname | act_lname | mov_year |     role     | gen_title | dir_fname | dir_lname | mov_dt_rel | rev_stars
-------------------+-----------+-----------+----------+--------------+-----------+-----------+-----------+------------+-----------
 The Innocents     | Deborah   | Kerr      |     1961 | Miss Giddens | Horror    | Jack      | Clayton   | 1962-02-19 |      7.90
 Princess Mononoke | Claire    | Danes     |     1997 | San          | Animation | Hayao     | Miyazaki  | 2001-10-19 |      8.40
 Aliens            | Sigourney | Weaver    |     1986 | Ripley       | Action    | James     | Cameron   | 1986-08-29 |      8.40
(3 rows)
```