import { appRoute } from '@/constant';
import { useRouter } from 'next/router';
const isBrowser = () => typeof window !== "undefined";

const ProtectedRoutes = ({ children }) => {
   
  let token = typeof window!=="undefined" ?  localStorage.getItem("token"):null;
  console.log(token)
   let path= useRouter();
   
    const unProtected = [
        appRoute.HOME,
        appRoute.ABOUT,
        appRoute.BLOG,
        appRoute.FEATURE,
        appRoute.SHOP,
        appRoute.CONTACT,
        appRoute.SINGLE_BLOG
    ]
    const isProtected = [
        appRoute.DASHBOARD
    ]
    const pathIsUnProtected = unProtected.indexOf(path.pathname) === -1;
    const pathIsProtected = isProtected.indexOf(path.pathname) === -1;

    if (isBrowser() && !token && pathIsUnProtected) {

        path.push(appRoute.HOME)
    
      } else if (isBrowser() && token && pathIsProtected) {
    
        path.push(appRoute.DASHBOARD);
    
      }
  
    
    return children;
}
export default ProtectedRoutes;