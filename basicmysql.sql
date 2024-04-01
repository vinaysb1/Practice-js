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