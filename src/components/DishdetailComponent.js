import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {

    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        if (dish != null)
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        
        else
            return (
                <div></div>
            );
    }

    renderComments(comments) {
        if (comments != null) {
            const coms = this.props.comments.map((comment) => {
                return (
                    <ul key={comment.id} className="list-unstyled">
                        <p>{comment.comment}</p>
                        <p>-- {comment.author}, {comment.date}</p>
                    </ul>
                );
            });
                return (
                    <div>
                        <h4>Comments</h4>
                        {coms}
                    </div>
                );
        }
        
        else
            return (
                <div></div>
            );
    }

    render() {
        return (
            <div className="row">
                <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.comments)}   
                </div>
            </div>
        );
    }
}

export default Dishdetail;