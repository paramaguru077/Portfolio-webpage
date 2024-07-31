import React,{createContext,useEffect,useState} from 'react'

export const ThemeContext = createContext();

//export const useTheme = useContext(ThemeContext);



export const ThemeProvider = ({children}) =>{
    const [theme,setTheme] = useState(
        () => localStorage.getItem('theme') || 'ligth'
    );

    useEffect(()=>{
        document.body.setAttribute('data-theme',theme);
        localStorage.setItem("theme",theme);
    },[theme]);

   const toggleTheme =()=>{
        console.log("theme switch");
        setTheme((prevTheme)=>(prevTheme==='ligth'?'dark':'ligth'));
    };

    return (
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )

};



