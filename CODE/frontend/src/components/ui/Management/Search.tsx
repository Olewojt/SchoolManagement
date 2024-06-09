import classes from "./Search.module.scss"
import {SearchIcon} from "assets/icons/Icon.tsx"
import {ChangeEvent} from "react";

interface SearchProps {
    onInput: (event: ChangeEvent<HTMLInputElement>) => void;
    value: string;
}

const Search = (props: SearchProps) => {

    return (
        <div className={classes.content}>
            <SearchIcon/>
            <input type="text" name="search" placeholder="Search" onInput={props.onInput} value={props.value}></input>
        </div>
    )
}

export default Search;