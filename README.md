# RPi vs Jetson vs ZCU104

Se realizaron test de las siguientes boards para comparar si esta siendo mejor el uso de la ZCU104 para este tipo de problemas.

- RPi4 with 4gb
    - Tensor Flow Lite Model.
    - Tensor Flow Lite Optimized Model.
- Jetson Nano 4gb
    - Tensor Flow Model MAX Consumption Mode.
    - Tensor Flow Model 5W Consumption Mode.
- ZCU104
    - Vitis AI - Keras optimized Model.

    <br />

| Board       | Model                           | Mode      | FPS |
|  :--------: | :-----------------------------: | :-------: | :-: |
| Rpi 4 - 4gb | TfLite                          | Standard  | 55  |
| Rpi 4 - 4gb | TfLite Optimized                | Standard  | 47  |
| Jetson Nano | Tf Model                        | Max       | 90  |
| Jetson Nano | Tf Model                        | 5W        | 41  |
| ZCU104      | Vitis AI <br /> Optimized Model | Standard  | 400 |

<br />

<kbd>
<img src="https://raw.githubusercontent.com/altaga/Facemask-Detector-ZCU104/main/Benchmarks%20Notebooks/Evidence/FinalBenchmark.png" width="1000" />
</kbd>