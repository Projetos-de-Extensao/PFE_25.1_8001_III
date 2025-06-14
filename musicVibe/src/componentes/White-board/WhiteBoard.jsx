import React, { useState } from "react";
import "./WhiteBoard.css";

export default function WhiteBoard() {
    const [visible, setVisible] = useState(true);

    if (!visible) return null;

    return (
        <div className="white-background">
            <button
                className="btn btn-outline show-more-btn white-background-bottom"
                onClick={() => setVisible(false)}
            >
                Mostrar Mais
            </button>
        </div>
    );
}