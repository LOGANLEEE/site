import * as Types from './actionType';

export function temp(dummy) {
    return {
        type: Types.TEMP,
        payload: dummy,
    };
}
export function getDogDripNet(titleList, linkList) {
    return {
        type: Types.GET_DOGDRIPNET,
        payload: { titleList, linkList },
    };
}

export function getBullPen(titleList, linkList, timeList,authorList) {
    return {
        type: Types.GET_BULLPEN,
        payload: { titleList, linkList, timeList,authorList },
    };
}

export function getIlbe(titleList, linkList, timeList, authorList) {
    return {
        type: Types.GET_ILBE,
        payload: { titleList, linkList, timeList, authorList },
    };
}

export function getClien(titleList, linkList, timeList, authorList) {
    return {
        type: Types.GET_CLIEN,
        payload: { titleList, linkList, timeList, authorList },
    };
}

export function addPost(id, title) {
    return {
        type: Types.CREATE_POST,
        payload: { id, title },
    };
}
