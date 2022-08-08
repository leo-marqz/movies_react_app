import { Fragment } from "react";
import { MoviesGrid } from "../components/MoviesGrid";
import Search from "../components/Search";

export function LandingPage()
{
    return (
        <Fragment>
            <Search />
            <MoviesGrid />
        </Fragment>
    );
}
