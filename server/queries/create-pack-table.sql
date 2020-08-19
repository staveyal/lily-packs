CREATE TABLE IF NOT EXISTS packs(
  id serial primary key not null,
  name text not null,
  img text not null,
  slug text not null,
  price decimal not null,
  specs text not null DEFAULT '',
  show boolean not null DEFAULT true,
  amount int not null,
  place int DEFAULT 0
);
/*
Add missing columns if they aren't there
*/
ALTER TABLE packs
  ADD IF NOT EXISTS name text not null,
  ADD IF NOT EXISTS img text not null,
  ADD IF NOT EXISTS slug text not null,
  ADD IF NOT EXISTS price decimal not null,
  ADD IF NOT EXISTS specs text not null DEFAULT '',
  ADD IF NOT EXISTS amount int not null,
  ADD IF NOT EXISTS place int DEFAULT 0,
  ADD IF NOT EXISTS show boolean not null DEFAULT true
