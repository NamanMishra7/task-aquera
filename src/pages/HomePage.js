import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material';
import axios from 'axios';

import { Button } from '../components/Button';
import Canvas from '../components/Canvas';
import { shortenNumber } from '../helpers/utilityFunctions';
import { useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';

function HomePage() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [hasPrev, setHasPrev] = useState(false);
  const [hasNext, setHasNext] = useState(false);
  const [planets, setPlanets] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://swapi.dev/api/planets/?page=${page}&format=json`)
      .then((res) => {
        if (res.data != null) {
          setCount(res.data.count);
          setHasPrev(res.data.previous == null ? false : true);
          setHasNext(res.data.next == null ? false : true);
          setPlanets(res.data.results);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      })
  }, [page]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", margin: "1rem" }}>
      <Grid container spacing={2} sx={{ width: "100%" }}>
          {
            planets.map((el) => {
              return (
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2.4} >
                  <div className='box clickable' style={{ width: "100%", height: "380px", display: "flex", flexDirection: "column" }} onClick={() => {
                    return navigate(`/planet?url=${encodeURIComponent(el.url)}`);
                  }}>
                    <div className='box-header'>
                      <b>{el.name.toUpperCase()}</b>
                    </div>
                    <div style={{ height: "200px", width: "200px", marginTop: "1rem", marginBottom: "1rem", marginLeft: "auto", marginRight: "auto" }}>
                      <Canvas planet={el.name} width={200} />
                    </div>
                    <div className='cell' style={{ width: "100%", height: "100%", display: "flex", flexDirection: "row", borderTop: "1px solid rgb(250, 250, 250)" }}>
                      <div className='hidden-overflow' style={{width: "30%", height: "100%", borderRight: "1px solid rgb(250, 250, 250)" }}>
                        <div style={{display: "flex", width: "100%", height: "55%", borderBottom: "1px solid rgb(250, 250, 250)", alignItems: "center", fontSize: "110%" }}>
                          <b style={{ margin: "auto" }}>{el.diameter}</b>
                        </div>
                        <div style={{ display: "flex", width: "100%", height: "45%", alignItems: "center", fontSize: "80%" }}>
                          <p style={{ margin: "auto", textAlign: "center" }}>DIAMETER (km)</p>
                        </div>
                      </div>
                      <div className='hidden-overflow' style={{width: "40%", height: "100%", borderRight: "1px solid rgb(250, 250, 250)" }}>
                        <div style={{display: "flex", width: "100%", height: "55%", borderBottom: "1px solid rgb(250, 250, 250)", alignItems: "center", fontSize: "110%" }}>
                          <b style={{ margin: "auto", textAlign: "center" }}>{el.climate.toUpperCase()}</b>
                        </div>
                        <div style={{ display: "flex", width: "100%", height: "45%", alignItems: "center", fontSize: "80%" }}>
                          <p style={{ margin: "auto", textAlign: "center" }}>CLIMATE</p>
                        </div>
                      </div>
                      <div className='hidden-overflow' style={{width: "30%", height: "100%" }}>
                        <div className='box-cell' style={{display: "flex", width: "100%", height: "55%", borderBottom: "1px solid rgb(250, 250, 250)", alignItems: "center", fontSize: "110%" }}>
                          <b style={{ margin: "auto" }}>{isNaN(el.population) ? el.population : shortenNumber(Number(el.population))}</b>
                        </div>
                        <div style={{ display: "flex", width: "100%", height: "45%", alignItems: "center", fontSize: "80%" }}>
                          <p style={{ margin: "auto", textAlign: "center" }}>POPULATION</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Grid>
              );
            })
          }
        </Grid>
      
      <div style={{ display: "flex", flexDirection: "row", width: "100%", justifyContent: "center", gap: "1rem", marginTop: "1rem" }}>
        <Button variant="primary" onClick={() => {setPage(page-1)}} disabled={!hasPrev}>
          <i className={`${hasPrev == true ? "arrow" : "disabled"} left`}></i>
          PREV
        </Button>
        <p style={{ color: "white", lineHeight: "0.2rem" }}>page {page} of {count}</p>
        <Button variant="primary" onClick={() => {setPage(page+1)}} disabled={!hasNext}>
          NEXT
          <i className='arrow right'></i>
        </Button>
      </div>
    </div>
  );
}

export default HomePage;