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

| Board       | Model                    | Mode      | FPS |
|  :--------: | :----------------------: | :-------: | :-: |
| Rpi 4 - 4gb | TfLite                   | Standard  | 55  |
| Rpi 4 - 4gb | TfLite Optimized         | Standard  | 47  |
| Jetson Nano | Tf Model                 | Max       | 90  |
| Jetson Nano | TfLite                   | 5W        | 41  |
| ZCU104      | Vitis AI Optimized Model | Standard  | 400 |



<img src="https://raw.githubusercontent.com/altaga/Facemask-Detector-ZCU104/main/Benchmarks%20Notebooks/Evidence/FinalBenchmark.png?token=AD6LORUWZ3M62234NZNLCPK7TUCEA" width="1000">