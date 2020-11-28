# **Facemask-Detector-ZCU104**

FPGA-based system that monitors facemask use through artificial intelligence, thermometer and facemask dispenser.

<img src="https://i.ibb.co/P5DR54T/camera-clip-art-black-and-white-14-1.png" width="500">

# **Welcome**

<img src="https://i.ibb.co/mbgSBrs/New-Project-2.png" width="1000">

# **Table of contents**

- [**Facemask-Detector-ZCU104**](#facemask-detector-zcu104)
- [**Welcome**](#welcome)
- [**Table of contents**](#table-of-contents)
- [**Introduction**](#introduction)
- [**Problem**](#problem)
- [**Solution**](#solution)
- [**Materials**](#materials)
- [**Connection Diagram**](#connection-diagram)
- [**Project:**](#project)
  - [**Model**](#model)
  - [**Training Dataset**](#training-dataset)
  - [**Train Environment Setup**](#train-environment-setup)
  - [**Train the model**](#train-the-model)
  - [**Board Setup**](#board-setup)
  - [**Test Pynq**](#test-pynq)
  - [**Test Model**](#test-model)
  - [**Comparison Benchmarks:**](#comparison-benchmarks)
    - [**Algorithm**](#algorithm)
    - [**Boards tested**](#boards-tested)
    - [**Benchmark table**](#benchmark-table)
    - [**Comparison chart**](#comparison-chart)
  - [**Extra Hardware Development:**](#extra-hardware-development)
    - [**Display**](#display)
    - [**FaceMask Dispenser**](#facemask-dispenser)
    - [**Temperature**](#temperature)
  - [**Extra Software Development**](#extra-software-development)
    - [**App installed from APK**:](#app-installed-from-apk)
    - [**Screenshots and App running**:](#screenshots-and-app-running)
  - [**Final Code**](#final-code)
- [**Final Product**](#final-product)
- [**Epic DEMO**](#epic-demo)
- [**Commentary and Future Rollout**](#commentary-and-future-rollout)
- [**References**](#references)
- [**APPENDIX A**](#appendix-a)

# **Introduction**

El COVID-19 ha cambiado nuestro dia a dia y continúa haciéndolo. Muchos negocios y empresas han quebrado ya que al cerrar, no han podido ofrecer sus servicios a sus clientes, sin embargo algunos otros han optado por la reapertura de sus comercios a su vez tambien han abierto los institutos públicos como museos, bibliotecas, etc. Todos estos establecimientos han tomando sus medidas de precaucion, generando nuevas normativas, tales como obligar a los clientes y / o visitantes a usar máscaras faciales en todo momento [1](#1).

<img src="https://i.ibb.co/8xsD8DZ/image.png" width="1000">

Ante esta nueva normativa los negocios han tenido que generar un puesto de empleo para que un trabajador revise el uso del cubrebocas y revise la temperatura de los clientes antes de entrar al establecimiento, arriesgando no solo al trabajador que esta checando la temperatura de los clientes, sino a los clientes mismos que entran al lugar. 

1. https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/when-and-how-to-use-masks?gclid=Cj0KCQjwlvT8BRDeARIsAACRFiX_NyUiqU0d44aUqMNK7LVrXMOQWMfqr0MUUo8TKrJLpObf91qRUcUaAjKbEALw_wcB

# **Problem**

Este puesto de trabajo genera un costo anual por trabajador de almenos $30,000 [1] y si ese empleado llegara a enfermarse de covid-19 por ley en estados unidos tendrian que pagarle almenos $511 al dia [2].

Este costo por un empleado que realiza una tarea repetitiva es excesivo pero necesario, debido a que las soluciones actualmente creadas aun no son suficientes para sustituir este puesto.

- The Xovis all-in-one solution - https://www.xovis.com/en/products/detail/face-mask-detection/
    - Solo deteccion de uso de cubrebocas, sin medicion de temperatura, ni control de accesos.
- SecurOS™ Face Mask Detection - https://issivs.com/facemask/
    - Solo deteccion de uso de cubrebocas, sin medicion de temperatura, ni control de accesos.
- Leewayhertz - https://www.leewayhertz.com/face-mask-detection-system/
    - Solo deteccion de uso de cubrebocas, sin medicion de temperatura, ni control de accesos.

La mayoria de los devices en el mercado estan solo detectando el uso del cubrebocas, sin embargo este proyecto busca genera una solucion completa para el control de accesos.

1. https://www.ziprecruiter.com/Salaries/Retail-Security-Officer-Salary
2. https://www.dol.gov/sites/dolgov/files/WHD/posters/FFCRA_Poster_WH1422_Non-Federal.pdf

# **Solution**

<img src="IMAGEURL" width="1000">

# **Materials**

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

# **Connection Diagram**

This is the connection diagram of the system:

<img src="https://i.ibb.co/QYms7S3/New-Project.png" width="1000">

ZCU104 Processing:

<img src="https://i.ibb.co/mRRqgQN/New-Project-1.png" width="1000">

# **Project:**

## **Model**

Para poder resolver este problema de la deteccion del uso de cubre bocas es necesario realizar una CCN (convolutional neural network) la cual sea capaz de idetificar en una imagen de un rostro humano si esta usando un cubrebocas o no.

<img src="https://i.ibb.co/WF6Q64G/image-2.png" width="1000">

Para entrenar una CCN como sabemos es necesario utilizar un gran numero de imaganes, las cuales le serviran a las convoluciones como ejemplos para poder filtrar correctamente las cacarteristicas de las imaganes y con eso poder dar un resultado.

## **Training Dataset**

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

<img src="https://i.postimg.cc/rwGqVQzM/image.png" width="1000">

## **Train Environment Setup**

Para realizar el entrenamiento de la red neuronal correctamente es necesario utilizar el environment que nos ofrece Xilinx para AI adaptado a modelos enfocados para DPU el cual se ejecuta en Ubuntu 18.04.3.

http://old-releases.ubuntu.com/releases/18.04.3/

NOTA: SOLO EN ESTA VERSION DE UBUNTU ES COMPATIBLE EL ENVIROMENT, UNA VEZ INSTALES LA MAQUINA VIRTUAL NO ACTUALICES NADA, YA QUE NO PODRAS USAR EL ENVIROMENT Y TENDRAS QUE INSTALAR TODO DENUEVO.

<img src="https://i.ibb.co/pnjvwMm/image.png" width="1000">

En mi caso yo utilizo una maquina con Windows 10, asi que para relizar el entranamiento tuve que utiliza una maquina virtual en VMware.

https://www.vmware.com/mx.html

Dentro de las opciones para instalar el environment hay una opcion para utilizar el GPU y otra CPU, ya que utilizo la maquina virtual yo usare la instalacion de CPU.

https://github.com/Xilinx/Vitis-AI

Abre el terminal de linux y escribe los siguientes comandos.

En la carpeta Scripts ya les deje archivos .sh con los cuales podran instalar facilmente todos los archivos necesarios, estos archivos deben de estar en la carpeta de /home para que funcionen correctamente.

1. Instalando docker (1 - 2 minutes) si ya tienes Docker pasa a Script 2.

        sudo bash install_docker.sh

2. Instalando el environment (10 - 20 minutes).

        sudo bash install_vitis.sh

NOTA: instala solo uno de los siguientes ENV segun tu preferencia.

3. Instalando el environment CPU (20 - 30 minutes).

        sudo bash install_cpu.sh 

3. Instalando el environment GPU (20 - 30 minutes).

        sudo bash install_gpu.sh
        
4. Start base Env.

        sudo bash run_env.sh

5. Start Vitis-AI-TensorFlow

        conda activate vitis-ai-tensorflow

6. Run this command once (IMPORTANT).
        yes | pip install matplotlib keras==2.2.5


<img src="https://i.postimg.cc/rmh0JF9z/image.png" width="1000">

Si todo lo hiciste bien, deberias de ver una consola como esta.

En el [Appendix A](#appendix-a) les dejo el contenido de los Scipts.

## **Train the model**

Para realizar el entrenamiento, copia todos los archivos dentro de la carpeta de repositorio "Setup Notebook and Dataset" a la capeta Vitis-AI para el correcto funcionamiento del codigo.

Justo como se ve en la imagen.

<img src="https://i.postimg.cc/yNjXMKPC/image.png" width="1000">

Ahora en la consola de comandos ejecutaremos el siguiente comando para abrir Jupyter Notebooks.

    jupyter notebook --allow-root

<img src="https://i.postimg.cc/WbVhVF1R/image.png" width="1000">

Abre el navegador y pega la liga que te aparecio en el terminal y abre el archivo.

<img src="https://i.postimg.cc/kg4MMxrH/image.png" width="1000">

Una vez abierto el codigo en la pestaña de Kernel ejecuta todo como se muestra en la imagen.

<img src="https://i.postimg.cc/GpdQshQ6/image.png" width="1000">

Todo el codigo esta explicado a detalle, para profundizar en el porfavor revisarlo.

https://github.com/altaga/Facemask-Detector-ZCU104/blob/main/Setup%20Notebook%20and%20Dataset/train_facemask_model.ipynb

Al final de la ejecucion si todo funciono bien deberemos de ver el siguiente resultado.

<img src="https://i.postimg.cc/Xqxw6wF8/image.png" width="1000">

De este proceso obtendremos un archivo llamado "dpu_face_binary_classifier_0.elf".

Este archivo tiene guardado el modelo que usaremos mas adelante y que ya se los proprocione en la carpeta "Main Notebook".

## **Board Setup**

La configuracion de la board es muy sencilla, en primer lugar tendras que descargar el sistema operativo PYNQ.

http://bit.ly/zcu104_v2_6

Una vez tengas este sistema operativo flash, el sistema operativo con algun programa como Balena Etcher en la SD incluida en el Kit, recomiendo una memoria de almenos 16Gb.

https://www.balena.io/etcher/

<img src="https://i.ibb.co/VjR44R3/image.png" width="1000">

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

## **Test Pynq**

Primero haremos una pequeña prueba para ver su el sistema operativo esta funcionando correctamente, vamos a setear el WiFi, esto ademas de indicarnos que instalamos correctamente el OS nos servira para descargar las librerias faltantes para nuestro proyecto.

<img src="https://i.ibb.co/wWL7zb3/image.png" width="1000">

NOTA: Como indicamos en materiales necesitan una tarjeta usb wifi externa para hacer funcionar el internet.

<img src="https://i.ibb.co/4mbGVmX/image.png" width="1000">

Si todo funciona bien obtendremos de la linea de ping la siguiente respuesta.

<img src="https://i.ibb.co/ZTzbSdF/image.png" width="1000">

Ahora instalaremos las librerias flatantes para hacer funcionar el DPU en la ZCU104. Vamos a abrir una terminal de comandos como se muestra en la imagen.

<img src="https://i.ibb.co/gj2NBS8/image.png" width="1000">

Desde la terminal tenemos que escribir el siguiente comando, puedes copiar y pegarlo todo a la vez.

    git clone --recursive --shallow-submodules https://github.com/Xilinx/DPU-PYNQ \
    && cd DPU-PYNQ/upgrade \
    && make \
    && pip3 install pynq-dpu \
    && cd $PYNQ_JUPYTER_NOTEBOOKS \
    && pynq get-notebooks pynq-dpu -p . 

<img src="https://i.ibb.co/2NMqD34/image.png" width="1000">

Este proceso puede tomar algo de tiempo segun tu conexion a internet.

## **Test Model**

Para testear el modelo tenemos que bajar la capeta de github a nuestra board con el siguiente comando.

    git clone https://github.com/altaga/Facemask-Detector-ZCU104

Si prefieres tambien puedes pasar solo los archivos de la carpeta "Test Notebook" y "Main Notebook" a la board.

Dentro de la carpeta Test Notebook, entraremos al archivo "Facemask-ZCU104.ipynb".

Todo el codigo esta explicado a detalle, para profundizar en el porfavor revisarlo.

Al correr todo vemos una imagen como esta, significa que todo ha funcionado correctamente.

<img src="https://i.ibb.co/ZLHmLq4/image.png" width="600">

## **Comparison Benchmarks:**

Para este concurso crei importante demostrar la superioridad de las FPGA ante HW convencional y HW dedicado AI, al momento de realizar procesamiento en redes neuronales, asi que adapte el codigo de mi modelo para correr en 2 HW que cualquiera podria tener como desarrollador.

### **Algorithm**

Debido a que todos los codigos contienen desplegado de el resultado en pantalla, lo cual quita mucho tiempo, el calculo de los FPS se realizo con el siguiente algoritmo.

![FPS](https://i.ibb.co/qkTRsj7/FPS.png)

### **Boards tested**

- RPi4 with 4gb:
    - Tensor Flow Lite Model.
    - Tensor Flow Lite Optimized Model.
- Jetson Nano 4gb:
    - Tensor Flow Model MAX Consumption Mode.
    - Tensor Flow Model 5W Consumption Mode.
- ZCU104:
    - Vitis AI - Keras optimized Model.

### **Benchmark table**

| Board       | Model                    | Mode      | FPS |
|  :--------: | :----------------------: | :-------: | :-: |
| Rpi 4 - 4gb | TfLite                   | Standard  | 55  |
| Rpi 4 - 4gb | TfLite Optimized         | Standard  | 47  |
| Jetson Nano | Tf Model                 | Max       | 90  |
| Jetson Nano | TfLite                   | 5W        | 41  |
| ZCU104      | Vitis AI <br /> Optimized Model | Standard  | 400 |

### **Comparison chart**

<br />
<kbd>
<img src="https://i.ibb.co/yWxNvS6/Final-Benchmark.png" width="1000" />
</kbd>

Para mas detalles entrar en la carpeta, dentro de cada carpeta estan los codigos para entrenar y ejecutar el modelo ademas de evidencia en video y fotografica de como funciona en tiempo real.

https://github.com/altaga/Facemask-Detector-ZCU104/tree/main/Benchmarks%20Notebooks

## **Extra Hardware Development:**

Para realizar la medicion de la temperatura de las personas y el dispensador de Facemask realice el siguiente circuito con un ESP32.

<kbd>
<img src="https://i.ibb.co/GPxyQNC/Untitled-Sketch-bb.png" width="1000" />
</kbd>

Todo el control de este device se hizo a travez de BLE, con el fin de utilizar la menor cantidad de bateria del dispositivo.

### **Display**

El display tiene la funcion de mostrar diferentes mensajes, segun el resultado de la lectura de la ZCU104 y el sensor de temperatura.

Pagina para convertir imagenes a imgenes desplegables en la pantalla, las imaganes tienen que ser hechas casi a mano como PIXELART para poder desplegarlas bien y que se vean bien:

https://sparks.gogo.co.nz/pcd8554-bmp.html

Descripcion:

Mientras no se este realizando una lectura, obtendremos el siguiente mensaje.

<img src="https://i.ibb.co/QJzTX9N/Untitledg.png" width="300" />

Si la persona no tiene un cubre bocas, mostraremos este mensaje.

<img src="https://i.ibb.co/RQFsM7y/sam.png" width="300" />

Antes de tomar la temperatura se desplegara esta imagen para que el cliente acerque su mano al sensor.

<img src="https://i.ibb.co/Ny5CR8N/temp.png" width="300" />

Si la persona trae cubrebocas pero su temperatura es muy alta.

<img src="https://i.ibb.co/G3PzXqN/Dontpass.png" width="300" />

Si la persona tiene su su cubrebocas y su temperatura es normal.

<img src="https://i.ibb.co/LdFdJZ3/wel.png" width="300" />

Aqui un ejemplo ya en la pantalla.

<img src="GIF DE EJEMPLO" width="300" />

### **FaceMask Dispenser**

Si la lectura de la ZCU104 indica que la persona no trae cubrebocas, el servomotor, ofrecera uno al cliente para que el cliente pueda pasar a la etapa de medicion de la temperatura.

<img src="GIF DE LA CAJA DANDO UNO" width="300" />

### **Temperature**

Cuando la ZCU104 indique que la persona esta usando cubrebocas se le tomara la temperatura de la mano.

<img src="https://i.stack.imgur.com/HK7op.gif" width="1000" />

Para realizar el calculo de la temperatura real del cuerpo se realizo una regresion lineal multivariable para obtener una ecuacion que nos relacionara la temperatura del dorso de la mano, la temperatura ambiente, para obtener la temperatura real interna del cuerpo.

<img src="https://i.ibb.co/Rgm108g/image.png" width="1000">

En este caso tomaremos como temperatura de refrencia maxima la sugerida por la CDC [1] que es de 100.4 °F. En el caso de que la temperatura sea mayor a 100.4 °F no podremos dejar que la persona pase al establecimiento.

<img src="GIF DE LA MEDICION" width="300" />

1. https://www.cdc.gov/coronavirus/2019-ncov/downloads/COVID-19_CAREKit_ENG.pdf
2. http://manuals.serverscheck.com/EST-Difference_between_core_and_skin_temperature.pdf

## **Extra Software Development**

A su vez que tenemos un dispositivo que es autonomo en su tarea, debemos de tener una forma de visualizar lo que esta viendo el dispositivo de manera remota, asi que se creo una sencilla aplicacion basada en el framework de React Native para esta tarea.

Features:
- Comunicacion basada en MQTT.
- Capacidad de guardar imaganes con un boton.
- Capacidad de visualizar la IP y puerto del servidor.
- Capacidad de poder cambiar entre dispositivos en el caso de que el establecimiento tenga multiples entradas.
- Plug and Play.

### **App installed from APK**:
<img src="https://i.ibb.co/Pr908P0/Screenshot-20201128-014246-com.png" height="500" />

(Smartphone: Huawei Y6P).

### **Screenshots and App running**:
<img src="https://i.ibb.co/C7s00Qg/20201128-014028.jpg" height="350" />
<img src="https://i.ibb.co/qrzYvbv/Screenshot-20201128-014000-com-monitormqtt.jpg" height="350" />
<img src="https://i.ibb.co/jR7wbH4/image1606549108735.jpg" height="350" />

(Smartphone: Huawei Y6P).

Puede instalar la APK la cual esta en la carpeta "MonitorMqtt-APK" o construirla usted mismo, todo el codigo fuente de la app esta en la carpeta "MonitorMqtt", recuerde que utilizamos el framework React Native.

Si tu celular tiene habilitado el modo USB debugger, puedes instalar la app desde tu pc con el siguiente comando estando en la capeta "MonitorMqtt-APK".

    adb install App.apk

<img src="https://i.ibb.co/VNn3hQC/ezgif-com-gif-maker.gif" height="500" />

## **Final Code**

Ya en este momento tenemos un dispositivo BLE con el cual nos podemos comunicar de forma inalambrica. 

Una vez la ZCU104 obtenga almenos 3 leturas correctas, mandaremos la señal al ESP32 que pase a la fase de toma de temperatura, una vez el cliente pase esta fase, se le permitira la entrada al establecimiento.

<img src="https://i.ibb.co/Kwy9v34/olovrgo-1.png" width="1000" />

El codigo en la la carpeta "Main Notebook" realiza todo este proceso.

Link: https://github.com/altaga/Facemask-Detector-ZCU104/tree/main/Main%20Notebook

# **Final Product**

<img src="Fotos e imagenes" width="1000" />
<img src="Fotos e imagenes" width="1000" />
<img src="Fotos e imagenes" width="1000" />
<img src="Fotos e imagenes" width="1000" />
<img src="Fotos e imagenes" width="1000" />
<img src="Fotos e imagenes" width="1000" />
<img src="Fotos e imagenes" width="1000" />
<img src="Fotos e imagenes" width="1000" />

# **Epic DEMO**

Video: Click on the image
<!--[![Facemask](https://i.ibb.co/P5DR54T/camera-clip-art-black-and-white-14-1.png)](PENDING)-->

Sorry github does not allow embed videos.

# **Commentary and Future Rollout**

<img src="Inventate algo chulo" width="1000" />

# **References**

Links:

(1) https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/when-and-how-to-use-masks?gclid=Cj0KCQjwlvT8BRDeARIsAACRFiX_NyUiqU0d44aUqMNK7LVrXMOQWMfqr0MUUo8TKrJLpObf91qRUcUaAjKbEALw_wcB

(2) https://www.dol.gov/sites/dolgov/files/WHD/posters/FFCRA_Poster_WH1422_Non-Federal.pdf

(3) https://www.ziprecruiter.com/Salaries/Retail-Security-Officer-Salary

(4) https://www.cdc.gov/coronavirus/2019-ncov/downloads/COVID-19_CAREKit_ENG.pdf


# **APPENDIX A**

**install_docker.sh**

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

**install_vitis.sh**

    #!/bin/sh
    git clone --recurse-submodules https://github.com/Xilinx/Vitis-AI
    cd Vitis-AI
    docker pull xilinx/vitis-ai:latest
    cd     

**install_cpu.sh**

    #!/bin/sh
    cd Vitis-AI/docker
    sudo bash ./docker_build_cpu.sh
    cd   

**install_gpu.sh**

    #!/bin/sh
    cd Vitis-AI/docker
    sudo bash ./docker_build_gpu.sh
    cd    

**install_vitis.sh**

    #!/bin/sh
    cd Vitis-AI
    sudo bash docker_run.sh xilinx/vitis-ai-cpu:latest    