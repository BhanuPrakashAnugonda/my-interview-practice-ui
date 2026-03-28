jest.mock("@/services/api")
import { fetchUsers } from "@/services/api";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { renderHook } from "@testing-library/react";
import { useUsers } from "./useUsers";

jest.mock("@/services/api")


const mockWrapper = () =>{
    const queryClient = new QueryClient();
    return ({children}:any) =>(
        <QueryClientProvider client={queryClient}>
        {children}
        </QueryClientProvider>
    )
}

test('should be loading initially',()=>{
    (fetchUsers as jest.Mock).mockResolvedValue([])

    const {result} = renderHook(()=>useUsers(), {wrapper:mockWrapper()})
    expect(result.current.loading).toBe(true)
})