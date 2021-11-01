import {Component, Fragment} from "react";
import './ChoiceIngredients.css';

class ChoiceIngredients extends Component {

    render() {
        return (
            <Fragment>
                <h1 className="text-center mb-4">Salade, tomates, oignons ?</h1>
                <div className="row justify-content-center align-self-center">
                    {
                        this.props.vegetables.map((vegetable, index) => {
                            return (
                                <div key={index} className="col-sm-4">
                                    <button onClick={() => this.props.handler(index)}
                                            className={'container border border-3 ' + (this.props.currentKebab.vegetables.includes(index) ? 'border-warning' : 'border-gray') + ' selectable rounded'}>
                                        <img alt={vegetable.name} src={vegetable.picture}/>
                                        <p>{vegetable.name}</p>
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
                            <button className="btn btn-info" disabled={this.props.currentKebab.vegetables.length < 1}
                                    onClick={() => this.props.next()}>Suivant
                            </button>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default ChoiceIngredients;