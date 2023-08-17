import itemStyle from './MenuItem.module.css';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import { getPokemonImage } from '../apis/MenuAPIs';

function MenuItem({menu}) {

    const [image, setImage] = useState('');

    useEffect(
        () => {
            getPokemonImage(menu.url).then(
                image => {
                    setImage(image)
                }
            )
        },
        []
        )

    return(
        
            <div className={itemStyle.MenuItem}>
                <h3>이름 : {menu.name}</h3>
                <Link to={`/menu/${menu.name}`}>
                    <img src={image} style={{maxWidth: 1000}}/>
                </Link>
            </div>

    );
}

export default MenuItem;