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