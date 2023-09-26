class CookieService {
    timeToMileSecond(time : any) {
        const number = time.substring(0, time.indexOf(" "));

        switch (time.substr(time.indexOf(" ") + 1)) {
            case "day":
                return number * 24 * 60 * 60 * 1000;
            case "hour":
                return number * 60 * 60 * 1000;
            case "minute":
                return number * 60 * 1000;
            case "second":
                return number * 1000;
            default:
                return number * 60 * 1000;
        }
    }

    setCookie(cname : any, cvalue : string, exTime : any) {
        const d = new Date();
        d.setTime(d.getTime() + this.timeToMileSecond(exTime));
        const expires = "expires=" + d.toUTCString();

        document.cookie = cname + "=" + cvalue + "; Secure; path=/";
    }

    getCookie(cname : string) {
        const name = cname + "=";
        const ca = document.cookie.split(";");
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === " ") {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    checkCookie = (cname: string) => {
        const cookieInfo = this.getCookie(cname);
        return !!cookieInfo;
    };
}

export default new CookieService();
