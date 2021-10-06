import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTop = () => {
    //i want to scroll to the top everytime my url changes. useLocation detect everytime i change the url(extract the pathname)
    //run useEffect everytime the pathname chagnes.
    const { pathname } = useLocation();
    const location = useLocation();
    console.log(pathname);
    console.log(location);

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
        });
    }, [pathname]);

    return null;
};

export default ScrollTop;