import React, { Component } from 'react';
import { Card, CardImg,CardImgOverlay, CardText, CardBody,CardTitle } from 'reactstrap';

class DishDetail extends Component{

    renderComments(comments) {
        if (comments != null) {
          let options = { year: "numeric", month: "short", day: "numeric" };
          return comments.map(comment => (
            <ul key={comment.id} className="list-unstyled">
              <li className="mb-2">{comment.comment}</li>
              <li>
                -- {comment.author}{" "}
                {/* {new Date(comment.date).toLocaleDateString("en-US", options)} */}
                {new Intl.DateTimeFormat('en-US', {year: 'numeric', month:'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}
              </li>
            </ul>
          ));
        } else return <div />;
      }

    render(){

        const  {dish} = this.props;
        if(null != dish){
            console.log(dish.category);
        return(
            <div class="container">
            <div className="row">
                <div  className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {this.renderComments(dish.comments)}
                </div>
            </div>
            </div>
        );
        }
        else{
            console.log("Empty Div")
            return(
                <div></div>
            );
        }
    }
}

export default DishDetail;