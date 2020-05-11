import React, {Component} from 'react'
import classes from './Layout.module.css'
import MenuToggle from "../../components/Navigations/MenuToggle/MenuToggle";
import Drawer from "../../components/Navigations/Drawer/Drawer";

class Layout extends Component {

  state = {
    menu: false
  };

  //клик по меню
  toggleMenuHandler = () => {
    this.setState({
      menu: !this.state.menu
    })
  };

  //клик по затемненному экрану закрывает меню
  MenuCloseHandler = () => {
    this.setState({
      menu:false
    })
  };

  render() {
    return (
      <div className={classes.Layout}>
        <Drawer
          isOpen={this.state.menu}
          onClose={this.MenuCloseHandler}
        />
        <MenuToggle
          onToggle={this.toggleMenuHandler}
          isOpen={this.state.menu}
        />

        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default Layout