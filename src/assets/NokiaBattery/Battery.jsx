import { useContext, useEffect, useState } from "react"
import "./Battery.css"
import { TimeContext } from "../Context/Context"

// import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Battery = () => {

    const [charge, setCharge] = useState(0)

    const time = useContext(TimeContext)

    const charging = () => {
        setTimeout(() => {
            if (charge <= 3) {
                setCharge(charge + 1)
            }
            if (charge === 4) {
                setCharge(1)
            }
        }, time * 1000);
    }

    useEffect(() => {
        charging();

        console.log(time);

        return () => { clearTimeout(charging) }
    }, [charge])

    const Item = styled(Paper)(({ theme }) => ({
        // backgroundColor: "red",
        // theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        height:'4rem',
        color: theme.palette.text.secondary,
    }));

    return (

        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0}>
                {[1, 2, 3, 4].map((item, i) => {
                    return (<Grid xs={2} key={i}>
                        <Item sx={{ backgroundColor: charge > i ? "red" : "white" }}></Item>
                    </Grid>)
                })}
            </Grid>
        </Box >

        // <div className="battery">
        //     {[1, 2, 3, 4].map((item, i) => {
        //         return (<div key={i} className={charge > i ? "charging cell" : "cell"}></div>
        //         )
        //     })}

        //     {/* <div className={charge > 0 ? "charging cell" : "cell"}></div>
        //     <div className={charge > 1 ? "charging cell" : "cell"}></div>
        //     <div className={charge > 2 ? "charging cell" : "cell"}></div>
        //     <div className={charge > 3 ? "charging cell" : "cell"}></div> */}
        // </div>
    )
}

export default Battery