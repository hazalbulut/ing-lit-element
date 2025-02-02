import { configureLocalization } from "@lit/localize";
// Generated via output.localeCodesModule
import { sourceLocale, targetLocales } from "../generated/locale-codes";

export const { getLocale, setLocale } = configureLocalization({
  sourceLocale,
  targetLocales,
  loadLocale: (locale) => import(`../generated/locales/${locale}.ts`),
});
