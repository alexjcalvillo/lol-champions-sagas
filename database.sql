CREATE TABLE "champion" (
	"id" serial primary key,
	"name" VARCHAR(80),
	"title" VARCHAR(240),
	"images" VARCHAR(200)
);

CREATE TABLE "attribute" (
	"id" serial primary key,
	"type" VARCHAR(80)
);

CREATE TABLE "champion_attribute" (
	"id" serial primary key,
	"champion_id" INT REFERENCES "champion",
	"attribute_id" INT REFERENCES "attribute"
);

INSERT INTO "champion"
    ("name","title","images")
VALUES
    ('Aatrox', 'The Darkin Blade', 'images/AatroxSquare.png'),
    ('Ahri', 'The Nine-Tailed Fox', 'images/AhriSquare.png'),
    ('Akali', 'The Rogue Assassin', 'images/AkaliSquare.png'),
    ('Alistar', 'The Minotaur', 'images/AlistarSquare.png'),
    ('Amumu', 'The Sad Mummy', 'images/AmumuSquare.png'),
    ('Anivia', 'The Cryopheonix', 'images/AniviaSquare.png'),
    ('Annie', 'The Dark Child', 'images/AnnieSquare.png'),
    ('Aphelios', 'The Weapon of the Faithful', 'images/ApheliosSquare.png');

INSERT INTO "attribute"
    ("type")
VALUES
    ('fighter'),
    ('tank'),
    ('mage'),
    ('support'),
    ('assassin'),
    ('marksman');

SELECT *
FROM champion;

SELECT pokemon.id, pokemon.name, pokemon.description, pokemon.images, array_agg(type.description) as types
FROM pokemon
    JOIN pokemon_type ON pokemon.id=pokemon_type.pokemon_id
    JOIN type ON pokemon_type.type_id=type.id
GROUP BY pokemon.id
ORDER BY pokemon.id;
