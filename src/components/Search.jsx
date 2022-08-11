import { useState } from "react";
import { useNavigate } from "react-router";
import { BiSearch } from "react-icons/bi";
import styles from './Search.module.css';
import { useQuery } from "../hooks/useQuery";


export default function Search() {
    const [searchText, setSearchText ] = useState(""); 
    const navigate = useNavigate();
    const search = useQuery().get('search');
   

    const hadleSubmit = (e)=>{
        e.preventDefault();
    }

  return (
    <form className={styles.searchContainer} onSubmit={hadleSubmit}>
        <div className={styles.searchBox}>
            <input 
                type="text" 
                className={styles.searchInput} 
                value={search??""} 
                placeholder="Search movie..."
                aria-label="Search movies..."
                onChange={(e)=>{
                    const value = e.target.value;
                    navigate('/?search=' + value);
                    return setSearchText(value);
                }}
            />
                <BiSearch className={styles.searchButton} color="black" />
        </div>
    </form>
  );
}
