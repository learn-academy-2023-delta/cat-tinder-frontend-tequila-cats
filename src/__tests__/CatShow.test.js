import {render, screen} from "@testing-library/react" 
import  {MemoryRouter, Routes, Route} from "react-router-dom"
import CatShow from "../pages/CatShow"
import mockCats from "../mockCats"


const renderShow = () => {
    render(
        <MemoryRouter initialEntries={["/catshow/1"]}>
            <Routes>
             <Route path = "catshow/:id" element = {<CatShow cats={mockCats}/>}/>
            </Routes>
        </MemoryRouter>
    )
}

describe("<CatShow />", () => {
    it("renders cat card with enjoys", () => {
        renderShow()
            const catEnjoys = screen.getByText(`I enjoy ${mockCats[0].enjoys}`)
            expect(catEnjoys).toBeInTheDocument()
        })

    it("renders cat card with age", () => {
        renderShow()
            const catAge = screen.getByText(`Age: ${mockCats[0].age}`)
            expect(catAge).toBeInTheDocument()
        })
    it("renders cat card with name", () => {
        renderShow()
            const catName = screen.getByText(`My name is ${mockCats[0].name}!`)
            expect(catName).toBeInTheDocument()
        })
    it("renders cat card with image", () => {
        renderShow()
            const catImage = screen.getByRole('img', {
                name: /mittens/i
              })
            expect(catImage).toBeInTheDocument()
        })
})