# RPi vs Jetson vs ZCU104

Se realizaron test de las siguientes boards para comparar si esta siendo mejor el uso de la ZCU104 para este tipo de problemas.

# Algorithm:

Debido a que todos los codigos contienen desplegado de el resultado en pantalla, lo cual quita mucho tiempo, el calculo de los FPS se realizo con el siguiente algoritmo.

![FPS](https://i.ibb.co/qkTRsj7/FPS.png)

# Boards tested:

- RPi4 with 4gb
    - Tensor Flow Lite Model.
    - Tensor Flow Lite Optimized Model.
- Jetson Nano 4gb
    - Tensor Flow Model MAX Consumption Mode.
    - Tensor Flow Model 5W Consumption Mode.
- ZCU104
    - Vitis AI - Keras optimized Model.

## Benchmark table:

| Board       | Model                    | Mode      | FPS |
|  :--------: | :----------------------: | :-------: | :-: |
| Rpi 4 - 4gb | TfLite                   | Standard  | 55  |
| Rpi 4 - 4gb | TfLite Optimized         | Standard  | 47  |
| Jetson Nano | Tf Model                 | Max       | 90  |
| Jetson Nano | TfLite                   | 5W        | 41  |
| ZCU104      | Vitis AI <br /> Optimized Model | Standard  | 400 |

## Comparison chart:

<br />
<kbd>
<img src="https://i.ibb.co/yWxNvS6/Final-Benchmark.png" width="1000" />
</kbd>