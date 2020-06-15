const formatDate = (value: Date): string =>
  new Intl.DateTimeFormat('pt-BR').format(value);

export default formatDate;
