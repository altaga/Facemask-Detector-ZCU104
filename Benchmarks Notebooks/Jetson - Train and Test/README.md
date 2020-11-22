# Jetson Nano

Toda la informacion de la jetson nano estara en este link:

https://developer.nvidia.com/embedded/jetson-nano-developer-kit

Para entrenar y correr el modelo se utilizo el siguiente sistema operativo en la jetson:

https://github.com/NVIDIA-AI-IOT/jetbot

Se utilizo una camara USB para realizar las pruebas en el modelo

Las librerias utilizadas para correr el modelo fueron:

- TensorFlow (Pre-installed 1.13)
- Keras
- Sklearn
- OpenCV
- Pillow

Para instalar las librerias excepto TFlite Interpreter:

    sudo apt-get install keras sklearn python3-opencv
    pip3 install Pillow

El modelo puede ser entrenado y ejecutado en la misma Jetson Nano con el fin de facilitar la ejecucion del codigo.

NOTA: el codigo ya contiene el comando para descargar el dataset dentro de la jetson, sin embargo aqui te dejamos las dos opciones para descargar el dataset.

- Github: https://github.com/altaga/Facemask-Detector-ZCU104/tree/main/Setup%20Notebook%20and%20Dataset/facemask-dataset
- Kaggle: https://www.kaggle.com/altaga/facemaskdataset

Model runs:

<kbd>
<img src="https://i.ibb.co/2nH3rtv/20201029-045451.jpg" width="1000" />
</kbd>

Check "Evidence" folder with images and videos taken with the model running.