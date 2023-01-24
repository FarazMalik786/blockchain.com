import React from 'react'
import style from './Style.module.css'
import cn from 'classnames'

function Button({children,
  className,
  secondary,
  primary,
  outline,
  light,
  shadow,
  icon,
  ...props}) {
  return (
      <div {...props} className={cn(
    style.button,
    className,
    primary && style.primary,
    secondary && style.secondary,
    outline && style.outline,
    light && style.light,
    shadow && style.shadow,
  )}>
    {children}
    <p>ok </p>
    {icon && <img className={style.icon} src={icon} alt=''/>}
  </div>
  )
}

export default Button
