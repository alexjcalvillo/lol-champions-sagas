CREATE TABLE "champion" (
	"id" serial primary key,
	"name" VARCHAR(80),
	"title" VARCHAR(240),
    "details" VARCHAR(400),
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
    ("name","title", "details","images")
VALUES
    ('Aatrox', 'The Darkin Blade', 'Once honored defenders of Shurima against the Void, Aatrox and his brethren would eventually become an even greater threat to Runeterra, and were defeated only by cunning mortal sorcery. But after centuries of imprisonment, Aatrox was the first to find freedom once more, corrupting and transforming those foolish enough to try and wield the magical weapon that contained his essence. Now, with stolen flesh, he walks Runeterra in a brutal approximation of his previous form, seeking an apocalyptic and long overdue vengeance.', 'images/AatroxSquare.png'),
    ('Ahri', 'The Nine-Tailed Fox', 'Innately connected to the latent power of Runeterra, Ahri is a vastaya who can reshape magic into orbs of raw energy. She revels in toying with her prey by manipulating their emotions before devouring their life essence. Despite her predatory nature, Ahri retains a sense of empathy as she receives flashes of memory from each soul she consumes.' 'images/AhriSquare.png'),
    ('Akali', 'The Rogue Assassin', 'Abandoning the Kinkou Order and her title of the Fist of Shadow, Akali now strikes alone, ready to be the deadly weapon her people need. Though she holds onto all she learned from her master Shen, she has pledged to defend Ionia from its enemies, one kill at a time. Akali may strike in silence, but her message will be heard loud and clear: fear the assassin with no master.', 'images/AkaliSquare.png'),
    ('Alistar', 'The Minotaur', 'Always a mighty warrior with a fearsome reputation, Alistar seeks revenge for the death of his clan at the hands of the Noxian empire. Though he was enslaved and forced into the life of a gladiator, his unbreakable will was what kept him from truly becoming a beast. Now, free of the chains of his former masters, he fights in the name of the downtrodden and the disadvantaged, his rage as much a weapon as his horns, hooves and fists.', 'images/AlistarSquare.png'),
    ('Amumu', 'The Sad Mummy', 'Legend claims that Amumu is a lonely and melancholy soul from ancient Shurima, roaming the world in search of a friend. Doomed by an ancient curse to remain alone forever, his touch is death, his affection ruin. Those who claim to have seen him describe a living cadaver, small in stature and wrapped in creeping bandages. Amumu has inspired myths, songs, and folklore told and retold for generations—such that it is impossible to separate truth from fiction.', 'images/AmumuSquare.png'),
    ('Anivia', 'The Cryopheonix', 'Anivia is a benevolent winged spirit who endures endless cycles of life, death, and rebirth to protect the Freljord. A demigod born of unforgiving ice and bitter winds, she wields those elemental powers to thwart any who dare disturb her homeland. Anivia guides and protects the tribes of the harsh north, who revere her as a symbol of hope, and a portent of great change. She fights with every ounce of her being, knowing that through her sacrifice, her memory will endure, and she will be reborn into a new tomorrow.', 'images/AniviaSquare.png'),
    ('Annie', 'The Dark Child', 'Dangerous, yet disarmingly precocious, Annie is a child mage with immense pyromantic power. Even in the shadows of the mountains north of Noxus, she is a magical outlier. Her natural affinity for fire manifested early in life through unpredictable, emotional outbursts, though she eventually learned to control these “playful tricks.” Her favorite includes the summoning of her beloved teddy bear, Tibbers, as a fiery protector. Lost in the perpetual innocence of childhood, Annie wanders the dark forests, always looking for someone to play with.', 'images/AnnieSquare.png'),
    ('Aphelios', 'The Weapon of the Faithful', 'Emerging from moonlights shadow with weapons drawn, Aphelios kills the enemies of his faith in brooding silence—speaking only through the certainty of his aim, and the firing of each gun. Though fueled by a poison that renders him mute, he is guided by his sister Alune. From her distant temple sanctuary, she pushes an arsenal of moonstone weapons into his hands. For as long as the moon shines overhead, Aphelios will never be alone.', 'images/ApheliosSquare.png');

INSERT INTO "attribute"
    ("type")
VALUES
    ('fighter'),
    ('tank'),
    ('mage'),
    ('support'),
    ('assassin'),
    ('marksman');

    INSERT INTO "champion_attribute" 
("champion_id", "attribute_id")
VALUES
(1, 1), (1, 2),
(2, 3), (2, 5), 
(3, 5), 
(4, 2), (4, 4),
(5, 3), (5, 2),
(6, 3), (6, 4),
(7, 3),
(8, 6);

SELECT *
FROM champion;


SELECT champion.id, champion.name, champion.details, champion.images, array_agg("attribute".type) as types FROM champion
JOIN champion_attribute ON champion.id = champion_attribute.champion_id
JOIN "attribute" ON champion_attribute.attribute_id = attribute.id
GROUP BY champion.id;
