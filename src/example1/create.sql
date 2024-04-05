drop schema live_fabricio cascade;
create schema live_fabricio;

create table live_fabricio.product (
	product_id integer,
	description text,
	price numeric
);

insert into live_fabricio.product values (1, 'A', 100);
insert into live_fabricio.product values (2, 'B', 200);
insert into live_fabricio.product values (3, 'C', 300);