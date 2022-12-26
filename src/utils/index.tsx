const active = (
  pathname: string,
  link: string,
  style: string,
  defaultStyle: string
) => {
  return pathname === link ? style : defaultStyle;
};
export { active };
