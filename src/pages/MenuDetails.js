import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import { getMenuDetail } from '../apis/MenuAPIs';

function MenuDetails() {

    const {menuName} = useParams();
    const [menu, setMenu] = useState({});
    const [frontImage, setFrontImage] = useState({});
    const [backImage, setBackImage] = useState({});

    useEffect(
        () => {
            getMenuDetail(menuName).then(
                result => {
                    setMenu(result);
                    setFrontImage(result.sprites.front_default);
                    setBackImage(result.sprites.back_default)
                }
            )
        },
        []
    );

    return (
        <>
            <h2>포켓몬 상세 설명</h2>
            <h3>포켓몬 이름 : {menu.name}</h3>
            {/* <h3>메뉴 가격 : {menu.menuPrice}</h3>
            <h3>메뉴 종류 : {menu.categoryName}</h3>
            <h3>메뉴 설명 : {menu.detail.description}</h3> */}
            <h3>앞태 : <img src={frontImage} style={{maxWidth: 500}}/></h3>
            <h3>뒷태 : <img src={backImage} style={{maxWidth: 500}}/></h3>
        </>
    );
}

export default MenuDetails;