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