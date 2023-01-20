import React, { useState, useContext, useEffect, ReactNode } from "react";

type AppProviderProps = {
    children: ReactNode;
}
type dataItemsProps = {
    id: number
    summary: string,
    title: string,
    imageUrl: string
    publishedAt: string
}
type AppProviderContext = {
    data: dataItemsProps[];
    loading: boolean
}

const AppContext = React.createContext({} as AppProviderContext);

const AppProvider = ({ children }: AppProviderProps) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    async function fetchData() {
        setLoading(true);
        try {
            const data = await fetch(
                "https://api.spaceflightnewsapi.net/v3/articles"
            );
            const result = await data.json();
            if (result) {
                setData(result);
            } else {
                setData([]);
            }
            setLoading(false);
        } catch {
            console.log("ERROR");
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <AppContext.Provider value={{ data, loading }}>
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};
export { AppContext, AppProvider };
