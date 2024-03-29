import { defaultTheme } from '~/configs/lib-configs';
import { ICustomUiLibraryTheme, IUiLibraryTheme } from '~/configs/protocols';
import defaultThemeCreator from '~/theme/theme-creator/default-theme-creator';
import userThemeCreator from '~/theme/theme-creator/user-theme-creator';
/* -------------------------------------------------------------------------- */
/**
 * making the default theme based on the options of the user
 * and combine it with the uiLibrary default theme
 * @param userTheme user custom theme
 *
 */
const createUiLibraryTheme = (
  userTheme?: ICustomUiLibraryTheme,
): IUiLibraryTheme => {
  if (!userTheme) return defaultTheme;
  const uiLibraryThemeWithFinalOptions = defaultThemeCreator.getUiLibraryTheme(
    defaultTheme,
    userTheme,
  );
  return userThemeCreator.getUiLibraryTheme(
    uiLibraryThemeWithFinalOptions,
    userTheme,
  );
};
/* --------------------------------- exports -------------------------------- */
export default createUiLibraryTheme;
