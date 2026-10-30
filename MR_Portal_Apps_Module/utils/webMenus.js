

const WEB = "web";

const normalize = (value) =>
  value === undefined || value === null ? "" : String(value).trim().toLowerCase();

const isWebMenu = (item) => {
  const listName = normalize(item?.Ul_name);
  if (listName) return listName === WEB;


  const mode = normalize(item?.mode);
  if (mode) return mode === WEB;

  return true;
};


export const filterWebMenus = (menus) => {
  if (!Array.isArray(menus)) return [];

  const webMenus = [];

  for (const menu of menus) {
    if (!isWebMenu(menu)) continue;

    if (!Array.isArray(menu?.submenu)) {
      webMenus.push(menu);
      continue;
    }

    const submenu = menu.submenu.filter(isWebMenu);
    if (menu.submenu.length > 0 && submenu.length === 0) continue;

    webMenus.push({ ...menu, submenu });
  }

  return webMenus;
};

export default filterWebMenus;
