import React from 'react';
import { StudentGroupView } from "../../components/StudentGroupView/StudentGroupView";
import { Container, Typography, Paper, Box } from "@mui/material";


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
            <Paper
				elevation={8}
				sx={{
					py: 3,
					mx: 20,
                    mb: 5
				}}
			>
				<Box
					component="form"
					sx={{
						display: "flex",
						flexDirection: "column",
						mx: 4,
						rowGap: 4,
					}}
				>
					<Typography
						variant="h6"
						textAlign="left"
						fontFamily={"areal"}
					>
						Group ID :
					</Typography>
					<Typography
						variant="h6"
						textAlign="left"
						fontFamily={"areal"}
					>
						Research Field :
					</Typography>
                    </Box>
                    </Paper>
        <StudentGroupView/>

    </Container>
  )
}
