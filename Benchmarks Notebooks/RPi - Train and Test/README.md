# RPi4

Toda la informacion de la RPi4 estara en este link:

https://www.raspberrypi.org/products/raspberry-pi-4-model-b/?resellerType=home

Para entrenar el modelo se utilizo un Notebook en Google Colab con el fin de facilitar el entrenamiento del modelo.

https://github.com/altaga/Facemask-Detector-ZCU104/blob/main/Benchmarks%20Notebooks/RPi%20-%20Train%20and%20Test/Train/RPi_Train_Model.ipynb

El sistema operativo que se instalo en la raspberry fue Raspberry OS:

https://www.raspberrypi.org/downloads/raspberry-pi-os/

NOTA: El codigo se realizo para funcionar con la camara integrada de la raspberry.

Las librerias utilizadas para correr el modelo fueron:

- Pillow
- Numpy
- OpenCV
- tflite.runtime.interpreter

Para instalar las librerias excepto TFlite Interpreter:

    sudo apt-get install libatlas-base-dev python3-opencv
    pip3 install Pillow

Para instalar TFlite Interpreter:

    pip3 install https://dl.google.com/coral/python/tflite_runtime-2.1.0.post1-cp37-cp37m-linux_armv7l.whl

NOTA: el codigo para el entrenamiento ya contiene el comando para descargar el dataset en la plataforma de Google Colab, sin embargo aqui te dejo las dos opciones para descargar el dataset.

Github: https://github.com/altaga/Facemask-Dataset
Kaggle: https://www.kaggle.com/altaga/facemaskdataset

Model running:

<kbd>
<img src="https://i.ibb.co/6J7kty6/RPi-Opt-Model-2.jpg" width="1000" />
</kbd>

Check "Evidence" folder with images and videos taken with the model running.
