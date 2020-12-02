import React from "react";

export default function Header() {
    return (
        <header className="d-flex">
            <div className="bg">
                <svg xmlns="http://www.w3.org/2000/svg" width="586.64" height="99.74" viewBox="0 0 586.64 99.74">
                    <g id="Слой_2" data-name="Слой 2">
                        <path d="M0,0H586.64s-79.22-1.94-115.2,30.44c-15.61,14-34.45,2.74-46.05,5.47-13.27,3.12-9.36,12.49-39.81,22.63-22.52,7.51-51.8,6.38-88.2,2.34C273.28,58.23,263.82,89,223.23,89c-51.57,0-57.67-17.44-88.2-18-46.83-.78-28.88,33.56-103.81,28.1C5.46,96,0,89.61,0,89.61Z" style={{fill: "#29abe2"}} />
                        <path d="M0,0V82.29s32.09,12.1,58.51,5.18,43.41-40.89,91.22-32.08c49.83,9.17,59.71,18.88,80.53,17S258.58,54.13,283.11,51s35.23,5.66,70.47,2.52c30-2.68,41.37-4.3,53.47-15.1,6.28-5.61,15.73-13.84,37.75-10.7S468.93,8.83,505.94,0Z" style={{fill: "#1b58b2"}} />
                    </g>
                </svg>
            </div>
            <div className="d-flex overlay justify-content-between container-fluid align-items-center">
                <img src="/images/logo.png" className="logo" alt="Tinro App" />
                <h1>ИНТЕРАКТИВНЫЙ СПРАВОЧНИК ВИДОВ</h1>
            </div>

		</header>
        );
}