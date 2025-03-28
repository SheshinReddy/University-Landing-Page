import { createContext } from "react";

interface userContextType {
    universityName: string,
    setUniversityName: (universityName: string) => void
}

export const UniversityContext = createContext<userContextType | undefined >(undefined);