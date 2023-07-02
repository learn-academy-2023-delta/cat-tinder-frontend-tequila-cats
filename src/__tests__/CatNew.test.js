import {render, screen} from "@testing-library/react" 
import  {BrowserRouter} from "react-router-dom"
import CatNew from "../pages/CatNew"

const setUp = () => {
    render(
        <BrowserRouter>
            <CatNew />
        </BrowserRouter>
    )
}

describe("<CatNew />", () => {
    it("renders page header", () => {
        setUp()
            expect(screen.getByRole('heading', {
                name: /create your cat\-vatar!!/i
              })).toBeInTheDocument()
        })
    it("renders name label", () => {
        setUp()
            expect(screen.getByText(/name/i)).toBeInTheDocument()
        })
    it("renders page name input", () => {
        setUp()
            expect(screen.getByPlaceholderText(/What is your cat's name\?/i)).toBeInTheDocument()
        })
        it("renders age label", () => {
            setUp()
                expect(screen.getByText(/age/i)).toBeInTheDocument()
            })
        it("renders page age input", () => {
            setUp()
                expect(screen.getByRole('spinbutton')).toBeInTheDocument()
            })
            it("renders enjoys label", () => {
                setUp()
                    expect(screen.getByText(/what do you enjoy\?/i)).toBeInTheDocument()
                })
            it("renders page enjoys input", () => {
                setUp()
                    expect(screen.getByPlaceholderText(/What CATivities is your cat into\?/i)).toBeInTheDocument()
                })
            it("renders image label", () => {
                setUp()
                    expect(screen.getByText(/picture/i)).toBeInTheDocument()
                })
            it("renders page image input", () => {
                setUp()
                    expect(screen.getByPlaceholderText(/Share a picture of your fury friend!/i)).toBeInTheDocument()
                })
            it("renders submit button", () => {
                setUp()
                    expect(screen.getByRole('button', {
                        name: /submit/i
                      })).toBeInTheDocument()
                })

    })