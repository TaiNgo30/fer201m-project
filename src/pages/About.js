import Timeline from "@mui/lab/Timeline";
import React from "react";
import TimelineCard from "../components/TimelineCard";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box, Typography } from "@mui/material";
import { timelineItemClasses } from "@mui/lab/TimelineItem";

const About = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <Box>
            <Typography sx={{ textAlign: "center", marginTop: "2rem" }} variant="h4">
                About us
            </Typography>
            <Timeline
                sx={
                    isMobile
                        ? {
                            [`& .${timelineItemClasses.root}:before`]: {
                                flex: 0,
                                padding: 0,
                            },
                        }
                        : {}
                }
                position={isMobile ? "right" : "alternate"}
            >
                <TimelineCard
                    pLeft={1}
                    pRight={8}
                    title="Taihub"
                    date="Jul, 2024"
                    body1=" Experience the future of film with our cutting-edge web app,  "
                    body2="offering a world of cinematic delights at your fingertips."
                   
                    
                />
                <TimelineCard
                    position={isMobile ? "left" : "right"}
                    pRight={isMobile ? 8 : 1}
                    pLeft={isMobile ? 1 : 8}
                    title="Taihub"
                    body1="Filmshop was rebuilt with ReactJS and Material UI"
                    body2="The website is an FER201m assignment "
                    body3="Responsive design and more features"
                />
              
            </Timeline>
        </Box>
    );
};

export default About;
