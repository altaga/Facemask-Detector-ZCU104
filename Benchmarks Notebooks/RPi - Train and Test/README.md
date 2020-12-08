# RPi4

All the information about the RPi4 will be in this link:

https://www.raspberrypi.org/products/raspberry-pi-4-model-b/?resellerType=home

To train the model, a Notebook in Google Colab is used in order to facilitate the training of the model.

https://github.com/altaga/Facemask-Detector-ZCU104/blob/main/Benchmarks%20Notebooks/RPi%20-%20Train%20and%20Test/Train/RPi_Train_Models.ipynb

The operating system that was installed on the raspberry was Raspberry OS:

https://www.raspberrypi.org/downloads/raspberry-pi-os/

NOTE: The code was made to work with the raspberry's built-in camera.

To install the libraries except TFlite Interpreter:
    sudo apt-get install libatlas-base-dev python3-opencv
    pip3 install Pillow

To install TFlite Interpreter:

    pip3 install https://dl.google.com/coral/python/tflite_runtime-2.1.0.post1-cp37-cp37m-linux_armv7l.whl

NOTE: the code for the training already contains the command to download the dataset on the Google Colab platform, however, here I leave you the two options to download the dataset.

- Github: https://github.com/altaga/Facemask-Detector-ZCU104/tree/main/Setup%20Notebook%20and%20Dataset/facemask-dataset
- Kaggle: https://www.kaggle.com/altaga/facemaskdataset

Model running:

<kbd>
<img src="https://i.ibb.co/6J7kty6/RPi-Opt-Model-2.jpg" width="600" />
</kbd>

Check "Evidence" folder with images and videos taken with the model running.
