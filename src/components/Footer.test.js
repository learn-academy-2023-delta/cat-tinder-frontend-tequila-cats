import {render, screen} from "@testing-library/react" 
import  {BrowserRouter} from "react-router-dom"
import Footer from "../components/Footer"


describe("<Footer />", () => {
    it("it has a copyright", () => {
        render(
        <BrowserRouter>
            <Footer/>
        </BrowserRouter>
        )
        // screen.logTestingPlaygroundURL()
        const footer = screen.getByText(/© 2023 cat tinder \| jesus and miguel/i)
        expect(footer).toBeInTheDocument()
    })
})