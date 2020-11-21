# Facemask-Detector-ZCU104

<img src="https://i.ibb.co/P5DR54T/camera-clip-art-black-and-white-14-1.png" width="500">

# Facemask-Detector-ZCU104

FPGA-based system that monitors facemask use through artificial intelligence, thermometer and facemask dispenser.

<p align="center">
<img src="https://i.ibb.co/mbgSBrs/New-Project-2.png" width="1000">
</p>

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
- ZCU104.                                x1.
https://www.xilinx.com/products/boards-and-kits/zcu104.html
- ESP32.
https://www.adafruit.com/product/3405
- DEVMO 8448 LCD.
https://www.amazon.com/dp/B07R55C8PV/ref=cm_sw_em_r_mt_dp_giyUFbRP14KMC
- MLX90614ESF Non-contact Infrared Temperature Sensor. x1.
https://www.amazon.com/dp/B071VF2RWM/ref=cm_sw_em_r_mt_dp_UgyUFbECN8FZT?_encoding=UTF8&psc=1
- Micro Digital Servo Motor. x1.
https://www.amazon.com/dp/B01M5LIKLQ/ref=cm_sw_em_r_mt_dp_4jyUFb74BZM780
- USB TP-Link USB Wifi Adapter TL-WN823N.            x1.
https://www.amazon.com/dp/B0088TKTY2/ref=cm_sw_em_r_mt_dp_.CyUFbCJWK6S3
- UGREEN USB Bluetooth 4.0 Adapter                   x1.
https://www.amazon.com/dp/B01LX6HISL/ref=cm_sw_em_r_mt_dp_U_iK-BEbFBQ76BW
- See3CAM_CU30 - 3.4 MP. (Included in the kit) x1.
https://www.e-consystems.com/ar0330-lowlight-usb-cameraboard.asp
- 16 GB MicroSD Card (Included in the kit).                                x1.
https://www.amazon.com/dp/B07CMW9ZQ6/ref=cm_sw_em_r_mt_dp_dNyUFbJQ1MAR5?_encoding=UTF8&psc=1
- 12-5A AC/DC Adapter Power Supply Jack Connector. (Included in the kit)  x1.
https://www.amazon.com/dp/B08764G7HT/ref=cm_sw_em_r_mt_dp_UKyUFbTW57FT4?_encoding=UTF8&psc=1
- Targus 4-Port USB 3.0 Hub (Included in the kit).                           x1.
https://www.amazon.com/dp/B00P937GQ4/ref=cm_sw_em_r_mt_dp_BIyUFbRTB52V3

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
