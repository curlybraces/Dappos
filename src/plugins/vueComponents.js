// import components here
// generic
import ModalFullscreen from '../components/generic/ModalFullscreen'
import ModalMinimised from '../components/generic/ModalMinimised'
import QuasarOptionsReveal from '../components/generic/QuasarOptionsReveal'
// modals
import Modals from '../components/Modals'
import MenuListAddEditItem from '../components/Modals/MenuListAddEditItem'
import MenuListEditAll from '../components/Modals/MenuListEditAll'
import CartEditingItem from '../components/Modals/CartEditingItem'
// other
import AppMenu from '../components/AppMenu'
import LayoutSideMenu from '../components/LayoutSideMenu'
import InfoCart from '../components/InfoCart'
import InfoTotal from '../components/InfoTotal'
import NavigationTabs from '../components/NavigationTabs'
import Keypad from '../components/Keypad'
import Cart from '../components/Cart'
import Payment from '../components/Payment'

export default ({ app, router, Vue }) => {
  // register the components here
  Vue.component('modal-fullscreen', ModalFullscreen)
  Vue.component('modal-minimised', ModalMinimised)
  Vue.component('options-reveal', QuasarOptionsReveal)

  Vue.component('modals', Modals)
  Vue.component('menu-list-add-edit-item', MenuListAddEditItem)
  Vue.component('menu-list-edit-all', MenuListEditAll)
  Vue.component('cart-editing-item', CartEditingItem)

  Vue.component('app-menu', AppMenu)
  Vue.component('layout-side-menu', LayoutSideMenu)
  Vue.component('info-cart', InfoCart)
  Vue.component('info-total', InfoTotal)
  Vue.component('navigation-tabs', NavigationTabs)
  Vue.component('keypad', Keypad)
  Vue.component('cart', Cart)
  Vue.component('payment', Payment)
}