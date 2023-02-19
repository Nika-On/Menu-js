//defining dataSet
const menuItems = [
  {
    title: "Blueberry Pancakes",
    image:
      "https://images.pexels.com/photos/5591731/pexels-photo-5591731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "breakfast",
    price: 7.99,
  },
  {
    title: "Bacon and Eggs",
    image:
      "https://images.pexels.com/photos/1833336/pexels-photo-1833336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "breakfast",
    price: 8.99,
  },
  {
    title: "Grilled Cheese Sandwich",
    image:
      "https://images.pexels.com/photos/660282/pexels-photo-660282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "meals",
    price: 10.99,
  },
  {
    title: "Chicken Fajitas",
    image:
      "https://images.pexels.com/photos/13344545/pexels-photo-13344545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "meals",
    price: 13.99,
  },
  {
    title: "Chocolate Cake",
    image:
      "https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "desserts",
    price: 6.99,
  },
  {
    title: "Strawberry Cheesecake",
    image:
      "https://images.pexels.com/photos/8250845/pexels-photo-8250845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "desserts",
    price: 7.99,
  },
  {
    title: "Omelette",
    image:
      "https://images.pexels.com/photos/4141026/pexels-photo-4141026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "breakfast",
    price: 9.99,
  },
  {
    title: "Beef Stroganoff",
    image:
      "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "meals",
    price: 14.99,
  },
  {
    title: "Fish and Chips",
    image:
      "https://images.pexels.com/photos/4967719/pexels-photo-4967719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "meals",
    price: 11.99,
  },
  {
    title: "Ice Cream Sundae",
    image:
      "https://images.pexels.com/photos/6025810/pexels-photo-6025810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "desserts",
    price: 5.99,
  },
];
//inserting items from dataset
const contentContainer = document.querySelector(".contentContainer");
const buttons = document.querySelectorAll("li");
function displayContent(menuItems) {
  let content = menuItems.map((item) => {
    return ` <div class="item-container">
    <img src="${item.image} alt="${item.title}">
    <div class="description">
      <h2>${item.title}</h2>
      <p>${item.price}$</p>
    </div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dicta maiores ex quisquam ab at dolor ipsum quibusdam architecto exercitationem.</p>
  </div> `;
  });
  content = content.join("");
  contentContainer.innerHTML = content;
}
//filtering items by category when user clicks to button
buttons.forEach((item) => {
  item.addEventListener("click", (event) => {
    if (event.currentTarget.dataset.category === "home") {
      displayContent(menuItems);
    } else {
      let menuContent = menuItems.filter(
        (element) =>{
          return element.category === event.currentTarget.dataset.category;
        }
      );
      displayContent(menuContent)
    }
  });
});
displayContent(menuItems);
