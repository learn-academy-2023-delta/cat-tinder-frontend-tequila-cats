
import {render, screen} from "@testing-library/react" 
import  {BrowserRouter} from "react-router-dom"
import Header from "../components/Header"

describe("<Header />", () => {
    it("it has a Cat link", () => {
        render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
        )
        const link = screen.getByText("Cat")
        expect(link).toBeInTheDocument()
    })

    it("it has a add new cat link", () => {
        render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
        )
        const newCat = screen.getByText(/Add New Cat/i)
        expect(newCat).toBeInTheDocument()
    })

    it("it has a sponsor a cat link", () => {
        render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
        )
        const sponsorCat = screen.getByText(/Sponsor a cat/i)
        expect(sponsorCat).toBeInTheDocument()
    })
})