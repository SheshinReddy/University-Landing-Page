import { ReactNode, useState } from "react";
import { UniversityContext } from "./UniversityProvider";

interface universityProviderProps {
    children: ReactNode
}

export const UniversityProvider = ({children}: universityProviderProps) => {
    const [universityName, setUniversityName] = useState<string>("Anurag University");
    return (
        <UniversityContext.Provider value={{universityName, setUniversityName}}>
            {children}
        </UniversityContext.Provider>
    )
}