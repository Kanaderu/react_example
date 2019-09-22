import React, { Component } from 'react';
import { /*MDBCollapse,*/ MDBIcon, MDBProgress, /*MDBBtn,*/ MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

class DarkSkyCard extends Component {

    state = {
        latitude: undefined,
        longitude: undefined,
        timezone: undefined,
        offset: undefined,
        currently: {},
        hourly: {},
        daily: {},
        minutely: {},
        flags: {}
    };

    fetchCityData(){
        //fetch('http://api.openweathermap.org/data/2.5/forecast?id=4509884&APPID=4687e81acdb537f9488ce1bacea4cab3')
        //fetch('http://localhost:3000/dayton_darksky.json')
        fetch('https://udsensors.tk/ws/darksky/')
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    latitude: data.latitude,
                    longitude: data.longitude,
                    timezone: data.timezone,
                    offset: data.offset,
                    currently: data.currently,
                    hourly: data.hourly,
                    daily: data.daily,
                    minutely: data.minutely,
                    flags: data.flags,
                });
            })
            .catch((error) => {
                console.log("Error!");
                console.error(error);
            })
    }

    componentDidMount() {
        this.fetchCityData()
    }

    renderWeatherIcon(icon) {
        switch(icon) {
            case 'clear-day':
                return <MDBIcon icon="sun" size="5x" className="amber-text" />;
            case 'clear-night':
                return <MDBIcon icon="moon" size="5x" className="blue-text" />;
            case 'rain':
                return <MDBIcon icon="cloud-rain" size="5x" className="indigo-text" />;
            case 'snow':
                return <MDBIcon icon="snowflake" size="5x" className="blue-grey-text" />;
            case 'sleet':
                return <MDBIcon icon="snowflake" size="5x" className="light-blue-text" />;
            case 'wind':
                return <MDBIcon icon="wind" size="5x" className="blue-grey-text" />;
            case 'fog':
                return <MDBIcon icon="cloud" size="5x" className="grey-text" />;
            case 'cloudy':
                return <MDBIcon icon="cloud" size="5x" className="blue-grey-text" />;
            case 'partly-cloudy-day':
                return <MDBIcon icon="cloud-sun" size="5x" className="orange-text" />;
            case 'partly-cloudy-night':
                return <MDBIcon icon="cloud-moon" size="5x" className="deep-purple-text" />;
            default:
                return <MDBIcon icon="poo-storm" size="5x" className="brown-text" />;
        }
    }

    render() {
        {/*
        const sunrise = new Date(this.state.city_info.sunrise * 1000).toGMTString();
        const sunset = new Date(this.state.city_info.sunset * 1000).toGMTString();
        */}
        const currentDay = new Date(this.state.currently.time * 1000).toDateString();
        const currentTime = new Date();
        const percentTime = 100*(currentTime.getHours()*60.0 + currentTime.getMinutes()) / 1440.0;
        return (
        <MDBCol>
            <MDBCard style={{ width: "28rem" }}>
                <MDBCardImage className="img-fluid" src="dayton.jpeg" waves />
                <MDBCardBody>
                    {/*<h4 className="card-title font-weight-bold">{ this.state.city_info.name }</h4>*/}
                    <MDBCardTitle className="display-1 card-title font-weight-bold">
                    Dayton<br />
                    { currentDay }
                    </MDBCardTitle>
                    <MDBCardText>
                    <div className="d-flex justify-content-between">
                    <p className="display-3 degree">{ this.state.currently.apparentTemperature } °F</p>
                    { this.renderWeatherIcon(this.state.currently.icon) }
                    </div>
                    <div class="d-flex justify-content-between mb-4">
                    <p><MDBIcon icon="tint" size="lg" className="cyan-text pr-2"/>{ this.state.currently.precipProbability }% Precipitation</p>
                    <p><MDBIcon icon="leaf" size="lg" className="grey-text pr-2"/>{ this.state.currently.windSpeed } mi/h Winds</p>
                    <p><MDBIcon icon="water" size="lg" className="blue-text pr-2" />{ this.state.currently.humidity * 100.0}% Humidity</p>
                    </div>
                    <MDBProgress material value={percentTime} height="10px" color="success" />
                    <ul class="list-unstyled d-flex justify-content-between font-small text-muted mb-4">
                    <li class="pl-4">8AM</li>
                    <li>11AM</li>
                    <li>2PM</li>
                    <li>5PM</li>
                    <li class="pr-4">8PM</li>
                    </ul>
                    {/*
                        UTC { this.state.city_info.timezone / 3600 } <br/>
                        Sunrise: { sunrise } <br/>
                        Sunset: { sunset } <br/>
                    */}
                    {/*
                    <div className="d-flex justify-content-between">
                    <p className="display-1 degree">23</p>0
                    <i className="fas fa-sun-o fa-5x pt-3 amber-text"></i>
                    <MDBIcon icon="sun" size="5x" className="amber-text" />
                    </div>
                    <div class="d-flex justify-content-between mb-4">
                    <p><MDBIcon icon="tint" size="lg" className="cyan-text pr-2"/>3% Precipitation</p>
                    <p><MDBIcon icon="leaf" size="lg" className="grey-text pr-2"/>21 hm/h Winds</p>
                    </div>
                    <MDBProgress material value={25} height="10px" color="success" />
                    <ul class="list-unstyled d-flex justify-content-between font-small text-muted mb-4">
                    <li class="pl-4">8AM</li>
                    <li>11AM</li>
                    <li>2PM</li>
                    <li>5PM</li>
                    <li class="pr-4">8PM</li>
                    </ul>
                    {/*
                    <div class="progress md-progress">
                    <div class="progress-bar black" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    Some quick example text to build on the card title and make
                    up the bulk of the card&apos;s content.
                    */}
                    </MDBCardText>
                    { /*this.state.list.map((item) => (
                        <div>
                            { item.dt_txt }<br/>
                            { item.weather.map((detail, index) => (
                                <p key={index}>{ detail.description }</p>
                            )) }<br/>
                        </div>
                    )) */}
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
        )
    }
}

export default DarkSkyCard;
