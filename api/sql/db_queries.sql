-- queries to test DB structure

-- scheduled programs
select p.title, p.description, p.genre, p.rating, s.channel_id, s.start, s.end from program p RIGHT JOIN schedule s on p.id = s.program_id;
select s.id AS schedule_id, p.id AS program_id, p.title, p.description, p.genre, p.rating, s.channel_id, s.start, s.end from program p RIGHT JOIN schedule s on p.id = s.program_id;
select p.title, p.description, p.genre, p.rating, s.channel_id, s.start, s.end from program p RIGHT JOIN schedule s on p.id = s.program_id;
select p.title, p.description, p.genre, p.rating, s.channel_id, s.start, s.end from program p RIGHT JOIN schedule s on p.id = s.program_id where s.channel_id = 1 and s.start > '2022-01-15';

-- programs
select p.title, p.description, p.genre, p.rating from program p;
select p.title, p.description, p.genre, p.rating, s.channel_id, s.start, s.end from program p LEFT JOIN schedule s on p.id = s.program_id;
select p.title, p.description, p.genre, p.rating, s.channel_id, s.start, s.end from program p LEFT JOIN schedule s on p.id = s.program_id where s.start < '2022-03-01' or s.start IS NULL or s.end is Null;

-- templates
select l.id as template_list_id, l.schedule_id, ld.name, ld.description, p.title, p.description, p.genre, p.rating, s.channel_id from template_list l
LEFT JOIN template ld
on l.id = ld.id
LEFT JOIN schedule s
on l.schedule_id = s.id
LEFT JOIN program p
on s.program_id = p.id
where l.id = 1;

select l.id as template_list_id, l.schedule_id, ld.name, ld.description, p.title, p.description, p.genre, p.rating, s.channel_id from template_list l
LEFT JOIN template ld
on l.id = ld.id
LEFT JOIN schedule s
on l.schedule_id = s.id
LEFT JOIN program p
on s.program_id = p.id
where l.id = 2;
