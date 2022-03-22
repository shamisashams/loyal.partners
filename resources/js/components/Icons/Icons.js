import React from "react";

export const Globe = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 25 25"
    >
      <g
        id="Icon_feather-globe"
        data-name="Icon feather-globe"
        transform="translate(-2 -2)"
      >
        <path
          id="Path_1"
          data-name="Path 1"
          d="M26,14.5A11.5,11.5,0,1,1,14.5,3,11.5,11.5,0,0,1,26,14.5Z"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          id="Path_2"
          data-name="Path 2"
          d="M3,18H26"
          transform="translate(0 -3.5)"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          id="Path_3"
          data-name="Path 3"
          d="M16.277,3a18.333,18.333,0,0,1,4.277,11.5A18.333,18.333,0,0,1,16.277,26,18.333,18.333,0,0,1,12,14.5,18.333,18.333,0,0,1,16.277,3Z"
          transform="translate(-1.777)"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
    </svg>
  );
};

export const FB = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12.248"
      height="22.868"
      viewBox="0 0 12.248 22.868"
    >
      <path
        id="Icon_awesome-facebook-f"
        data-name="Icon awesome-facebook-f"
        d="M13.055,12.863l.635-4.139H9.719V6.039A2.069,2.069,0,0,1,12.052,3.8h1.805V.28a22.016,22.016,0,0,0-3.2-.28C7.382,0,5.245,1.982,5.245,5.571V8.725H1.609v4.139H5.245v10H9.719v-10Z"
        transform="translate(-1.609)"
        fill={color}
      />
    </svg>
  );
};
export const IN = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22.868"
      height="22.868"
      viewBox="0 0 22.868 22.868"
    >
      <path
        id="Icon_awesome-linkedin"
        data-name="Icon awesome-linkedin"
        d="M21.235,2.25H1.628A1.641,1.641,0,0,0,0,3.9V23.47a1.641,1.641,0,0,0,1.628,1.649H21.235a1.645,1.645,0,0,0,1.633-1.649V3.9A1.645,1.645,0,0,0,21.235,2.25ZM6.912,21.851H3.522V10.938H6.917V21.851ZM5.217,9.447A1.965,1.965,0,1,1,7.182,7.482,1.966,1.966,0,0,1,5.217,9.447Zm14.4,12.4H16.227V16.543c0-1.266-.026-2.894-1.761-2.894-1.766,0-2.037,1.378-2.037,2.8v5.4H9.04V10.938h3.252v1.491h.046a3.57,3.57,0,0,1,3.211-1.761c3.43,0,4.068,2.261,4.068,5.2Z"
        transform="translate(0 -2.25)"
        fill={color}
      />
    </svg>
  );
};
export const YT = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26.629"
      height="18.724"
      viewBox="0 0 26.629 18.724"
    >
      <path
        id="Icon_awesome-youtube"
        data-name="Icon awesome-youtube"
        d="M27.123,7.43a3.346,3.346,0,0,0-2.354-2.37c-2.077-.56-10.4-.56-10.4-.56s-8.327,0-10.4.56A3.346,3.346,0,0,0,1.606,7.43a35.1,35.1,0,0,0-.556,6.451,35.1,35.1,0,0,0,.556,6.451,3.3,3.3,0,0,0,2.354,2.332c2.077.56,10.4.56,10.4.56s8.327,0,10.4-.56a3.3,3.3,0,0,0,2.354-2.332,35.1,35.1,0,0,0,.556-6.451,35.1,35.1,0,0,0-.556-6.451ZM11.641,17.84V9.921l6.96,3.96-6.96,3.959Z"
        transform="translate(-1.05 -4.5)"
        fill={color}
      />
    </svg>
  );
};

export const SemiCircle = ({ color }) => {
  return (
    <svg
      className="semicircle"
      xmlns="http://www.w3.org/2000/svg"
      width="209"
      height="209"
      viewBox="0 0 209 209"
    >
      <g
        id="Ellipse_4"
        data-name="Ellipse 4"
        fill="none"
        stroke={color}
        strokeWidth="48"
      >
        <circle cx="104.5" cy="104.5" r="104.5" stroke="none" />
        <circle cx="104.5" cy="104.5" r="80.5" fill="none" />
      </g>
    </svg>
  );
};
