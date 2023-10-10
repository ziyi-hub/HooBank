import React, {useContext} from 'react';
import { FcBullish, } from "react-icons/fc";
import { DASHBOARD_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_BOTTOM_LINKS } from "../../constants/dashboard"
import {Link, useLocation, useNavigate} from "react-router-dom";
import classNames from "classnames";
import {HiOutlineLogout} from "react-icons/hi";
import {authContext, AuthContext} from "../../context/AuthContext";

const linkClasses = "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base"

function Sidebar(props) {
    const user = useContext(AuthContext);
    const { login } = authContext();
    const navigate = useNavigate();

    return (
        <div className="flex flex-col p-3 w-60 bg-neutral-900 text-white">
            <div className="flex items-center gap-2 px-1 py-3">
                <FcBullish />
                <span className="text-neutral-100 text-lg">OpenShop</span>
            </div>
            <div className="flex-1 py-8 flex flex-col gap-0.5">
                {DASHBOARD_SIDEBAR_LINKS.map((item) => (
                    <SidebarLink key={item.key} item={item} />
                ))}
            </div>
            <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
                {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
                    <SidebarLink key={item.key} item={item} />
                ))}
                <div
                    onClick={() => {
                        login?.();
                        user.logout();
                        navigate('/login')
                    }}
                    className={classNames('text-red-500', linkClasses)}>
                    <span className="text-xl ">
                        <HiOutlineLogout />
                    </span>
                    Logout
                </div>
            </div>
        </div>
    );
}

function SidebarLink(props){
    const { pathname } = useLocation()

    return(
        <Link to={props.item.path} className={classNames(pathname === props.item.path ? 'text-neutral-400 text-white' : '', linkClasses)}>
            <span className="text-xl ">{props.item.icon}</span>
            {props.item.label}
        </Link>
    )
}

export default Sidebar;