import React, { useState } from "react"
import ReactDOM from "react-dom"
import { Button, FloatingLabel, Form } from "react-bootstrap"
import { shops } from "./elements"
import "bootstrap/dist/css/bootstrap.min.css"

type UnArray<T> = T extends Array<infer U> ? U : never
const App = () => {
  const [state, setState] = useState<string>("")
  const [stateValue, setStateValue] = useState<UnArray<typeof shops>["value"]>("admin")
  return (
    <Form>
      <Form.Group className="mb-3" controlId="FormPayment">
        <Form.Label />
        <Form.Control type="number" placeholder="Введите свой ID" value={state} onChange={event => setState(event.target.value)} />
      </Form.Group>

      <FloatingLabel label="Выберите товар для покупки!">
        <Form.Select onChange={e => setStateValue((e.target as EventTarget & { value: typeof stateValue }).value)} value={stateValue}>
          {shops.map(x => (
            <option value={x.value} disabled={x.disabled || false}>
              {x.text}
            </option>
          ))}
        </Form.Select>
      </FloatingLabel>

      <Button
        variant="primary"
        type="submit"
        onClick={e => {
          e.preventDefault()
          setState("")
          setStateValue("admin")
        }}
        disabled={!state || !stateValue}
      >
        Отправить
      </Button>
    </Form>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
