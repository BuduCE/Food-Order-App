import styles from './Input.module.css'

const Input = (props) => {
  return (
    <div className={styles.input}>
      <label>{props.label}</label>
      <input type="number" />
    </div>
  )
}

export default Input