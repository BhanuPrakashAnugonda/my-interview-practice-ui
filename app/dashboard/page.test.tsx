import { useUsers } from "@/hooks/useUsers";
import {render, screen} from "@testing-library/react"
import Dashboard from "./page";

// ===========================Mock=============================
jest.mock('@/hooks/useUsers');
jest.mock('@/components/Search',()=> (props: any) =>{
    return (
        <button onClick={() => props.onSearch("john")}>
            Mock Search
        </button>
    )
})

jest.mock("@/components/Table", () => (props: any) => {
  return (
    <div>
      Table Component - Search: {props.search}
    </div>
  );
});

test('showing loading state',()=>{
    (useUsers as jest.Mock).mockReturnValue({
        users:[],
        loading:true
    })

    render (<Dashboard />)
    expect(screen.getByText("Loading...")).toBeInTheDocument();
})

test('Showing actual Dashboard',(()=>{
    (useUsers as jest.Mock).mockReturnValue({
        users:[],
        loading:false
    })

    render (<Dashboard />)
    expect(screen.getByText("Users Dashboard")).toBeInTheDocument();
}))
