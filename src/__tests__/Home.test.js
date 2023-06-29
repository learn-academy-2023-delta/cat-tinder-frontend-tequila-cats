import {render, screen} from "@testing-library/react" 
import  {BrowserRouter} from "react-router-dom"
import Home from "../pages/Home"

describe("<Home />", () => {
    it("it renders", () => {
        render(
        <BrowserRouter>
            <Home />
        </BrowserRouter>
        )
        const homeText = screen.getByText(/Home/i)
        expect(homeText).toBeInTheDocument()
        
    })
})