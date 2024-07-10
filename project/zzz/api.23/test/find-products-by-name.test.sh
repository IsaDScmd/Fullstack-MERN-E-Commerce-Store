echo TEST "find-products-by-name"

echo CASE "success on correct find -goji-"

curl 'http://localhost:9000/products/search/by-name?query=goji' \
-v

# TEST find-products-by-name
# CASE success on correct
# * processing: http://localhost:9000/products/search/by-name?query=goji
# *   Trying [::1]:9000...
# * Connected to localhost (::1) port 9000
# > GET /products/search/by-name?query=goji HTTP/1.1
# > Host: localhost:9000
# > User-Agent: curl/8.2.1
# > Accept: */*
# > 
# < HTTP/1.1 200 OK
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 1199
# < ETag: W/"4af-oBH1Bcz+rzmeRZz40ztR/xzYQ54"
# < Date: Sat, 01 Jun 2024 15:52:52 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < 
# [{"id":"65e705d03d5df7fd44a68e71","name":"Extracto de Bayas de Goji","description":"La baya de Goji se conoce por sus propiedades antioxidantes y antienvejecimiento. Es rico en una serie de sustancias naturales como: minerales esenciales y oligoelementos (por ejemplo: calcio, potasio, hierro, zinc, selenio...), vitaminas (vitamina C, A, E, B1, B2 y B6), 18 aminoácidos, Ácidos grasos insaturados (ácido linoleico y alfa-linolénico), beta-sitosterol y otros fitoesteroles, carotenos (betacaroteno, zeaxantina, luteína, licopeno y criptoxantina), carbohidratos (galactosa, glucosa, ramnosa, arabinosa, manosa, xilosa), ácido galacturónico, monosacáridos, glicoconjugados y otras. Sobre todo su contenido de vitamina C y de antioxidantes en general es extraordinario. La escala ORAC (Oxygen Radical Absorbance Capacity) es un sistema de puntuación que mide el poder antioxidante de los alimentos o sea la capacidad de absorción de radicales de oxigeno. En esta escala la fruta de goji muestra un indice de 25.300 - en comparación el valor de la naranja es de 750.","price":7.5,"type":"RawMaterial","image":"https://www.cremas-caseras.es/6980-medium_default/extracto-de-bayas-de-goji.jpg"}]


echo CASE "success on correct find -mosqueta-"

curl 'http://localhost:9000/products/search/by-name?query=mosqueta' \
-v

# CASE success on correct find -mosqueta-
# * processing: http://localhost:9000/products/search/by-name?query=mosqueta
# *   Trying [::1]:9000...
# * Connected to localhost (::1) port 9000
# > GET /products/search/by-name?query=mosqueta HTTP/1.1
# > Host: localhost:9000
# > User-Agent: curl/8.2.1
# > Accept: */*
# >
# < HTTP/1.1 200 OK
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 1208
# < ETag: W/"4b8-QbXg+PIHV2w1TYZgJEkl6nJqpGw"
# < Date: Sat, 01 Jun 2024 15:55:22 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# <
# [{"id":"65e7071ee2e93c526809e1b3","name":"Aceite de rosa mosqueta","description":"El aceite de rosa mosqueta es altamente recomendable para tratar todo tipo de pieles secas, apagadas, con arrugas o que hayan sido dañadas por el sol. Se trata de un aceite vegetal extraído directamente de un arbusto silvestre perteneciente a la familia de las rosas, con múltiples propiedades tanto para la medicina convencional como para la estética. Su composición se caracteriza por disponer de múltiples ácidos grasos esenciales, antioxidantes y vitaminas. Realmente eficaz para realizar masajes, llevar a cabo un tratamiento anti – estrías y potenciar la cicatrización de heridas, también se muestra muy recomendable para pieles inflamadas por culpa del acné, aumentando la actividad de los fibrolastos y la firmeza de la piel, o para cuidar cabellos que hayan sido dañados. Es una de las mejores aliadas para combatir la aparición de arrugas y de los primeros signos de envejecimiento. Es muy interesante en masaje facial, contorno de ojos, y alrededor de los labios.","price":6.81,"type":"RawMaterial","image":"https://www.cremas-caseras.es/6412-medium_default/aceite-de-rosa-mosqueta-virgen-bio-.jpg"}]