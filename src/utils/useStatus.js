import { useEffect , useState } from "react";
 
const useStatus = () => {

    const [onlineStatus,setOnlineSatus] = useState(true);
   
    useEffect(() => {
     
        window.addEventListener("offline",() => {
          setOnlineSatus(false);
        });

        window.addEventListener("online",() => {
            setOnlineSatus(true);
          });
    
        },[]);

    return onlineStatus;
};

export default useStatus;