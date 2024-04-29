echo TEST "retrieve-products-by-id"

echo CASE "success on correct"

curl 'http://localhost:9000/product/65e8683deadcfb1397d77890' \
-v


# TEST retrieve-products-by-id
# CASE success on correct
# * processing: http://localhost:9000/product/65e8683deadcfb1397d77890
# *   Trying [::1]:9000...
# * Connected to localhost (::1) port 9000
# > GET /product/65e8683deadcfb1397d77890 HTTP/1.1
# > Host: localhost:9000
# > User-Agent: curl/8.2.1
# > Accept: */*
# > 
# < HTTP/1.1 200 OK
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 995
# < ETag: W/"3e3-/nhugs2d9Tblp5AtUhMYSvRHuAI"
# < Date: Mon, 29 Apr 2024 11:04:43 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < 
# {"_id":"65e8683deadcfb1397d77890","name":"Envase tubo de cartón stick labial","description":"Envase para crear barras de labios de color y bálsamo labial ¡sin plásticos! El envase al ser de cartón es fácilmente reciclable y permite crear un producto acabado totalmente sostenible. El envase es cilíndrico y con forma de tubo. Fácil de usar, se compone de la base y una tapadera, al igual que un stick labial convencional. Se debe tener en cuenta que el sistema que utiliza es push up, por lo que no incorpora ningún elemento giratorio, pulsando en la parte de abajo de la base se puede hacer uso del producto acabado. Se aconseja durante el envasado tener mucha precaución a la hora de tocar el envase con las manos manchadas o con algún producto graso ya que quedará manchado. El envase admite hasta 12 ml, utilizando la base hasta su tope.","image":"https://hellokitchen.com.au/wp-content/uploads/2021/09/C320800.jpg","price":4.91,"type":"Packings","id":"65e8683deadcfb1397d77890"}*