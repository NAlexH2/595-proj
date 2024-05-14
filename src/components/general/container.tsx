import NavBar from "./navbar";

export default function Container({ children }: { children?: React.ReactNode }){
    return(<><div><NavBar/></div><main>{children}</main></>)
}