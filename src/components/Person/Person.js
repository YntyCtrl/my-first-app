// import classes from "./Person.module.css";

// const Person = ({ name, age, children }) => {
//     return (<div className={classes.Person}>
//         <h2 className={classes.name}>{ name }</h2>
//         <h4 className={classes.age}>{ age } years old</h4>
//         <h5 className={classes.hobby}>{ children }</h5>
//       <span className="highlight">Hello</span>
//     </div>);
// }
// export default Person;

import classes from "./Person.module.css";


const Person = ({ name, role, wpm, commits, photo, link }) => {
    return (
        <div className={classes.Person}>
            <div className={classes.name}>{name}</div>
            <div className={classes.role}>{role}</div>
            <div className={classes.wpm}>{wpm}WPM</div>
            <div className={classes.commits}>{commits} commits</div>
            <img className={classes.photo} src={photo}/><br></br>
            <a className={classes.link} href={link}>Git Hub</a>
        </div>
    );
}
export default Person;