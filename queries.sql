-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
select ProductName, CategoryName from Product
    left join Category
      on Product.id = Category.id;

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
select O.id, S.CompanyName from [Order] as O
    join Shipper as S
     on O.ShipVia = S.id
where OrderDate < "2012-08-09"

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
select OrderId, ProductName,Quantity from Product
    join OrderDetail
     on Product.Id = OrderDetail.ProductId
where OrderDetail.OrderId = '10251'

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
select [Order].Id, Customer.CompanyName, Employee.LastName from [Order]
    join Customer
      on [Order].CustomerId = Customer.Id
    join Employee
      on [Order].EmployeeId = Employee.Id 