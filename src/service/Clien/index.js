import axios from 'axios';
import cheerio from 'cheerio';
import store from '../../store';
import * as action from '../../containers/Mowa/action';

const info = console.info;

export default async function fetching() {
    const titleList = [];
    const linkList = [];
    const timeList = [];
    const authorist = [];
    const url = 'https://www.clien.net/service/board/park';

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
            const target = `#div_content > div:nth-child(${i})`;
            const $ = cheerio.load(html);
            const link = $(target + ' > div.list_title > a').attr('href');
            const title = $(target + ' > div.list_title > a > span').text();
            const time = $(target + ' > div.list_time > span > span')
                .text()
                .split(' ');
            const writer = $(
                target + ' > div.list_author > span.nickname > span',
            ).text();
            const imgWriter = $(
                target + ' > div.list_author > span.nickname > img',
            ).attr('alt');

            if (writer !== '') {
                authorist.push(writer);
            } else {
                authorist.push(imgWriter);
            }
            titleList.push(title);
            linkList.push('https://www.clien.net' + link);
            timeList.push(time[1]);
        }
    }
    store.dispatch(action.getClien(titleList, linkList, timeList, authorist));
    return true;
}
