-- create database and connect to database
create database epg;
\c epg

-- drop op everything (order is important)
drop table IF EXISTS template_list;
drop table IF EXISTS template;
drop table IF EXISTS schedule;
drop table IF EXISTS channel;
drop table IF EXISTS program;

-- create database scheme
CREATE TABLE "channel" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar NOT NULL,
  "title" varchar NOT NULL,
  "timezone" varchar NOT NULL
);

CREATE TABLE "program" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar NOT NULL,
  "title" varchar NOT NULL,
  "description" varchar NOT NULL,
  "genre" varchar DEFAULT 'music',
  "rating" varchar DEFAULT 'nr'
);

CREATE TABLE "schedule" (
  "id" SERIAL PRIMARY KEY,
  "program_id" int NOT NULL,
  "channel_id" int NOT NULL,
  "start" timestamp NOT NULL,
  "end" timestamp NOT NULL
);

CREATE TABLE "template_list" (
  "id" SERIAL,
  "schedule_id" int UNIQUE NOT NULL,
  PRIMARY KEY ("id", "schedule_id")
);

CREATE TABLE "template" (
  "id" int PRIMARY KEY,
  "name" varchar NOT NULL,
  "description" varchar NOT NULL
);

ALTER TABLE "schedule" ADD FOREIGN KEY ("program_id") REFERENCES "program" ("id");
ALTER TABLE "schedule" ADD FOREIGN KEY ("channel_id") REFERENCES "channel" ("id");
ALTER TABLE "template_list" ADD FOREIGN KEY ("schedule_id") REFERENCES "schedule" ("id");
ALTER TABLE "template_list" ADD FOREIGN KEY ("id") REFERENCES "template" ("id");
CREATE INDEX ON "channel" ("name");
CREATE INDEX ON "schedule" ("program_id");
CREATE INDEX ON "schedule" ("channel_id");
CREATE INDEX ON "schedule" ("program_id", "channel_id");


/*
channel_id  1->> schedule.channel_id
program.id  1->> schedule.program_id
schedule.id 1->> template_list.schedule_id
template.id 1->> template_list.id

# schedule
program_id >> remove NOT NULL, if we want to be able to remove a program and keep the schedule, program_id would become null in this case
channel_id >> remove NOT NULL, if we want to be able to remove a channel and keep the schedule, channel_id would become null in this case
For now I think we would want to remove a schedule in case a related program or channel is removed
(A similar scheduled program (aka schedule) with different times get unique id, we may want to have a check that we cant schedule on the same time or overlapping time on the same schannel)

# template_list
When deleting a template, we want to remove all rows with te same id from template_list (removing a template removes a collection schedules from template_list)
when deleting a schedule, we want to remove all rows with te same schedule_id from template_list (one or more templates would get time gaps)

cascading remove chain:
channel >> schedule >> templates_list
progam >> schedule >> templates_list
*/