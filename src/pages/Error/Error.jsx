import { Link } from "react-router-dom";
import {Reset} from "styled-reset";
import styles from "./Error.module.css";
import error from "../../assets/images/error.jpeg";
const Error = () => {
	return (
		<div className={styles.error}>
			<Reset />
			<img className={styles.errorImage} src={error} alt="404 Error" />
			<Link to="/">Return to Home</Link>
		</div>
	);
};

export default Error;
