import React, { Component } from 'react';
import { MDBCol, MDBCard, MDBCardBody, MDBCardHeader, MDBRow } from 'mdbreact';
import { Line, /*Doughnut, Radar*/ } from 'react-chartjs-2';

class ChartSection5 extends Component {

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
                label: 'Temperature High',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(255,51,51,0.4)',
                borderColor: 'rgba(255,51,51,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(255,51,51,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(255,51,51,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: this.state.daily.data.map((data) => (
                    data.temperatureHigh
                )),
              },
              {
                label: 'Temperature Low',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: this.state.daily.data.map((data) => (
                    data.temperatureLow
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
                        labelString: 'Timestamp'
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
                        labelString: 'Temperature'
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

export default ChartSection5;
