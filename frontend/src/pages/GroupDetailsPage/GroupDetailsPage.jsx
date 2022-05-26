import React from 'react';
import { StudentGroupView } from "../../components/StudentGroupView/StudentGroupView";
import { Container, Typography } from "@mui/material";


export const GroupDetailsPage = () => {
  return (
    <Container maxWidth="lg">
        			<Typography
				variant="h4"
				mb={10}
				textAlign="center"
				fontFamily={"areal"}
			>
				Student Research Group Details
			</Typography>
        <StudentGroupView/>
    </Container>
  )
}
