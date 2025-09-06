import React from "react";
import Card from "react-bootstrap/card";
import Button from "react-bootstrap/Button";

function ProjectCard(props) {
  return (
    <div className="col-md-6">
      <card className="h-100 shadow">
        <Card.Img variant="top" src={props.ProjectImage} />
        <Card.Body className="p-5">
          <Card.Title className="fw-bold text-uppercase mb-4 fs-3">
            {props.ProjectName}
          </Card.Title>
          <Card.Text>{props.ProjectDesc}</Card.Text>
          <Button
            className="shadow text-capitalize"
            variant="outline-primary"
            onClick={() => window.open(props.ProjectLink, "_blank")}
          >
            View Project
          </Button>
        </Card.Body>
      </card>
    </div>
  );
}

export default ProjectCard;
