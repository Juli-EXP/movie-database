CREATE DATABASE IF NOT EXISTS `movie-database`;

USE `movie-database`;

CREATE TABLE IF NOT EXISTS `movie` (
	`movie_id` INT unsigned NOT NULL AUTO_INCREMENT,
	`title` VARCHAR(100) NOT NULL,
	`director` VARCHAR(50) NOT NULL,
	`length` INT unsigned NOT NULL,
	`release_date` INT unsigned NOT NULL,
	`genre` VARCHAR(50) NOT NULL,
	`age_rating` VARCHAR(5) NOT NULL,
	`rating` DOUBLE DEFAULT '0.0',
	PRIMARY KEY (`movie_id`)
);

CREATE TABLE IF NOT EXISTS `rating` (
	`rating_id` INT unsigned NOT NULL AUTO_INCREMENT,
	`movie_id` INT unsigned NOT NULL,
	`rating` DOUBLE DEFAULT '0.0',
	`comment` VARCHAR(500),
	`username` VARCHAR(50),
	PRIMARY KEY (`rating_id`),
	FOREIGN KEY (`movie_id`) REFERENCES movie(`movie_id`) ON DELETE CASCADE
);