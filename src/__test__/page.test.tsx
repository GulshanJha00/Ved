import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import Page from '@/app/page'

test("Check for text",()=>{
  render(<Page/>)
  const text = screen.getByText(/Find all your study material/)
  expect(text).toBeInTheDocument()
})
