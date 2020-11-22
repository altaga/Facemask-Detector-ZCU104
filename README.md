# Facemask-Detector-ZCU104

<img src="https://i.ibb.co/P5DR54T/camera-clip-art-black-and-white-14-1.png" width="500">

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
- Pynq:
http://www.pynq.io/
- DPU Pynq:
https://github.com/Xilinx/DPU-PYNQ
- TensorFlow:
https://www.tensorflow.org/
- Keras:
https://keras.io/
- OpenCV:
https://opencv.org/
- Arduino IDE:
https://www.arduino.cc/en/Main/Software
- Python:
https://www.python.org/

# Connection Diagram:

This is the connection diagram of the system:

<img src="https://i.ibb.co/QYms7S3/New-Project.png" width="1000">

ZCU104 Processing:

<img src="https://i.ibb.co/mRRqgQN/New-Project-1.png" width="1000">

# Project:

## Model:

Para poder resolver este problema de la deteccion del uso de cubre bocas es necesario realizar una CCN (convolutional neural network) la cual sea capaz de idetificar en una imagen de un rostro humano si esta usando un cubrebocas o no.

##  Train Dataset:

Para entrenar una CCN como sabemos es necesario utilizar un gran numero de imaganes, las cuales le serviran a las convoluciones como ejemplos para poder filtrar correctamente las cacarteristicas de las imaganes y con eso poder dar un resultado.

<img src="https://i.ibb.co/vmDXmD5/image.png" width="1000">

En esta caso como dataset utilice 1916 imaganes positivas y 1930 imaganes negativas.

https://www.kaggle.com/altaga/facemaskdataset
https://github.com/altaga/Facemask-Detector-ZCU104/tree/main/facemask-dataset

Te invito a revisar el dataset para comprobar las imaganes por ti mismo, la estructura de las capetas es:

- Dataset
    - Yes
        - IMG#
        - IMG#
    - No
        - IMG#
        - IMG#

La clasificacion que buscamos lograr con esta CNN es la siguiente.

<img src="https://i.ibb.co/w0snJyG/yes-77-1.png" height="400">
<img src="https://i.ibb.co/qsb4L8v/yes-77.png" height="400">

## Train Environment Setup:

Para realizar el entrenamiento de la red neuronal correctamente es necesario utilizar el environment que nos ofrece Xilinx para AI adaptado a modelos enfocados para DPU el cual se ejecuta en Ubuntu 18.04.3.

http://old-releases.ubuntu.com/releases/18.04.3/

NOTA: SOLO EN ESTA VERSION DE UBUNTU ES COMPATIBLE EL ENVIROMENT, UNA VEZ INSTALES LA MAQUINA VIRTUAL NO ACTUALICES NADA, YA QUE NO PODRAS USAR EL ENVIROMENT Y TENDRAS QUE INSTALAR TODO DENUEVO.

<img src="https://i.ibb.co/pnjvwMm/image.png" width="1000">

En mi caso yo utilizo una maquina con Windows 10, asi que para relizar el entranamiento tuve que utiliza una maquina virtual en VMware.

https://www.vmware.com/mx.html

Dentro de las opciones para instalar el environment hay una opcion para utilizar el GPU y otra CPU, ya que utilizo la maquina virtual yo usare la instalacion de CPU.

https://github.com/Xilinx/Vitis-AI

Abre el terminal de linux y escribe los siguientes comandos.

En la carpeta Scripts ya les deje archivos .sh con los cuales podran instalar facilmente todos los archivos necesarios.

1. Instalando docker (1 - 2 minutes) si ya tienes Docker pasa a Script 2.

        sudo bash install_docker.sh

2. Instalando el environment (10 - 20 minutes).

        sudo bash install_vitis.sh

3. Start CPU env.

        cd ./docker

        ./docker_build_cpu.sh

En el [Appendix A](#appendix-a) les dejo el contenido de los Scipts.

## Train the model:



## Board Setup:

La configuracion de la board es muy sencilla, en primer lugar tendras que descargar el sistema operativo PYNQ.

http://bit.ly/zcu104_v2_6

Una vez tengas este sistema operativo flash, el sistema operativo con algun programa como Balena Etcher en la SD incluida en el Kit, recomiendo una memoria de almenos 16Gb.

https://www.balena.io/etcher/

<img src="https://i.ibb.co/VjR44R3/image.png" width="600">

Ahora antes de conectar la SD en la Board, conectarla y encederla. Revisa los switches arriba de la board que esten en la siguiente posicion. Esto habilitara el boot desde SD.

<img src="https://i.ibb.co/5F6YFp9/20201121-230416.jpg" width="600">

Pasos a Seguir la encender la board por primera vez:

<img src="https://pynq.readthedocs.io/en/v2.5.1/_images/zcu104_setup.png" width="600">

Connect the 12V power cable. Note that the connector is keyed and can only be connected in one way.

Insert the Micro SD card loaded with the appropriate PYNQ image into the MicroSD card slot underneath the board

Connect the Ethernet port to your PC.

- You will have to assign a static IP to your ethernet connection to have access to the board, follow the instructions of the following link to the official documentation.

- https://pynq.readthedocs.io/en/v2.5.1/appendix.html#assign-your-computer-a-static-ip

Turn on the board and check the boot sequence.

Una vez termine el boot de la board, desde tu navegador entra a la siguiente direccion IP para tener acceso un portal con Jupyer Notebook.

http://192.168.2.99

User:xilinx
Password:xilinx

## Test Pynq:



## Test Model:



## Comparison Benchmarks:



## Creating the code for the final product:



## Extra Hardware Development:



## Display:



## Temperature:



## FaceMask Dispenser:



# The Final Product:



## Epic DEMO:

Video: Click on the image
[![Facemask](https://i.ibb.co/P5DR54T/camera-clip-art-black-and-white-14-1.png)](PENDING)

Sorry github does not allow embed videos.

# Commentary:



## References:

Links:

(1) https://medlineplus.gov/healthysleep.html

(2) http://www.euro.who.int/__data/assets/pdf_file/0008/114101/E84683.pdf

(3) https://dmv.ny.gov/press-release/press-release-03-09-2018

(4) https://www.nhtsa.gov/risky-driving/drowsy-driving

(5) https://www.nhtsa.gov/risky-driving/speeding


# APPENDIX A:

## install_docker.sh

    #!/bin/sh
    sudo apt-get remove docker docker-engine docker.io containerd runc -y
    sudo apt-get update
    sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common -y
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
    sudo apt-key fingerprint 0EBFCD88
    sudo add-apt-repository \
    "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
    $(lsb_release -cs) \
    stable"
    sudo apt-get update
    sudo apt-get install docker-ce docker-ce-cli containerd.io -y
    sudo groupadd docker
    sudo usermod -aG docker $USER
    docker run hello-world

## install_vitis.sh

    #!/bin/sh
    git clone --recurse-submodules https://github.com/Xilinx/Vitis-AI
    cd Vitis-AI
    docker pull xilinx/vitis-ai:latest
    cd     
