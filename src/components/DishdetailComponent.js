import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function RenderDish({ dish }) {
  if (null != dish) {
    return (
      <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  } else {
    return <div></div>;
  }
}

// const Tasos = (
//   <div>
//     <p>Alex</p>
//   </div>
// );

function RenderComments({ comments }) {
  console.log(comments);
  if (comments != null) {
    return comments.map((comment) => (
      <ul key={comment.id} className="list-unstyled">
        <li className="mb-2">{comment.comment}</li>
        <li>
          -- {comment.author}{" "}
          {new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "short",
            day: "2-digit",
          }).format(new Date(Date.parse(comment.date)))}
        </li>
      </ul>
    ));
  } else return <div></div>;
}

const DishDetail = (props) => {
  console.log(props);
  return (
    <div className="container">
      <div className="col-12 col-md-5 m-1">
        <div className="row">
          <RenderDish dish={props.dish} />
        </div>
        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          {/* {props.comments
            ? props.comments.map((comment) => (
                <ul key={comment.id} className="list-unstyled">
                  <li className="mb-2">{comment.comment}</li>
                  <li>
                    -- {comment.author}{" "}
                    {new Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                    }).format(new Date(Date.parse(comment.date)))}
                  </li>
                </ul>
              ))
            : null} */}
          <RenderComments comments={props.comments} />
        </div>
      </div>
    </div>
  );
};

export default DishDetail;
