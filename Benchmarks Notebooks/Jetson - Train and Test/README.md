# Jetson Nano

All the information about the jetson nano is in this link:

https://developer.nvidia.com/embedded/jetson-nano-developer-kit

To train and run the model, the following operating system is used on the jetson:

https://github.com/NVIDIA-AI-IOT/jetbot

A USB camera is used to perform the tests on the model. 

The libraries used to run the model were:

- TensorFlow (Pre-installed 1.13)
- Keras
- Sklearn
- OpenCV
- Pillow

To install the libraries except TFlite Interpreter:

    sudo apt-get install keras sklearn python3-opencv
    pip3 install Pillow

The model can be trained and run on the same Jetson Nano in order to facilitate code execution.

NOTE: the code already contains the command to download the dataset within the jetson, however here we leave you the two options to download the dataset.

- Github: https://github.com/altaga/Facemask-Detector-ZCU104/tree/main/Setup%20Notebook%20and%20Dataset/facemask-dataset
- Kaggle: https://www.kaggle.com/altaga/facemaskdataset

Model runs:

<kbd>
<img src="https://i.ibb.co/2nH3rtv/20201029-045451.jpg" width="1000" />
</kbd>

Check "Evidence" folder with images and videos taken with the model running.