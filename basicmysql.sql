-- where
SELECT lastname,firstname,jobtitle From employees where jobtitle = 'Sales Rep';
SELECT lastname,firstname,jobtitle,officeCode  From employees where jobtitle = 'Sales Rep' and officeCode = 1;
SELECT lastname,firstname,jobtitle,officeCode  From employees where jobtitle = 'Sales Rep' and officeCode = 1 ORDER BY officeCode,jobtitle;

SELECT 
    firstName, 
    lastName, 
    officeCode
FROM
    employees
WHERE
    officeCode BETWEEN 1 AND 3
ORDER BY officeCode;

SELECT
firstName,lastName
FROM employees
WHERE lastName like '%son'
ORDER by firstName;

SELECT 
    firstName, 
    lastName, 
    officeCode
FROM
    employees
WHERE
    officeCode in (1,2,3)
ORDER BY 
    officeCode;
    
SELECT 
    firstName, 
    lastName, 
    officeCode
FROM
    employees
WHERE
reportsTO IS NULL;

SELECT 
    lastname, 
    firstname, 
    jobtitle
FROM
    employees
WHERE
    jobtitle <> 'Sales Rep';

    SELECT 
    lastname, 
    firstname, 
    officeCode
FROM
    employees
WHERE 
    officecode > 5;

    SELECT 
    lastname, 
    firstname, 
    officeCode
FROM
    employees
WHERE 
    officecode <= 4;

    -- MySQL Aliases
    SELECT 
    CONCAT_WS(',',firstname,lastname) FROM employees;
    SELECT CONCAT_WS(',',firstname,lastname) AS 'Full name' FROM employees;
    SELECT CONCAT_WS(",",firstname,lastName) 'Full name' FROM employees ORDER BY 'Full name';
    SELECT 	orderNumber `Order no.`,
	SUM(priceEach * quantityOrdered) Total
FROM 	orderdetails GROUP BY 	`Order no.`
HAVING 	total > 60000;

SELECT customerName,COUNT(o.orderNumber) total
From 
customers c 
INNER JOIN orders o ON c.customerNumber = o.customerNumber
GROUP BY
customerName
ORDER BY
total DEsc;

-- MySQL Join
create table members(
    member_id int AUTO_INCREMENT,
    name varchar(100),
    primary key (member_id)
    );

    create table committees (
     committee_id  int AUTO_INCREMENT,
    name varchar(100),
    primary key ( committee_id )
    );

    INSERT INTO members(name)
    values ('John'),('Jane'),('Mary'),('David'),('Amelia');

    INSERT INTO committees(name)
VALUES('John'),('Mary'),('Amelia'),('Joe');

SELECT 
    m.member_id, 
    m.name AS member, 
    c.committee_id, 
    c.name AS committee
FROM
    members m
INNER JOIN committees c USING(name);

SELECT 
    m.member_id, 
    m.name AS member, 
    c.committee_id, 
    c.name AS committee
FROM
    members m
LEFT JOIN committees c USING(name);


SELECT 
    m.member_id, 
    m.name AS member, 
    c.committee_id, 
    c.name AS committee
FROM
    members m
LEFT JOIN committees c USING(name)
WHERE c.committee_id Is NULL;

SELECT 
    m.member_id, 
    m.name AS member, 
    c.committee_id, 
    c.name AS committee
FROM
    members m
RIGHT JOIN committees c on c.name = m.name;

SELECT 
    c1.city, 
    c1.customerName, 
    c2.customerName
FROM
    customers c1
INNER JOIN customers c2 ON 
    c1.city = c2.city
    AND c1.customername > c2.customerName
ORDER BY 
    c1.city;

    -- MySQL GROUP BY clause
    select status 
    from orders 
    GROUP BY status;

    SELECT 
  status, 
  COUNT(*) 
FROM 
  orders 
GROUP BY 
  status;

  select status,SUM(quantityOrdered*priceEach) AS amount
  from orders
  INNER JOIN orderdetails using (orderNumber)
  Group by status;

  select orderNumber,SUM(quantityOrdered*priceEach) AS total
  from orderdetails
  Group by orderNumber;

 SELECT 
  YEAR(orderDate) AS year, 
  SUM(quantityOrdered * priceEach) AS total 
FROM 
  orders 
  INNER JOIN orderdetails USING (orderNumber) 
WHERE 
  status = 'Shipped' 
