export const SECRET_PASS = process.env.SECRET_PASS || 'SECRET';

export const HOST = 'http://localhost';
export const PORT = '9000';

export const HTTP_SERVICE = `${HOST}:${PORT}/api`;

export const HTTP_USERS = 'users';
export const HTTP_LOGIN = 'login';
export const HTTP_VERIFY = 'verify';
export const HTTP_PEOPLE = 'people';
export const HTTP_HEALTH_CENTER = 'healthCenters';
export const HTTP_EPS = 'eps';
export const HTTP_PROFESSION = 'professions';

export const PATTERN_PASSWORD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])(?=.*[^\da-zA-ZÀ-ÿ\u00f1\u00d1]).{8,}$/;
