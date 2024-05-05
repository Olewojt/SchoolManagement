import classes from "./Manage.module.scss"
import UserManagement from "ui/Management/UserManagement.tsx";

const PrincipalManage = () => {
    return (
        <main className={classes.content}>
            <UserManagement></UserManagement>
        </main>
    );
}

export default PrincipalManage;