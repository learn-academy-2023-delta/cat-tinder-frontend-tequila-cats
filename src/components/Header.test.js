
import {render, screen} from "@testing-library/react" 
import  {BrowserRouter} from "react-router-dom"
// import userEvent from "@testing-library/user-event"
import Header from "../components/Header"

describe("<Header />", () => {
    it("it has a cat link", () => {
        render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
        )
        // screen.logTestingPlaygroundURL()
        const link = screen.getByText('Cat')
        expect(link).toBeInTheDocument()
    })

    it("it has a add new cat link", () => {
        render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
        )
        // screen.logTestingPlaygroundURL()
        const newCat = screen.getByText('Add New Cat')
        expect(newCat).toBeInTheDocument()
    })

    it("it has a sponsor a cat link", () => {
        render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
        )
        // screen.logTestingPlaygroundURL()
        const sponsorCat = screen.getByText('Sponsor a cat')
        expect(sponsorCat).toBeInTheDocument()
    })
})