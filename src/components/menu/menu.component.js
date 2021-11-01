import {Component, Fragment} from "react";
import './menu.css';


class Menu extends Component {

    render() {
        return (
            <div className="container background">
                <div className="col-sm mt-2">
                    <div className="row justify-content-center align-self-center">
                        
                        <h3 className="text-center mb-4"><br/>Principaux Menus du Magic KEKAB project E3 VINY - MANUEL</h3>   
                        {
                            this.props.menu.map((item, index) => {
                                return (
                                    <Fragment key={index}>
                                        <div className="border col-md-12 border-warning border-2 rounded mt-3 py-3">
                                            <b>🏆 {item.name}</b>
                                            <p className="mt-4 mx-4">🥙 {this.props.ingredients.breads[item.bread].name}</p>
                                            <p className="mx-4">🍖 {this.props.ingredients.meats[item.meat].name}</p>
                                            <p className="mx-4">🍅
                                                {
                                                    item.vegetables.map((vegetable, index) => {
                                                        return (
                                                            <Fragment
                                                                key={index}> {this.props.ingredients.vegetables[vegetable].name}{index < item.vegetables.length - 1 ? ' - ' : ''}</Fragment>
                                                        )
                                                    })
                                                }
                                            </p>
                                            <p className="mx-4">🍛
                                                {
                                                    item.sauces.map((sauce, index) => {
                                                        return (
                                                            <Fragment
                                                                key={index}> {this.props.ingredients.sauces[sauce].name}{index < item.sauces.length - 1 ? ' - ' : ''}</Fragment>
                                                        )
                                                    })
                                                }
                                            </p>
                                            <div className="row">
                                                <div className="col-sm-2">                                               
                                                    <button onClick={() => {this.props.handler(item)}} className="btn btn-warning rounded"><b>Ajouter</b></button>
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

export default Menu;