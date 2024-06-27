import { Link , useMatch, useResolvedPath} from "react-router-dom";

function NavBar(){

return(

<div className="navbar">
    <Link to="/home" className="title">Lester</Link>
    <ul>
        <CustomLink to="/project">Projects</CustomLink>
        <CustomLink to="/contact">contact</CustomLink>
    </ul>
</div>)
}

function CustomLink({to, children, ...props}){
    const ResolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: ResolvedPath.pathname, end:true})
    return(
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>

    )
}
export default NavBar