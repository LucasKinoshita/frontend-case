import { useEffect, useState } from "react";
import { FilterButtons } from "./components/FilterButtons";
import { Transactions } from "./components/Transactions";
import "./index.css";

interface IResponseList {
  items: {
    id: string;
    description: string;
    label: string;
    entry: "DEBIT" | "CREDIT";
    amount: number;
    name: string;
    dateEvent: string;
    status: string;
  }[];
  date: string;
}

function IBanking() {
  const [transactions, setTransactions] = useState<IResponseList[]>([]);
  const [selectedEntry, setSelectedEntry] = useState<
    "ALL" | "DEBIT" | "CREDIT"
  >("ALL");

  const getTransactions = async () => {
    const token = localStorage.getItem("auth_token");

    if (!token) {
      console.error("Token not found.");
      return;
    }

    const response = await fetch("http://localhost:3000/list", {
      method: "GET",
      headers: {
        token: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    setTransactions(data.results);
  };

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <div className="ibanking">
      <FilterButtons
        selectedEntry={selectedEntry}
        setSelectedEntry={setSelectedEntry}
      />

      <Transactions selectedEntry={selectedEntry} transactions={transactions} />
    </div>
  );
}

export { IBanking };
