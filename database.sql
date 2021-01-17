-- Database name 'react_gallery'
CREATE TABLE "galleryItems"(
	"id" SERIAL PRIMARY KEY,
	"path" VARCHAR (140) NOT NULL, 
	"description" VARCHAR(120) NOT NULL, 
	"likes" INTEGER  DEFAULT 0

);

-- Initial Data
INSERT INTO "galleryItems"("path", "description")
VALUES 
('images/ayinger-brauWeisse.jpg', 'Ayinger Brau Weiße'),
('images/franziskaner-hefeweizenDunkel.jpg', 'Franziskaner Hefeweizen Dunkel'),
('images/hackerPschorr-weisse.jpg', 'Hacker-Pschorr Weisse'),
('images/hofbrau-oktoberfestbier.jpg', 'Hofbrau Oktoberfestbier'),
('images/paulaner-hefeweizen.jpg', 'Paulaner Hefeweizen'),
('images/warsteiner-dunkel.jpg', 'Warsteiner Dunkel'),
('images/weihenstephaner-vitus.jpg', 'Weihenstephaner-vitus');