import { RESPONSE_STATUS_FAILED, RESPONSE_STATUS_SUCCESS } from "../helpers/constants/coreConstant";
import { users } from "../helpers/data/users";

class UserService {
    attemptLogin(body: any) {
        let isValid = false;
        users.map(user => {
            if (body.username == user.username && body.password == user.password) {
                isValid = true;
            }
        })

        if (isValid)
            return RESPONSE_STATUS_SUCCESS;
        else
            return RESPONSE_STATUS_FAILED;
    }
}

export default new UserService();   