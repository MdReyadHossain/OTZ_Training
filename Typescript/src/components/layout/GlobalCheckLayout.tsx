import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {AppDispatch} from "../../state/store";
import {clearStorageWhenLogOut} from "../../helpers/utility/clearStorageWhenLogout";

const GlobalCheckLayout = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    // Global window logout function
    (window as any).handleLogOut = () => {
        clearStorageWhenLogOut();
    };

    return null;
};

export default GlobalCheckLayout;
