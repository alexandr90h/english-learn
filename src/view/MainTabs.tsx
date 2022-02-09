import { Box, Tab, Tabs } from "@mui/material";
import React from "react";
import AddWord from "../components/add-words/AddWord";

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function MainTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const tabItem = (value: number) => {
        switch (value) {
            case 0:
                return <AddWord/>
            case 1:
                return <AddWord/>
        }
    }
    return (
        <React.Fragment>
            <Box sx={{width: '100%'}}>
                <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
                        <Tab label="Add" {...a11yProps(0)} />
                        <Tab label="Item Two" {...a11yProps(1)} />
                        <Tab label="Item Three" {...a11yProps(2)} />
                    </Tabs>
                </Box>
            </Box>
            {tabItem(value)}
        </React.Fragment>
    )
}