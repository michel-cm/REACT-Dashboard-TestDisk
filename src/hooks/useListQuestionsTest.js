import { useContext } from "react";
import { ListQuestionsTestContext } from "../contexts/ListQuestionsTestContext";

export function useListQuestionsTest() {
    const value = useContext(ListQuestionsTestContext);

    return value;
}

