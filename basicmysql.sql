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