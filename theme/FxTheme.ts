// TODO: Add this in a later step
// export type FxPaletteColorOptions = PaletteColorOptions & {
//   main: string
//   dark?: string
//   light?: string
// }
// export interface FxPaletteOptions extends Omit<PaletteOptions, 'secondary' | 'primary'> {
//   secondary: FxPaletteColorOptions
//   primary: FxPaletteColorOptions
// }

import {Dispatch, SetStateAction, createContext} from 'react'
import {PaletteOptions, Theme, ThemeOptions} from '@mui/material'
import {cyan, green, lightBlue, lightGreen, orange, yellow} from '@mui/material/colors'

export interface FxTheme {
  name: string
  theme: Theme
}

export interface FxThemeProps {
  fxTheme: FxTheme
  setFxTheme: Dispatch<SetStateAction<FxTheme>> | (() => {})
}

export const FxThemeContext = createContext<FxThemeProps>({} as FxThemeProps)

export interface FxThemeOptions extends ThemeOptions {
  palette: PaletteOptions
  name: string
}

export const fxThemeOptions: FxThemeOptions[] = [
  {
    name: 'Forest',
    palette: {primary: {main: green[600]}, secondary: {main: lightGreen[400]}},
  },
  {
    name: 'Ocean',
    palette: {primary: {main: cyan[600]}, secondary: {main: lightBlue[400]}},
  },
  {
    name: 'Corporate',
    palette: {primary: {main: lightBlue[600]}, secondary: {main: cyan[400]}},
  },
  {
    name: 'Sunset',
    palette: {primary: {main: orange[600]}, secondary: {main: yellow[400]}},
  },
]
