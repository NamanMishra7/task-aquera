import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Canvas from '../components/Canvas';
import Loading from '../components/Loading';
import ResidentCard from '../components/ResidentCard';
import { useSearchParams } from 'react-router-dom';
import IconCircle from '../Icons/IconCircle';
import IconPeopleFill from "../Icons/IconPeopleFill";
import IconPeopleOutline from '../Icons/IconPeopleOutline';
// import { shortenNumber } from '../helpers/utilityFunctions';
import { Grid } from '@mui/material';

function Planet() {
  const [searchParams, setSearchParams] = useSearchParams();
  const url = decodeURIComponent(searchParams.get("url"))
  const [planet, setPlanet] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (url != null) {
      setLoading(true);
      axios
        .get(url)
        .then((res) => {
          setPlanet(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        })
    }
  }, [])

  if (loading) {
    return <Loading />;
  }

  return (
    <div
      style={{
        color: "white",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: "1rem 0",
        gap: "1rem",
      }}
    >
      <div
        style={{
          width: "40%",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <div
          className="box"
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          <div className="box-header">
            <b>{planet.name.toUpperCase()}</b>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              maxHeight: "2rem",
              paddingLeft: "0.5rem",
            }}
          >
            <IconCircle style={{ margin: "auto 5px" }} />{" "}
            <p style={{ margin: "auto 0", marginLeft: "0.2rem" }}>
              {planet.climate.toUpperCase()}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              maxHeight: "2rem",
              paddingLeft: "0.5rem",
            }}
          >
            <IconCircle style={{ margin: "auto 5px" }} />{" "}
            <p style={{ margin: "auto 0", marginLeft: "0.2rem" }}>
              {planet.terrain.toUpperCase()}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              maxHeight: "2rem",
              paddingLeft: "0.5rem",
            }}
          >
            <IconCircle style={{ margin: "auto 5px" }} />{" "}
            <p style={{ margin: "auto 0", marginLeft: "0.2rem" }}>
              {planet.gravity.toUpperCase()} (GRAVITY)
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              maxHeight: "2rem",
              paddingLeft: "0.5rem",
            }}
          >
            <IconCircle style={{ margin: "auto 5px" }} />{" "}
            <p style={{ margin: "auto 0", marginLeft: "0.2rem" }}>
              SURFACE WATER: {planet.surface_water}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              maxHeight: "2rem",
              paddingLeft: "0.5rem",
              paddingBottom: "0.5rem",
            }}
          >
            <IconPeopleOutline style={{ margin: "auto 5px" }} />{" "}
            <p style={{ margin: "auto 0", marginLeft: "0.2rem" }}>
              {isNaN(planet.population)
                ? planet.population.toUpperCase()
                : Number(planet.population)}
            </p>
          </div>
          <div
            className="cell"
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "row",
              borderTop: "1px solid rgb(250, 250, 250)",
            }}
          >
            <div
              className="hidden-overflow"
              style={{
                width: "30%",
                height: "100%",
                borderRight: "1px solid rgb(250, 250, 250)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  height: "55%",
                  borderBottom: "1px solid rgb(250, 250, 250)",
                  alignItems: "center",
                  fontSize: "140%",
                }}
              >
                <b style={{ margin: "auto" }}>{planet.diameter}</b>
              </div>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  height: "45%",
                  alignItems: "center",
                  fontSize: "110%",
                }}
              >
                <p style={{ margin: "auto", textAlign: "center" }}>
                  DIAMETER (km)
                </p>
              </div>
            </div>
            <div
              className="hidden-overflow"
              style={{
                width: "40%",
                height: "100%",
                borderRight: "1px solid rgb(250, 250, 250)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  height: "55%",
                  borderBottom: "1px solid rgb(250, 250, 250)",
                  alignItems: "center",
                  fontSize: "140%",
                }}
              >
                <b style={{ margin: "auto", textAlign: "center" }}>
                  {planet.rotation_period}
                </b>
              </div>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  height: "45%",
                  alignItems: "center",
                  fontSize: "110%",
                }}
              >
                <p style={{ margin: "auto", textAlign: "center" }}>
                  ROTATION PERIOD
                </p>
              </div>
            </div>
            <div
              className="hidden-overflow"
              style={{ width: "30%", height: "100%" }}
            >
              <div
                className="box-cell"
                style={{
                  display: "flex",
                  width: "100%",
                  height: "55%",
                  borderBottom: "1px solid rgb(250, 250, 250)",
                  alignItems: "center",
                  fontSize: "140%",
                }}
              >
                <b style={{ margin: "auto" }}>
                  {isNaN(planet.population)
                    ? planet.population
                    : planet.orbital_period}
                </b>
              </div>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  height: "45%",
                  alignItems: "center",
                  fontSize: "110%",
                }}
              >
                <p style={{ margin: "auto", textAlign: "center" }}>
                  ORBITAL PERIOD
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="box"
          style={{ width: "100%", display: "flex", flexDirection: "column" }}
        >
          <div
            className="box-header"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <div>
              <IconPeopleFill />
            </div>
            <b> RESIDENTS</b>
          </div>
          <div
            style={{
              width: "100%",
              maxHeight: "500px",
              overflowY: "scroll",
              overflowX: "hidden",
              scrollbarColor: "grey",
              scrollbarWidth: "thin",
            }}
          >
            <Grid container spacing={0}>
              {planet.residents.map((el) => {
                return (
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <ResidentCard url={el} />
                  </Grid>
                );
              })}
            </Grid>
          </div>
        </div>
      </div>
      <div className="box" style={{ width: "40%" }}>
        <div
          style={{
            height: "400px",
            width: "400px",
            marginTop: "1rem",
            marginBottom: "1rem",
            marginLeft: "auto",
            marginRight: "auto",
            padding: "5rem",
          }}
        >
          <Canvas planet={planet.name} width={400} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <svg width={150} height={150}>
            <circle r="29" cx="75" cy="75" stroke="grey" fill="grey"></circle>
            <circle
              r="21"
              cx="75"
              cy="75"
              stroke="black"
              strokeDasharray={"14px"}
              strokeWidth={"2px"}
              fill="grey"
            >
              <animate
                attributeName="stroke-dashoffset"
                begin="0s"
                dur="10s"
                from="0"
                to="100%"
                repeatCount="indefinite"
              />
            </circle>
            <circle
              r="15"
              cx="75"
              cy="75"
              stroke="black"
              strokeDasharray={"14px"}
              strokeWidth={"2px"}
              fill="grey"
            >
              <animate
                attributeName="stroke-dashoffset"
                begin="0s"
                dur="10s"
                from="100%"
                to="0"
                repeatCount="indefinite"
              />
            </circle>
            <circle
              r="9"
              cx="75"
              cy="75"
              stroke="black"
              strokeDasharray={"14px"}
              strokeWidth={"2px"}
              fill="grey"
            >
              <animate
                attributeName="stroke-dashoffset"
                begin="0s"
                dur="10s"
                from="100%"
                to="0"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
          <svg width={150} height={100}>
            <rect
              x="44"
              y="51"
              width="70"
              height="38"
              fill='grey'
            ></rect>
            <rect
              id='rect5'
              x="118"
              y="50"
              width="15"
              height="40"
            ></rect>
            <rect
              id='rect1'
              x="43"
              y="50"
              width="15"
              height="40"
              fill='black'
            >
            </rect>
            <rect
              id='rect2'
              x="58"
              y="50"
              width="15"
              height="40"
            ></rect>
            <rect
              id='rect3'
              x="73"
              y="50"
              width="15"
              height="40"
            ></rect>
            <rect
              id='rect4'
              x="88"
              y="50"
              width="15"
              height="40"
            ></rect>
            <rect
              id='rect5'
              x="103"
              y="50"
              width="15"
              height="40"
            ></rect>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Planet;