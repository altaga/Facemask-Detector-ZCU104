# RPi vs Jetson vs ZCU104

The following boards were tested to compare whether the use of the ZCU104 is being better for this type of problem.

# Algorithm:

Because all the codes contain display of the result on the screen, which takes a lot of time, the calculation of the FPS was carried out with the following algorithm.

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