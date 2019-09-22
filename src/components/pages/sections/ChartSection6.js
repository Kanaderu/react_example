import React, { Component } from 'react';
import { MDBCol, MDBCard, MDBCardBody, MDBCardHeader, MDBRow } from 'mdbreact';
import { Line, /*Doughnut, Radar*/ } from 'react-chartjs-2';

class ChartSection6 extends Component {

    state = {
        daily: {
            data: [],
        },
    }

    componentDidMount() {
        fetch('https://udsensors.tk/ws/darksky/')
        .then(res => res.json())
        .then((data) => {
            this.setState({ daily: data.daily })
        })
        .catch(console.log)
    }

    render(){

        var weekday = new Array();
        weekday[0] = "Sun";
        weekday[1] = "Mon";
        weekday[2] = "Tue";
        weekday[3] = "Wed";
        weekday[4] = "Thu";
        weekday[5] = "Fri";
        weekday[6] = "Sat";

        const dataLine = {
            labels: this.state.daily.data.map((data) => {
                const date = new Date(data.time*1000);
                return weekday[date.getDay()];
            }),

            datasets: [
              {
                label: 'Precipitation',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(0,255,154,0.4)',
                borderColor: 'rgba(0,255,154,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(0,255,154,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(0,255,154,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: this.state.daily.data.map((data) => (
                    data.precipProbability * 100
                )),
              },
              {
                label: 'Cloud Coverage',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(0,102,204,0.4)',
                borderColor: 'rgba(0,102,204,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(0,102,204,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(0,102,204,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: this.state.daily.data.map((data) => (
                    data.cloudCover * 100
                )),
              },
              {
                label: 'Humdity',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(64,64,64,0.4)',
                borderColor: 'rgba(64,64,64,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(64,64,64,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(64,64,64,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: this.state.daily.data.map((data) => (
                    data.humidity * 100
                )),
              },
            ]
        };
        const opts = {
            responsive: true,
            scales: {
                xAxes: [{
                    ticks: { display: true },
                    scaleLabel: {
                        display: true,
                        labelString: 'Day'
                    },
                    gridLines: {
                        display: true,
                        drawBorder: true
                    }
                }],
                yAxes: [{
                    ticks: { display: true },
                    scaleLabel: {
                        display: true,
                        labelString: 'Percentage'
                    },
                    gridLines: {
                        display: true,
                        drawBorder: true
                    }
                }]
            }
    };

        return (
            <MDBRow className="mb-4">
                <MDBCol md="12" className="mb-4">
                    <MDBCard className="mb-4">
                        <MDBCardHeader>Temperature</MDBCardHeader>
                        <MDBCardBody>
                            <Line data={dataLine} options={opts} />
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        )
    }

}

export default ChartSection6;
