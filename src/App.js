import {Component} from "react";
import BreadChoice from "./components/BreadChoice/BreadChoice";
import ChoiceMeat from "./components/ChoiceMeat/ChoiceMeat";
import ChoiceIngredients from "./components/ChoiceIngredients/ChoiceIngredients";
import ChoiceSauce from "./components/ChoiceSauce/ChoiceSauce";
import ChoiceResume from "./components/ChoiceResume/ChoiceResume";
import Checkout from "./components/checkout/checkout.component";
import Menu from "./components/menu/menu.component";
import './App.css';

const menu = [
    {
        name: 'Le classique',
        bread: 0,
        meat: 0,
        vegetables: [
            0,
            1,
            2
        ],
        sauces: [
            1
        ]
    },
    {
        name: 'Le vege',
        bread: 0,
        meat: 1,
        vegetables: [
            0,
            1,
            2
        ],
        sauces: [
            1
        ]
    },
    {
        name: 'Le bbq',
        bread: 0,
        meat: 0,
        vegetables: [
            0,
            1,
            2
        ],
        sauces: [
            3
        ]
    },
]

const ingredients = {
    breads: [
        {
            name: 'Pain',
            picture: 'assets/bread/bread1.png'
        },
        {
            name: 'Galette',
            picture: 'assets/bread/bread2.png'
        },
        {
            name: 'Baguette',
            picture: 'assets/bread/bread3.png'
        }
    ],
    meats: [
        {
            name: 'Viande',
            picture: 'assets/meat/kebab.png'
        },
        {
            name: 'Tofu',
            picture: 'assets/meat/tofu.png'
        }
    ],
    vegetables: [
        {
            name: 'Salade',
            picture: 'assets/vegetable/salad.png'
        },
        {
            name: 'Tomates',
            picture: 'assets/vegetable/tomato.png'
        },
        {
            name: 'Oignon',
            picture: 'assets/vegetable/onion.png'
        },
    ],
    sauces: [
        {
            name: 'Blanche',
            picture: 'assets/sauce/blanche.png'
        },
        {
            name: 'Harissa',
            picture: 'assets/sauce/harissa.png'
        },
        {
            name: 'Andalouse',
            picture: 'assets/sauce/andalouse.png'
        },
        {
            name: 'BBQ',
            picture: 'assets/sauce/bbq.png'
        },
        {
            name: 'Ketchup',
            picture: 'assets/sauce/ketchup.png'
        },
        {
            name: 'Curry',
            picture: 'assets/sauce/curry.png'
        },
    ],
}

