const dayjsLib = require('dayjs');
type IDayJS = typeof dayjsLib;

export const useDayJS = (): IDayJS => {
  const utc = require('dayjs/plugin/utc');
  const dayJSTimezone = require('dayjs/plugin/timezone');
  const advancedFormat = require('dayjs/plugin/advancedFormat');
  const isToday = require('dayjs/plugin/isToday');
  const isSameOrAfter = require('dayjs/plugin/isSameOrAfter');
  const isSameOrBefore = require('dayjs/plugin/isSameOrBefore');

  dayjsLib.extend(utc);
  dayjsLib.extend(dayJSTimezone);
  dayjsLib.extend(advancedFormat);
  dayjsLib.extend(isToday);
  dayjsLib.extend(isSameOrAfter);
  dayjsLib.extend(isSameOrBefore);

  return dayjsLib;
};

export const dayjs = useDayJS();
