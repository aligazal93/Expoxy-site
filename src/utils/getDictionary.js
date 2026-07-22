const dictionaries = {
  ar: () =>
    import("@/dictionaries/ar.json").then(
      (module) => module.default
    ),

  en: () =>
    import("@/dictionaries/en.json").then(
      (module) => module.default
    ),
};

export async function getDictionary(locale) {
  const dictionary = dictionaries[locale];

  if (!dictionary) {
    return dictionaries.ar();
  }

  return dictionary();
}