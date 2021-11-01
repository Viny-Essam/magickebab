import {Component, Fragment} from "react";
import './BreadChoice.css';

class BreadChoice extends Component {

    render() {
        return (
            <Fragment>
                <h1 className="text-center mb-4">Pain ou galette ?</h1>
                <div className="row justify-content-center align-self-center">
                    {
                        this.props.breads.map((bread, index) => {
                            return (
                                <div key={index} className="col-sm-4">
                                    <button onClick={() => this.props.handler(index)}
                                            className="container border border-3selectable rounded">
                                        <img alt={bread.name} class="image-food" src={bread.picture}/>
                                        <p>{bread.name}</p>
                                    </button>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="container mt-4">
                    <button className="btn btn-info" disabled={this.props.currentKebab.bread == null} onClick={() => this.props.next()}>Suivant</button>
                </div>
            </Fragment>
        );
    }

}

export default BreadChoice;