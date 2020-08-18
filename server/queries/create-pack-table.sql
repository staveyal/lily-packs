CREATE TABLE IF NOT EXISTS packs(
  id serial primary key not null,
  name text not null,
  slug text not null,
  price decimal not null,
  amount int not null
)
