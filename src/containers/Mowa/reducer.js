// import { createReducer } from 'redux-starter-kit';
import * as Types from './actionType';

const initState = {
    tabs: ['HOME', 'Favorite', 'TOP100', 'ALLSITE', 'DEV'],
    dogDrip: [],
    bullpen: [],
    ilbe: [],
    clien: [],
    isDogDripDone: false,
    isBullpenDone: false,
    isIlbeDone: false,
    isClienDone: false,
};

export default function mowaReducer(state = initState, action) {
    switch (action.type) {
        case Types.CREATE_POST: {
            const { id, title } = action.payload;
            // Omit actual code
            console.info('£££ CREATE_POST CALLED IN REDUCER : ', id, title);
            return { ...state };
        }

        case Types.GET_DOGDRIPNET: {
            const { titleList, linkList } = action.payload;
            // Omit actual code

            const dogdrip = [];

            for (let i = 0; i < titleList.length; i++) {
                dogdrip.push({
                    from: '개드립',
                    title: titleList[i],
                    link: linkList[i],
                });
            }
            return { ...state, dogDrip: dogdrip, isDogDripDone: true };
        }

        case Types.GET_BULLPEN: {
            const {
                titleList,
                linkList,
                timeList,
                authorList,
            } = action.payload;
            // Omit actual code

            const data = [];

            for (let i = 0; i < titleList.length; i++) {
                data.push({
                    from: 'MLB',
                    title: titleList[i],
                    link: linkList[i],
                    time: timeList[i],
                    author: authorList[i],
                });
            }
            return { ...state, bullpen: data, isBullpenDone: true };
        }
        case Types.GET_ILBE: {
            const {
                titleList,
                linkList,
                timeList,
                authorList,
            } = action.payload;
            // Omit actual code

            const data = [];

            for (let i = 0; i < titleList.length; i++) {
                data.push({
                    from: 'ILBE',
                    title: titleList[i],
                    link: linkList[i],
                    time: timeList[i],
                    author: authorList[i],
                });
            }
            return { ...state, ilbe: data, isIlbeDone: true };
        }

        case Types.GET_CLIEN: {
            const {
                titleList,
                linkList,
                timeList,
                authorList,
            } = action.payload;
            // Omit actual code

            const data = [];

            for (let i = 0; i < titleList.length; i++) {
                data.push({
                    from: 'Clien',
                    title: titleList[i],
                    link: linkList[i],
                    time: timeList[i],
                    author: authorList[i],
                });
            }
            return { ...state, clien: data, isClienDone: true };
        }

        default:
            return state;
    }
}