GROUP BY 
  YEAR(orderDate);

  select
  YEAR(orderDate) AS year,
  SUM(quantityOrdered*priceEach) AS total
  FROM orders
  INNER JOIN orderdetails USING ()orderNumber
  where
 status = 'Shipped' 
  GROUP BY yearHaving year > 2003;

  SELECT year(orderDate) AS year,status,SUM(quantityOrdered*priceEach) AS total
  from orders INNER JOIN orderdetails USING (orderNumber)
  Group by year,status
  order by year;

--   MySQL HAVING clause examples
SELECT orderNumber,
SUM(quantityOrdered) AS itemsCount,SUM(priceEach*quantityOrdered) AS total
from orderdetails
GROUP BY
orderNumber;

SELECT 
  ordernumber, 
  SUM(quantityOrdered) AS itemsCount, 
  SUM(priceeach * quantityOrdered) AS total 
FROM 
  orderdetails 
GROUP BY 
  ordernumber 
HAVING 
  total > 1000;

  SELECT 
    ordernumber,
    SUM(quantityOrdered) AS itemsCount,
    SUM(priceeach*quantityOrdered) AS total
FROM
    orderdetails
GROUP BY ordernumber
HAVING 
    total > 1000 AND 
    itemsCount > 600;

    SELECT 
    a.ordernumber, 
    status, 
    SUM(priceeach*quantityOrdered) total
FROM
    orderdetails a
INNER JOIN orders b 
    ON b.ordernumber = a.ordernumber
GROUP BY  
    ordernumber, 
    status
HAVING 
    status = 'Shipped' AND 
    total > 1500;

    -- MySQL HAVING COUNT example
    select
    customerName,COUNT(*) order_count
    from orders 
    INNER JOIN customers using (customerNumber)
    Group by customerName
    HAVING COUNT(*) > 4
    ORDER BY order_count;

    -- MySQL ROLLUP 
    SELECT 
    productline, 
    SUM(orderValue) totalOrderValue
FROM
    sales
GROUP BY 
    productline;

    -- MySQL Subquery
    SELECT lastName,firstName
    From employees WHERE officeCode IN (SELECT
   officeCode FROM offices where country = 'USA' );

   SELECT customerNumber,checkNumber,amount
   FROM payments
   WHERE amount = (SELECT MAX(amount) from payments );

   select customerNumber,checkNumber,amount
   from payments
   where amount > (select avg(amount) from payments);

--    MySQL subquery with IN and NOT IN operators
select customerName
from customers 
where customerNumber NOT IN
(select DISTINCT customerNumber FROM orders);

-- MySQL subquery in the FROM clause
SELECT MAX(items),MIN(items),Floor(AVG(items))
FROM (select orderNumber,count(orderNumber) AS items
from orderdetails group by orderNumber) AS lineitems;

select productname,buyprice
from products p1
where buyprice > (SELECT AVG(buyprice)
from products where productline = p1.productline);

SELECT 
    customerNumber, 
    customerName
FROM
    customers
WHERE
    EXISTS( SELECT 
            orderNumber, SUM(priceEach * quantityOrdered)
        FROM
            orderdetails
                INNER JOIN
            orders USING (orderNumber)
        WHERE
            customerNumber = customers.customerNumber
        GROUP BY orderNumber
        HAVING SUM(priceEach * quantityOrdered) > 60000);

        --  MySQL Derived Table example
        SELECT productcode,ROUND(SUM(quantityOrdered*priceEach)) sales
        FROM orderdetails INNER JOIN orders USING (orderNumber)
        WHERE year(shippedDate) = 2003
        group by productcode
        order by sales DESC 
        limit 5;

        SELECT productName,sales 
        FROM (SELECT productcode, ROUND(SUM(quantityOrdered*priceEach)) sales
        FROM orderdetails INNER JOIN orders USING (orderNumber)
        WHERE year(shippedDate) = 2003
        group by productcode
        order by sales DESC 
        limit 5) top5products2003
        INNER JOIN products USING (producyCode);

        -- Suppose you have to classify the customers who bought products in 2003 into 3 groups: platinum, gold, and silver. And you need to know the number of customers in each group with the following conditions:

-- Platinum customers who have orders with a volume greater than 100K.
-- Gold customers who have orders with a volume between 10K and 100K.
-- Silver customers who have orders with a volume of less than 10K.

SELECT customerNumber,
ROUND(SUM(quantityOrdered*priceEach)) sales,
(CASE 
WHEN SUM(quantityOrdered*priceEach)<10000 then 'silver'
WHEN SUM(quantityOrdered*priceEach) between 10000 and 100000 then 'silver'
WHEN SUM(quantityOrdered*priceEach ) > 100000 then 'platinum'
END) customerGroup
FROM
orderdetails
INNER JOIN
orders USING (orderNumber)
WHERE year(shippedDate) = 2003
GROUP BY customerNumber;

