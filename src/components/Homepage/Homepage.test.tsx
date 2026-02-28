import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import Homepage from "./Homepage"

describe("Homepage Text", () => {
    beforeEach(() => {
        render(<Homepage />)
    })
    test("Words testing", () => {
        expect(screen.getByText(/Find all your study material/i)).toBeInTheDocument()
    })

    test("Buttons", () => {
        const GetNotes = screen.getByRole("link", { name: /Get Notes/ })
        const VedLabs = screen.getByRole("link", { name: /Ved Labs/ })
        expect(GetNotes).toBeInTheDocument();
        expect(VedLabs).toBeInTheDocument();
        expect(GetNotes).toHaveAttribute("href", "/notes")
        expect(VedLabs).toHaveAttribute("href", "/practice")
    })
})
