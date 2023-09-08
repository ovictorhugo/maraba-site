import { Route, Routes } from "react-router-dom";
import { Maraba } from "./pages/Maraba";


export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Maraba/>}/>
        </Routes>
    )
}