import { useState } from "react";
import { useNavigate } from "react-router";
import { BiSearch } from "react-icons/bi";
import styles from './Search.module.css';


export default function Search() {
    const [searchText, setSearchText ] = useState(""); 
    const navigate = useNavigate()
    const hadleSubmit = (e)=>{
        e.preventDefault();
        console.log(searchText);
        navigate('/?search=' + searchText);
    }
  return (
    <form className={styles.searchContainer} onSubmit={hadleSubmit}>
        <div className={styles.searchBox}>
            <input type="text" className={styles.searchInput} value={searchText} onChange={(e)=>setSearchText(e.target.value)} />
            <button type="submit" className={styles.searchButton} >
                <BiSearch />
            </button>
        </div>
    </form>
  );
}
