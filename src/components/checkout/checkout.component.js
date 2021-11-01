import {Component, Fragment} from "react";
import './checkout.css';

class Checkout extends Component {

    formattedPrice(price) {
        return `${parseInt(price / 100)}€${price % 100 || ""}`
    }

    finalPrice() {
        let kebabs = 0;
        this.props.basket.forEach(x => {
            kebabs+=x.quantity;
        });
        return this.formattedPrice(this.props.kebabPrice*kebabs);
    }

    render() {
        return (
            <div className="container background">
                <div className="col-sm mt-2">
                    <div className="row justify-content-center align-self-center">
                        <h4 className="text-center mb-4">Total: { this.finalPrice() }</h4>
                        <button className="btn btn-warning" disabled={this.props.basket.length < 1} onClick={() => this.props.launch()}>Passer la commande</button>
                        <h3>Votre commande</h3>
                        {
                            this.props.basket.map((item, index) => {
                                return (
                                    <Fragment key={index}>
                                        <div className="border border-warning border-2 rounded mt-3">
                                            <p>🥙 {this.props.ingredients.breads[item.bread].name}</p>
                                            <p>🍖 {this.props.ingredients.meats[item.meat].name}</p>
                                            <p>🍅
                                                {
                                                    item.vegetables.map((vegetable, index) => {
                                                        return (
                                                            <Fragment
                                                                key={index}> {this.props.ingredients.vegetables[vegetable].name}{index < item.vegetables.length - 1 ? ' - ' : ''}</Fragment>
                                                        )
                                                    })
                                                }
                                            </p>
                                            <p>🍛
                                                {
                                                    item.sauces.map((sauce, index) => {
                                                        return (
                                                            <Fragment
                                                                key={index}> {this.props.ingredients.sauces[sauce].name}{index < item.sauces.length - 1 ? ' - ' : ''}</Fragment>
                                                        )
                                                    })
                                                }
                                            </p>
                                            <div className="row justify-content-center align-self-center margin-auto">
                                                <div className="col-sm-2">
                                                    <button onClick={() => {this.props.decrement(item)}} className="btn btn-warning rounded"><b>-</b></button>
                                                </div>
                                                <div className="col-md-2">
                                                    <p>🔥 x{item.quantity}</p>
                                                </div>
                                                <div className="col-sm-2">
                                                    <button  onClick={() => {this.props.increment(item)}}className="btn btn-warning rounded"><b>+</b></button>
                                                </div>
                                            </div>
                                        </div>
                                    </Fragment>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }

}

export default Checkout;