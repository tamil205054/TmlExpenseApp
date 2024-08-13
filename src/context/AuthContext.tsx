import React,{createContext, useEffect, useState} from 'react'
import StorageHelper from '../helpers/StorageHelper';

export const AuthContext = createContext({});

export const AuthProvider = ({children}:any)=>{
    const [loading,setLoading] = useState(true);
    const [authToken,setAuthToken] = useState(null);
    const [showStartup,setShowStartup]= useState(true);

    const IsStartupViewed = async ()=>{
        var showStartup = await StorageHelper.get('setShowStartup')
        if(showStartup || showStartup == null){
            setShowStartup(true);
        }else{
            setShowStartup(false);
        }
        setLoading(false);
    };
    useEffect(()=>{
        IsStartupViewed();
    },[]);

    
    return  <AuthContext.Provider value={{loading,authToken,setAuthToken,setShowStartup,showStartup}}>{children}</AuthContext.Provider>
}