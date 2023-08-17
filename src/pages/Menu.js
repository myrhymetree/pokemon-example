import {useEffect, useState} from 'react';
import { getMenuList } from '../apis/MenuAPIs';
import MenuItem from '../components/MenuItem';
import boxStyle from './Menu.module.css'
import {useNavigate} from 'react-router-dom';

function Menu() {

    const [menuList, setMenuList] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [paging, setPaging] = useState({
        limit: 20,
        offset: 0
    });
    const [current, setCurrent] = useState(1);
    const navigate = useNavigate();

    useEffect(
         () => {
            getMenuList({paging}).then(
                pokemons => {
                    setMenuList(pokemons)
                }
            )
        }
        ,[paging]
    )

    const onClickHandler = () => {
        navigate(`/menu/search?menuName=${searchValue}`);
    };

    const onPreviousClick = async () => {
        await setCurrent(current - 1);
        await setPaging({
            limit: paging.limit,
            offset: paging.offset - 20
        });
    }

    const onNextClick = async () => {
        await setCurrent(current + 1);
        await setPaging({
            limit: paging.limit,
            offset: paging.offset + 20
        });
    }

    return (
        <div className={boxStyle.MenuBox}>
            <h1>포켓몬 목록</h1>
            <input type="search" name="menuName" onChange={ e => setSearchValue(e.target.value) }></input>
            <button onClick={ onClickHandler }>검색</button>
            <div>
                {menuList.map(menu => <MenuItem key={menu.name} menu={menu}/>)}
            </div>
            <div>
                <button onClick={onPreviousClick} disabled={current === 1? true: false}>이전</button>
                <button onClick={onNextClick}>다음</button>
            </div>
        </div>
    )
}

export default Menu;