import { useTheme } from "@emotion/react"
import { Box, Grid, Typography, styled } from "@mui/material"

export interface InfoPageLayoutComponent{
  title: string | JSX.Element
  children: JSX.Element | JSX.Element [];
}

const GridHeader = styled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  borderBottom: '1px solid',
  borderColor: theme.palette.divider,
}))

export const InfoPageLayout = (props: InfoPageLayoutComponent) => {
  const {title, children} = props

  const theme: any = useTheme();
  return (
    <Grid container spacing={0} >
      <GridHeader item xs={12} sx={{bgcolor: 'background.paper'}}>
        <Box sx={{width: '1200px', display: 'flex', justifyContent: 'left'}}>
          { typeof title === 'string' ?
            ( <Typography sx={{p: 5, pl: 2, fontSize: {xs: '2rem', sm: '3rem'}, width: '100%' }} variant={'h2'} noWrap > {title}</Typography> )
            : title }
        </Box>
      </GridHeader>
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: "center", p: 3 }}>
        <Box sx={{width: '1200px', display: 'flex', justifyContent: 'left' }}>
          {children}
        </Box>
      </Grid>
    </Grid>
  )
}

export default InfoPageLayout