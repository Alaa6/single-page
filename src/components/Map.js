
import React, { Component, useRef, useEffect } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';





class MapScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

    }

    render() {

        const mapStyles = {
            width: '50%',
            height: '70%',
            marginTop: 50,


        };
        return (

            <Map
                google={this.props.google}
                zoom={8}
                style={mapStyles}
                initialCenter={{ lat: 30.026300, lng: 31.496773 }}
            >
                <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />

                <Marker
                    title={'The marker`s title will appear as a tooltip.'}
                    name={'SOMA'}
                    position={{ lat: 30.016894, lng:31.377034}} />
                <Marker
                    name={'Dolores park'}
                    position={{ lat: 30.127944, lng: 31.330018 }} />
                <Marker />
                <Marker
                    name={'Dolores park'}
                    position={{ lat: 30.065658, lng: 31.207633 }} />
                <Marker />
                <Marker
                    name={'Dolores park'}
                    position={{ lat: 30.786509, lng: 31.000376 }} />
               <Marker
                    name={'Dolores park'}
                    position={{ lat:29.928543, lng: 30.918783 }} />
                <Marker
                    name={'Your position'}
                    position={{ lat: 30.015679, lng:31.285203}}
                    // icon={{
                    //     url: "/path/to/custom_icon.png",
                    //     // anchor: new google.maps.Point(32, 32),
                    //     // scaledSize: new google.maps.Size(64, 64)
                    // }}
                     />

                <InfoWindow onClose={this.onInfoWindowClose}>
                    <div>
                        <h1>{'akaa'}</h1>
                    </div>
                </InfoWindow>
            </Map>


        );
    }
}



export default GoogleApiWrapper({
    apiKey: 'AIzaSyDxgFMY0X5QQjrLLcfuHS7v7qnFnPsXung'
})(MapScreen);