import {render, screen} from "@testing-library/react" 
import  {BrowserRouter} from "react-router-dom"
import NotFound from "../pages/NotFound"



describe("<NotFound />", () => {
    it("it renders", () => {
        render(
        <BrowserRouter>
            <NotFound/>
        </BrowserRouter>
        )
        const rendersNotFound = screen.getByText(/Oops! You seem to be lost./i)
        expect(rendersNotFound).toBeInTheDocument()
    })
})