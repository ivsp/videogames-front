export function returnDateByTimeStamp(timeStamp) {
  const year = new Date(timeStamp).getFullYear();
  const month = new Date(timeStamp).getMonth();
  const day = new Date(timeStamp).getDate();
  if (month + 1 < 10 && day < 10) {
    return `${year}-0${month + 1}-0${day}`;
  } else if (month + 1 < 10 && day >= 10) {
    return `${year}-0${month + 1}-${day}`;
  } else if (month + 1 >= 10 && day < 10) {
    return `${year}-${month + 1}-0${day}`;
  } else {
    return `${year}-${month + 1}-${day}`;
  }
}
