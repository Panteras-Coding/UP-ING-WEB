import "./Notifications.css"
import React from "react";

export default function NotifCmpt(props) {
    return(
        <div className="notif">
            <p>{props.notifText} <input type="checkbox"></input></p>                                
        </div>
    );
}