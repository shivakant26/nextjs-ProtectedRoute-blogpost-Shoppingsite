import { useRouter } from "next/router";

const Dashboard = () =>{
    const router = useRouter();
    const logout = () =>{
        if(typeof window !== "undefined"){
            localStorage.clear();
            router.push("/")
        }
    }
    return(
        <>
        <h1>Welcome to Dashboard</h1>
        <button onClick={logout}>Logout</button>
        </>
    )
}
export default Dashboard;