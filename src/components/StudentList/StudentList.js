import Students from "../Students/Students";
import classes from "./StudentList.module.css";
const StudentList = ({ persons }) => {
    return (
        <div className={classes.StudentList}>
            {persons.map(person => <Students {...person} />)}
        </div>
    );
}
export default StudentList;