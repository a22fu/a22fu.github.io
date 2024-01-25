import styles from "./Mainnav.module.css"
import navlinks from "../../constants/navlinks.js"

function Mainnav() {
  return (
      <nav className={styles.navbar}>
        <ul className={styles.list}>
          {navlinks.map((nav, id) =>
            <li className={styles.item} key={id} >
              <a href = {`#${nav.id}`}>
                {nav.text}
              </a>
            </li>
          )}
        </ul>
      </nav>
    
  );
}

export default Mainnav;