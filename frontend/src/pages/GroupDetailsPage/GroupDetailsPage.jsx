import React from 'react';
import { StudentGroupView } from "../../components/StudentGroupView/StudentGroupView";
import { 
    Container,
    Typography,
    Paper,
    Box,
 } from "@mui/material";


export const GroupDetailsPage = () => {
    const tableHeaders = ["ID", "Name", "Email", "Membership"];
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
                    <StudentGroupView 	sx={{
                        mt: 5,
                        mb: 5
					}}/>
                    <Typography
						variant="h6"
						textAlign="left"
						fontFamily={"areal"}
					>
						Supervisor :
					</Typography>
					<Typography
						variant="h6"
						textAlign="left"
						fontFamily={"areal"}
					>
						Co-Supervisor :
					</Typography><Typography
						variant="h6"
						textAlign="left"
						fontFamily={"areal"}
					>
						Panel Member 1 :
					</Typography>
					<Typography
						variant="h6"
						textAlign="left"
						fontFamily={"areal"}
					>
						Panel Member 2 :
					</Typography><Typography
						variant="h6"
						textAlign="left"
						fontFamily={"areal"}
					>
						Panel Member 3:
					</Typography>
					<Typography
						variant="h6"
						textAlign="left"
						fontFamily={"areal"}
					>
						Panel Member 4 :
					</Typography>
                    </Box>
                    </Paper>
    </Container>
  )
}
