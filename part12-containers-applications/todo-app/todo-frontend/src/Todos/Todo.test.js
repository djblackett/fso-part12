import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Todo from "./Todo";

test("does stuff", async () => {
  render(<Todo todo={{text: "Hello there!", done: false }} onClickComplete={() => {}} onClickDelete={() => {}}/>)

  const textSpan = await screen.findByTestId("todo-text");
  // console.log(textSpan);
  expect(textSpan).toHaveTextContent("Hello there!")

})
