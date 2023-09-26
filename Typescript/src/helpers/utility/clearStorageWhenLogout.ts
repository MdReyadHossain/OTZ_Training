import CookieService from "../../services/cookie/cookie.service";

export const clearStorageWhenLogOut = () => {
    CookieService.setCookie(process.env.REACT_APP_ACCESS_TOKEN, "", "");
    CookieService.setCookie(process.env.REACT_APP_AUTH_ACCESS_TOKEN, "", "");
};
