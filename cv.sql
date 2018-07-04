
DROP DATABASE cv;

CREATE DATABASE cv;


DROP TABLE IF EXISTS `profil`;
CREATE TABLE profil (
		profil_id varchar (4),
              	name varchar(40),
		date_of_birth date,
		place_of_birth varchar (50),
		adress varchar (50),
		phone varchar (14),
		e_mail varchar (30),
		github_profile varchar (50),
		description varchar (500),
		PRIMARY KEY (profil_id)
		);


DROP TABLE IF EXISTS `skills`;
CREATE TABLE skills (
		skills_id varchar (4),
		languages varchar (100),
		itskills varchar (100),
		competition varchar(500),
		social_life varchar (500),
		hobbies varchar (500),
		profil_id varchar (4),
		PRIMARY KEY (skills_id),
		FOREIGN KEY (profil_id) REFERENCES profil (profil_id)
		);


DROP TABLE IF EXISTS `education`;
CREATE TABLE education (
		education_id varchar (4),
		année_edu varchar (15),
		school varchar (80),
		edu_description varchar (500),
		profil_id varchar (4),
		PRIMARY KEY (education_id),
		FOREIGN KEY (profil_id) REFERENCES profil (profil_id)
		);


DROP TABLE IF EXISTS `experiences`;
CREATE TABLE experiences (
		experiences_id varchar (4),
		type_ varchar(20),
		année_exp varchar (15),
		exp_place varchar (80),
		exp_description varchar (150),
		exp_tools varchar (150),
		profil_id varchar (4),
		PRIMARY KEY (experiences_id),
		FOREIGN KEY (profil_id) REFERENCES profil (profil_id)
		);

INSERT INTO profil (profil_id, name, date_of_birth, place_of_birth, adress, phone, e_mail, github_profile, description  )
VALUES ('3345', 'Nabli ala', '1998-12-26', 'tunis,tunisia', '35 rue de changement', '(+216)55014967', 'alanabli112@gmail.com', 'https://github.com/NabliAla', 'n"importe quoi'  );
		
