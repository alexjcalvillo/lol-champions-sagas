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
    ('Aatrox', 'The Darkin Blade', 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/c/cc/AatroxSquare.png/revision/latest/scale-to-width-down/240?cb=20180613011028'),
    ('Ahri', 'The Nine-Tailed Fox', 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/1/18/AhriSquare.png/revision/latest/scale-to-width-down/240?cb=20170728171734'),
    ('Akali', 'The Rogue Assassin', 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/a/a5/AkaliSquare.png/revision/latest/scale-to-width-down/240?cb=20180731211320'),
    ('Alistar', 'The Minotaur', 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/3/34/AlistarSquare.png/revision/latest/scale-to-width-down/240?cb=20170728172718'),
    ('Amumu', 'The Sad Mummy', 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/2/26/AmumuSquare.png/revision/latest/scale-to-width-down/240?cb=20170728173711'),
    ('Anivia', 'The Cryopheonix', 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/0/01/AniviaSquare.png/revision/latest/scale-to-width-down/240?cb=20170728174338'),
    ('Annie', 'The Dark Child', 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/6/6f/AnnieSquare.png/revision/latest/scale-to-width-down/240?cb=20170728174744');

INSERT INTO "attribute"
    ("type")
VALUES
    ('fighter'),
    ('tank'),
    ('mage'),
    ('support'),
    ('assassin'),
    ('marksmen');

SELECT *
FROM pokemon;

SELECT pokemon.id, pokemon.name, pokemon.description, pokemon.images, array_agg(type.description) as types
FROM pokemon
    JOIN pokemon_type ON pokemon.id=pokemon_type.pokemon_id
    JOIN type ON pokemon_type.type_id=type.id
GROUP BY pokemon.id
ORDER BY pokemon.id;
