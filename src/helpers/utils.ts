export const isArray = (a: []) => {
  return !!a && a.constructor === Array;
};

export const isObject = (a: []) => {
  return !!a && a.constructor === Object;
};

export const isPhone = (phone: string) => {
  return /^\+[1-9]\d{8,14}$/.test(phone);
};

export const handlePhoneNumber = (phone: string) => {
  if (phone) {
    return phone.replace(/^0/, '');
  }
  return phone;
};
