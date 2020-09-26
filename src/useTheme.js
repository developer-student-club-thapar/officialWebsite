import { useState, useEffect } from "react";
import storage from "local-storage-fallback";

export default function useTheme(
  defaultTheme = { mode: "light", paper: "light", checked: false }
) {
  const getInitialTheme = () => {
    const savedTheme = storage.getItem("theme");
    return savedTheme ? JSON.parse(savedTheme) : defaultTheme;
  };
  const [theme, _setTheme] = useState(getInitialTheme);
  useEffect(() => {
    storage.setItem("theme", JSON.stringify(theme));
  }, [theme]);
  return {
    ...theme,
    setTheme: ({ setTheme, ...theme }) => _setTheme(theme),
  };
}
