import {Component, Fragment} from "react";
import './ChoiceMeat.css';

class ChoiceMeat extends Component {

    render() {
        return (
            <Fragment>
                <h1 className="text-center mb-4">Plutôt viande ou tofu ?</h1>
                <div className="row justify-content-center align-self-center">
                    {
                        this.props.meats.map((meat, index) => {
                            return (
                                <div key={index} className="col-sm-5">
                                    <button onClick={() => this.props.handler(index)}
                                            className="container border border-3selectable rounded">
                                        <img alt={meat.name} src={meat.picture}/>
                                        <p>{meat.name}</p>
                                    </button>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="container mt-4">
                    <div className="row justify-content-center align-self-center">
                        <div className="col-sm-2">
                            <button className="btn btn-info"
                                    onClick={() => this.props.previous()}>Précédent
                            </button>
                        </div>
                        <div className="col-sm-2">
                            <button className="btn btn-info" disabled={this.props.currentKebab.meat == null}
                                    onClick={() => this.props.next()}>Suivant
                            </button>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }

}

export default ChoiceMeat;