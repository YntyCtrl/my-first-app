import classes from "./ButtonSolid.module.css";

const ButtonSolid = ({  children }) => {
    return (<button className={classes.ButtonSolid}>{children}</button>);
}

export default ButtonSolid;