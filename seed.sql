insert into members (first_name, last_name, user_name, gender, email, gender_orientation, createdAt, updatedAt)
values("Pete", "Johnson", "Pete_Johnson", 1, "PJ@email.com", 2, now(), now()),
("Darcy", "Emerson", "Darcy_Emerson", 2, "DE@email.com", 1, now(), now()),
("Nala", "Wade", "Nala_Wade", 2, "NW@emial.com", 1, now(), now()),
("Carmen", "Southern", "Carmen_Southern", 2, "CS@email.com", 1, now(), now()),
("Rowan", "Horner", "Rowan_Horner", 1, "RH@email.com", 2, now(), now()),
("Jonah", "Dowling", "Jonah_Dowling", 1, "JD@email.com", 2, now(), now()),
("Colton", "Noel", "Colton_Noel", 1, "CN@email.com", 2, now(), now()),
("Griff", "Guy", "Griff_Guy", 1, "GG@email.com", 2, now(), now()),
("Tess", "Carroll", "Tess_Carroll", 2, "TC@email.com", 1, now(), now()),
("Elana", "Connor", "Elana_Connor", 2, "EC@email.com", 1, now(), now()); 

insert into languages (javascript, c, csharp, java, ruby, PHP, swift, CPlusPlus, R, perl, assembly, objectivec, createdAt, updatedAt)
values(true, false, true, true, false, false, false, false, true, false, false, false, now(), now()),
(true, false, true, false, false, false, false, false, false, false, true, true, now(), now()),
(true, false, false, false, false, true, true, false, false, false, false, false, now(), now()),
(true, false, false, false, false, false, false, false, false, true, false, false, now(), now()),
(false, true, false, false, true, false, false, false, false, false, false, false, now(), now()),
(true, false, false, false, false, false, false, false, false, false, false, false, now(), now()),
(false, false, false, true, false, false, true, true, false, true, false, false, now(), now()),
(false, true, true, false, false, true, false, false, true, false, false, false, now(), now()),
(false, true, false, false, true, true, false, true, false, false, false, false, now(), now()),
(false, false, false, false, false, false, false, false, true, false, false, false, now(), now());