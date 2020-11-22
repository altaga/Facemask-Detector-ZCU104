#!/bin/sh

git clone --recurse-submodules https://github.com/Xilinx/Vitis-AI

cd Vitis-AI

docker pull xilinx/vitis-ai:latest

cd 