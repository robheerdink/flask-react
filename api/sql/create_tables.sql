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

