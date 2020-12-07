# **Facemask-Detector-ZCU104**

FPGA-based system that monitors facemask use through artificial intelligence, includes a thermometer and facemask dispenser.

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
- [**Closing**](#closing)
- [**References**](#references)
- [**APPENDIX A**](#appendix-a)

# **Introduction**

COVID-19 has changed our daily lives and continues to do so. Many retail stores and companies have gone out of business, unable to offer their services to their clients. However some others which have opted for the reopening of their businesses in turn have had to adapt to the times.This includes public institutions such as museums, libraries, etc. All these establishments have taken their precautionary measures, generating new regulations, such as forcing customers and / or visitors to wear face masks at all times. [1](#1).

<img src="https://i.ibb.co/8xsD8DZ/image.png" width="1000">

Given this new environment, businesses have had to create neew kinds of jobs or jobs to be done. One of these is to check the use of the mask and check the temperature of the customers before entering the establishment, risking not only the worker who is checking the temperature of the customers, but to the customers who enter the place.

1. https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/when-and-how-to-use-masks?gclid=Cj0KCQjwlvT8BRDeARIsAACRFiX_NyUiqU0d44aUqMNK7LVrXMOQWMfqr0MUUo8TKrJLpObf91qRUcUaAjKbEALw_wcB

# **Problem**

This job generates an annual cost per worker of at least $30,000 [1] and if that employee were to become ill with covid-19, by law (in the United States) they would have to pay him at least $511 a day [2].

These costs (both moneetary and health wise) for an employee who performs a repetitive task is excessive but necessary, because the solutions currently created are not yet sufficient to replace this position.

- The Xovis all-in-one solution - https://www.xovis.com/en/products/detail/face-mask-detection/
    - Solo deteccion de uso de cubrebocas, sin medicion de temperatura, ni control de accesos.
- SecurOS™ Face Mask Detection - https://issivs.com/facemask/
    - Solo deteccion de uso de cubrebocas, sin medicion de temperatura, ni control de accesos.
- Leewayhertz - https://www.leewayhertz.com/face-mask-detection-system/
    - Solo deteccion de uso de cubrebocas, sin medicion de temperatura, ni control de accesos.

Most of the devices on the market only detect the use of the mask, however this project seeks to generate a complete solution for access control.

1. https://www.ziprecruiter.com/Salaries/Retail-Security-Officer-Salary
2. https://www.dol.gov/sites/dolgov/files/WHD/posters/FFCRA_Poster_WH1422_Non-Federal.pdf

# **Solution**

<img src="https://i.ibb.co/M555tB7/20201205-164641-2-4.png" width="600">

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

<img src="https://i.ibb.co/rf3QWPv/New-Project-1.png" width="1000">

ZCU104 Processing:

<img src="https://i.ibb.co/mRRqgQN/New-Project-1.png" width="1000">

# **Project:**

## **Model**

In order to solve the problem of detecting the use of masks, it is necessary to carry out a CCN (convolutional neural network) which is capable of identifying if a human face is  wearing a mask.

<img src="https://i.ibb.co/WF6Q64G/image-2.png" width="1000">

To train a CCN as we know, it is necessary to use a large number of images. Which will serve the convolutions as examples to be able to correctly filter the characteristics of the images and thus be able to give a result.

## **Training Dataset**

In this case, we used 1916 positive images and 1930 negative images as the dataset.

https://www.kaggle.com/altaga/facemaskdataset
https://github.com/altaga/Facemask-Detector-ZCU104/tree/main/facemask-dataset

I invite the reader to review the dataset and to check the images yourself, the structure of the folders is:

- Dataset
    - Yes
        - IMG#
        - IMG#
    - No
        - IMG#
        - IMG#

The classification that we seek to achieve with this CNN is the following:

<img src="https://i.ibb.co/Sc74RBS/image.png" width="1000">

## **Train Environment Setup**

To perform the neural network training correctly, it is necessary to use the environment that Xilinx offers us for AI adapted to models focused on DPU which runs on Ubuntu 18.04.3.

http://old-releases.ubuntu.com/releases/18.04.3/

NOTE: ONLY IN THIS UBUNTU VEERSION IS ENVIROMENT COMPATIBLE, ONCE YOU INSTALL THE VIRTUAL MACHINE, DO NOT UPDATE ANYTHING, SINCE YOU WILL NOT BE ABLE TO USE THE ENVIROMENT AND YOU WILL HAVE TO INSTALL EVERYTHING AGAIN.

<img src="https://i.ibb.co/pnjvwMm/image.png" width="1000">

In my case I use a machine with Windows 10, so to do the training I had to use a virtual machine in VMware.

https://www.vmware.com/mx.html

Within the options to install the environment there is one to use the GPU and another CPU, since I use the virtual machine I will use the CPU installation.

https://github.com/Xilinx/Vitis-AI

Open the linux terminal and type the following commands.

In the Scripts folder I have already left several .sh files with which you can easily install all the necessary files, these files must be in the /home folder for them to work properly.

1. Install Docker (1 - 2 minutes) if you already have Docker go to Script 2.

        sudo bash install_docker.sh

2. Install Vitis (10 - 20 minutes).

        sudo bash install_vitis.sh

NOTE: install only one of the following ENV according to your preference.

3. Install CPU or GPU Support.

   - Installing CPU (20 - 30 minutes).

           sudo bash install_cpu.sh 

   OR

   - Installing the GPU environment (20 - 30 minutes).

           sudo bash install_gpu.sh
        
4. Start base Env.

        sudo bash run_env.sh

5. Start Vitis-AI-TensorFlow

        conda activate vitis-ai-tensorflow

6. Run this command once (IMPORTANT).
        
        yes | pip install matplotlib keras==2.2.5

<img src="https://i.ibb.co/yQ4qtXJ/image.png" width="1000">

If you did everything right, you should see a console like this one.

In the [Appendix A](#appendix-a) you can see the Scripts content.

## **Training the model**

To carry out the training, copy all the files inside the "Setup Notebook and Dataset" repository folder to the Vitis-AI folder for the code to run properly.

Just as in the picture.

<img src="https://i.ibb.co/zFyKSDM/image.png" width="1000">

Now in the command console we will execute the following command to open Jupyter Notebooks.

    jupyter notebook --allow-root

<img src="https://i.ibb.co/9n01Vhn/image.png" width="1000">

Open the browser and paste the link that appeared in the terminal and open the file.

<img src="https://i.ibb.co/Zd4ZLsQ/image.png" width="1000">

Once the code is open in the Kernel tab, it executes everything as shown in the image.

<img src="https://i.ibb.co/5K1xhmF/image.png" width="1000">

All the code is explained in detail. To understand it fully, please review it.

https://github.com/altaga/Facemask-Detector-ZCU104/blob/main/Setup%20Notebook%20and%20Dataset/train_facemask_model.ipynb

After the excecution, if everything worked well we should see the following result.

<img src="https://i.ibb.co/RvhDfpD/image.png" width="1000">

From this process we will obtain a file called "dpu_face_binary_classifier_0.elf".

This file has saved the model that we will use later and that has been already provided in the "Main Notebook" folder.

## **Board Setup**

The board setup is very simple, first you will have to download the PYNQ operating system.

http://bit.ly/zcu104_v2_6

Once you have this, flash the operating system with a program like Balena Etcher onto the SD included in the Kit. I recommend a memory of at least 16Gb.

https://www.balena.io/etcher/

<img src="https://i.ibb.co/VjR44R3/image.png" width="1000">

Now, before attaching the SD to the Board, plug it to power and turn it on. Check that the switches above the board are in the following position. This will enable boot from SD.

<img src="https://i.ibb.co/5F6YFp9/20201121-230416.jpg" width="600">

Steps to follow when turning on the board for the first time:

<img src="https://pynq.readthedocs.io/en/v2.5.1/_images/zcu104_setup.png" width="600">

Connect the 12V power cable. Note that the connector is keyed and can only be connected in one way.

Insert the Micro SD card loaded with the appropriate PYNQ image into the MicroSD card slot underneath the board

Connect the Ethernet port to your PC.

- You will have to assign a static IP to your ethernet connection to have access to the board, follow the instructions of the following link to the official documentation.

- https://pynq.readthedocs.io/en/v2.5.1/appendix.html#assign-your-computer-a-static-ip

Turn on the board and check the boot sequence.

Once the board has finished booting, from your browser enter the following IP address to access a portal with Jupyer Notebook.

http://192.168.2.99

Password:xilinx

## **Test Pynq**

First we will do a small test to see if the operating system is working correctly. We will set the WiFi, this in addition to indicating that we installed the OS correctly will help us to download the missing libraries for our project.

<img src="https://i.ibb.co/wWL7zb3/image.png" width="1000">

NOTE: As we indicated in the materials section, this needs an external usb wifi card to conneect to the internet.

<img src="https://i.ibb.co/4mbGVmX/image.png" width="1000">

If everything works well, we will get the following response from the ping line:

<img src="https://i.ibb.co/ZTzbSdF/image.png" width="1000">

Now we will install the missing libraries to make the DPU work on the ZCU104. We are going to open a command terminal as shown in the image.

<img src="https://i.ibb.co/gj2NBS8/image.png" width="1000">

From the terminal we have to write the following command, you can copy and paste it all at once.

    git clone --recursive --shallow-submodules https://github.com/Xilinx/DPU-PYNQ \
    && cd DPU-PYNQ/upgrade \
    && make \
    && pip3 install pynq-dpu \
    && cd $PYNQ_JUPYTER_NOTEBOOKS \
    && pynq get-notebooks pynq-dpu -p . 

<img src="https://i.ibb.co/2NMqD34/image.png" width="1000">

This process may take some time depending on your internet connection.

## **Test Model**

To test the model we have to download the github folder to our board with the following command.

    git clone https://github.com/altaga/Facemask-Detector-ZCU104

If you prefer you can also transfer only the files from the "Test Notebook" and "Main Notebook" folders to the board.

Inside the Test Notebook folder, we will enter the file "Facemask-ZCU104.ipynb".

All the code is explained in detail, to deepen please review it.

When running everything we see an image like this, it means that everything has worked correctly.

<img src="https://i.ibb.co/ZLHmLq4/image.png" width="600">

## **Comparison Benchmarks:**

For this contest I thought it was important to demonstrate the superiority of FPGAs over conventional HW and AI dedicated HW, when processing neural networks. So, I adapted the code of my model to run on 2 HW that anyone could have as a developer.

### **Algorithm**

Because all the codes display the result on screen, which takes a lot of time, the calculation of the FPS was carried out with the following algorithm.

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

For more detail go to the folder, within each folder there is code(s) to train and run the model(s) as well as video and photographic evidence of how it works in real time.

https://github.com/altaga/Facemask-Detector-ZCU104/tree/main/Benchmarks%20Notebooks

## **Extra Hardware Development:**

To measure the useer's temperature and the Facemask dispenser, we created the following circuit with an ESP32.

<kbd>
<img src="https://i.ibb.co/GPxyQNC/Untitled-Sketch-bb.png" width="1000" />
</kbd>

Control of this device was done through BLE, in order to use the least amount of battery.

### **Display**

The display has the function of showing different messages, according to the result of the reading of the ZCU104 and the temperature sensor.

Page to convert images to scrollable images on the screen, the images have to be made almost by hand like PIXELART to be able to display them well:

https://sparks.gogo.co.nz/pcd8554-bmp.html

Description:

While a reading is not taking place, we will get the following message.

<img src="https://i.ibb.co/QJzTX9N/Untitledg.png" width="300" />

If the user does not have a facemask, we will display this message.

<img src="https://i.ibb.co/RQFsM7y/sam.png" width="300" />

Before taking the temperature, this image will be displayed so that the useer may bring his hand next to the sensor.

<img src="https://i.ibb.co/Ny5CR8N/temp.png" width="300" />

If the user wears a mask but his/her temperature is very high.

<img src="https://i.ibb.co/G3PzXqN/Dontpass.png" width="300" />

If the user has his face mask and his temperature is normal.

<img src="https://i.ibb.co/LdFdJZ3/wel.png" width="300" />

Here is an example already on the screen.

<img src="https://i.ibb.co/7Sb48LM/vlcsnap-2020-12-05-23h46m46s149.png" width="1000" />

### **FaceMask Dispenser**

If the ZCU104 reading indicates that the person does not have a facemask, the servomotor will offer one to the customer so that the customer can move on to the temperature measurement stage.

------------------------------------------------------------------------------

<img src="https://i.ibb.co/RzKD5SN/ezgif-com-gif-maker-4.gif" width="1000" />

------------------------------------------------------------------------------

<img src="https://i.ibb.co/jbMYDXK/ezgif-com-gif-maker-5.gif" width="1000" />

### **Temperature**

When the ZCU104 indicates that the person is wearing a mask, the temperature of the hand will be taken.

<img src="https://i.stack.imgur.com/HK7op.gif" width="1000" />

To calculate the real temperature of the body, a multivariable linear regression model was performed to obtain an equation that would relate the temperature of the back of the hand and the ambient temperature, to obtain the real internal temperature of the body.

<img src="https://i.ibb.co/Rgm108g/image.png" width="1000">

------------------------------------------------------------------------------

<img src="https://i.ibb.co/qppjkm3/ezgif-com-gif-maker-6.gif" width="1000">

In this case we will take as the maximum reference temperature the one suggested by the CDC [1], which is 100.4 ° F. In the event that the temperature is higher than 100.4 ° F, we will not be able to let the person enter the establishment.

<img src="https://i.ibb.co/D1TrFgx/ezgif-com-gif-maker-7.gif" width="1000" />

1. https://www.cdc.gov/coronavirus/2019-ncov/downloads/COVID-19_CAREKit_ENG.pdf
2. http://manuals.serverscheck.com/EST-Difference_between_core_and_skin_temperature.pdf

## **Extra Software Development**

In turn, as we have a device that is autonomous in its task. We must have a way to visualize what the device is seeing remotely, so a simple application based on the React Native framework was created for this task.

Features:
- MQTT based communication.
- Save images with a button.
- View the IP and port of the server.
- Capacity to switch between devices in the event that the establishment has multiple entrances.
- Plug and Play.

<img src="https://i.ibb.co/2NJGfTJ/Icon.png" height="500" />

### **App installed from APK**:
<img src="https://i.ibb.co/Pr908P0/Screenshot-20201128-014246-com.png" height="500" />

(Smartphone: Huawei Y6P).

### **Screenshots and App running**:
<img src="https://i.ibb.co/C7s00Qg/20201128-014028.jpg" height="400" /><img src="https://i.ibb.co/qrzYvbv/Screenshot-20201128-014000-com-monitormqtt.jpg" height="400" /><img src="https://i.ibb.co/jR7wbH4/image1606549108735.jpg" height="400" />

(Smartphone: Huawei Y6P).

You can install the APK which is in the "MonitorMqtt-APK" folder or build it yourself, all the source code of the app is in the "MonitorMqtt" folder. Remember that we use the React Native framework.

If your cellphone has USB debugger mode enabled, you can install the app from your pc with the following command while in the "MonitorMqtt-APK" folder.

    adb install App.apk
    
Gif with the app running.

<img src="https://i.ibb.co/0qkzYYh/ezgif-com-gif-maker-2.gif" height="700" />

## **Final Code**

At this time we already have a BLE device with which we can communicate wirelessly.

Once the ZCU104 obtains at least 3 correct readings, we will send the signal to the ESP32 to go to the temperature taking phase. Once the client passes this phase, they will be allowed to enter the establishment.

<img src="https://i.ibb.co/r3g16Gy/olovrgo.png" width="1000" />

The code in the "Main Notebook" folder carriees out all this process.

Link: https://github.com/altaga/Facemask-Detector-ZCU104/tree/main/Main%20Notebook

# **Final Product**

## WE ACTUALLY TESTED IT IN A WORKING BUSINESS

This was perhaps the most important part of the whole project. We have had built a pretty good proof of concept, but technology exists to be used and businesses have been hit the hardest by COVID-19, specially the small and medium ones. So , first and foremost we attempted to find a business nearby that operates and has to have its clients wearing a mask (and that will allow us to test the PoC). What came to mind first were restaurants, 7 eleven-ish stores and supermarkets. As naive as we were, we went first to several supermarkets to just try and se if they would allow us to test the PoC and record its functionality. Of course, we were soundly rejected. Later we tried with an Ice-cream store after several attempts with supermarkets and 7elevens. And they finally allowed us to test it and record some results that you can see in our demo video! 

ZCU104:

<img src="https://i.ibb.co/txzbkKK/20201205-164726-2.jpg" width="1000" />

Face Mask Dispenser:

<img src="https://i.ibb.co/0GFGhHx/20201205-164709-2.jpg" width="1000" />

Display:

<img src="https://i.ibb.co/DbxVXnh/Display.png" width="1000" />

Complete solution working in local business

<img src="https://i.ibb.co/Vm4mK5r/20201205-164641-2.jpg" width="1000" />

# **Epic DEMO**

Video: Click on the image
<!--[![Facemask](https://i.ibb.co/P5DR54T/camera-clip-art-black-and-white-14-1.png)](PENDING)-->

Sorry github does not allow embed videos.

## Closing

The final PoC offers an alternative for access control for several kinds of businesses. This is a problem that nowadays affects everyone and will do for the near future. Most experts are expecting this kind of measures to be necessary for the foreseeable future. It is true that the vaccines will start to roll out in December, but for herd immunity and its effects to take place, it will take a couple years if not more. The problem of access control to businesses and institutions has to be automated without question, we have shown to have the proper technology to accomplish this and it should be done via creative use of bleeding edge technology such as the application here presented. Thank you for reading and supporting the project. 

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
