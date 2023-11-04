import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { AppBar, Box,  CssBaseline,  IconButton, Theme, ThemeProvider, Toolbar, Typography, createTheme } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import Link from "next/link"
import { useState } from 'react';
import { FxTheme, FxThemeContext, fxThemeOptions } from '@/fx/theme/FxTheme';

const theme = createTheme(
  {palette: fxThemeOptions[0].palette}
)

const appFxTheme = {
  name: fxThemeOptions[0].name,
  theme: theme
}

export default function App({ Component, pageProps }: AppProps) {
  
  const [fxTheme, setFxTheme] = useState<FxTheme>(appFxTheme)


  return (
    <FxThemeContext.Provider value={{fxTheme: fxTheme, setFxTheme}}>
      <ThemeProvider theme={fxTheme?.theme}>
      <CssBaseline />
        <Box sx={{background: `url(/images/themes/${fxTheme.name}/cover.jpg)`,                  
                  backgroundRepeat: 'no-repeat', backgroundSize: 'cover',
                  backgroundAttachment: 'fixed', backgroundPosition: 'center', 
                  width: '100vw', height: '100vh'}} >
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar>       
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Material Fx
                </Typography>
                <Link href="/settings" passHref style={{color: 'inherit'}}>
                  <IconButton size="large" edge="start" color="inherit" aria-label="menu" >
                    <SettingsIcon />
                  </IconButton>
                </Link>
              </Toolbar>
            </AppBar>
          <Component {...pageProps} />
        </Box>
      </Box>
    </ThemeProvider>
  </FxThemeContext.Provider>
  )
}
