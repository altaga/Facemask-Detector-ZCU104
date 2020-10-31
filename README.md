# Facemask-Detector-ZCU104

Drowsines, blind spot and attention monitor for driving or handling heavy machinery. Also detects objects at the blind spot via Computer Vision powered by Pytorch and the Jetson Nano. And has a crash detection feature.

<img src="https://i.ibb.co/4mx4LPK/Logo.png" width="1000">

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

We will be tackling the problem of drowsiness when handling or performing tasks such as driving or handling heavy machinery and the blind spot when driving.

The Center for Disease Control and Prevention (CDC) says that 35% of American drivers sleep less than the recommended minimum of seven hours a day. It mainly affects attention when performing any task and in the long term, it can affect health permanently.

<img src="https://www.personalcarephysicians.com/wp-content/uploads/2017/04/sleep-chart.png" width="1000">

According to a report by the WHO (World Health Organization) (2), falling asleep while driving is one of the leading causes of traffic accidents. Up to 24% of accidents are caused by falling asleep, and according to the DMV USA (Department of Motor Vehicles) (3) and NHTSA (National Highway traffic safety administration) (4), 20% of accidents are related to drowsiness, being at the same level as accidents due to alcohol consumption with sometimes even worse consequences than those.

<img src="https://media2.giphy.com/media/PtrhzZJhbEBm8/giphy.gif" width="1000">

A su vez la NHTSA menciona que el hecho de estar enojado puede generar una conduccion mas peligrosa y agresiva (5), poniendo en peligro la vida del conductor debido a estas alteraciones psicologicas.

<img src="https://i.ibb.co/YcWYJNw/tenor-1.gif" width="1000">

# Solution:

We will create a system that will be able to detect a person's drowsiness level, this with the aim of notifying the user about his state and if he is able to drive.

At the same time it will measure the driver’s attention or capacity to garner attention and if he is falling asleep while driving. If it positively detects that state (that he is getting drowsy), a powerful alarm will sound with the objective of waking the driver.

<img src="https://i.gifer.com/origin/7d/7d5a3e577a7f66433c1782075595f4df_w200.gif" width="1000">

Additionally it will detect small vehicles and motorcycles in the automobile’s blind spots.

<img src="https://thumbsnap.com/s/Wy5w7JPR.jpg?1205" width="600">

In turn, the system will have an accelerometer to generate a call to the emergency services if the car had an accident to be able to attend the emergency quickly.

Debido a que un estado psicologico alterado podria generar una posible conduccion peligrosa, cuidamos el estado de el conductor mediante el analisis de emociones de su rostro y utilizando musica que al conductor le pueda genera una respuesta positiva.

<img src="https://i.ibb.co/xX4G7Yd/dondraper-car.gif" width="1000">

Current Solutions:

- Mercedes-Benz Attention Assist uses the car's engine control unit to monitor changes in steering and other driving habits and alerts the driver accordingly.

- Lexus placed a camera in the dashboard that tracks the driver's face, rather than the vehicle's behavior, and alerts the driver if his or her movements seem to indicate sleep.

- Volvo's Driver Alert Control is a lane-departure system that monitors and corrects the vehicle's position on the road, then alerts the driver if it detects any drifting between lanes.

- Saab uses two cameras in the cockpit to monitor the driver's eye movement and alerts the driver with a text message in the dash, followed by a stern audio message if he or she still seems sleepy.

As you can see these are all premium brands and there is not a single plug and play system that can work for every car. This, is our opportunity as most cars in the road are not on that price range and do not have these systems.

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

# Laptop Test:

To test the code on a computer, the first step will be to have a python environments manager, such as Python Anaconda.

https://www.anaconda.com/distribution/

## Environment Creation:

### Pytorch

First we will create a suitable enviroment for pytorch.

    conda create --name pytorch

To activate the enviroment run the following command:

    activate pytorch

In the case of Anaconda the PyTorch page has a small widget that allows you to customize the PyTorch installation code according to the operating system and the python environment manager, in my case the configuration is as follows.

https://pytorch.org/

<img src="https://i.ibb.co/6RMJp5F/image.png" width="800">

    conda install pytorch torchvision cudatoolkit=10.2 -c pytorch
    
### Dependencies
    
The other packages we need are the following:

    pip install opencv-python matplotlib tqdm python-vlc Pillow
    
Anyway we attach the file requirements.txt where all packages come in our environment.

### Jupyter Notebook

