const sqlOrdersList =`WITH orders_cte (product_quantity, product_name, items_total, order_id, payment_type, user_name, user_address, order_status, order_time) AS
(
	select count(p.productname) as product_quantity, p.productname as product_name, 
	sum(p.productprice) as items_total, o.orderid as order_id, o.paymenttype as payment_type,
	u.username as user_name, u.address as user_address, os.name as order_status, o.orderhour order_time
	from productorder po 
	join products p on 
	po.productid = p.productid 
	join orders o
	on o.orderid = po.orderid 
	join users u
	on u.userid = o.userid 
	join orderstate os
	on os.stateid = o.stateid 
	group by p.productname, o.orderid, payment_type, user_name, user_address, order_status, order_time  

)
select order_status as estado, order_time as hora, order_id as numero, array_agg(product_name) as productos, array_agg(product_quantity) as cantidad_productos,
payment_type as tipo_pago, sum(items_total) as total_pago, user_name usuario, user_address direccion
from orders_cte group by order_id, order_status, order_time, tipo_pago, numero, user_name, direccion ;`

const detailOrderQuery = (orderID) => {
	query = `WITH orders_cte (product_quantity, product_name, items_total, order_id, payment_type, user_name, user_address, order_status, order_time) AS
(
	select count(p.productname) as product_quantity, p.productname as product_name, 
	sum(p.productprice) as items_total, o.orderid as order_id, o.paymenttype as payment_type,
	u.username as user_name, u.address as user_address, os.name as order_status, o.orderhour order_time
	from productorder po 
	join products p on 
	po.productid = p.productid 
	join orders o
	on o.orderid = po.orderid 
	join users u
	on u.userid = o.userid 
	join orderstate os
	on os.stateid = o.stateid 
	group by p.productname, o.orderid, payment_type, user_name, user_address, order_status, order_time  

)
select order_status as estado, order_time as hora, order_id as numero, array_agg(product_name) as productos, array_agg(product_quantity) as cantidad_productos,
payment_type as tipo_pago, sum(items_total) as total_pago, user_name usuario, user_address direccion
from orders_cte where order_id=${orderID} group by order_id, order_status, order_time, tipo_pago, numero, user_name, direccion ;`
	return query
}


const detailOrderQueryByUser = (user_id) => {
	query = `WITH orders_cte (product_quantity, product_name, items_total, order_id, payment_type, user_name, user_id, user_address, order_status, order_time) AS
(
	select count(p.productname) as product_quantity, p.productname as product_name, 
	sum(p.productprice) as items_total, o.orderid as order_id, o.paymenttype as payment_type,
	u.username as user_name, u.userid as user_id, u.address as user_address, os.name as order_status, o.orderhour order_time
	from productorder po 
	join products p on 
	po.productid = p.productid 
	join orders o
	on o.orderid = po.orderid 
	join users u
	on u.userid = o.userid 
	join orderstate os
	on os.stateid = o.stateid 
	group by p.productname, o.orderid, payment_type, user_name, user_id, user_address, order_status, order_time  

)
select order_status as estado, order_time as hora, order_id as numero, array_agg(product_name) as productos, array_agg(product_quantity) as cantidad_productos,
payment_type as tipo_pago, sum(items_total) as total_pago, user_name usuario, user_address direccion
from orders_cte where user_id=${user_id} group by order_id, order_status, order_time, tipo_pago, numero, user_name, direccion, user_id ;`
	return query
}


exports.detailOrderQuery = detailOrderQuery
exports.sqlOrdersList = sqlOrdersList
exports.detailOrderQueryByUser = detailOrderQueryByUser