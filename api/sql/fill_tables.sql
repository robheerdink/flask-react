\c epg

insert into program(name, title, description, genre, rating) values ('after midnight', 'After midnight', 'Sleep is for the meek', 'music', 'nr');
insert into program(name, title, description, genre, rating) values ('early birds', 'Early Birds', 'Start the day with some relax music', 'music', 'nr');
insert into program(name, title, description, genre, rating) values ('morning chill', 'Morning chill', 'Start the day with some relax music', 'music', 'nr');
insert into program(name, title, description, genre, rating) values ('midday mahem', 'Midday Mahem', 'Energetic music', 'music', 'nr');
insert into program(name, title, description, genre, rating) values ('metal maddess', 'Metal Maddness', 'Loud as hell', 'music', 'nr');
insert into program(name, title, description, genre, rating) values ('flower power', 'Flower Power', 'Make love not war', 'music', 'nr');
insert into program(name, title, description, genre, rating) values ('flower power (germany)', 'Flower Power', 'Macht Liebe, nicht Krieg', 'music', 'nr');

insert into channel(name, title, timezone) values ('Samsung Rock On (US)', 'Rock On!', 'US/Eastern');
insert into channel(name, title, timezone) values ('Samsung Rock On (NL)', 'Rock On!','Europe/Amsterdam');
insert into channel(name, title, timezone) values ('LG Rock On (CA)', 'Rock On!', 'US/Eastern');
insert into channel(name, title, timezone) values ('XITE HITS (NL)', 'XITE HITS', 'Europe/Amsterdam');
insert into channel(name, title, timezone) values ('XITE HITS (DE)', 'XITE HITS', 'Europe/Amsterdam');

insert into schedule(program_id, channel_id, start, "end") values (1,1,'2022-02-15 00:00:00', '2022-02-16 05:00:00');
insert into schedule(program_id, channel_id, start, "end") values (2,1,'2022-02-15 05:00:00', '2022-02-16 07:00:00');
insert into schedule(program_id, channel_id, start, "end") values (3,1,'2022-02-15 07:00:00', '2022-02-16 12:00:00');
insert into schedule(program_id, channel_id, start, "end") values (4,1,'2022-02-15 12:00:00', '2022-02-16 16:00:00');
insert into schedule(program_id, channel_id, start, "end") values (5,1,'2022-02-15 16:00:00', '2022-02-16 20:00:00');
insert into schedule(program_id, channel_id, start, "end") values (6,1,'2022-02-15 20:00:00', '2022-02-16 00:00:00');
insert into schedule(program_id, channel_id, start, "end") values (1,2,'2022-02-15 00:00:00', '2022-02-16 05:00:00');
insert into schedule(program_id, channel_id, start, "end") values (2,2,'2022-02-15 05:00:00', '2022-02-16 07:00:00');
insert into schedule(program_id, channel_id, start, "end") values (3,2,'2022-02-15 07:00:00', '2022-02-16 12:00:00');
insert into schedule(program_id, channel_id, start, "end") values (4,2,'2022-02-15 12:00:00', '2022-02-16 16:00:00');
insert into schedule(program_id, channel_id, start, "end") values (5,2,'2022-02-15 16:00:00', '2022-02-16 20:00:00');
insert into schedule(program_id, channel_id, start, "end") values (6,2,'2022-02-15 20:00:00', '2022-02-16 00:00:00');

insert into template(id, name, description) values (1,'rock-us-monday','template for channel: Rock On!, Region: US, Platforms: Samsung, LG');
insert into template_list(id, schedule_id) values (1,1);
insert into template_list(id, schedule_id) values (1,2);
insert into template_list(id, schedule_id) values (1,3);
insert into template_list(id, schedule_id) values (1,4);
insert into template_list(id, schedule_id) values (1,5);
insert into template_list(id, schedule_id) values (1,6);

insert into template(id, name, description) values (2,'rock-nl-tuesday','template for channel: Rock On!, Region: NL, Platforms: Samsung, LG');
insert into template_list(id, schedule_id) values (2,7);
insert into template_list(id, schedule_id) values (2,8);
insert into template_list(id, schedule_id) values (2,9);
insert into template_list(id, schedule_id) values (2,10);
insert into template_list(id, schedule_id) values (2,11);
insert into template_list(id, schedule_id) values (2,12);

