import {useDispatch, useSelector} from "react-redux";
import {RootState} from "state/store.tsx";
import {useEffect} from "react";
import {getTeacherTasks, getUserTasks} from "api/Task.tsx";
import {addTasks} from "state/tasks/tasksSlice.tsx";
import {getUserGrades} from "api/User.tsx";
import {addGrades} from "state/grades/studentGradesSlice.tsx";
import {PARENT, STUDENT, TEACHER} from "utilitiesconstants.tsx/";

const BehindApi = () => {
    const parent = useSelector((state: RootState) => state.parentChildrenData)
    const user = useSelector((state: RootState) => state.login);
    const dispatch = useDispatch();

    useEffect(() => {
        let id = user.id

        if (user.role === PARENT && parent.selected != -1)
            id = parent.children[parent.selected].id

        if (user) {
            getUserGrades(id)
                .then(data => {
                    console.log('User grades:', data);
                    dispatch(addGrades(data));
                })
                .catch(error => {
                    console.error('Error fetching user grades:', error);
                });

            // Differentiate the action based on user role
            if (user.role === STUDENT) {
                getUserTasks(user.id)
                    .then(data => {
                        console.log('User tasks:', data);
                        dispatch(addTasks(data));
                    })
                    .catch(error => {
                        console.error('Error fetching user grades:', error);
                    });
            } else if (user.role === TEACHER) {
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
    }, [user, parent, dispatch]);

    return null;
}

export default BehindApi;
