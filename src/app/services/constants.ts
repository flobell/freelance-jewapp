//Hostienda
//export const SERVER_HOST = 'http://192.168.0.105:8888/JewApp/APIJEWAPP/public';
//Casa
export const SERVER_HOST = 'http://192.168.0.107:8888/JewApp/APIJEWAPP/public';
//servidor
//export const SERVER_HOST = 'http://phpstack-160254-1066998.cloudwaysapps.com/public';

export const URL_API = SERVER_HOST + '/api'
export const URL_API_POST_REGISTER_USER = URL_API + '/user/create';
export const URL_API_POST_LOGIN_USER = URL_API + '/user/login';
export const URL_API_GET_REGISTER_QUESTIONS = URL_API + '/user/question';
export const URL_API_GET_ALL_COMMUNITIES = URL_API + '/user/community';
export const URL_API_GET_USER = URL_API + '/user/index';
export const URL_API_GET_BUSINESS_CATEGORIES = URL_API + '/systemdata/indexcategory';
export const URL_API_GET_BUSINESS_SUBCATEGORIES = URL_API + '/systemdata/indexsubcategory';
export const URL_API_GET_FIND_BUSINESS_SUBCATEGORY = URL_API + '/systemdata/indexfindsubcategory';
export const URL_API_GET_FILTER_BUSINESS = URL_API + '/systemdata/indexbusiness';

export const TOKEN_KEY = 'TOKEN_KEY';