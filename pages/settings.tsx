import { useContext } from "react"

import { Box, Button,  Stack,  ToggleButton,  ToggleButtonGroup,  Typography, createTheme } from "@mui/material"
import DarkModeIcon from "@mui/icons-material/DarkMode"
import LightModeIcon from "@mui/icons-material/LightMode"

import { FxThemeContext, FxThemeOptions, fxThemeOptions } from "@/theme/FxTheme"

import InfoPageLayout from "@/ui/InfoPageLayout"

const SettingsPage = () => {
 
  const {fxTheme, setFxTheme} = useContext(FxThemeContext)

  const handleSetFxTheme = (fxThemeOptions: FxThemeOptions) => {

    fxThemeOptions.palette.mode = fxTheme.theme.palette.mode
    setFxTheme({
      name: fxThemeOptions.name,
      theme: createTheme({palette: fxThemeOptions.palette})
    })
  }

  const handlerSetFxThemeMode = (mode: 'light' | 'dark') => {
    setFxTheme({
      name: fxTheme.name,
      theme: createTheme({palette: {mode: mode}})
    })
  }

  return (
    <InfoPageLayout title="Settings">
      <Stack>
        <Typography sx={{m: 1, p: 1, bgcolor: 'text.secondary', color: 'background.paper'}}>Choose a Mode:</Typography>
        <Box>
          <ToggleButtonGroup size="small" value={fxTheme.theme.palette.mode} sx={{ ml: 3, bgcolor: 'background.paper'}}>
            <ToggleButton value="light" onClick={() => handlerSetFxThemeMode('light')}>
              <LightModeIcon  />
            </ToggleButton>
            <ToggleButton value="dark" onClick={() => handlerSetFxThemeMode('dark')}>
              <DarkModeIcon  />
            </ToggleButton>
          </ToggleButtonGroup>
          </Box>
        <Typography sx={{m: 1, p: 1, bgcolor: 'text.secondary', color: 'background.paper'}}>Choose a theme:</Typography>
        <Stack spacing={1} sx={{ pl: 3}}>
          { fxThemeOptions.map((fxo: FxThemeOptions, index) => (                            
            <Button variant={'contained'} color={fxTheme.name === fxo.name ? 'secondary' : 'inherit'} 
              key={index} onClick={() => handleSetFxTheme(fxo)} sx={{ color: fxTheme.name === fxo.name ? 'primary.contrastText()' : 'primary.text'}}>
              {fxo.name}
            </Button>              
          ))}      
        </ Stack>      
        </Stack>
    </InfoPageLayout>
  )
}

export default SettingsPage