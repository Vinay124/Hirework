import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';

const Certifications = ({ model, setModel }) => {

    // const [show, setShow] = useState(false);
    const [formData, setFormData] = useState({
      certName: '',
      certId: '',
      certUrl: '',
      certValidityFromMonth: '',
      certValidityFromYear: '',
      certValidityToMonth: '',
      certValidityToYear: '',
      doesNotExpire: false,
    });
    const [validated, setValidated] = useState(false);
  
    useEffect(() => {
      const savedData = localStorage.getItem('certification');
      if (savedData) {
        setFormData(JSON.parse(savedData));
      }
    }, []);
  
    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value
      });
    };
  
    const handleSubmit = (e) => {
      const form = e.currentTarget;
      if (form.checkValidity() === false) {
        e.preventDefault();
        e.stopPropagation();
      } else {
        e.preventDefault();
        localStorage.setItem('certification', JSON.stringify(formData));
        alert('Data saved!');
        setModel(false);
      }
      setValidated(true);
    };

  return (
    <>
    <Modal show={model} onHide={() => setModel(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Certification</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formCertName">
              <Form.Label>Certification Name</Form.Label>
              <Form.Control
                required
                type="text"
                name="certName"
                value={formData.certName}
                onChange={handleChange}
                placeholder="Please enter your certification name"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a certification name.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCertId">
              <Form.Label>Certification Completion ID</Form.Label>
              <Form.Control
                required
                type="text"
                name="certId"
                value={formData.certId}
                onChange={handleChange}
                placeholder="Please mention your course completion ID"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a certification completion ID.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCertUrl">
              <Form.Label>Certification URL</Form.Label>
              <Form.Control
                required
                type="url"
                name="certUrl"
                value={formData.certUrl}
                onChange={handleChange}
                placeholder="Please mention your completion URL"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid URL.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCertValidity">
              <Form.Label>Certification Validity</Form.Label>
              <Row>
                <Col>
                  <Form.Control
                    required
                    as="select"
                    name="certValidityFromMonth"
                    value={formData.certValidityFromMonth}
                    onChange={handleChange}
                  >
                    <option value="">MM</option>
                    {Array.from({ length: 12 }, (_, i) => i + 1).map(month => (
                      <option key={month} value={month}>{month < 10 ? `0${month}` : month}</option>
                    ))}
                  </Form.Control>
                </Col>
                <Col>
                  <Form.Control
                    required
                    type="number"
                    name="certValidityFromYear"
                    value={formData.certValidityFromYear}
                    onChange={handleChange}
                    placeholder="YYYY"
                    min="1900"
                    max={new Date().getFullYear()}
                  />
                </Col>
                <Col>
                  <Form.Label>To</Form.Label>
                </Col>
                {!formData.doesNotExpire && (
                  <>
                    <Col>
                      <Form.Control
                        required
                        as="select"
                        name="certValidityToMonth"
                        value={formData.certValidityToMonth}
                        onChange={handleChange}
                      >
                        <option value="">MM</option>
                        {Array.from({ length: 12 }, (_, i) => i + 1).map(month => (
                          <option key={month} value={month}>{month < 10 ? `0${month}` : month}</option>
                        ))}
                      </Form.Control>
                    </Col>
                    <Col>
                      <Form.Control
                        required
                        type="number"
                        name="certValidityToYear"
                        value={formData.certValidityToYear}
                        onChange={handleChange}
                        placeholder="YYYY"
                        min="1900"
                        max={new Date().getFullYear() + 10}
                      />
                    </Col>
                  </>
                )}
              </Row>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDoesNotExpire">
              <Form.Check
                type="checkbox"
                name="doesNotExpire"
                label="This certification does not expire"
                checked={formData.doesNotExpire}
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Save
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Certifications