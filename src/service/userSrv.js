/**
 * Created by luowen on 2017/3/13.
 */
import BaseSrv from "./baseSrv";

export default class UserSrv extends BaseSrv {
    login(credentials) {
        return this.http.post("user/login", credentials);
    }

    captcha(mobile) {
        return this.http.post("user/captcha", {mobile: mobile});
    }

    bindmobile(credentials) {
        return this.http.post("user/bindmobile", credentials);
    }

    logout() {
        return this.http.post("user/logout");
    }

    resetpwd(credentials) {
        return this.http.post("user/pwd/reset", credentials);
    }

    getPwdCaptcha(query) {
        return this.http.get("user/pwd/captcha", {params: query});
    }

    verifycode(postData) {
        return this.http.post("user/pwd/verifycode", postData);
    }
}

