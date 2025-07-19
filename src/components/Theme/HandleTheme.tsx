"use client";
function HandleTheme() {
  const handleTheme = () => {
    const root = document.documentElement;
    const theme = localStorage.getItem("theme") || "darkTheme";
    if (theme === "light") {
      root.classList.remove("light");
      root.classList.add("darkTheme");
      localStorage.setItem("theme", "darkTheme");
    } else {
      root.classList.remove("darkTheme");
      root.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  };
  return <button onClick={handleTheme}>theme </button>;
}
export default HandleTheme;
