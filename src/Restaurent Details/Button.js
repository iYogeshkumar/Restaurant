import styles from './Button.module.css'

const Button = (props) => {
  const onClick = () => {
    props.onClick(props.text)
  }

  return <button className={styles.button} onClick={onClick}>{props.text}</button>
}

export default Button
