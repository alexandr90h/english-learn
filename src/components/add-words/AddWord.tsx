import { Box, Button, Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_DOMAIN;

export default function AddWord() {
    const [englishWord, setEnglishWord] = useState<string>("")
    const [translationWord, setTranslationWord] = useState<string>("")
    // console.log("===", process.env.REACT_APP_DOMAIN)
    const fetch = (data: { englishWord: string, translationWord: string }) => {
        axios.post("/englishLearn/addItem", data).then(res => console.log(res)).catch(err => console.log(err));
        setEnglishWord("");
        setTranslationWord("")
    }
    const fetchGetItems = () => {
        axios.get("/englishLearn/getItems").then(res => console.log(res.data.results)).catch(err => console.log(err));
    }
    useEffect(() => {
        fetchGetItems();
    }, [])


    return <React.Fragment>
        <Box padding={3}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField id="eng" label="English" variant="outlined" value={englishWord}
                               onChange={(e) => setEnglishWord(e.target.value)} fullWidth/></Grid>
                <Grid item xs={12} sm={6}>
                    <TextField id="trans" label="Translation" variant="outlined" value={translationWord}
                               onChange={(e) => setTranslationWord(e.target.value)}
                               fullWidth/></Grid>
            </Grid>
            <Box pt={2}><Button variant="contained" onClick={() => fetch({ englishWord, translationWord })}
                                fullWidth>Save</Button></Box>
        </Box>

    </React.Fragment>

}