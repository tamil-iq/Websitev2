export function getPngImageUrl(name: string) {
  return new URL(`../../assets/icons/homepage/${name}.png`, import.meta.url).href;
}

