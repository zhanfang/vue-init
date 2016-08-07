/**
 * 获取cookie
 * @param {String} name
 * @return {String}
 */
export function getCookie(key) {
    var r = new RegExp('(?:^|;+|\\s+)' + key + '=([^;]*)'),
        m = document.cookie.match(r);
    return (!m ? '' : m[1]);
}

/**
 * 获取QQ号
 * @return {Number}
 */
export function getUin () {
    var u = getCookie('uin');
    return !u ? null : parseInt(u.substring(1, u.length), 10);
}