const kebabPrice = 450;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            preparing: false,
            currentStep: 1,
            currentKebab: {
                bread: null,
                meat: null,
                vegetables: [],
                sauces: [],
                quantity: 1,
                id: Date.now()
            },
            basket: []
        }
        this.previous = this.previous.bind(this);
        this.next = this.next.bind(this);
        this.selectBread = this.selectBread.bind(this);
        this.selectMeat = this.selectMeat.bind(this);
        this.selectVegetables = this.selectVegetables.bind(this);
        this.selectSauces = this.selectSauces.bind(this);
        this.addToCard = this.addToCard.bind(this);
        this.launch = this.launch.bind(this);
        this.orderSpecific = this.orderSpecific.bind(this);
        this.decrement = this.decrement.bind(this);
        this.increment = this.increment.bind(this);
    }

    previous() {
        if (this.state.currentStep > 1) {
            this.setState({currentStep: this.state.currentStep - 1})
        }
    }

    next() {
        if (this.state.currentStep < 5) {
            this.setState({currentStep: this.state.currentStep + 1})
        }
    }

    selectBread(bread) {
        this.setState(prevState => ({
            currentKebab: {
                ...prevState.currentKebab,
                bread: bread
            },
            currentStep: 2
        }));
    }

    selectMeat(meat) {
        this.setState(prevState => ({
            currentKebab: {
                ...prevState.currentKebab,
                meat: meat
            },
            currentStep: 3
        }));
    }

    selectVegetables(vegetable) {
        if (this.state.currentKebab.vegetables.includes(vegetable)) {
            this.setState(prevState => ({
                currentKebab: {
                    ...prevState.currentKebab,
                    vegetables: this.state.currentKebab.vegetables.filter(item => item !== vegetable)
                },
            }));
        } else {
            if (this.state.currentKebab.vegetables.length <= 2) {
                this.setState(prevState => ({
                    currentKebab: {
                        ...prevState.currentKebab,
                        vegetables: [...this.state.currentKebab.vegetables, vegetable]
                    },
                }));
            }
        }
    }

    selectSauces(sauce) {
        if (this.state.currentKebab.sauces.includes(sauce)) {
            this.setState(prevState => ({
                currentKebab: {
                    ...prevState.currentKebab,
                    sauces: this.state.currentKebab.sauces.filter(item => item !== sauce)
                },
            }));
        } else {
            if (this.state.currentKebab.sauces.length < 2) {
                this.setState(prevState => ({
                    currentKebab: {
                        ...prevState.currentKebab,
                        sauces: [...this.state.currentKebab.sauces, sauce]
                    },
                }));
            }
        }
    }

    

    orderSpecific(item) {
        let specific = {
            bread: item.bread,
            meat: item.meat,
            vegetables: item.vegetables,
            sauces: item.sauces,
            quantity: 1,
            id: Date.now()
        };
        this.setState({
            basket: [...this.state.basket, specific]
        });
    }

    decrement(item) {
        if (item.quantity === 1) {
            this.setState({
                basket: this.state.basket.filter((kebab) => {
                    return JSON.stringify(kebab) !== JSON.stringify(item)
                })
            });
        } else {
            const quantity = this.state.basket.filter(kebab => JSON.stringify(kebab) === JSON.stringify(item))[0].quantity;
            this.setState(prevState => ({
                basket: prevState.basket.map(
                    obj => (JSON.stringify(obj) === JSON.stringify(item) ? Object.assign(obj, {quantity: quantity - 1}) : obj)
                )
            }));
        }
    }

    increment(item) {
        const quantity = this.state.basket.filter(kebab => JSON.stringify(kebab) === JSON.stringify(item))[0].quantity;
        this.setState(prevState => ({
            basket: prevState.basket.map(
                obj => (JSON.stringify(obj) === JSON.stringify(item) ? Object.assign(obj, {quantity: quantity + 1}) : obj)
            )
        }));
    }

    addToCard() {
        this.setState({
            basket: [...this.state.basket, this.state.currentKebab],
            currentKebab: {
                bread: null,
                meat: null,
                vegetables: [],
                sauces: [],
                quantity: 1,
                id: Date.now()
            },
            currentStep: 1
        });
    }

    renderSwitch() {
        switch (this.state.currentStep) {
            case 1:
                return (
                    <BreadChoice currentKebab={this.state.currentKebab} breads={ingredients.breads} handler={this.selectBread}
                           next={this.next}/>);
            case 2:
                return (
                    <ChoiceMeat currentKebab={this.state.currentKebab} meats={ingredients.meats} handler={this.selectMeat}
                           previous={this.previous}
                           next={this.next}/>);
            case 3:
                return (
                    <ChoiceIngredients currentKebab={this.state.currentKebab} vegetables={ingredients.vegetables}
                           handler={this.selectVegetables} previous={this.previous}
                           next={this.next}/>);
            case 4:
                return (<ChoiceSauce currentKebab={this.state.currentKebab} sauces={ingredients.sauces}
                               handler={this.selectSauces} previous={this.previous}
                               next={this.next}/>);
            case 5:
                return (
                    <ChoiceResume currentKebab={this.state.currentKebab} ingredients={ingredients} handler={this.addToCard}
                           previous={this.previous}/>);
            default:
                break;
        }
    }

    launch() {
        if (this.state.basket.length > 0) {
            this.setState({
                preparing: true,
                basket: [],
                currentKebab: {
                    bread: null,
                    meat: null,
                    vegetables: [],
                    sauces: [],
                    quantity: 1,
                    id: Date.now()
                },
                currentStep: 1
            });
        }
    }

    render() {
        if (this.state.preparing) {
            return (
                <div className="container-fluid">
                    <div className="row">
                        <div className="row justify-content-center align-self-center">
                            <div className="col-md-12">
                                <center>
                                    <img alt="logo" src="assets/img.png" className="img-logo"/>
                                    <h1>C'est parti</h1>
                                    <b>Notre maitre kébabier prépare votre commande.</b>
                                    <img alt="preparing" src="assets/preparing.png" className="img"/>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-md-2">
                        </div>

                        <div className="col-md-7">

                            <div className="container">
                                <center>
                                    <img alt="logo" src="assets/img.png" className="img-logo"/>
                                </center>
                                <div className="row mt-2">
                                    {
                                        this.renderSwitch()
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <Checkout ingredients={ingredients} basket={this.state.basket} decrement={this.decrement}
                                      increment={this.increment} kebabPrice={kebabPrice} launch={this.launch}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                        </div>
                        <div className="col-md-6">
                            <Menu ingredients={ingredients} menu={menu} handler={this.orderSpecific}/>
                        </div>
                        <div className="col-md-3">
                        </div>
                    </div>
                </div>
            );
        }
    }

}

export default App;
