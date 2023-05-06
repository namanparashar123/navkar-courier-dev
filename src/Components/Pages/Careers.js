import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

export default function Careers() {
  return (
    <Accordion>
    <Accordion.Item eventKey="0">
      <Accordion.Header>Drivers</Accordion.Header>
      <Accordion.Body>
        <li>Flex Driver</li>
        <li>5-ton Truck Driver</li>
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="1">
      <Accordion.Header>Admin</Accordion.Header>
      <Accordion.Body>
        <li>Flex Driver</li>
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="2">
      <Accordion.Header>Operations</Accordion.Header>
      <Accordion.Body>
        <li>Dispatcher</li>
        <li>Supervisor</li>
        <li>Manager</li>
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
  )
}
