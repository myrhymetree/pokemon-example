import boxStyle from './Menu.module.css';
import {useState, useEffect} from 'react';
import {useSearchParams} from 'react-router-dom';
import MenuItem from '../components/MenuItem';
import { searchMenu } from '../apis/MenuAPIs';

function MenuSearchResult() {

    const [searchParam] = useSearchParams();
    const searchMenuName = searchParam.get('menuName');
    const [menuList, setMenuList] = useState([]);

    useEffect(
        () => {
            searchMenu(searchMenuName).then(
                result => {
                    setMenuList(result);
                }
            )
        },
        []
    );

    console.log(menuList);

    return (
        <>
            <h1>검색 결과야</h1>
            <div className={boxStyle.MenuBox}>
                { menuList.map(menu => <MenuItem menu={menu} />) }
            </div>
        </>
    );
}

export default MenuSearchResult;