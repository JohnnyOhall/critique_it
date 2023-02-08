const removeHTMLTags = string => {
  return string.replace(/(<([^>]+)>)/ig, '');
}

export { removeHTMLTags };