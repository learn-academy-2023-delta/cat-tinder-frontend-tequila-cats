import {render, screen} from "@testing-library/react" 
import  {BrowserRouter} from "react-router-dom"
import CatIndex from "../pages/CatIndex"
import mockCats from "../mockCats"


describe("<CatIndex />", () => {
    it("renders cat cards with name", () => {
        render(
            <BrowserRouter>
            <CatIndex cats={mockCats}/>
            </BrowserRouter>
        )
        mockCats.forEach(cat => {
            const catName = screen.getByText(cat.name)
            expect(catName).toBeInTheDocument()
        })
    })
    it("renders cat cards with image", () => {
        render(
        <BrowserRouter>
            <CatIndex cats={mockCats}/>
        </BrowserRouter>
        )
        const catImage = screen.getByRole('img', {
            name: /profile of a cat named mittens/i
          })
          expect(catImage).toBeInTheDocument()
    })
    it("renders cat cards with age", () => {
        render(
        <BrowserRouter>
            <CatIndex cats={mockCats}/>
        </BrowserRouter>
        )
        const catAge = screen.getByRole('heading', {
            name: /i am 5 kitty years old\./i
          })
          expect(catAge).toBeInTheDocument()
    })
})