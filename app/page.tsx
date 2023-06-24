/* Components */
import Login from "./components/Login/Login";
import { Posts } from "./components/Posts/Posts";

export default function IndexPage() {
    return (
        <>
            <Login />
        </>
    );
}

export const metadata = {
    title: "CodeLeap",
};
