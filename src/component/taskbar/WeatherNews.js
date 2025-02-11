import { useEffect, useState } from "react"


export default function WeatherNews(){

    const [data, setData] = useState(null)


    const fetchWeather = () => {
        fetch("http://api.weatherapi.com/v1/current.json?key=ba636eac06154b80842154646251002&q=mumbai&aqi=no")
        .then(res => res.json())
        .then(resData => {
            console.log(resData)
            setData(resData)
        })
    }


    useEffect(fetchWeather,[])

    return(
        <>
            <div className="weather flex hover-white">
                <img src={data == null ? "" :data.current.condition.icon }/>
                <div>
                    <p>{data == null ? "" :data.current.temp_c }°c</p>
                    <span>{data == null ? "" :data.current.condition.text }</span>
                </div>
            </div>
        </>
    )
}