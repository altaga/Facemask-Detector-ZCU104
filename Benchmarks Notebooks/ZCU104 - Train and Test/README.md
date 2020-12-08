# ZCU104

NOTE: THERE IS NO TRAIN OR TEST FOLDER HERE AS THOSE ARE IN THE MAIN FOLDER.

All the information about the ZCU104 will be in this link:

https://www.xilinx.com/products/boards-and-kits/zcu104.html

To train the model, a Notebook is used running with the Vitis-AI backend on an Ubuntu 18.04.3 machine. 

Backend for neural network training:

https://github.com/Xilinx/Vitis-AI

The entire process of installation, execution of the backend, training and deployment of the model will be explained in detail in the main readme.

https://github.com/altaga/Facemask-Detector-ZCU104

The operating system that was installed on the ZCU104 was PYNQ:

Main Page: http://www.pynq.io/board.html
OS Direct download: http://bit.ly/zcu104_v2_6

NOTE: the code for the training already contains the command to download the dataset in Ubuntu, however here I leave you the two options to download the dataset.

- Github: https://github.com/altaga/Facemask-Detector-ZCU104/tree/main/Setup%20Notebook%20and%20Dataset/facemask-dataset
- Kaggle: https://www.kaggle.com/altaga/facemaskdataset

Model runs:

<kbd>
<img src="https://i.ibb.co/YbC7TW9/20201122-030000.jpg" width="1000" />
<img src="https://i.ibb.co/HHybY8S/Facemask-ON.png" width="1000" />
</kbd>

Check "Evidence" folder with images and videos taken with the model running.