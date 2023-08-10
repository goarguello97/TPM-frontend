function useAge(dateString: string) {
  let today = new Date();
  let birthdate = new Date(dateString);
  let age = today.getFullYear() - birthdate.getFullYear();
  let differenceMonths = today.getMonth() - birthdate.getMonth();
  if (
    differenceMonths < 0 ||
    (differenceMonths === 0 && today.getDate() < birthdate.getDate())
  ) {
    age--;
  }
  return age;
}

export default useAge;
