
const iceCream = [{
  name: 'Cookie Dough',
  image: 'https://images.unsplash.com/photo-1511382091779-4dedcc34e19b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29va2llJTIwZG91Z2glMjBpY2UlMjBjcmVhbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  price: 1,
  quantity: 0
}, {
  name: 'Vanilla',
  image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmFuaWxsYSUyMGljZSUyMGNyZWFtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  price: 1,
  quantity: 0
}, {
  name: 'Strawberry',
  image: 'https://images.unsplash.com/photo-1532678465554-94846274c297?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  price: 2,
  quantity: 0
}]

const vessels = [{
  name: 'Waffle Cone',
  image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
  price: 2,
  quantity: 0
}, {
  name: 'Waffle Bowl',
  image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
  price: 4,
  quantity: 0
}]

const toppings = [{
  name: 'Sprinkles',
  image: 'https://images.unsplash.com/photo-1581958461305-ea3e44be564b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  price: 1,
  quantity: 0
}, {
  name: 'Choclate Chips',
  image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1272&q=80',
  price: 2,
  quantity: 0
}]

// Purchasable Items
function drawIceCream() {
  let flavors = document.getElementById('flavors')
  let template = ''
  iceCream.forEach(cream => {
    // console.log(cream);
    template += `
  <div class="card m-3">
            <img onclick="addIceCreamToCart('${cream.name}')" src="${cream.image}" class="card-img-top card-size" alt="...">
            <div class="card-body text-center">
              <h5 class="card-title">${cream.name}</h5>
              <p class="card-text">Price: $${cream.price}</p>
            </div>
          </div>`
  })
  // @ts-ignore
  flavors.innerHTML = template
}
function drawVessels() {
  let containers = document.getElementById('containers')
  let template = ''
  vessels.forEach(vessel => {
    // console.log(vessel);
    template += `
  <div class="card m-3">
            <img onclick="addVesselToCart('${vessel.name}')" src="${vessel.image}" class="card-img-top card-size" alt="...">
            <div class="card-body text-center">
              <h5 class="card-title">${vessel.name}</h5>
              <p class="card-text">Price: $${vessel.price}
              </p>
            </div>
          </div>`
  })
  // @ts-ignore
  containers.innerHTML = template
}
function drawToppings() {
  let top = document.getElementById('top')
  let template = ''
  toppings.forEach(topping => {
    // console.log(topping);
    template += `
  <div class="card m-3">
            <img onclick="addToppingToCart('${topping.name}')" src="${topping.image}" class="card-img-top card-size" alt="...">
            <div class="card-body text-center">
              <h5 class="card-title">${topping.name}</h5>
              <p class="card-text">Price: $${topping.price}</p>
            </div>
          </div>`
  })
  // @ts-ignore
  top.innerHTML = template
}

//Cart

function drawCart() {
  let cart = document.getElementById('cart')
  let template = ''
  iceCream.forEach(cream => {
    if (cream.quantity > 0) {
      template += `
    <div class="row d-flex flex-row justify-content-around">
    <div class="col-3 ">
    <h5>${cream.name}</h5></div>
    <div class="col-3">
    <h5>${cream.quantity}</h5></div>
    <div class="col-3">
    <h5>$${cream.price}</h5></div>
    <div class="col-3">
    <h5>${cream.price * cream.quantity}</h5></div>
    </div>`
    }
  })
  vessels.forEach(vessel => {
    if (vessel.quantity > 0) {
      template += `
      <div class="row d-flex flex-row justify-content-around">
      <div class="col-3">
      <h5>${vessel.name}</h5></div>
      <div class="col-3">
      <h5>${vessel.quantity}</h5></div>
      <div class="col-3">
      <h5>$${vessel.price}</h5></div>
      <div class="col-3">
      <h5>${vessel.price * vessel.quantity}</h5></div>
      </div>`
    }
  })
  toppings.forEach(topping => {
    if (topping.quantity > 0) {
      template += `
    <div class="row d-flex flex-row justify-content-around">
    <div class="col-3">
    <h5>${topping.name}</h5></div>
    <div class="col-3">
    <h5>${topping.quantity}</h5></div>
    <div class="col-3">
    <h5>$${topping.price}</h5></div>
    <div class="col-3">
    <h5>${topping.price * topping.quantity}</h5></div>
    </div>`
    }

  })
  // @ts-ignore
  cart.innerHTML = template
  drawTotal()
}





function addIceCreamToCart(i) {
  let ice = iceCream.find(ice => ice.name == i)
  // @ts-ignore
  ice.quantity++
  // @ts-ignore
  // console.log(ice.quantity)
  drawCart()
}
function addVesselToCart(i) {
  let ves = vessels.find(vessel => vessel.name == i)
  // @ts-ignore
  ves.quantity++
  // @ts-ignore
  // console.log(ves.quantity)
  drawCart()
}

function addToppingToCart(i) {
  let topping = toppings.find(toppping => toppping.name == i)
  // @ts-ignore
  topping.quantity++
  // @ts-ignore
  // console.log(topping.quantity)
  drawCart()
}

function drawTotal() {
  let total = 0
  iceCream.forEach(i => {
    total += i.price * i.quantity
  })
  toppings.forEach(t => {
    total += t.price * t.quantity
  })
  vessels.forEach(v => {
    total += v.price * v.quantity
  })
  // @ts-ignore
  document.getElementById('total').innerText = total
}

function reset() {
  iceCream.forEach(i => { i.quantity = 0 })
  toppings.forEach(t => { t.quantity = 0 })
  vessels.forEach(v => { v.quantity = 0 })
  drawCart()
  drawTotal()
}

drawIceCream()
drawVessels()
drawToppings()
drawTotal()