import styles from './Button.module.css'

interface ButtonPorp{
  color?: 'primary' |'secondary' | 'danger' | 'sucess';
}

export function Button({color = 'primary'}:ButtonPorp){
  return (
    <button className={`${styles.button} ${styles[color]}`} >Enviar</button>
  )
}