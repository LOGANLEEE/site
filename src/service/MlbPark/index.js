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
    const url =
        'http://mlbpark.donga.com/mp/b.php?p=1&m=list&b=bullpen&query=&select=&user=';

    await axios
        .get(url)
        .then((res) => {
            if (res.status === 200) {
                Processor(res.data);
            }
        })
        .catch((err) => info(err));

    function Processor(html) {
        // 6 ~ 35.
        for (let i = 6; i < 36; i++) {
            // #container > div.contents > div.left_cont > div.tbl_box > table > tbody > tr:nth-child(6) > td:nth-child(3) > span.nick
            const target = `#container > div.contents > div.left_cont > div.tbl_box > table > tbody > tr:nth-child(${i})`;
            const $ = cheerio.load(html);
            const link = $(target + ' > td.t_left > a.bullpenbox').attr('href');
            const title = $(target + ' > td.t_left > a.bullpenbox').attr(
                'title',
            );
            const time = $(target + ' > td > span.date').text();
            const author = $(target + '> td > span.nick').text();
            titleList.push(title);
            linkList.push(link);
            timeList.push(time);
            authorList.push(author);
        }
    }
    store.dispatch(action.getBullPen(titleList, linkList, timeList,authorList));
    return true;
}
