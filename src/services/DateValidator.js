export default class DateValidator {
  static isDateValid(date) {
    return !isNaN(new Date(date).getTime());
  }
}
