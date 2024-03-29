import { paletteModes } from '~/configs/constants/default-configs';
import { darkDefaultPalette, lightDefaultPalette } from '~/configs/lib-configs';
import {
  ICustomUiLibraryTheme,
  IUiLibraryTheme,
  NPaletteConfigs,
} from '~/configs/protocols';
import { ThemeCreator } from './theme-factory';
/* -------------------------------------------------------------------------- */
/**
 * factory of creating default uiLibrary theme based on user settings
 */
class DefaultThemeCreator extends ThemeCreator {
  /* ----------------------------- dependencies ---------------------------- */
  private defaultPaletteMode: paletteModes = paletteModes.LIGHT;

  /* ----------------------------- factory method ----------------------------- */
  public themeFactory(
    uiLibraryThemeConfigs: IUiLibraryTheme,
    userTheme?: ICustomUiLibraryTheme,
  ): IUiLibraryTheme {
    const paletteDefaultTheme = this.getPaletteMode(userTheme);
    return {
      ...uiLibraryThemeConfigs,
      palette: {
        ...uiLibraryThemeConfigs.palette,
        ...paletteDefaultTheme,
      },
    };
  }

  /* ----------------------------- private methods ---------------------------- */
  private getPaletteMode(
    userTheme?: ICustomUiLibraryTheme,
  ): NPaletteConfigs.PaletteModes {
    const paletteModeOption =
      userTheme?.palette?.mode ?? this.defaultPaletteMode;
    const paletteDefaultTheme =
      paletteModeOption === paletteModes.DARK
        ? darkDefaultPalette
        : lightDefaultPalette;
    return paletteDefaultTheme;
  }
  /* -------------------------------------------------------------------------- */
}
/* --------------------------------- exports -------------------------------- */
const defaultThemeCreator = new DefaultThemeCreator();
export default defaultThemeCreator;
