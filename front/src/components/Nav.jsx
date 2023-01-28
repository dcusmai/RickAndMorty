import SearchBar from "./SearchBar"

const Nav = ({onSearch}) => {
    return(
        <nav>
            <SearchBar onSeach={onSearch}></SearchBar>
        </nav>
    )
}

export default Nav; 