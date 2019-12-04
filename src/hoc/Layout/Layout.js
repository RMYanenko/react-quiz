import React, {Component} from 'react';
import classes from './Layout.module.scss';
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle';

class Layout extends Component {

    state = {
        menu: false
    }
    toggleMenuHendler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    render() {

        return (
            <div className={classes.Layout}>

                <MenuToggle 
                    onToggle={this.toggleMenuHendler}
                    isOpen={this.state.menu}
                />

                <main>
                    {this.props.children}
                </main>
            </div> 
        )
       
    }
}

export default Layout;