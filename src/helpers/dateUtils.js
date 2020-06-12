import moment from 'moment/moment';
import { DATE_FORMATS } from '../consts';

moment.locale('ru');


const timeStampToDate = (timestamp, format = 'DD MMMM YYYY') => moment(timestamp).format(format);
const simpleDate = (date) => {
  if (date) {
    return moment(date).format(DATE_FORMATS.simpleDate);
  }

  return '';
};

export {
  timeStampToDate,
  simpleDate,
};
