const removeHTMLTags = string => {
  return string.replace(/(<([^>]+)>)/ig, '');
}

const getDate = () => {
  const d = new Date();
  let day = d.getDay()
  let month = d.getMonth()
  const year = d.getFullYear()

  month = month < 10 ? `0${month}` : month
  day = day < 10 ? `0${day}` : day

  return `${year.toString()}-${month.toString()}-${day.toString()}`
}

export { removeHTMLTags, getDate };