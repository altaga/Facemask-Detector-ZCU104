# Facemask-Detector-ZCU104

FPGA-based system that monitors facemask use through artificial intelligence, thermometer and facemask dispenser.

<img src="https://i.ibb.co/mbgSBrs/New-Project-2.png" width="1000">

# Table of contents

* [Introduction](#introduction)
* [Solution](#solution)
* [Materials](#materials)
* [Connection Diagram](#connection-diagram)
* [Laptop Test](#laptop-test)
* [Summary and mini demos](#summary-and-mini-demos)
* [Jetson Setup](#jetson-setup)
* [The Final Product](#the-final-product)
* [Commentary](#commentary)
* [References](#references)

# Introduction:

El COVID-19 ha cambiado nuestro dia a dia y continúa haciéndolo. Muchos negocios y empresas han quebrado ya que al cerrar, no han podido ofrecer sus servicios a sus clientes, sin embargo algunos otros han optado por la reapertura de sus comercios a su vez tambien han abierto los institutos públicos como museos, bibliotecas, etc. Todos estos establecimientos han tomando sus medidas de precaucion, generando nuevas normativas, tales como obligar a los clientes y / o visitantes a usar máscaras faciales en todo momento [1].

<img src="https://i.ibb.co/8xsD8DZ/image.png" width="1000">

Ante esta nueva normativa los negocios han tenido que generar un puesto de empleo para que un trabajador revise el uso del cubrebocas y revise la temperatura de los clientes antes de entrar al establecimiento, arriesgando no solo al trabajador que esta checando la temperatura de los clientes, sino a los clientes mismos que entran al lugar. 

1. https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/when-and-how-to-use-masks?gclid=Cj0KCQjwlvT8BRDeARIsAACRFiX_NyUiqU0d44aUqMNK7LVrXMOQWMfqr0MUUo8TKrJLpObf91qRUcUaAjKbEALw_wcB

# Problem:

Este puesto de trabajo genera un costo anual por trabajador de almenos $30,000 [1] y si ese empleado llegara a enfermarse de covid-19 por ley en estados unidos tendrian que pagarle almenos $511 al dia [2].

Este costo por un empleado que realiza una tarea repetitiva es excesivo pero necesario, debido a que las soluciones actualmente creadas aun no son suficientes para sustituir este puesto.

- SecurOS™ Face Mask Detection - https://issivs.com/facemask/
    - Solo deteccion de uso de cubrebocas, sin medicion de temperatura, ni control de accesos.
- SecurOS™ Face Mask Detection - https://issivs.com/facemask/
    - Solo deteccion de uso de cubrebocas, sin medicion de temperatura, ni control de accesos.
- SecurOS™ Face Mask Detection - https://issivs.com/facemask/
    - Solo deteccion de uso de cubrebocas, sin medicion de temperatura, ni control de accesos.
- SecurOS™ Face Mask Detection - https://issivs.com/facemask/
    - Solo deteccion de uso de cubrebocas, sin medicion de temperatura, ni control de accesos.

1. https://www.ziprecruiter.com/Salaries/Retail-Security-Officer-Salary
2. https://www.dol.gov/sites/dolgov/files/WHD/posters/FFCRA_Poster_WH1422_Non-Federal.pdf

# Solution:

<img src="IMAGEURL" width="1000">

# Materials:

Hardware:
- NVIDIA Jetson Nano.                                x1.
https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/jetson-nano/
- Power Inverter for car.
https://www.amazon.com/s?k=power+inverter+truper&ref=nb_sb_noss_2
- ESP32.
https://www.adafruit.com/product/3405
- OLED display.
https://www.amazon.com/dp/B072Q2X2LL/ref=cm_sw_em_r_mt_dp_U_TMGqEb9YAGJ5Q
- Any Bluetooth Speaker or Bluetooth Audio Car System. x1.
https://www.amazon.com/s?k=speaker&s=price-asc-rank&page=2&qid=1581202023&ref=sr_pg_2
- USB TP-Link USB Wifi Adapter TL-WN725N.            x1.
https://www.amazon.com/dp/B008IFXQFU/ref=cm_sw_em_r_mt_dp_U_jNukEbCWXT0E4
- UGREEN USB Bluetooth 4.0 Adapter                   x1.
https://www.amazon.com/dp/B01LX6HISL/ref=cm_sw_em_r_mt_dp_U_iK-BEbFBQ76BW
- HD webcam                      .                   x1.
https://canyon.eu/product/cne-cwc2/
- 32 GB MicroSD Card.                                x1.
https://www.amazon.com/dp/B06XWN9Q99/ref=cm_sw_em_r_mt_dp_U_XTllEbK0VKMAZ
- 5V-4A AC/DC Adapter Power Supply Jack Connector.   x1.
https://www.amazon.com/dp/B0194B80NY/ref=cm_sw_em_r_mt_dp_U_ISukEbJN7ABK3
- VMA204.                                            x1.
https://www.velleman.eu/products/view?id=435512

Software:
- Pytorch:
https://pytorch.org/
- JetPack 4.3:
https://developer.nvidia.com/jetson-nano-sd-card-image-r3231
- YOLOv3:
https://pjreddie.com/darknet/yolo/
- OpenCV:
https://opencv.org/
- Twilio:
https://www.twilio.com/
- Arduino IDE:
https://www.arduino.cc/en/Main/Software
- Mosquitto MQTT:
https://mosquitto.org/

# Connection Diagram:

This is the connection diagram of the system:

<img src="https://i.ibb.co/Bqq3p6b/Esquema.png" width="1000">

# Proyect:



# The Final Product:



### Epic DEMO:

Video: Click on the image
[![Car](https://i.ibb.co/4mx4LPK/Logo.png)](https://youtu.be/rNhcBHKiGik)

Sorry github does not allow embed videos.

# Commentary:



## References:

Links:

(1) https://medlineplus.gov/healthysleep.html

(2) http://www.euro.who.int/__data/assets/pdf_file/0008/114101/E84683.pdf

(3) https://dmv.ny.gov/press-release/press-release-03-09-2018

(4) https://www.nhtsa.gov/risky-driving/drowsy-driving

(5) https://www.nhtsa.gov/risky-driving/speeding
