import { useEffect, useState } from "react";

const useStatus = () => {

  const [status, setStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("online", () => {
      console.log("Yes I am online");
      setStatus(true)
    });
    window.addEventListener("offline", () => {
      console.log("Yes I am offline");
      setStatus(false);
    });
  }, []);
  return status;
};

export default useStatus;
