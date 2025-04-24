import React from "react";
import Profile from "./components/Profile";
import Statistics from "./components/Statistics";
import FriendList from "./components/FriendList";
import TransactionHistory from "./components/TransactionHistory";
import user from "./data/user.json";
import data from "./data/data.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Соціальний профіль</h1>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <h1>Статистика</h1>
      <Statistics title="Upload stats" stats={data} />

      <h1>Друзі</h1>
      <FriendList friends={friends} />

      <h1>Історія транзакцій</h1>
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
