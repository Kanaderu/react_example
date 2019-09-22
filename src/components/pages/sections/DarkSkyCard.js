import React, { Component } from 'react';
import { /*MDBCollapse,*/ MDBIcon, MDBProgress, /*MDBBtn,*/ MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

class DarkSkyCard extends Component {

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
        console.log(this.props.data)
        const currentDay = new Date(this.props.data.currently.time * 1000).toDateString();
        const currentTime = new Date();
        const percentTime = 100*(currentTime.getHours()*60.0 + currentTime.getMinutes()) / 1440.0;
        return (
        <MDBCol>
            <MDBCard style={{ width: "28rem" }}>
                <MDBCardImage className="img-fluid" src="dayton.jpeg" waves />
                <MDBCardBody>
                    <MDBCardTitle className="display-1 card-title font-weight-bold">
                    Dayton<br />
                    { currentDay }
                    </MDBCardTitle>
                    <MDBCardText>
                    <div className="d-flex justify-content-between">
                    <p className="display-3 degree">{ this.props.data.currently.apparentTemperature } °F</p>
                    { this.renderWeatherIcon(this.props.data.currently.icon) }
                    </div>
                    <div class="d-flex justify-content-between mb-4">
                    <p><MDBIcon icon="tint" size="lg" className="cyan-text pr-2"/>{ this.props.data.currently.precipProbability }% Precipitation</p>
                    <p><MDBIcon icon="leaf" size="lg" className="grey-text pr-2"/>{ this.props.data.currently.windSpeed } mi/h Winds</p>
                    <p><MDBIcon icon="water" size="lg" className="blue-text pr-2" />{ this.props.data.currently.humidity * 100.0}% Humidity</p>
                    </div>
                    <MDBProgress material value={percentTime} height="10px" color="success" />
                    <ul class="list-unstyled d-flex justify-content-between font-small text-muted mb-4">
                    <li class="pl-4">8AM</li>
                    <li>11AM</li>
                    <li>2PM</li>
                    <li>5PM</li>
                    <li class="pr-4">8PM</li>
                    </ul>
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
        )
    }
}

export default DarkSkyCard;
