import axios from 'axios';
import cheerio from 'cheerio';
import store from '../../store';
import * as action from '../../containers/Mowa/action';

const info = console.info;

export default async function fetching() {
    const titleList = [];
    const linkList = [];
    const timeList = [];
    const authorList = [];
    const url = '/list/ilbe';
    await axios
        .get(url)
        .then((res) => {
            if (res.status === 200) {
                Processor(res.data);
            }
        })
        .catch((err) => info(err));

    function Processor(html) {
        // 7~36
        for (let i = 7; i < 37; i++) {
            // #content-wrap > div.board-wrap > div.board-list > ul > li:nth-child(32) > span.global-nick.nick > a
            const target = `#content-wrap > div.board-wrap > div.board-list > ul > li:nth-child(${i})`;
            const $ = cheerio.load(html);
            const link = $(target + ' > span.title > a').attr('href');
            const title = $(target + ' > span.title > a').text();
            const time = $(target + ' > span.date').text();
            const author = $(target + '> span.global-nick.nick > a').text();
            titleList.push(title);
            authorList.push(author);
            linkList.push('https://www.ilbe.com' + link);
            timeList.push(time);
        }
    }
    store.dispatch(action.getIlbe(titleList, linkList, timeList, authorList));
    return true;
}
