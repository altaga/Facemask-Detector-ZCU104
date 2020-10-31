# Jetson Nano

Toda la informacion de la jetson nano estara en este link:

https://developer.nvidia.com/embedded/jetson-nano-developer-kit

Para entrenar y correr el modelo se utilizo el siguiente sistema operativo en la jetson:

https://github.com/NVIDIA-AI-IOT/jetbot

Se utilizo una camara usb para realizar las pruebas en el modelo

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

El modelo puede ser entrenado y ejecutado en la misma Jetson Nano con el fin de facilitar la ejecucion del codigo.

NOTA: el codigo ya contiene el comando para descargar el dataset dentro de la jetson, sin embargo aqui te dejamos las dos opciones para descargar el dataset.

- Github: https://github.com/altaga/Facemask-Dataset
- Kaggle: https://www.kaggle.com/altaga/facemaskdataset

<img src="https://raw.githubusercontent.com/altaga/Facemask-Detector-ZCU104/main/Benchmarks%20Notebooks/Evidence/FinalBenchmark.png" width="1000" />
</kbd>
