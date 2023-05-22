import Profile from "./Profile";
import TicTacToe from "./TicTacToe";
import DarkMode from "./DarkMode";
import Todo from "./Todo";

const App = () => {
    return (
        <div className="app">
            <Profile />
            <DarkMode />
            <TicTacToe />
            <Todo />
        </div>
    )
};
export default App;
