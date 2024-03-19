function formatDate(dateString) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const date = new Date(dateString);
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const suffix = getDaySuffix(day);
  return `${day}${suffix} ${month} ${year}`;
}

function getDaySuffix(day) {
  if (day >= 11 && day <= 13) {
      return 'th';
  }
  switch (day % 10) {
      case 1:
          return 'st';
      case 2:
          return 'nd';
      case 3:
          return 'rd';
      default:
          return 'th';
  }
}

export default formatDate;