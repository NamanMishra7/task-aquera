import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loading from './Loading';

function ResidentCard(props) {
  const { url } = props;
  const [resident, setResident] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (url != null) {
      setLoading(true);
      axios
        .get(url)
        .then((res) => {
          setResident(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        })
    }
  }, [])

  if (loading) {
    return <Loading size={30} />
  }

  return (
    <div className='box' style={{ width: "100%", display: "flex", flexDirection: "row" }}>
      <div >
        <img src={`/icons/icon-${["male", "female"].includes(resident.gender) ? resident.gender : "unknown"}.png`} alt="..." height="100" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <div style={{ display: 'flex', flexDirection: "row", padding: "0.2rem" }}>
          <u><b>{resident.name.toUpperCase()}</b></u>
        </div>
        <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
          <div style={{ display: 'flex', flexDirection: "row", padding: "0.2rem", fontSize: "80%", width: "50%" }}>
            HEIGHT (cm): <b style={{ paddingLeft: "0.2rem" }}>{`${resident.height}`}</b>
          </div>
          <div style={{ display: 'flex', flexDirection: "row", padding: "0.2rem", fontSize: "80%", width: "50%" }}>
            MASS (Kg): <b style={{ paddingLeft: "0.2rem" }}>{`${resident.mass == "unknown" ? "N/A" : resident.mass}`}</b>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
          <div style={{ display: 'flex', flexDirection: "row", padding: "0.2rem", fontSize: "80%", width: "50%" }}>
            HAIR: <b style={{ paddingLeft: "0.2rem" }}>{`${resident.hair_color.toUpperCase()}`}</b>
          </div>
          <div style={{ display: 'flex', flexDirection: "row", padding: "0.2rem", fontSize: "80%", width: "50%" }}>
            SKIN: <b style={{ paddingLeft: "0.2rem" }}>{`${resident.skin_color.toUpperCase()}`}</b>
          </div>
        </div>
        
        
        <div style={{ display: 'flex', flexDirection: "row", padding: "0.2rem", fontSize: "80%" }}>
          BIRTH YEAR: <b style={{ paddingLeft: "0.2rem" }}>{`${resident.birth_year}`}</b>
        </div>
      </div>
    </div>
  );
}

export default ResidentCard;