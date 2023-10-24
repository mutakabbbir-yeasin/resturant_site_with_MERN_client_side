import { useEffect, useState } from "react";

const useMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMenu(data);
        setLoading(false);
        return true;
      })
      .then((data) => {
        console.log(data);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  return [menu, loading];
};

export default useMenu;
