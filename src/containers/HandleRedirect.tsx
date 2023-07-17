import axios from "axios";
import {useEffect, useState} from "react";
import { Spinner, Box } from "@chakra-ui/react";
import React from "react"
import { useRouteMatch } from "react-router-dom";


const SERVER_ENDPOINTS = 
    process.env.REACT_APP_SERVER_ENDPOINT || "https://localhost:4000";

function HandleRedirectContainer() {
    const [destination, setDestination] = useState<null | string>(null);
    const [error, setError] = useState();

    const {
        params: { shortId },
    } = useRouteMatch<{
        shortId: string;
    }>();

    useEffect(()=>{
        async function getData() {
            return axios
            .get(`${SERVER_ENDPOINTS}/api/url/${shortId}`)
            .then((res) => setDestination(res.data.destination))
            .catch((error) => {
                setError(error.message)
            });
        }
        getData();
    }, [shortId]);

    useEffect(() =>{
        if (destination) {
            window.location.replace(destination);
        }
    }, [destination]);

    if (!destination && !error) {
        return (
            <Box
            height="100%"
            display="flex"
            alignItems= "center"
            justifyContent="center"
            >
                <Spinner />
            </Box>
        );
    }
    return <p>{error && JSON.stringify(error)}</p>
}



export default HandleRedirectContainer;