Inside the **Drowsiness**, **Emotion detection** and **YoloV3** folders, you will find a file "Notebook.ipynb" which contains the code to run the programs in jupyter notebook, however I attach in each folder a file called "notebook.py" with the code in format **. py **.

    conda install -c conda-forge notebook

Command to start jupyter notebook

    jupyter notebook

# Summary and mini demos:

All the demos that we are going to show are executed from a jupyter notebook and are focused on showing the functionality of the AI models, the demo with the hardware is shown at the end of the repository. [Demo](#epic-demo)

## Drowsiness Monitor:

La funcion de esta modelo es realizar una deteccion de distraccion o cerrado de ojos del conductor por mas de 2 segundos o esta distraido del camino (ejemplo, mirando el celular).

<img src="https://i.ibb.co/sQVStkj/Esquema-3.png" width="1000">

Details: https://github.com/altaga/DBSE-monitor/blob/master/Drowsiness

Video: Click on the image
[![Torch](https://i.ibb.co/4mx4LPK/Logo.png)](https://youtu.be/dircJ37T0fs)

## Driving Monitor:

La funcion de esta modelo es realizar una deteccion objetos que esten a menos de 3 metros del auto en el punto ciego.

<img src="https://i.ibb.co/Xpd9rs8/Esquema-2.png" width="1000">

Details: https://github.com/altaga/DBSE-monitor/blob/master/YoloV3

Video: Click on the image
[![Torch](https://i.ibb.co/4mx4LPK/Logo.png)](https://youtu.be/95eDav-Smks)

## Emotion Monitor:

La funcion de esta modelo es detectar las emociones del conductor en todo momento y mediante respuestas musicales (canciones) tratar de corregir el estado mental de el conductor con el fin de mantenerlo neutral o feliz.

<img src="https://i.ibb.co/dkfMKh7/Esquema-5.png" width="1000">

Details: https://github.com/altaga/DBSE-monitor/blob/master/Emotion%20detection

Video: Click on the image
[![Torch](https://i.ibb.co/4mx4LPK/Logo.png)](https://youtu.be/BWWdUta6gsY)

# Jetson Nano Setup:

The setup process to run everything on the jetson nano are in this folder:

https://github.com/altaga/DBSE-monitor/tree/master/Jetson

# Benchmark ZCU104, Jetson Nano and RPi4

Jetson:
<img src="https://i.ibb.co/gMt1QwH/image.png" width="800">

# The Final Product:

Product:

<img src="https://i.ibb.co/hK6Y0pM/68747470733a2f2f692e6962622e636f2f674a42346636522f32303230303231302d3231323731342e6a7067.jpg" width="800">
<img src="https://i.ibb.co/WFKx2DC/68747470733a2f2f692e6962622e636f2f393974436d74382f57686174732d4170702d496d6167652d323032302d30332d31.jpg" width="800">

Product installed inside the car:

<img src="https://i.ibb.co/yQgJGfk/Whats-App-Image-2020-03-16-at-14-03-07-1.jpg" width="800">
<img src="https://i.ibb.co/hXvWmbf/68747470733a2f2f692e6962622e636f2f364a356a5342352f57686174732d4170702d496d6167652d323032302d30332d31.jpg" width="800"> 

Notifications:

<img src="https://i.ibb.co/VNWzJ37/Screenshot-20200210-212306-Messages.jpg" width="600">

### Epic DEMO:

Video: Click on the image
[![Car](https://i.ibb.co/4mx4LPK/Logo.png)](https://youtu.be/rNhcBHKiGik)

Sorry github does not allow embed videos.

# Commentary:

I would consider the product finished as we only need a little of additional touches in the industrial engineering side of things for it to be a commercial product. Well and also a bit on the Electrical engineering perhaps to use only the components we need. That being said this functions as an upgrade from a project that a couple friends and myself are developing and It was ideal for me to use as a springboard and develop the idea much more. This one has the potential of becoming a commercially available option regarding Smart cities as the transition to autonomous or even smart vehicles will take a while in most cities.

That middle ground between the Analog, primarily mechanical-based private transports to a more "Smart" vehicle is a huge opportunity as the transition will take several years and most people are not able to afford it. Thank you for reading.

## References:

Links:

(1) https://medlineplus.gov/healthysleep.html

(2) http://www.euro.who.int/__data/assets/pdf_file/0008/114101/E84683.pdf

(3) https://dmv.ny.gov/press-release/press-release-03-09-2018

(4) https://www.nhtsa.gov/risky-driving/drowsy-driving

(5) https://www.nhtsa.gov/risky-driving/speeding

