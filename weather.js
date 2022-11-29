import { config } from "dotenv";
import axios from "axios";

config();
const apiKey = process.env.KEY;
const city = process.argv[2];
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
const response = await axios.get(url);
console.log(url);
// const getWeather = async;
let output = `
            ^^        RABI'S WEATHER PROGRAM        ^^ 

          ^^                   @@@@@@@@@
     ^^       ^^            @@@@@@@@@@@@@@@
                           @@@@@@@@@@@@@@@@@@              ^^
                          @@@@@@@@@@@@@@@@@@@@
~~~~ ~~ ~~~~~ ~~~~~~~~ ~~ &&&&&&&&&&&&&&&&&&&& ~~~~~~~ ~~~~~~~~~~~ ~~~
~         ~~   ~  ~       ~~~~~~~~~~~~~~~~~~~~ ~       ~~     ~~ ~
~      ~~      ~~ ~~ ~~  ~~~~~~~~~~~~~ ~~~~  ~     ~~~    ~ ~~~  ~ ~~
~  ~~     ~         ~      ~~~~~~  ~~ ~~~       ~~ ~ ~~  ~~ ~
~  ~       ~ ~      ~           ~~ ~~~~~~  ~      ~~  ~             ~~
~             ~        ~      ~      ~~   ~             ~

It is now ${response.data.main.temp.toFixed()} C in ${response.data.name}. 

The current weather condition are: ${response.data.weather[0].description}

`;

console.log(output);
