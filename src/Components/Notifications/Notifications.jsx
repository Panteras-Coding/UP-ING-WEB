import "./Notifications.css"
import React from "react";
import NotifCmpt from "./NotifCmpt";

export default function Notifications() {
    
    const notifications = ["Notificación 1", "Notificación 2", "Notificación 3", "Notificación 4", "Notificación 5"];

    return(
        <div className="main-notif">
            <div className="notif-box">
                <div className="container-notif">
                    <h1>Notificaciones</h1>
                    <form>
                        {notifications.map((notifEl) => {
                            return(
                                <NotifCmpt 
                                    key = {notifications.indexOf(notifEl)}
                                    notifText = {notifEl}
                                />
                            );
                        })}
                        <button type="submit">Notificar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}