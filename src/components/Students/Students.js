import classes from "./Students.module.css";

const Students = ({ name, role, wpm, commits, photo }) => {
    return (
        <div className={classes.Students}>
            <div className={classes.name}>{name}</div>
            <div className={classes.role}>{role}</div>
            <div className={classes.wpm}>{wpm}WPM</div>
            <div className={classes.commits}>{commits} commits</div>
            <img className={classes.photo} src={photo}/>
        </div>
    );
}
export default Students;