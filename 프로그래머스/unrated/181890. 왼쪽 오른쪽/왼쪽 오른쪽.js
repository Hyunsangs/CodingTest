function solution(str_list) {
    let lIndex = str_list.indexOf('l');
    let rIndex = str_list.indexOf('r');

    if (lIndex > -1 && rIndex > -1) {
        if (lIndex < rIndex) {
            return str_list.slice(0, lIndex);
        } else {
            return str_list.slice(rIndex + 1);
        }
    } else if (lIndex > -1) {
        return str_list.slice(0, lIndex);
    } else if (rIndex > -1) {
        return str_list.slice(rIndex + 1);
    } else {
        return [];
    }
}