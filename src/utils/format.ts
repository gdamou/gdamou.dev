import { css } from 'styled-system/css'

const intl = new Intl.DateTimeFormat('en-GB')

export const formatDate = (date: Date) => {
  return intl.format(date)
}

export const formatText = (str: string) => {
  return str
    .replace(/\*{1,2}(.*?)\*{1,2}/g, `<strong class="${css({ color: 'primary' })}">$1</strong>`)
    .replace(/\n\n/g, '<br /><br />')
    .replace(/\n/g, '<br />')
}

export const formatTechs = (values: string[]) => {
  return values.toString().replaceAll(',', ' • ')
}
