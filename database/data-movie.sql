USE
movie_database;

INSERT INTO movie (movie_id, title, description, director, length, release_date, genre, age_rating,
                   rating, image)
VALUES (1, "Transformers", "Film mit Autoroboter", "Michale Bay", 143, 1621346606, "Action", "T", 0, "deadpool.jpg"),
       (2, "Deadpool", "Mann mit Krebs", "Hons", 143, 1621346606, "Action", "T", 0, "deadpool.jpg"),
       (3, "Deadpool 2", "Mann mit Krebs 2", "Hons", 143, 1621346606, "Action", "T", 0, "deadpool.jpg"),
       (4, "Deadpool 3 die Rache vom Krebsmann", "Mann mit Krebs 3 wieder", "Hons", 143, 1621346606, "Action", "T", 0,
        "deadpool.jpg"),
       (5, "Transformers", "Film mit Autoroboter", "Michale Bay", 143, 1621346606, "Action", "T", 0, NULL);