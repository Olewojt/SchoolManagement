import {useDispatch, useSelector} from "react-redux";
import {RootState} from "state/store.tsx";
import {useEffect} from "react";
import {getTeacherTasks, getUserTasks} from "api/Task.tsx";
import {addTasks} from "state/tasks/tasksSlice.tsx";
import {getUserGrades} from "api/User.tsx";
import {addGrades} from "state/grades/studentGradesSlice.tsx";

const BehindApi = () => {
    const user = useSelector((state: RootState) => state.login);
    const dispatch = useDispatch();

    useEffect(() => {
        if (user) {

            getUserGrades(user.id)
                .then(data => {
                    console.log('User grades:', data);
                    dispatch(addGrades(data));
                })
                .catch(error => {
                    console.error('Error fetching user grades:', error);
                });

            // Differentiate the action based on user role
            if (user.role === "Student") {
                getUserTasks(user.id)
                    .then(data => {
                        console.log('User tasks:', data);
                        dispatch(addTasks(data));
                    })
                    .catch(error => {
                        console.error('Error fetching user grades:', error);
                    });
            } else if (user.role === "Teacher") {
                getTeacherTasks(user.id)
                    .then(data => {
                        console.log('Teacher tasks:', data);
                        dispatch(addTasks(data));
                    })
                    .catch(error => {
                        console.error('Error fetching user grades:', error);
                    });
            }
        }
    }, [user, dispatch]);

    return null;
}

export default BehindApi;