-- Then, you can use this query as the derived table and perform grouping as follows:

select customerGroup,count(cg.customerGroup) as groupCount
from (SELECT customerNumber,
ROUND(SUM(quantityOrdered*priceEach)) sales,
(CASE 
WHEN SUM(quantityOrdered*priceEach)<10000 then 'silver'
WHEN SUM(quantityOrdered*priceEach) between 10000 and 100000 then 'silver'
WHEN SUM(quantityOrdered*priceEach ) > 100000 then 'platinum'
END) customerGroup
FROM
orderdetails
INNER JOIN
orders USING (orderNumber)
WHERE year(shippedDate) = 2003
GROUP BY customerNumber) cg
GROUP BY cg.customerGroup;

-- MySQL UPDATE EXISTS examples
SELECT employeenumber,firstname,lastname,extension
from employees
where
EXISTS(select 1 from offices
where city = 'San Francisco' and
offices.officeCode = employees.officeCode);

-- MySQL INSERT EXISTS example
INSERT INTO customers_archive
SELECT * 
FROM customers
WHERE NOT EXISTS( 
   SELECT 1
   FROM
       orders
   WHERE
       orders.customernumber = customers.customernumber
);
-- MySQL DELETE EXISTS example

DELETE FROM customers
WHERE EXISTS( 
    SELECT 
        1
    FROM
        customers_archive a
    
    WHERE
        a.customernumber = customers.customerNumber);


        select customerNumber,checkNumber,(quantityOrdered*priceEach) total
        from customertable
        (select orderNumber,orderdetails
        from ordertable)
        c.customerNumber=o.customerNumber

        -- MySQL UNION operator
        DROP TABLE IF EXISTS t1;
DROP TABLE IF EXISTS t2;

CREATE TABLE t1 (
    id INT PRIMARY KEY
);

CREATE TABLE t2 (
    id INT PRIMARY KEY
);

INSERT INTO t1 VALUES (1),(2),(3);
INSERT INTO t2 VALUES (2),(3),(4);

select id from t1 UNION select id from t2;  
select id from t1 UNION ALL select id from t2;

SELECT firstName,lastName 
from employees UNION
select contactFirstName,contactLastName from customers;

select concat(firstName,' ',lastName) fullname
from employees UNION select
concat (contactFirstName, ' ',contactLastName)
from customers;

-- MySQL EXCEPT operator examples
select id from t1 EXCEPT select id from t2;

select firstName from employees 
except select contactFirstName from customers;

select firstName from employees 
except select contactFirstName from customers order by firstName;

-- MySQL INTERSECT operator example
select id from t1 INTERSECT select id from t2;

-- practical MySQL INTERSECT example
select firstName from employees
INTERSECT select contactFirstName from customers;

--  INTERSECT operator with ORDER BY clause
select firstName from employees
INTERSECT select contactFirstName
from customers order by firstName;

-- MySQL AUTO_INCREMENT attribute
CREATE TABLE contacts(
    id INT AUTO_INCREAMENT PRIMARY KEY,
    name varchar(255) not NULL,
    email varchar(320) not NULL
);
INSERT INTO contacts(name, email)
VALUES('John Doe', 'john.doe@mysqltutorial.org');

ALTER table contacts add adress varchar(255);

UPDATE contacts set adress = 'dwd' where id = 1;

alter table contacts drop column adress;

-- RENAME TABLE examples
CREATE DATABASE IF NOT EXISTS hr;

CREATE TABLE departments(
    department_id INT AUTO_INCREAMENT PRIMARY KEY,
    dept_name VARCHAR(100) NOT NULL
);

craeate table employee(
    id int AUTO_INCREAMENT primary key,
    first_name varchar(50) not null,
    last_name varchar(50) not null,
    department_id int not null,
    foreign key(department_id)
    references departments(department_id)
)

insert into departments(dept_name) values ('sales'),('Marketing'),('Finance'),('Accounting'),('Warehouses'),('Production');
INSERT INTO employees(
  first_name, last_name, department_id
) 
VALUES 
  ('John', 'Doe', 1), 
  ('Bush', 'Lily', 2), 
  ('David', 'Dave', 3), 
  ('Mary', 'Jane', 4), 
  ('Jonatha', 'Josh', 5), 
  ('Mateo', 'More', 1);

  SELECT 
    id, first_name, last_name, department_id
FROM
    employees;

    create view v_employee_info as 
    select id,first_name,last_name,dept_name from employees
    inner join departments using(department_id);

    SELECT * FROM v_employee_info;

    -- MySQL DROP COLUMN examples