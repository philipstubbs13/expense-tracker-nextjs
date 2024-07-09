import AddTransacction from "@/components/AddTransaction";
import { Balance } from "@/components/Balance";
import Guest from "@/components/Guest";
import { currentUser } from "@clerk/nextjs/server";
import IncomeExpense from "@/components/IncomeExpense";
import TransactionList from "@/components/TransactionList";

const HomePage = async () => {
  const user = await currentUser();

  if (!user) {
    return <Guest />;
  }

  return (
    <main>
      <h2>Welcome, {user.firstName}</h2>
      <Balance />
      <IncomeExpense />
      <AddTransacction />
      <TransactionList />
    </main>
  );
}
 
export default HomePage;