import axios from "axios";
import React, { useEffect, useState } from "react";
import { options2 } from "../constants";
import Loader from "./Loader";
import { useDispatch } from "react-redux";
import { setPath } from "../redux/slices/flightSlice";


const DetailModal = ({ close, detailId }) => {
    const [d, setDetail] = useState(null);
    const dispatch = useDispatch();



    useEffect(() => {
        setDetail(null)


        axios.get(`https://flight-radar1.p.rapidapi.com/flights/detail?flight=${detailId}`,
            options2)
            .then((res) => {
                setDetail(res.data);
                dispatch(setPath(res.data.trail));
            })
            .catch((err) => console.log(err));
    }, [detailId]);

    
    return (
        <div className="detail-outer">
            <div className="detail-inner">
                <p className="close-area">
                    <span onClick={close}>X</span>
                </p>
                {!d ? (
                    <Loader />
                ) : !d.airport.destination || !d.airport.origin ? (<div>
                    <p className="warn"> Bu Limanın Verileri Gizlidir</p>
                    <span><label class="switch">
                        <input type="checkbox" checked="checked" />
                        <div class="button">
                            <div class="light"></div>
                            <div class="dots"></div>
                            <div class="characters"></div>
                            <div class="shine"></div>
                            <div class="shadow"></div>
                        </div>
                    </label>
                    </span></div>) : (
                    <>
                        <h4>{d.aircraft.model.text}</h4>
                        <h3>{d.aircraft.model.code}</h3>
                        <p>
                            <span>Kuyruk Kodu:</span>
                            <span>{d.aircraft.registration}</span>
                        </p>
                        <img src={d.aircraft.images?.thumbnails[0]?.src} alt="plane-pic" />

                        <p>
                            <span>Hava Yolu Şirketi:</span>
                            <span>{d.airline.short}</span>
                        </p>
                        <p>
                            <span>Kalkış:</span>
                            <a target="_blank" href={d.airport.origin?.website}>
                                {d.airport.origin.name}
                            </a>

                        </p>

                        <p>
                            <span>Hedef:</span>
                            <a target="_blank" href={d.airport.destination.website}>
                                {d.airport.destination.name}
                            </a>
                        </p>

                        <p className={`status ${d.status.icon}`}>
                            <span>{d.status.text}</span>
                        </p>


                    </>
                )}

            </div>
        </div>
    )
}

export default DetailModal