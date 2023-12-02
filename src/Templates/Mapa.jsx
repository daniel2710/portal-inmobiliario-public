'use client'
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import mapViewStyles from "../mapViewStyles";
import { VscCallIncoming, VscHome, VscMail } from "react-icons/vsc";
export const Mapa = () => {

    const mapStyles = {
        height: "60vh",
        minHeight: "38rem",
        maxHeight: "51rem",
        width: "100%",
    };
    const defaultCenter = {
        lat: 4.4343891,
        lng: -75.2081391,
    };

    return (
        <LoadScript googleMapsApiKey="AIzaSyBofVHM82g0vcJLSg-iUY4GONz4VvezvII">
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={10}
                center={defaultCenter}
                options={{ styles: mapViewStyles }}
            >
                <Marker position={defaultCenter} />
                <div className="mapa-info">
                    <div>
                        <p className="mapa__title">¿Como ponerme en contacto?</p>
                        <ul className="info-contacto">
                            <li>
                                <VscCallIncoming /> (+57) 601 328 8939
                            </li>
                            <li>
                                <VscMail /> info@colraices.co
                            </li>
                            <li>
                                <VscHome /> Cl. 47 # 4-61, Ibagué, Tolima
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="mapa__title">Horario de atención</p>
                        <ul className="info-horario">
                            <li>
                                Lunes a Viernes <span>08:00AM - 05:30PM</span>
                            </li>
                            <li>
                                Sábado <span>08:00AM - 01:00PM</span>
                            </li>
                            <li>
                                Domingo <span>Cerrado</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </GoogleMap>
        </LoadScript>
    );
};
