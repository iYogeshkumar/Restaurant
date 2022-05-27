import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <>
      <div className={styles.item_box}>
        <div className={styles.main}>
          <div>
            <img className={styles.img} src={props.url} alt="food" />
          </div>
          <div>
            <h1 className={styles.name}>{props.name}</h1>
            <p className={styles.greytext}>{props.category}</p>
            <p className={styles.greytext}>Cost {props.total_cost} for one</p>
            <p>Min ₹50 • Up to 30 min</p>
          </div>
          <div>
            <p className={styles.rating}>{props.rating}</p>
            <p className={styles.greytext}>{props.total_votes} votes</p>
            <p className={styles.greytext}>{props.total_reviews} reviews</p>
          </div>
        </div>
        <div>
          <button className={styles.button}>Order Online</button>
        </div>
      </div>
    </>
  );
};

export default Card;
